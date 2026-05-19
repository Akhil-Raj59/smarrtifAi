export default function IconTile({ icon: Icon, tone = "orange", size = "md" }: any) {
  return (
    <span className={`icon-tile icon-tile--${tone} icon-tile--${size}`}>
      <Icon aria-hidden="true" strokeWidth={2.4} />
    </span>
  );
}
