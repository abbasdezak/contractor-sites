"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  MessageSquareText,
  Phone,
  Send,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { services } from "@/lib/services";
import { serviceAreas, site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

type Method = "call" | "text" | "email";

type Values = {
  name: string;
  phone: string;
  email: string;
  city: string;
  service: string;
  method: Method;
  message: string;
  urgent: boolean;
};

type Errors = Partial<Record<"name" | "phone" | "email", string>>;

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "sent" }
  | { kind: "sms"; body: string }
  | { kind: "error" };

const OTHER_CITY = "Other";
const OTHER_SERVICE = "other";

const methods: { value: Method; label: string }[] = [
  { value: "call", label: "Call" },
  { value: "text", label: "Text" },
  { value: "email", label: "Email" },
];

const initial: Values = {
  name: "",
  phone: "",
  email: "",
  city: "",
  service: "",
  method: "call",
  message: "",
  urgent: false,
};

function serviceTitle(slug: string) {
  if (slug === OTHER_SERVICE) return "Something else";
  return services.find((s) => s.slug === slug)?.title ?? "";
}

function validate(v: Values): Errors {
  const errors: Errors = {};
  if (v.name.trim().length < 2) errors.name = "Please enter your name.";
  const digits = v.phone.replace(/\D/g, "");
  if (!v.phone.trim()) {
    errors.phone = "Please enter a phone number.";
  } else if (!(digits.length === 10 || (digits.length === 11 && digits[0] === "1"))) {
    errors.phone = "Enter a 10-digit phone number, like (480) 555-0123.";
  }
  const email = v.email.trim();
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    errors.email = "That email address doesn't look right.";
  } else if (v.method === "email" && !email) {
    errors.email = "Add your email so we can reach you that way.";
  }
  return errors;
}

function buildMessage(v: Values) {
  const lines = [
    `${v.urgent ? "URGENT estimate request" : "Estimate request"} for Javi Electric`,
    `Name: ${v.name.trim()}`,
    `Phone: ${v.phone.trim()}`,
  ];
  if (v.email.trim()) lines.push(`Email: ${v.email.trim()}`);
  if (v.city) lines.push(`City: ${v.city}`);
  const svc = serviceTitle(v.service);
  if (svc) lines.push(`Service: ${svc}`);
  lines.push(`Best way to reach me: ${methods.find((m) => m.value === v.method)?.label}`);
  if (v.message.trim()) lines.push(`Details: ${v.message.trim()}`);
  return lines.join("\n");
}

/**
 * Reads ?service=slug and ?city=Name from the URL and reports them upward.
 * Isolated so only this leaf sits inside <Suspense> (required for static export).
 */
function QueryPreselect({
  onPreselect,
}: {
  onPreselect: (p: { service?: string; city?: string }) => void;
}) {
  const params = useSearchParams();
  const service = params.get("service");
  const city = params.get("city");

  React.useEffect(() => {
    const result: { service?: string; city?: string } = {};
    if (service && services.some((s) => s.slug === service)) {
      result.service = service;
    }
    const matchedCity = serviceAreas.find(
      (a) => a.toLowerCase() === (city ?? "").toLowerCase()
    );
    if (matchedCity) result.city = matchedCity;
    if (result.service || result.city) onPreselect(result);
  }, [service, city, onPreselect]);

  return null;
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="text-destructive flex items-center gap-1.5 text-sm">
      <AlertCircle className="size-4 shrink-0" aria-hidden="true" />
      {message}
    </p>
  );
}

export function EstimateForm() {
  const [values, setValues] = React.useState<Values>(initial);
  const [errors, setErrors] = React.useState<Errors>({});
  const [status, setStatus] = React.useState<Status>({ kind: "idle" });
  const resultRef = React.useRef<HTMLDivElement>(null);

  const set = <K extends keyof Values>(key: K, value: Values[K]) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (key === "name" || key === "phone" || key === "email") {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
    if (key === "method") setErrors((prev) => ({ ...prev, email: undefined }));
  };

  const handlePreselect = React.useCallback(
    (p: { service?: string; city?: string }) => {
      setValues((prev) => ({
        ...prev,
        service: prev.service || p.service || "",
        city: prev.city || p.city || "",
      }));
    },
    []
  );

  React.useEffect(() => {
    if (status.kind === "sent" || status.kind === "sms") {
      resultRef.current?.focus();
    }
  }, [status.kind]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status.kind === "submitting") return;

    const found = validate(values);
    setErrors(found);
    const firstInvalid = (["name", "phone", "email"] as const).find(
      (k) => found[k]
    );
    if (firstInvalid) {
      document.getElementById(`est-${firstInvalid}`)?.focus();
      return;
    }

    // Honeypot: real visitors never fill this in.
    const honeypot = (e.currentTarget.elements.namedItem("company") as HTMLInputElement | null)?.value;
    if (honeypot) {
      setStatus({ kind: "sent" });
      return;
    }

    const body = buildMessage(values);

    if (site.formEndpoint) {
      setStatus({ kind: "submitting" });
      try {
        const res = await fetch(site.formEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: values.name.trim(),
            phone: values.phone.trim(),
            email: values.email.trim(),
            city: values.city,
            service: serviceTitle(values.service),
            contactMethod: values.method,
            urgent: values.urgent ? "Yes" : "No",
            message: values.message.trim(),
            _subject: `${values.urgent ? "URGENT: " : ""}Estimate request from ${values.name.trim()}`,
          }),
        });
        setStatus(res.ok ? { kind: "sent" } : { kind: "error" });
      } catch {
        setStatus({ kind: "error" });
      }
      return;
    }

    // No form backend configured: hand the request to the visitor's texting app.
    setStatus({ kind: "sms", body });
    const smsUrl = `${site.phone.sms}?&body=${encodeURIComponent(body)}`;
    const link = document.createElement("a");
    link.href = smsUrl;
    link.click();
  }

  function reset() {
    setValues(initial);
    setErrors({});
    setStatus({ kind: "idle" });
  }

  const submitting = status.kind === "submitting";

  if (status.kind === "sent" || status.kind === "sms") {
    return (
      <div
        ref={resultRef}
        tabIndex={-1}
        role="status"
        aria-live="polite"
        className="border-border bg-card rounded-2xl border p-6 shadow-xs outline-none sm:p-8"
      >
        <span className="bg-primary/15 text-brand-700 dark:text-primary grid size-12 place-items-center rounded-full">
          <CheckCircle2 className="size-6" aria-hidden="true" />
        </span>
        {status.kind === "sent" ? (
          <>
            <h2 className="mt-4 text-3xl font-bold uppercase">
              Thanks, we got your request
            </h2>
            <p className="text-muted-foreground mt-3 leading-relaxed">
              Javi will get back to you at {values.phone.trim() || "the number you gave"}.
              If it can&apos;t wait, call us now.
            </p>
          </>
        ) : (
          <>
            <h2 className="mt-4 text-3xl font-bold uppercase">
              Your text is ready to send
            </h2>
            <p className="text-muted-foreground mt-3 leading-relaxed">
              We opened a message to {site.phone.display} with your details
              filled in. Just press send in your messaging app. If nothing
              opened, tap the button below or call us.
            </p>
            <pre className="bg-muted mt-4 rounded-lg p-4 font-sans text-sm leading-relaxed break-words whitespace-pre-wrap">
              {status.body}
            </pre>
          </>
        )}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <a href={site.phone.href}>
              <Phone /> Call {site.phone.display}
            </a>
          </Button>
          {status.kind === "sms" && (
            <Button asChild size="lg" variant="outline">
              <a href={`${site.phone.sms}?&body=${encodeURIComponent(status.body)}`}>
                <MessageSquareText /> Open text again
              </a>
            </Button>
          )}
          <Button size="lg" variant="ghost" type="button" onClick={reset}>
            Send another request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="border-border bg-card space-y-6 rounded-2xl border p-6 shadow-xs sm:p-8"
      aria-describedby="est-intro"
    >
      <React.Suspense fallback={null}>
        <QueryPreselect onPreselect={handlePreselect} />
      </React.Suspense>

      <div>
        <h2 className="text-3xl font-bold uppercase">Request your free estimate</h2>
        <p id="est-intro" className="text-muted-foreground mt-2 text-sm">
          Fields marked with <span aria-hidden="true">*</span>
          <span className="sr-only">an asterisk</span> are required.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="est-name">
            Your name <span aria-hidden="true">*</span>
          </Label>
          <Input
            id="est-name"
            name="name"
            autoComplete="name"
            required
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "est-name-error" : undefined}
          />
          <FieldError id="est-name-error" message={errors.name} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="est-phone">
            Phone <span aria-hidden="true">*</span>
          </Label>
          <Input
            id="est-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            placeholder="(480) 555-0123"
            value={values.phone}
            onChange={(e) => set("phone", e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "est-phone-error" : undefined}
          />
          <FieldError id="est-phone-error" message={errors.phone} />
        </div>

        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="est-email">
            Email <span className="text-muted-foreground font-normal">(optional)</span>
          </Label>
          <Input
            id="est-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "est-email-error" : undefined}
          />
          <FieldError id="est-email-error" message={errors.email} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="est-city">City</Label>
          <Select value={values.city} onValueChange={(v) => set("city", v)}>
            <SelectTrigger id="est-city" className="w-full">
              <SelectValue placeholder="Select your city" />
            </SelectTrigger>
            <SelectContent>
              {serviceAreas.map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
              <SelectItem value={OTHER_CITY}>Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="est-service">Service needed</Label>
          <Select value={values.service} onValueChange={(v) => set("service", v)}>
            <SelectTrigger id="est-service" className="w-full">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((s) => (
                <SelectItem key={s.slug} value={s.slug}>
                  {s.title}
                </SelectItem>
              ))}
              <SelectItem value={OTHER_SERVICE}>Something else</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <fieldset className="space-y-2">
        <legend className="text-sm leading-none font-medium">
          Best way to reach you
        </legend>
        <div className="mt-2 grid grid-cols-3 gap-2 sm:max-w-sm">
          {methods.map((m) => (
            <div key={m.value}>
              <input
                type="radio"
                id={`est-method-${m.value}`}
                name="method"
                value={m.value}
                checked={values.method === m.value}
                onChange={() => set("method", m.value)}
                className="peer sr-only"
              />
              <label
                htmlFor={`est-method-${m.value}`}
                className={cn(
                  "border-input bg-background hover:bg-accent flex h-10 cursor-pointer items-center justify-center rounded-md border text-sm font-semibold transition-colors select-none",
                  "peer-checked:border-primary peer-checked:bg-primary peer-checked:text-primary-foreground",
                  "peer-focus-visible:ring-ring/60 peer-focus-visible:ring-[3px]"
                )}
              >
                {m.label}
              </label>
            </div>
          ))}
        </div>
      </fieldset>

      <div className="space-y-2">
        <Label htmlFor="est-message">Tell us about the job</Label>
        <Textarea
          id="est-message"
          name="message"
          rows={5}
          placeholder="What's going on? Include anything helpful, like the room, the symptoms, or the charger you have."
          value={values.message}
          onChange={(e) => set("message", e.target.value)}
        />
      </div>

      {/* Honeypot for bots; hidden from people and assistive tech. */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="est-company">Company</label>
        <input id="est-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <label
        htmlFor="est-urgent"
        className="border-input hover:bg-accent has-[:checked]:border-primary has-[:checked]:bg-primary/10 has-[:focus-visible]:ring-ring/60 flex cursor-pointer items-start gap-3 rounded-lg border p-4 has-[:focus-visible]:ring-[3px]"
      >
        <input
          id="est-urgent"
          name="urgent"
          type="checkbox"
          checked={values.urgent}
          onChange={(e) => set("urgent", e.target.checked)}
          className="accent-primary mt-0.5 size-5 shrink-0 cursor-pointer"
        />
        <span>
          <span className="block text-sm font-semibold">This is urgent</span>
          <span className="text-muted-foreground block text-sm">
            We&apos;ll flag it so it gets looked at first. For anything
            dangerous, call us instead.
          </span>
        </span>
      </label>

      <div aria-live="polite">
        {status.kind === "error" && (
          <div
            role="alert"
            className="border-destructive/40 bg-destructive/10 text-foreground flex items-start gap-3 rounded-lg border p-4 text-sm"
          >
            <AlertCircle className="text-destructive mt-0.5 size-5 shrink-0" aria-hidden="true" />
            <p>
              Sorry, something went wrong sending your request. Please try again,
              or call{" "}
              <a href={site.phone.href} className="font-semibold underline underline-offset-4">
                {site.phone.display}
              </a>{" "}
              to reach us directly.
            </p>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" size="xl" disabled={submitting} className="w-full sm:w-auto">
          {submitting ? (
            <>
              <Loader2 className="animate-spin" aria-hidden="true" /> Sending...
            </>
          ) : (
            <>
              <Send /> {site.formEndpoint ? "Send request" : "Text my request"}
            </>
          )}
        </Button>
        <p className="text-muted-foreground text-sm">
          {site.formEndpoint
            ? "No spam, ever. We only use your details to reply about your estimate."
            : "This opens a text message to Javi with your details filled in."}
        </p>
      </div>
    </form>
  );
}
