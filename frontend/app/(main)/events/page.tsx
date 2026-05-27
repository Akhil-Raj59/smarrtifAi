import { CalendarDays, MapPin, Mic2, Network, Users } from "lucide-react";
import Button from "@/components/Button";
import IconTile from "@/components/IconTile";
import SectionBadge from "@/components/SectionBadge";

const events = [
  ["AI Career Day", "A full-day virtual event with roadmap talks, mentor Q&A, and portfolio reviews.", "Virtual", "June 8", "Career"],
  ["Data Portfolio Sprint", "Build one polished dashboard case study with guided checkpoints and mentor feedback.", "Hybrid", "June 15", "Workshop"],
  ["Enterprise AI Roundtable", "A curated session for leaders exploring responsible AI adoption and workforce training.", "Gurugram", "June 28", "Corporate"]
];

const community = [
  ["Mentor Circles", "Small-group discussions with trainers and working AI professionals.", Users],
  ["Demo Nights", "Learners present projects and get structured feedback.", Mic2],
  ["Hiring Connect", "Career readiness sessions with mock interviews and role targeting.", Network]
];

export default function EventsPage() {
  return (
    <>
      <section className="gradient-hero">
        <div className="container">
          <SectionBadge tone="light" icon={CalendarDays}>Events</SectionBadge>
          <h1>Meet, build, and move faster with the AI learning community</h1>
          <p>Attend workshops, portfolio sprints, mentor sessions, and enterprise conversations designed around practical AI adoption.</p>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <h2>Upcoming Events</h2>
          <p>Choose the format that matches your next step.</p>
        </div>
        <div className="event-list">
          {(events as any).map(([title, text, location, date, type]) => (
            <article className="event-card" key={title}>
              <div className="event-date"><strong>{date}</strong><span>{type}</span></div>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
                <footer><span><MapPin size={17} /> {location}</span><span><CalendarDays size={17} /> Upcoming</span></footer>
              </div>
              <Button variant="outline" icon={false}>View Details</Button>
            </article>
          ))}
        </div>
      </section>

      <section className="section community-section">
        <div className="section-heading">
          <h2>Community Formats</h2>
          <p>Different rooms for different kinds of progress.</p>
        </div>
        <div className="feature-grid container">
          {community.map(([title, text, Icon]) => (
            <article className="compact-card" key={title}>
              <IconTile icon={Icon} tone="soft" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
