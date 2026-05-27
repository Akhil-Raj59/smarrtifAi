import { Briefcase, Link as LinkIcon, Medal } from "lucide-react";
import Button from "@/components/Button";
import IconTile from "@/components/IconTile";
import SectionBadge from "@/components/SectionBadge";
import { founder, teamGroups } from "@/data/siteData";

export default function TeamPage() {
  return (
    <>
      <section className="gradient-hero team-hero">
        <div className="container">
          <SectionBadge tone="light">Meet Our Team</SectionBadge>
          <h1>The Minds Behind Your Success</h1>
          <p>Industry experts, passionate educators, and dedicated professionals committed to transforming your AI career journey</p>
        </div>
      </section>

      <section className="team-stats container">
        {[
          ["50+", "Team Members"],
          ["200+", "Years Combined Experience"],
          ["2000+", "Students Mentored"],
          ["85%", "Success Rate"]
        ].map(([value, label]) => (
          <article key={label}>
            <IconTile icon={Medal} tone="soft" />
            <strong>{value}</strong>
            <span>{label}</span>
          </article>
        ))}
      </section>

      <section className="founder-section">
        <div className="section-heading">
          <SectionBadge>Leadership</SectionBadge>
          <h2>Founder & CEO</h2>
          <p>Leading the vision to democratize AI education and empower professionals worldwide</p>
        </div>
        <article className="founder-card container">
          <img src={founder.image} alt={founder.name} />
          <div>
            <h3>{founder.name}</h3>
            <h4>{founder.role}</h4>
            <p>{founder.bio}</p>
            <div className="founder-tags">{founder.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <div className="founder-facts">{founder.facts.map((fact) => <span key={fact}><Medal size={18} /> {fact}</span>)}</div>
            <Button variant="linkedin" icon={false}><LinkIcon size={20} /> Connect on LinkedIn</Button>
          </div>
        </article>
      </section>

      {teamGroups.map((group) => (
        <section className="team-group container" key={group.title}>
          <div className="team-group__heading">
            <IconTile icon={group.icon} tone={group.tone} />
            <div>
              <h2>{group.title}</h2>
              <p>{group.subtitle}</p>
            </div>
          </div>
          <div className={`member-grid member-grid--${Math.min(group.members.length, 4)}`}>
            {group.members.map(([name, role, bio, image]) => (
              <article className={`member-card member-card--${group.tone}`} key={name}>
                <img src={image} alt={name} />
                <div>
                  <h3>{name}</h3>
                  <h4>{role}</h4>
                  <p>{bio}</p>
                  <Button variant="linkedin" icon={false}><LinkIcon size={16} /> LinkedIn</Button>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}

      <section className="team-join">
        <div className="container">
          <h2>Want to Join Our Team?</h2>
          <p>We're always looking for passionate educators, technologists, and professionals to join our mission of transforming careers through AI education</p>
          <Button variant="light" icon={false}>View Open Positions <Briefcase size={18} /></Button>
        </div>
      </section>
    </>
  );
}
