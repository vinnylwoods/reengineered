import { type HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  accentColor?: string;
}

export function Logo({ className, accentColor = "text-accent", ...props }: LogoProps) {
  return (
    <div className={cn("flex items-center select-none font-oswald text-4xl font-bold tracking-tight", className)} {...props}>
      <span className={cn(accentColor, "font-extrabold")}>(re)</span>
      <span>engineered</span>
    </div>
  );
}
