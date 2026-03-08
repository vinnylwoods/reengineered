import { type HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  accentColor?: string;
}

export function Logo({ className, accentColor = "text-green-600", ...props }: LogoProps) {
  return (
    <div className={cn("flex items-center select-none font-mono text-4xl font-bold tracking-tight", className)} {...props}>
      <span>r</span>
      <span className={cn(accentColor, "font-extrabold")}>(e)</span>
      <span>ngineered</span>
    </div>
  );
}
