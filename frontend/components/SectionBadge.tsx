export default function SectionBadge({ icon: Icon, children, tone = "peach" }: any) {
  return (
    <span className={`section-badge section-badge--${tone}`}>
      {Icon ? <Icon size={18} aria-hidden="true" /> : null}
      {children}
    </span>
  );
}
