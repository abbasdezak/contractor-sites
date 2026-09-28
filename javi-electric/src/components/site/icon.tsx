import {
  BadgeDollarSign,
  Building2,
  Cable,
  CircuitBoard,
  ClipboardCheck,
  Clock,
  Fan,
  Hammer,
  HardHat,
  Lightbulb,
  Phone,
  Plug,
  PlugZap,
  ShieldCheck,
  Siren,
  Sparkles,
  Users,
  Wrench,
  Zap,
  type LucideIcon,
  type LucideProps,
} from "lucide-react";

/** Maps the string icon names used in lib/*.ts data files to components. */
const icons: Record<string, LucideIcon> = {
  BadgeDollarSign,
  Building2,
  Cable,
  CircuitBoard,
  ClipboardCheck,
  Clock,
  Fan,
  Hammer,
  HardHat,
  Lightbulb,
  Phone,
  Plug,
  PlugZap,
  ShieldCheck,
  Siren,
  Sparkles,
  Users,
  Wrench,
  Zap,
};

export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Cmp = icons[name] ?? Zap;
  return <Cmp aria-hidden="true" {...props} />;
}
