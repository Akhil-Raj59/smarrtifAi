import { BookOpen, CalendarDays, CheckCircle2, LineChart, PlayCircle, Target } from "lucide-react";
import Button from "@/components/Button";
import IconTile from "@/components/IconTile";

const modules = [
  ["AI Foundations", "3 of 6 lessons complete", 50],
  ["Python for Data", "1 of 8 lessons complete", 13],
  ["Prompt Engineering", "4 of 5 labs complete", 80]
];

const tasks = ["Complete skill assessment", "Book mentor consultation", "Submit first mini project", "Update LinkedIn headline"];

export default function DashboardPage() {
  return (
    <>
      <section className="dashboard-hero">
        <div className="container dashboard-hero__grid">
          <div>
            <span className="dashboard-kicker">Learning Dashboard</span>
            <h1>Your AI career command center</h1>
            <p>Track roadmap progress, upcoming sessions, portfolio work, and role readiness from one clean workspace.</p>
            <div className="hero__actions">
              <Button to="/assessment">Take Assessment</Button>
              <Button to="/programs" variant="outline" icon={false}>Browse Programs</Button>
            </div>
          </div>
          <article className="dashboard-summary">
            <IconTile icon={LineChart} />
            <strong>64%</strong>
            <span>Roadmap progress</span>
            <p>On pace for a 12-week transition plan.</p>
          </article>
        </div>
      </section>

      <section className="section container dashboard-grid">
        <article className="dashboard-card dashboard-card--wide">
          <div className="card-heading">
            <IconTile icon={BookOpen} tone="soft" />
            <div><h2>Active Learning Plan</h2><p>Recommended track: Data Analytics + Prompt Engineering</p></div>
          </div>
          <div className="module-list">
            {modules.map(([title, status, progress]) => (
              <div className="module-row" key={title}>
                <div><strong>{title}</strong><span>{status}</span></div>
                <div className="progress-track"><span style={{ width: `${progress}%` }} /></div>
              </div>
            ))}
          </div>
        </article>

        <article className="dashboard-card">
          <div className="card-heading">
            <IconTile icon={CalendarDays} tone="amber" />
            <div><h2>Next Session</h2><p>Mentor review</p></div>
          </div>
          <strong className="large-metric">Fri, 4:00 PM</strong>
          <p>Portfolio project discussion and role targeting.</p>
          <Button type="button" variant="outline" icon={false} className="btn--inactive">Reschedule</Button>
        </article>

        <article className="dashboard-card">
          <div className="card-heading">
            <IconTile icon={Target} tone="pink" />
            <div><h2>Role Match</h2><p>Based on current profile</p></div>
          </div>
          <strong className="large-metric">Data Analyst</strong>
          <p>Strong fit with your business background and current learning pace.</p>
          <Button to="/programs" variant="outline" icon={false}>View Track</Button>
        </article>

        <article className="dashboard-card dashboard-card--wide">
          <div className="card-heading">
            <IconTile icon={CheckCircle2} tone="soft" />
            <div><h2>Action Items</h2><p>Keep the transition moving every week</p></div>
          </div>
          <ul className="task-list">
            {tasks.map((task, index) => <li key={task}><CheckCircle2 size={18} /> <span>{task}</span><em>{index === 0 ? "Done" : "Pending"}</em></li>)}
          </ul>
        </article>

        <article className="dashboard-card">
          <div className="card-heading">
            <IconTile icon={PlayCircle} tone="amber" />
            <div><h2>Featured Lesson</h2><p>Start with fundamentals</p></div>
          </div>
          <p>Understanding AI workflows: from business problem to model output.</p>
          <Button to="/webinars" variant="outline" icon={false}>Watch Sessions</Button>
        </article>
      </section>
    </>
  );
}
