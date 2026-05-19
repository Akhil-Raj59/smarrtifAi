import { Mail, MapPin, Phone, Hash, MessageSquare, Share2 } from "lucide-react";
import Link from "next/link";
import Brand from "../Brand";

const quickLinks = [
  ["Home", "/"],
  ["Programs", "/programs"],
  ["Corporate Training", "/corporate-training"],
  ["Free Assessment", "/assessment"],
  ["Our Team", "/team"],
  ["Blog", "/blog"],
  ["Webinars", "/webinars"],
  ["Events", "/events"],
  ["Careers", "/careers"]
];
const programs = [
  ["AI Agents", "/programs"],
  ["Prompt Engineering", "/programs"],
  ["Large Language Models", "/programs"],
  ["AI/ML", "/programs"],
  ["Data Analytics", "/programs"],
  ["Generative AI", "/programs"]
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid container">
        <div>
          <Brand dark />
          <p>Empowering non-technical professionals to transition into AI technology roles through structured learning roadmaps.</p>
          <div className="socials" aria-label="Social links">
            <Share2 size={22} />
            <MessageSquare size={22} />
            <Hash size={22} />
          </div>
        </div>
        <FooterList title="Quick Links" items={quickLinks} />
        <FooterList title="Programs" items={programs} />
        <div>
          <h3>Contact Us</h3>
          <p className="footer-contact"><Mail size={18} /> info@smarrtifai.com</p>
          <p className="footer-contact"><Phone size={18} /> +91 123 456 7890</p>
          <p className="footer-contact"><MapPin size={18} /> India</p>
        </div>
      </div>
      <div className="footer__bottom container">
        <span>© 2026 SMARRTIF AI (OPC) PRIVATE LIMITED. All rights reserved.</span>
        <span>Privacy Policy&nbsp;&nbsp;&nbsp;&nbsp; Terms of Service</span>
      </div>
    </footer>
  );
}

function FooterList({ title, items }: any) {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {items.map(([label, path]) => (
          <li key={label}><Link href={path}>{label}</Link></li>
        ))}
      </ul>
    </div>
  );
}
