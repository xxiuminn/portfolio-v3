import { ArrowUpRight } from "lucide-react";

type ExternalLinkIconProps = {
  className?: string;
};

export function ExternalLinkIcon({ className }: ExternalLinkIconProps) {
  return <ArrowUpRight aria-hidden="true" className={className} strokeWidth={1.75} />;
}
