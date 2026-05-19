"use client";
import { ArrowLeft, ArrowRight, Award, Brain, Check, CheckCircle2, Clock3, Lock, Medal, Target, TrendingUp } from "lucide-react";
import { useMemo, useState } from "react";
import Button from "@/components/Button";

const steps = [
  {
    title: "Personal Information",
    fields: [
      { name: "name", label: "Full Name", type: "text", placeholder: "Enter your full name" },
      { name: "email", label: "Email", type: "email", placeholder: "your.email@example.com" },
      { name: "phone", label: "Phone Number", type: "tel", placeholder: "+91 XXXXX XXXXX" }
    ]
  },
  {
    title: "Background & Experience",
    fields: [
      { name: "experience", label: "Years of Work Experience", type: "select", placeholder: "Select experience", options: ["0-2 years", "2-5 years", "5-10 years", "10+ years"] },
      { name: "education", label: "Highest Education", type: "select", placeholder: "Select education", options: ["High School", "Bachelor's Degree", "Master's Degree", "PhD"] },
      { name: "industry", label: "Current Role/Industry", type: "text", placeholder: "e.g., Marketing Manager, Sales Executive" }
    ]
  },
  {
    title: "Career Goals",
    fields: [
      { name: "role", label: "Desired AI Career Role", type: "select", placeholder: "Select role", options: ["AI Engineer", "Prompt Engineer", "Data Analyst", "AI Product Manager", "ML Engineer"] },
      { name: "motivation", label: "What motivates you to learn AI?", type: "textarea", placeholder: "Share your motivation and career aspirations..." }
    ]
  },
  {
    title: "Technical Assessment",
    fields: [
      { name: "technical", label: "Technical Background", type: "select", placeholder: "Select background", options: ["Non-technical (No coding experience)", "Basic (Some coding exposure)", "Intermediate (Can write simple programs)", "Advanced (Professional developer)"] },
      { name: "programming", label: "Programming Knowledge", type: "select", placeholder: "Select level", options: ["No programming knowledge", "Beginner (Know basic syntax)", "Intermediate (Can build applications)", "Advanced (Professional experience)"] },
      { name: "aiKnowledge", label: "AI/ML Knowledge", type: "select", placeholder: "Select level", options: ["No AI/ML knowledge", "Beginner (Understand basic concepts)", "Intermediate (Have done projects)", "Advanced (Professional experience)"] }
    ]
  },
  {
    title: "Learning Preferences",
    fields: [
      { name: "style", label: "Preferred Learning Style", type: "select", placeholder: "Select style", options: ["Self-paced learning", "Structured with deadlines", "Hands-on projects", "Heavy mentorship"] },
      { name: "time", label: "Time Commitment (hours/week)", type: "select", placeholder: "Select commitment", options: ["5-10 hours/week", "10-15 hours/week", "15-20 hours/week", "20-25 hours/week", "25+ hours/week"] }
    ]
  }
];

const initialForm = Object.fromEntries(steps.flatMap((step) => step.fields.map((field) => [field.name, ""])));

export default function AssessmentPage() {
  const [stepIndex, setStepIndex] = useState(0);
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const step = steps[stepIndex];
  const progress = ((stepIndex + 1) / steps.length) * 100;
  const canContinue = step.fields.every((field) => form[field.name].trim());

  const planName = useMemo(() => {
    if (form.time === "5-10 hours/week") return "Steady Starter";
    if (form.time === "20-25 hours/week" || form.time === "25+ hours/week") return "Accelerated Track";
    return "Quick Starter";
  }, [form.time]);

  function updateField(name, value) {
    setForm((current) => ({ ...current, [name]: value }));
  }

  function nextStep() {
    if (!canContinue) return;
    if (stepIndex === steps.length - 1) {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setStepIndex((current) => current + 1);
  }

  function previousStep() {
    setStepIndex((current) => Math.max(0, current - 1));
  }

  if (submitted) {
    return <AssessmentResults form={form} planName={planName} onRestart={() => { setSubmitted(false); setStepIndex(0); }} />;
  }

  return (
    <section className="assessment-flow">
      <AssessmentHero />
      <div className="assessment-progress-wrap">
        <div className="assessment-progress">
          <div><strong>Step {stepIndex + 1} of {steps.length}</strong><strong>{Math.round(progress)}% Complete</strong></div>
          <span><i style={{ width: `${progress}%` }} /></span>
        </div>
      </div>
      <div className="assessment-card">
        <h2>{step.title}</h2>
        <div className="assessment-fields">
          {step.fields.map((field) => (
            <AssessmentField key={field.name} field={field} value={form[field.name]} onChange={updateField} />
          ))}
        </div>
        <div className="assessment-actions">
          <button type="button" className="flow-button flow-button--secondary" onClick={previousStep} disabled={stepIndex === 0}>
            <ArrowLeft size={18} /> Previous
          </button>
          <button type="button" className="flow-button" onClick={nextStep} disabled={!canContinue}>
            {stepIndex === steps.length - 1 ? "View Results" : "Next"} <ArrowRight size={18} />
          </button>
        </div>
      </div>
      <div className="assessment-reassurance">
        <span><Lock size={16} /> Your information is secure and will never be shared</span>
        <span><Clock3 size={16} /> Takes only 5 minutes to complete</span>
      </div>
    </section>
  );
}

function AssessmentHero() {
  return (
    <div className="assessment-flow-hero">
      <div className="container">
        <h1>AI Career Assessment</h1>
        <p>Answer a few questions to get your personalized learning roadmap</p>
      </div>
    </div>
  );
}

function AssessmentField({ field, value, onChange }: any) {
  const commonProps = {
    id: field.name,
    value,
    required: true,
    onChange: (event: any) => onChange(field.name, event.target.value)
  };

  return (
    <label className="assessment-field" htmlFor={field.name}>
      {field.label} *
      {field.type === "select" ? (
        <select {...commonProps}>
          <option value="">{field.placeholder}</option>
          {field.options.map((option) => <option key={option} value={option}>{option}</option>)}
        </select>
      ) : field.type === "textarea" ? (
        <textarea {...commonProps} placeholder={field.placeholder} />
      ) : (
        <input {...commonProps} type={field.type} placeholder={field.placeholder} />
      )}
    </label>
  );
}

function AssessmentResults({ form, planName, onRestart }: any) {
  const displayName = form.name || "there";
  return (
    <section className="assessment-results">
      <div className="assessment-complete">
        <span><Check size={34} /></span>
        <h1>Assessment Complete!</h1>
        <p>Here's your personalized AI learning roadmap, {displayName}</p>
      </div>

      <div className="result-card">
        <Target className="result-icon" />
        <div>
          <h2>Your Current Skill Level</h2>
          <strong className="result-pill"><Medal size={18} /> Intermediate</strong>
          <p>Based on your technical background and current knowledge, we've identified your starting level. This helps us tailor the right programs for your journey.</p>
        </div>
      </div>

      <div className="result-card result-card--warm">
        <Brain className="result-icon" />
        <div>
          <h2>Recommended Programs</h2>
          {["Prompt Engineering", "AI/ML", "Data Analytics"].map((program, index) => (
            <a href="/programs" className="program-recommendation" key={program}>
              <span>{index + 1}</span><strong>{program}</strong><em>View Details <ArrowRight size={16} /></em>
            </a>
          ))}
        </div>
      </div>

      <div className="result-card result-card--outlined">
        <TrendingUp className="result-icon" />
        <div>
          <h2>Recommended Training Plan</h2>
          <strong className="result-pill">{planName}</strong>
          <p>Based on your time commitment and career goals, this plan offers the best balance of depth and flexibility.</p>
          <a href="/programs" className="text-action">View Full Plan Details <ArrowRight size={16} /></a>
        </div>
      </div>

      <div className="next-steps-card">
        <h2>Next Steps</h2>
        {["Review your roadmap", "Choose your plan", "Start learning"].map((item, index) => (
          <div key={item}><span>{index + 1}</span><strong>{item}</strong><p>{["Compare the suggested programs and timeline", "Select the training plan that fits your schedule and goals", "Begin your transformation journey with structured guidance"][index]}</p></div>
        ))}
      </div>

      <div className="result-actions">
        <Button type="button" onClick={onRestart}>Retake Assessment</Button>
        <Button to="/programs" variant="outline" icon={false}>View All Plans</Button>
      </div>

      <div className="roadmap-offer">
        <Award size={40} />
        <h2>Get Your Complete Roadmap</h2>
        <p>Access your detailed, personalized AI learning roadmap with step-by-step guidance, resource recommendations, and milestone tracking.</p>
        <div className="included-box">
          <h3>What's Included:</h3>
          {["Detailed week-by-week learning plan", "Project milestones & checkpoints", "Industry certification paths", "Downloadable PDF roadmap", "Curated resource recommendations", "Skill progression tracker", "Career transition timeline", "Access to student dashboard"].map((item) => (
            <span key={item}><CheckCircle2 size={17} /> {item}</span>
          ))}
        </div>
        <div className="roadmap-price"><strong>₹99</strong><span>One-time payment</span></div>
        <Button type="button">Pay ₹99 & Download Roadmap</Button>
        <small>Secure payment · Instant access · 100% Money-back guarantee</small>
      </div>
    </section>
  );
}
