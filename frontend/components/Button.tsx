import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Button({ to, children, variant = "primary", icon = true, className = "", type = "button", ...props }: any) {
  const classes = `btn btn--${variant} ${className}`.trim();
  const content = (
    <>
      <span>{children}</span>
      {icon ? <ArrowRight size={22} aria-hidden="true" /> : null}
    </>
  );

  if (to) {
    return (
      <Link className={classes} href={to} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
