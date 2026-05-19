import { Briefcase, CheckCircle2, GraduationCap, HeartHandshake, MapPin, Users } from "lucide-react";
import Button from "@/components/Button";
import IconTile from "@/components/IconTile";
import SectionBadge from "@/components/SectionBadge";

const roles = [
  ["AI Program Mentor", "Remote / Hybrid", "Guide learners through projects, reviews, and career transitions.", ["AI fundamentals", "Teaching experience", "Portfolio reviews"]],
  ["Corporate Training Consultant", "Gurugram", "Design and deliver practical AI enablement programs for enterprise teams.", ["B2B training", "Workshop design", "Stakeholder management"]],
  ["Growth Marketing Specialist", "Remote", "Build campaigns that help learners discover the right AI career pathway.", ["Performance marketing", "Content strategy", "Analytics"]],
  ["Learning Experience Designer", "Hybrid", "Create structured learning journeys, assessments, and project-based curriculum.", ["Instructional design", "EdTech tools", "Curriculum planning"]]
];

const benefits = [
  ["Work With Purpose", "Help professionals transition into meaningful AI careers.", HeartHandshake],
  ["Continuous Learning", "Access internal workshops, mentor circles, and AI tools.", GraduationCap],
  ["Flexible Delivery", "Work across remote, hybrid, and event-led formats.", Users]
];

export default function PlaceholderPage({ title }: any) {
  if (title === "Careers") {
    return <CareersContent />;
  }

  return (
    <section className="placeholder-page container">
      <h1>{title}</h1>
      <p>This route is wired and ready for content.</p>
    </section>
  );
}

function CareersContent() {
  return (
    <>
      <section className="gradient-hero">
        <div className="container">
          <SectionBadge tone="light" icon={Briefcase}>Careers</SectionBadge>
          <h1>Build the future of AI education with us</h1>
          <p>Join educators, technologists, mentors, and operators helping professionals become job-ready for the AI economy.</p>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <h2>Open Roles</h2>
          <p>We are looking for people who care about outcomes, clarity, and learner success.</p>
        </div>
        <div className="career-list">
          {roles.map(([roleTitle, location, text, skills]) => (
            <article className="career-card" key={roleTitle}>
              <div>
                <h3>{roleTitle}</h3>
                <p>{text}</p>
                <span><MapPin size={17} /> {location}</span>
              </div>
              <ul>{skills.map((skill) => <li key={skill}><CheckCircle2 size={16} /> {skill}</li>)}</ul>
              <Button variant="outline" icon={false}>Apply</Button>
            </article>
          ))}
        </div>
      </section>

      <section className="section culture-section">
        <div className="section-heading">
          <h2>Why Join SMARRTIF AI</h2>
          <p>A practical, learner-centered culture with room to build.</p>
        </div>
        <div className="feature-grid container">
          {benefits.map(([benefitTitle, text, Icon]) => (
            <article className="compact-card" key={benefitTitle}>
              <IconTile icon={Icon} tone="soft" />
              <h3>{benefitTitle}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
