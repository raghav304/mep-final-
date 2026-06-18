import {
  Wind,
  Box,
  GitMerge,
  Zap,
  Droplets,
  ClipboardCheck,
  Pill,
  Dna,
  HeartPulse,
  Hospital,
  FlaskConical,
  Utensils,
  Cpu,
  Factory,
  Users,
  BadgeCheck,
  ShieldCheck,
  Clock,
  Wrench,
  Scaling,
  Handshake,
  Globe,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  wind: Wind,
  box: Box,
  "git-merge": GitMerge,
  zap: Zap,
  droplets: Droplets,
  "clipboard-check": ClipboardCheck,
  pill: Pill,
  dna: Dna,
  "heart-pulse": HeartPulse,
  hospital: Hospital,
  "flask-conical": FlaskConical,
  utensils: Utensils,
  cpu: Cpu,
  factory: Factory,
  users: Users,
  "badge-check": BadgeCheck,
  "shield-check": ShieldCheck,
  clock: Clock,
  wrench: Wrench,
  scaling: Scaling,
  handshake: Handshake,
  globe: Globe,
};

export default function Icon({
  name,
  className,
  strokeWidth = 1.7,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = map[name] ?? Box;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden />;
}
