import { ArrowUpRight, BookOpen, FileText, LineChart, Sparkles } from "lucide-react";
import Button from "@/components/Button";
import IconTile from "@/components/IconTile";
import SectionBadge from "@/components/SectionBadge";

const posts = [
  ["How to move from non-tech to AI without starting over", "Career Strategy", "A realistic path for professionals who bring domain experience but need technical confidence.", BookOpen],
  ["The beginner portfolio projects recruiters can understand", "Portfolio", "Build case studies that show problem framing, process, metrics, and business impact.", FileText],
  ["Prompt engineering is becoming a workplace skill", "Generative AI", "Why prompt design matters across HR, finance, marketing, operations, and leadership.", Sparkles],
  ["AI job roles in India: what is actually hiring", "Market Insights", "A practical look at demand across data, automation, AI products, and ML engineering.", LineChart]
];

const guides = ["AI Career Roadmap", "Data Analytics Starter Kit", "Prompt Library for Teams", "Portfolio Checklist"];

export default function BlogPage() {
  return (
    <>
      <section className="gradient-hero">
        <div className="container">
          <SectionBadge tone="light" icon={BookOpen}>Insights</SectionBadge>
          <h1>Clear thinking for AI careers and workforce transformation</h1>
          <p>Read practical guides on career transitions, AI skills, enterprise adoption, portfolios, and learning strategy.</p>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <h2>Latest Articles</h2>
          <p>High-signal reads for learners, mentors, and teams.</p>
        </div>
        <div className="blog-grid">
          {posts.map(([title, category, text, Icon]) => (
            <article className="blog-card" key={title}>
              <IconTile icon={Icon} tone="soft" />
              <span>{category}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href="/blog">Read article <ArrowUpRight size={17} /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="section resource-section">
        <div className="container resource-band">
          <div>
            <SectionBadge icon={FileText}>Free Resources</SectionBadge>
            <h2>Downloadable guides for your next step</h2>
            <p>Use these starter resources to plan learning, projects, and applications more confidently.</p>
          </div>
          <div className="resource-list">
            {guides.map((guide) => <span key={guide}>{guide}</span>)}
          </div>
          <Button to="/assessment">Find Your Roadmap</Button>
        </div>
      </section>
    </>
  );
}
