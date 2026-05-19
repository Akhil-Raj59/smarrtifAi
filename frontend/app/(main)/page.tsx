import { CheckCircle2, LineChart, PackageCheck, Rocket, Target, Users, Building2, BookOpen, Globe2, Code2, Award, Sparkles, Database, FileText, Zap, Brain, Layout, Briefcase, Phone, GraduationCap, Pencil } from "lucide-react";
import Button from "@/components/Button";
import AnimatedIconGrid from "@/components/AnimatedIconGrid";
import JobRolesGrid from "@/components/JobRolesGrid";
import ClientMarquee from "@/components/ClientMarquee";
import IconTile from "@/components/IconTile";
import SectionBadge from "@/components/SectionBadge";
import { journey, marketStats, programs, testimonials, jobRoles, insightCards, careerServices, corporateFeatures, productOfferings, careerBundle } from "@/data/siteData";

const gridIcons = [
  [Users, Target, BookOpen, LineChart, Globe2],
  [Code2, Award, Sparkles, Database, FileText],
  [Zap, CheckCircle2, Brain, Layout, Briefcase],
  [Rocket, Phone, Users, Target, Code2]
];

export default function HomePage() {
  return (
    <>
      <section className="hero container">
        <div className="hero__copy">
          <h1>
            Transition into <span>AI Careers</span> with Structured Roadmaps
          </h1>
          <p>Personalized learning paths designed for non-technical professionals. Start your AI journey with expert guidance and structured training programs.</p>
          <div className="hero__actions">
            <Button to="/assessment">Take Free Assessment</Button>
            <Button to="/programs" variant="outline" icon={false}>Explore Programs</Button>
          </div>
          <div className="hero__stats">
            <Stat value="500+" label="Successful Transitions" />
            <Stat value="98%" label="Satisfaction Rate" />
            <Stat value="6+" label="Expert Programs" />
          </div>
        </div>
        <div className="hero__visual">
          <AnimatedIconGrid />
        </div>
      </section>



      <section className="section mega-ai-portal container">
        <div className="portal-card">
          <div className="portal-card__content">
            <SectionBadge icon={Sparkles}>Mega AI Platform</SectionBadge>
            <h2>Access All Our AI Tools in One Place</h2>
            <p>Mega AI is the integrated platform for all the AI tools we have. Get instant insights and streamline your workflow.</p>
            <Button to="https://mega.ai/portal">
              Launch Mega AI Portal
            </Button>
          </div>
          <div className="portal-card__visual">
            <div className="portal-glow"></div>
          </div>
        </div>
      </section>

      <section className="section clients">
        <div className="section-heading">
          <p>TRUSTED BY INDUSTRY LEADERS</p>
          <h2>Our Corporate Clients</h2>
        </div>
        <ClientMarquee />
      </section>

      <section className="section about-section container">
        <div>
          <SectionBadge icon={Building2}>About Us</SectionBadge>
          <h2>Welcome to <span>SMARRTIF AI</span></h2>
          <h3>Your Trusted EdTech Consulting Partner</h3>
          <p>Incorporated on <strong>2nd February 2024</strong>, SMARRTIF AI is revolutionizing career transitions in the AI technology sector.</p>
          <p>We specialize in providing <strong>seamless career transitions</strong> for professionals moving from Non-Tech to Tech job roles through customized learning solutions tailored to your unique background and career goals.</p>
          <p>At SMARRTIF AI, we don&apos;t just train—we make you <strong>job-ready</strong> for the rapidly changing AI job market with industry-relevant skills, real-world projects, and personalized mentorship.</p>
          <p>Beyond education, we are actively <strong>developing cutting-edge AI products</strong> that solve real-world business challenges, combining our expertise in AI technology with practical industry applications.</p>
          <p>Our approach is rooted in <strong>understanding your current skillset</strong> and building a strategic path forward. We believe every professional has unique strengths that can be leveraged in the AI domain, and our mission is to help you discover and develop those capabilities.</p>
          <p>Through comprehensive assessments, one-on-one mentorship sessions, and hands-on project work, we ensure that you&apos;re not just learning theory, but gaining <strong>practical experience</strong> that employers value. Our alumni have successfully transitioned into roles at leading tech companies and startups across various industries.</p>
          
          <Button to="/about" variant="outline" className="about-cta">
            Learn More About Us
          </Button>
        </div>
        <div className="company-stack">
          <article className="company-card">
            <IconTile icon={Building2} />
            <div>
              <h3>SMARRTIF AI (OPC) PRIVATE LIMITED</h3>
              <p>EdTech Consulting Company</p>
            </div>
            <dl>
              <div><dt>Established</dt><dd>Feb 2024</dd></div>
              <div><dt>Industry</dt><dd>EdTech</dd></div>
              <div><dt>Specialization</dt><dd>AI Training</dd></div>
              <div><dt>Focus</dt><dd>Career Transition</dd></div>
            </dl>
          </article>
          {([
            ["Seamless Transitions", "Structured pathways from non-technical backgrounds to high-demand AI tech roles", Target],
            ["Job Market Ready", "Stay ahead with skills aligned to rapidly evolving AI industry demands", Rocket],
            ["Personalized Approach", "Custom learning solutions designed specifically for your career goals and experience", Users],
            ["AI Product Innovation", "Developing cutting-edge AI products that solve real-world business challenges", Sparkles]
          ] as any).map(([title, text, Icon]: any) => (
            <article className="feature-strip" key={title}>
              <IconTile icon={Icon} tone="soft" />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section process">
        <div className="section-heading">
          <h2>Your Journey to AI Success</h2>
          <p>Follow our proven 5-step process to transition into your dream AI role</p>
        </div>
        <div className="process-grid container">
          {journey.map(({ title, text, icon }, index) => (
            <article className="process-card" key={title}>
              <span className="process-card__num">{String(index + 1).padStart(2, "0")}</span>
              <IconTile icon={icon} tone="soft" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="process-actions">
          <Button to="/assessment">Take Assessment</Button>
          <Button to="/consultation" variant="outline">Book Consultation</Button>
        </div>
      </section>

      <section className="section testimonials container">
        <div className="section-heading">
          <SectionBadge icon={Users}>Success Stories</SectionBadge>
          <h2>What Our Students Say</h2>
          <p>Real transformations from professionals who made the switch to AI careers</p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <article className="testimonial-card" key={item.name}>
              <div className="stars">★★★★★</div>
              <blockquote>"{item.quote}"</blockquote>
              <div className="person">
                <span>{item.initials}</span>
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.role}</p>
                  <strong>{item.salary}</strong>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section market-section">
        <div className="section-heading">
          <SectionBadge icon={LineChart} tone="pink">Market Insights</SectionBadge>
          <h2>Trending AI Tech Job Roles in 2026</h2>
          <p>We train you for high-demand AI roles with competitive salary packages in the Indian market</p>
        </div>
        
        <div className="market-stats container">
          {marketStats.map(({ value, label, icon }) => (
            <article key={label}>
              <IconTile icon={icon} tone="line" />
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </div>

        <JobRolesGrid />

        <div className="insight-row container market-section__insights">
          {insightCards.map(({ title, value, text, icon: Icon, tone }: any) => (
            <article className={`insight-card insight-card--${tone}`} key={title}>
              <Icon size={32} />
              <h3>{title}</h3>
              <strong>{value}</strong>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section programs-preview">
        <div className="section-heading">
          <h2>Our Programs</h2>
          <p>Specialized training programs designed to make you job-ready in high-demand AI roles</p>
        </div>
        <div className="program-grid container">
          {(programs as any).map(([title, text, Icon, tone]) => (
            <article className="program-card" key={title}>
              <IconTile icon={Icon} tone={tone} />
              <h3>{title}</h3>
              <p>{text}</p>
              <a href="/programs">Learn More →</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section corporate-training container">
        <div className="corporate-training__grid">
          <div className="corporate-training__left">
            <span className="badge badge--soft">For Enterprises</span>
            <h2>Corporate AI Training Programs</h2>
            <p>Upskill your teams with customized AI training programs designed for your organization&apos;s specific needs. From executives to technical teams, we deliver measurable results. Transform your workforce with industry-leading AI expertise and accelerate your digital transformation journey.</p>
            <ul className="bullet-list">
              <li><CheckCircle2 size={20} /> Customized curriculum tailored for your industry and business objectives</li>
              <li><CheckCircle2 size={20} /> Flexible delivery options: On-site, remote, or hybrid learning models</li>
              <li><CheckCircle2 size={20} /> Hands-on projects with real business impact and immediate ROI</li>
              <li><CheckCircle2 size={20} /> Post-training support, consultation, and continuous learning resources</li>
              <li><CheckCircle2 size={20} /> Executive workshops and technical deep-dives for all skill levels</li>
            </ul>
            <Button to="/corporate-training">Book Corporate Consultation</Button>
          </div>
          <div className="corporate-training__right">
            <div className="stats-card">
              <h3>Trusted by Leading Companies</h3>
              <div className="stats-grid">
                <div>
                  <strong>10+</strong>
                  <span>Fortune 500</span>
                </div>
                <div>
                  <strong>50+</strong>
                  <span>Startups</span>
                </div>
                <div>
                  <strong>2000+</strong>
                  <span>Employees Trained</span>
                </div>
                <div>
                  <strong>15+</strong>
                  <span>Industries</span>
                </div>
              </div>
              <hr />
              <blockquote>"SMARRTIF AI transformed our team&apos;s capabilities. The ROI was evident within months."</blockquote>
              <p className="author">— Tech Lead, Fortune 100 Company</p>
              <h4>Training Formats:</h4>
              <div className="tags">
                <span>On-site</span>
                <span>Remote</span>
                <span>Hybrid</span>
                <span>Self-paced</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section career-services container">
        <div className="section-heading">
          <SectionBadge icon={Briefcase}>Career Services</SectionBadge>
          <h2>Professional Career Services</h2>
          <p>Get expert help with your resume, portfolio, and interview preparation</p>
        </div>
        <div className="service-grid">
          {careerServices.map(({ title, price, icon: Icon, description, features, cta }: any) => (
            <article className="service-card" key={title}>
              <div className="service-card__head">
                <IconTile icon={Icon} tone="soft" />
                <strong>{price}</strong>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <ul>
                {features.map((feat: string) => (
                  <li key={feat}><CheckCircle2 size={20} /> {feat}</li>
                ))}
              </ul>
              <Button to="/contact">{cta}</Button>
            </article>
          ))}
        </div>
      </section>

      <section className="section career-package container">
        <div className="career-package__card">
          <div className="badge-wrapper">
            <span className="badge badge--white">★ Best Value</span>
          </div>
          <h2>Complete Career Package</h2>
          <p className="subtitle">Get both services together and save ₹500!</p>
          
          <div className="price-box">
            <div className="price-item">
              <span>Regular Price</span>
              <strong className="strikethrough">₹4,998</strong>
            </div>
            <div className="arrow">→</div>
            <div className="price-item combo">
              <span>Combo Price</span>
              <strong>₹4,499</strong>
              <small>+ GST</small>
            </div>
          </div>
          
          <Button to="/checkout" variant="white" className="combo-btn">
            Get Combo Package
          </Button>
          
          <p className="bottom-text"><Sparkles size={16} /> Save ₹500 + Get Priority Delivery</p>
        </div>
      </section>

      <section className="section see-what-you-get container">
        <div className="section-heading">
          <h2 style={{ color: 'var(--red)', textAlign: 'center' }}>See What You&apos;ll Get</h2>
        </div>
        <div className="benefit-grid">
          <article className="benefit-card">
            <div className="benefit-card__icon">
              <Layout size={24} />
            </div>
            <h3>Modern Design</h3>
            <p>Clean, professional layouts that impress recruiters</p>
          </article>
          <article className="benefit-card">
            <div className="benefit-card__icon">
              <Code2 size={24} />
            </div>
            <h3>Project Showcase</h3>
            <p>Highlight your AI projects with live demos</p>
          </article>
          <article className="benefit-card">
            <div className="benefit-card__icon">
              <Pencil size={24} />
            </div>
            <h3>Easy Updates</h3>
            <p>Simple CMS to update content anytime</p>
          </article>
        </div>
      </section>
      <div className="orange-band"></div>

      <CtaSection />
    </>
  );
}

function Stat({ value, label }: any) {
  return (
    <div>
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function CtaSection() {
  return (
    <section className="cta-band">
      <div className="container">
        <h2>Ready to Start Your AI Career Journey?</h2>
        <p>Take the first step today with a free assessment and discover your personalized learning roadmap</p>
        <div>
          <Button to="/assessment" variant="light">Start Free Assessment</Button>
          <Button type="button" variant="ghost-light" icon={false} className="btn--inactive">Talk to an Expert</Button>
        </div>
        <ul>
          <li><CheckCircle2 size={20} /> No credit card required</li>
          <li><CheckCircle2 size={20} /> Free consultation</li>
        </ul>
      </div>
    </section>
  );
}

function BrainIcon(props: any) {
  return <PackageCheck {...props} />;
}
