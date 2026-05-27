import { Briefcase, CheckCircle2, Clock3, Shield } from "lucide-react";
import ClientMarquee from "@/components/ClientMarquee";
import IconTile from "@/components/IconTile";
import SectionBadge from "@/components/SectionBadge";
import { corporateFeatures, industries, productOfferings, trainingFormats } from "@/data/siteData";

export default function CorporateTrainingPage() {
  return (
    <>
      <section className="gradient-hero">
        <div className="container">
          <SectionBadge tone="light" icon={Briefcase}>For Enterprises</SectionBadge>
          <h1>Transform Your Workforce with AI Training</h1>
          <p>Customized AI training programs designed to upskill your teams and drive business innovation. From executives to technical teams, we deliver measurable results.</p>
          <ul className="hero-checks">
            <li><CheckCircle2 size={21} /> 2000+ Employees Trained</li>
            <li><CheckCircle2 size={21} /> 15+ Industries</li>
            <li><CheckCircle2 size={21} /> Fortune 500 Clients</li>
          </ul>
        </div>
      </section>

      <section className="section clients">
        <div className="section-heading">
          <p>TRUSTED BY INDUSTRY LEADERS</p>
          <h2>Our Corporate Clients</h2>
        </div>
        <ClientMarquee />
      </section>

      <section className="section container">
        <div className="section-heading">
          <h2>Why Choose SMARRTIF AI for Corporate Training</h2>
          <p>Enterprise-grade training programs with proven ROI</p>
        </div>
        <div className="corp-feature-grid">
          {corporateFeatures.map(([title, text, Icon]) => (
            <article className="corp-feature" key={title}>
              <IconTile icon={Icon} tone="soft" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section industry-section">
        <div className="section-heading">
          <h2>Industry-Specific Training Programs</h2>
          <p>AI solutions designed for your industry's unique challenges</p>
        </div>
        <div className="industry-grid container">
          {industries.map(([emoji, title, points]) => (
            <article className="industry-card" key={title}>
              <span>{emoji}</span>
              <h3>{title}</h3>
              <ul>{points.map((point: any) => <li key={point}><CheckCircle2 size={17} /> {point}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <h2>Flexible Training Formats</h2>
          <p>Choose the delivery method that works best for your team</p>
        </div>
        <div className="format-grid">
          {trainingFormats.map(([title, text, Icon, points]) => (
            <article className="format-card" key={title}>
              <IconTile icon={Icon} />
              <h3>{title}</h3>
              <p>{text}</p>
              <ul>{points.map((point: any) => <li key={point}><CheckCircle2 size={16} /> {point}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section product-dev-section">
        <div className="section-heading">
          <SectionBadge>Product Development</SectionBadge>
          <h2>Custom AI Product Development</h2>
          <p>Beyond training, we develop enterprise-grade AI products that drive real business value. Our flagship solutions combine cutting-edge technology with industry expertise.</p>
        </div>
        <div className="new-program-grid">
          {productOfferings.map((product, i) => {
            const tone = i % 2 === 0 ? "orange" : "pink";
            return (
              <article className={`new-program-card new-program-card--${tone}`} key={product.title}>
                <div className="new-program-card__top">
                  <div className="new-program-card__header">
                    <IconTile icon={product.icon} tone={tone} />
                    <h3>{product.title}</h3>
                  </div>
                  <p>{product.description}</p>
                  <div className="new-program-card__outcomes-box">
                    <h4><Shield size={20} /> Key Features</h4>
                    <div style={{ display: 'grid', gap: '12px' }}>
                      {product.features.map(([title, text]) => (
                        <div className="new-program-card__role" key={title}>
                          <strong><CheckCircle2 size={16} /> {title}</strong>
                          <span style={{ fontSize: '14px', color: '#6b7280', paddingLeft: '22px', fontWeight: '500' }}>{text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={`new-program-card__bottom new-program-card__bottom--${tone}`}>
                  <h4>Enterprise Ready</h4>
                  <div className="new-program-card__actions" style={{ gap: '10px' }}>
                    {product.tags.map((tag) => (
                       <span key={tag} style={{ background: 'rgba(255,255,255,0.2)', padding: '8px 16px', borderRadius: '8px', fontSize: '15px', fontWeight: 'bold' }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <article className="product-process container">
          <h3>Our Development Process</h3>
          {["Discovery", "Design", "Development", "Testing", "Deployment"].map((step, index) => (
            <div key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
              <p>{["Understanding your business needs", "Solution architecture & planning", "Building & training AI models", "Quality assurance & validation", "Launch & continuous support"][index]}</p>
            </div>
          ))}
        </article>
      </section>

      <section className="consultation-section" id="consultation">
        <div className="container consultation-grid">
          <div>
            <h2>Request a Corporate Consultation</h2>
            <p>Schedule a free consultation with our enterprise team to discuss your training needs and get a customized proposal.</p>
            <Feature icon={Shield} title="Enterprise Security" text="Your data is secure with enterprise-grade protection" />
            <Feature icon={Clock3} title="Quick Response" text="Our team responds within 24 hours" />
            <Feature icon={Briefcase} title="Custom Solutions" text="Training programs tailored to your business goals" />
          </div>
          <form className="corp-form">
            <label>Company Name *<input placeholder="Your company" /></label>
            <label>Contact Name *<input placeholder="Your name" /></label>
            <label>Email *<input placeholder="you@company.com" /></label>
            <label>Phone *<input placeholder="+91 XXXXX XXXXX" /></label>
            <label>Company Size *<select><option>Select size</option></select></label>
            <label>Industry *<select><option>Select industry</option></select></label>
            <label className="wide">Training Needs<input placeholder="e.g., AI fundamentals for executives" /></label>
            <label className="wide">Preferred Timeline<select><option>Select timeline</option></select></label>
            <label className="wide">Additional Information<textarea placeholder="Tell us more about your training requirements..." /></label>
            <button type="button" disabled>Request Consultation →</button>
          </form>
        </div>
      </section>

      <section className="section trusted-orgs">
        <div className="section-heading">
          <h2>Trusted by Leading Organizations</h2>
          <p>Join the companies transforming their workforce with AI</p>
        </div>
        <div className="org-stats container">
          <article><strong>95%</strong><h3>Employee Engagement</h3><p>High satisfaction across all training programs</p></article>
          <article><strong>80%</strong><h3>Productivity Increase</h3><p>Average improvement post-training</p></article>
          <article><strong>90%</strong><h3>Skill Retention</h3><p>Knowledge retained after 6 months</p></article>
        </div>
      </section>
    </>
  );
}

function Feature({ icon, title, text }: any) {
  return (
    <div className="consult-feature">
      <IconTile icon={icon} tone="dark" />
      <span><strong>{title}</strong>{text}</span>
    </div>
  );
}
