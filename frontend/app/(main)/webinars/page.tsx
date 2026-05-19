import { CalendarDays, Clock3, PlayCircle, Users } from "lucide-react";
import Button from "@/components/Button";
import IconTile from "@/components/IconTile";
import SectionBadge from "@/components/SectionBadge";

const webinars = [
  ["AI Career Switch Blueprint", "Learn how non-technical professionals can move into AI roles without wasting months on random courses.", "May 18", "7:00 PM IST", "Live"],
  ["Prompt Engineering for Business Teams", "A hands-on session on using LLMs for research, reporting, marketing, and daily workflows.", "May 22", "6:30 PM IST", "Live"],
  ["Build Your First Data Portfolio", "See how to convert simple datasets into projects recruiters can actually understand.", "May 29", "8:00 PM IST", "Workshop"]
];

const recordings = [
  ["Inside AI Product Management", "42 min", "Product strategy, model behavior, and business use cases"],
  ["Data Analytics Roadmap", "38 min", "SQL, dashboards, Python, and portfolio planning"],
  ["Generative AI Project Ideas", "51 min", "Practical projects for beginners and working professionals"]
];

export default function WebinarsPage() {
  return (
    <>
      <section className="gradient-hero">
        <div className="container">
          <SectionBadge tone="light" icon={PlayCircle}>Live Learning</SectionBadge>
          <h1>Webinars that make AI careers feel reachable</h1>
          <p>Join practical sessions led by mentors, engineers, and hiring-focused trainers. Learn what to study, what to build, and how to position yourself.</p>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <h2>Upcoming Webinars</h2>
          <p>Reserve your seat for live sessions and practical workshops.</p>
        </div>
        <div className="event-list">
          {webinars.map(([title, text, date, time, type]) => (
            <article className="event-card" key={title}>
              <div className="event-date"><strong>{date}</strong><span>{type}</span></div>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
                <footer><span><Clock3 size={17} /> {time}</span><span><Users size={17} /> Limited seats</span></footer>
              </div>
              <Button variant="outline" icon={false}>Register</Button>
            </article>
          ))}
        </div>
      </section>

      <section className="section recordings-section">
        <div className="section-heading">
          <h2>Featured Recordings</h2>
          <p>Catch up on high-signal sessions from the SMARRTIF AI library.</p>
        </div>
        <div className="feature-grid container">
          {recordings.map(([title, duration, text]) => (
            <article className="compact-card media-card" key={title}>
              <IconTile icon={PlayCircle} tone="soft" />
              <h3>{title}</h3>
              <p>{text}</p>
              <span><CalendarDays size={16} /> {duration}</span>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
