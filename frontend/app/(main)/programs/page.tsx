"use client";

import { useState } from "react";
import { Award, Briefcase, CheckCircle2, Clock3, Brain, Zap, Code2, LineChart } from "lucide-react";
import Button from "@/components/Button";
import IconTile from "@/components/IconTile";
import { learningDurations, programDetails } from "@/data/siteData";

const roleIcons = [Briefcase, Brain, Code2, Zap];

export default function ProgramsPage() {
  const [selectedDuration, setSelectedDuration] = useState<string | null>(null);

  return (
    <>
      <section className="gradient-hero">
        <div className="container">
          <h1>Our Programs</h1>
          <p>Industry-aligned programs designed to make you job-ready in high-demand AI roles. Choose your learning duration and start your transformation journey.</p>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <h2>Available Programs</h2>
          <p>Explore our comprehensive AI programs with detailed career outcomes and salary packages.</p>
        </div>
        
        <div className="new-program-grid">
          {programDetails.map((program) => (
            <article className={`new-program-card new-program-card--${program.tone}`} key={program.title}>
              <div className="new-program-card__top">
                <div className="new-program-card__header">
                  <IconTile icon={program.icon} tone={program.tone} />
                  <h3>{program.title}</h3>
                </div>
                <p>{program.description}</p>
                <div className="new-program-card__outcomes-box">
                  <h4><Briefcase size={20} /> Career Outcomes</h4>
                  <p>High-paying roles you'll be qualified for:</p>
                  <div className="new-program-card__roles-grid">
                    {program.outcomes.map(([role, salary], index) => {
                      const Icon = roleIcons[index % roleIcons.length];
                      return (
                        <div className="new-program-card__role" key={role}>
                          <strong><Icon size={16} /> {role}</strong>
                          <span>₹ {salary}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className={`new-program-card__bottom new-program-card__bottom--${program.tone}`}>
                <h4>Ready to Get Started?</h4>
                <div className="new-program-card__actions">
                  <Button to="/assessment" className="btn--white" icon={false}>Apply Now →</Button>
                  <Button type="button" className="btn--ghost-white" icon={false}>Book Consultation</Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section duration-section">
        <div className="section-heading">
          <h2>Choose Your Learning Duration</h2>
          <p>Select the timeline that fits your schedule and career goals. All plans include expert mentorship and job placement support.</p>
        </div>
        <div className="duration-grid container">
          {learningDurations.map((plan) => {
            const isSelected = selectedDuration === plan.title;
            return (
              <article 
                className={`duration-card ${isSelected ? "duration-card--popular" : ""} cursor-pointer hover:border-orange-400`} 
                key={plan.title}
                onClick={() => setSelectedDuration(plan.title)}
                style={{ cursor: 'pointer' }}
              >
                {isSelected ? <span className="popular-pill">Selected</span> : null}
                <h3>{plan.title}</h3>
                <p>{plan.subtitle}</p>
                <span className="hours"><Clock3 size={18} /> {plan.hours}</span>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}><CheckCircle2 size={18} /> {feature}</li>
                  ))}
                </ul>
                <Button type="button" variant={isSelected ? "light" : "primary"}>{plan.cta}</Button>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section program-question">
        <div className="container">
          <h2>Not Sure Which Program to Choose?</h2>
          <p>Take our free assessment and get a personalized roadmap based on your current skills and career goals.</p>
          <Button to="/assessment">Take Free Assessment</Button>
        </div>
      </section>
    </>
  );
}
