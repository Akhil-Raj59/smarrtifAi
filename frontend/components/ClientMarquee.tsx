import { Building2, CheckCircle2 } from "lucide-react";
import IconTile from "./IconTile";
import { clients } from "@/data/siteData";

export default function ClientMarquee() {
  const repeatedClients = [...clients, ...clients, ...clients];

  return (
    <div className="client-marquee" aria-label="Corporate clients">
      <div className="client-marquee__track">
        {repeatedClients.map(([name, text], index) => (
          <article className="client-card" key={`${name}-${index}`}>
            <IconTile icon={Building2} />
            <h3>{name}</h3>
            <p>{text}</p>
            <span><CheckCircle2 size={18} /> AI Training Partner</span>
          </article>
        ))}
      </div>
    </div>
  );
}
