import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Brain, Sparkles, Code, TrendingUp, Database, Zap, Briefcase, IndianRupee, Award, CheckCircle2, ArrowRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const programs = [
  {
    id: "ai-agents",
    title: "AI Agents",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    icon: Brain,
    color: "from-red-500 to-orange-500",
    description:
      "Master the development of intelligent autonomous agents that can interact, learn, and execute complex tasks using cutting-edge frameworks.",
    skills: [
      "LangChain & LangGraph",
      "AutoGPT & Agent Frameworks",
      "Multi-agent systems",
      "Tool integration & API calls",
      "Memory & state management",
      "Agent orchestration",
    ],
    outcomes: [
      { role: "AI Agent Developer", salary: "₹15-28 LPA" },
      { role: "Automation Engineer", salary: "₹12-24 LPA" },
      { role: "AI Solutions Architect", salary: "₹22-45 LPA" },
      { role: "ML Engineering roles", salary: "₹12-30 LPA" },
    ],
    pricing: {
      "3M": "₹99,999",
      "6M": "₹1,49,999",
      "9M": "₹1,99,999",
    },
  },
  {
    id: "prompt-engineering",
    title: "Prompt Engineering",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    icon: Sparkles,
    color: "from-orange-500 to-amber-500",
    description:
      "Learn the art and science of crafting effective prompts to maximize AI model performance and unlock the full potential of language models.",
    skills: [
      "Prompt design patterns",
      "Chain-of-thought prompting",
      "Few-shot learning",
      "Prompt optimization",
      "Context engineering",
      "Model-specific techniques",
    ],
    outcomes: [
      { role: "Prompt Engineer", salary: "₹8-18 LPA" },
      { role: "AI Content Strategist", salary: "₹10-22 LPA" },
      { role: "LLM Integration Specialist", salary: "₹12-25 LPA" },
      { role: "Conversational AI Designer", salary: "₹10-20 LPA" },
    ],
    pricing: {
      "3M": "₹79,999",
      "6M": "₹1,29,999",
      "9M": "₹1,69,999",
    },
  },
  {
    id: "llms",
    title: "Large Language Models",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    icon: Code,
    color: "from-red-500 to-pink-500",
    description:
      "Deep dive into the architecture, training, and deployment of large language models. Learn to fine-tune and optimize LLMs for specific use cases.",
    skills: [
      "Transformer architecture",
      "Model fine-tuning",
      "RAG (Retrieval Augmented Generation)",
      "Vector databases",
      "Model deployment",
      "Optimization techniques",
    ],
    outcomes: [
      { role: "LLM Engineer", salary: "₹15-30 LPA" },
      { role: "AI Research Engineer", salary: "₹18-35 LPA" },
      { role: "NLP Specialist", salary: "₹12-26 LPA" },
      { role: "ML Platform Engineer", salary: "₹16-32 LPA" },
    ],
    pricing: {
      "3M": "₹1,09,999",
      "6M": "₹1,69,999",
      "9M": "₹2,19,999",
    },
  },
  {
    id: "ai-ml",
    title: "AI/ML",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    icon: TrendingUp,
    color: "from-orange-500 to-red-500",
    description:
      "Comprehensive machine learning program covering fundamentals to advanced topics including deep learning, neural networks, and model deployment.",
    skills: [
      "Python for ML",
      "Supervised & unsupervised learning",
      "Deep learning & neural networks",
      "TensorFlow & PyTorch",
      "Model evaluation & tuning",
      "MLOps & deployment",
    ],
    outcomes: [
      { role: "Machine Learning Engineer", salary: "₹12-25 LPA" },
      { role: "Data Scientist", salary: "₹10-22 LPA" },
      { role: "AI Engineer", salary: "₹14-28 LPA" },
      { role: "Research Scientist", salary: "₹20-40 LPA" },
    ],
    pricing: {
      "3M": "₹1,19,999",
      "6M": "₹1,79,999",
      "9M": "₹2,29,999",
    },
  },
  {
    id: "data-analytics",
    title: "Data Analytics / Business Analytics",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    icon: Database,
    color: "from-amber-500 to-orange-500",
    description:
      "Transform raw data into actionable insights. Master data analysis, visualization, and business intelligence tools to drive data-driven decisions.",
    skills: [
      "Python & SQL",
      "Data cleaning & preprocessing",
      "Statistical analysis",
      "Power BI & Tableau",
      "Business intelligence",
      "Predictive analytics",
    ],
    outcomes: [
      { role: "Data Analyst", salary: "₹6-14 LPA" },
      { role: "Business Analyst", salary: "₹8-18 LPA" },
      { role: "BI Developer", salary: "₹10-20 LPA" },
      { role: "Analytics Consultant", salary: "₹12-24 LPA" },
    ],
    pricing: {
      "3M": "₹89,999",
      "6M": "₹1,39,999",
      "9M": "₹1,79,999",
    },
  },
  {
    id: "generative-ai",
    title: "Generative AI",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    icon: Zap,
    color: "from-pink-500 to-red-500",
    description:
      "Explore the creative side of AI with generative models. Learn to build systems that can create images, text, audio, and more.",
    skills: [
      "Stable Diffusion & DALL-E",
      "GPT models & text generation",
      "GANs & VAEs",
      "Audio generation",
      "Multi-modal AI",
      "Creative AI applications",
    ],
    outcomes: [
      { role: "Generative AI Engineer", salary: "₹14-30 LPA" },
      { role: "Creative AI Developer", salary: "₹12-26 LPA" },
      { role: "AI Product Designer", salary: "₹15-32 LPA" },
      { role: "Innovation Specialist", salary: "₹16-35 LPA" },
    ],
    pricing: {
      "3M": "₹1,09,999",
      "6M": "₹1,69,999",
      "9M": "₹2,19,999",
    },
  },
];

export const AvailablePrograms = () => {
  return (
    <section className="py-12 sm:py-16 relative overflow-hidden">
      {/* Animated Gradient Bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-[var(--brand-red)]/5 to-[var(--brand-orange)]/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-[var(--brand-orange)]/5 to-[var(--brand-red)]/5 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-br from-[var(--brand-red)]/4 to-[var(--brand-orange)]/4 rounded-full blur-3xl animate-float-slow"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] bg-clip-text text-transparent">
              Available Programs
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">Explore our comprehensive AI programs with detailed career outcomes and salary packages.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => {
            const gradientColors: Record<string, string> = {
              'ai-agents': 'from-red-100 via-orange-100 to-amber-100',
              'prompt-engineering': 'from-orange-100 via-amber-100 to-yellow-100',
              'llms': 'from-rose-100 via-red-100 to-orange-100',
              'ai-ml': 'from-pink-100 via-rose-100 to-red-100',
              'data-analytics': 'from-amber-100 via-orange-100 to-red-100',
              'generative-ai': 'from-orange-100 via-red-100 to-pink-100'
            };

            const programGradient = gradientColors[program.id] || 'from-red-50 to-orange-50';

            const sliderSettings = {
                dots: false,
                infinite: true,
                speed: 800,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                autoplay: true,
                autoplaySpeed: 3500,
                fade: true,
                cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
              };

            return (
              <div
                key={program.id}
                id={program.id}
                className="scroll-mt-24"
              >
                <div className={`relative px-6 sm:px-8 py-8 bg-gradient-to-br ${programGradient} shadow-inner overflow-visible rounded-3xl h-full flex flex-col justify-between`}>
                  <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-black/5 pointer-events-none"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"></div>
                  <div className="absolute top-0 left-0 w-96 h-96 bg-white/30 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
                  <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

                  <div className="w-full mb-6 relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${program.color}`}>
                        <program.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold">
                        <span className="bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] bg-clip-text text-transparent">
                          {program.title}
                        </span>
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      {program.description}
                    </p>
                  </div>

                  <div className="w-full relative z-10">
                    <Slider {...sliderSettings} className="llm-carousel">
                      <div>
                        <div className="w-full aspect-video relative rounded-2xl overflow-hidden bg-gray-900 shadow-xl">
                          <iframe
                            src={program.youtubeUrl}
                            title={`${program.title} Overview`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="w-full aspect-video bg-white rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col">
                          <div className="flex items-center gap-2 mb-4">
                            <div className="p-2 rounded-lg bg-gradient-to-r from-[var(--brand-red-light)] to-[var(--brand-orange-light)]">
                              <Briefcase className="h-5 w-5 text-[var(--brand-red)]" />
                            </div>
                            <h4 className="text-xl font-bold">
                              <span className="bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] bg-clip-text text-transparent">
                                Career Outcomes & Salary Packages
                              </span>
                            </h4>
                          </div>
                          <p className="text-gray-600 text-sm mb-4">
                            Upon completion, you'll be qualified for these high-paying roles:
                          </p>
                          <div className="grid grid-cols-2 gap-3 flex-grow">
                            {program.outcomes.map((outcome, oIndex) => {
                              const colors = [
                                'from-red-100 via-orange-50 to-orange-100 border-red-300',
                                'from-orange-100 via-amber-50 to-amber-100 border-orange-300',
                                'from-rose-100 via-red-50 to-red-100 border-rose-300',
                                'from-amber-100 via-orange-50 to-red-100 border-amber-300'
                              ];
                              const iconColors = [
                                'from-red-500 to-orange-500',
                                'from-orange-500 to-amber-500',
                                'from-rose-500 to-red-500',
                                'from-amber-500 to-red-500'
                              ];
                              return (
                                <div
                                  key={oIndex}
                                  className={`flex flex-col gap-2 p-4 rounded-xl bg-gradient-to-br ${colors[oIndex % colors.length]} border-2 hover:border-[var(--brand-red)] hover:shadow-lg hover:scale-[1.01] transition-all duration-300 animate-fade-in`}
                                  style={{ animationDelay: `${oIndex * 100}ms` }}
                                >
                                  <div className="flex items-center gap-2">
                                    <div className={`p-1.5 rounded-lg bg-gradient-to-r ${iconColors[oIndex % iconColors.length]} shadow-md`}>
                                      <Briefcase className="h-3.5 w-3.5 text-white" />
                                    </div>
                                    <span className="text-gray-900 font-bold text-sm">
                                      {outcome.role}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-1.5 pl-1.5">
                                    <IndianRupee className="h-5 w-5 text-[var(--brand-red)]" />
                                    <span className="text-xl font-bold bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] bg-clip-text text-transparent">
                                      {outcome.salary}
                                    </span>
                                    <span className="text-xs text-gray-500 ml-1">avg. India</span>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="w-full aspect-video bg-white rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col">
                          <div className="flex items-center gap-2 mb-4">
                            <div className="p-2 rounded-lg bg-gradient-to-r from-[var(--brand-red-light)] to-[var(--brand-orange-light)]">
                              <Award className="h-5 w-5 text-[var(--brand-red)]" />
                            </div>
                            <h4 className="text-xl font-bold">
                              <span className="bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] bg-clip-text text-transparent">
                                Skills You'll Master
                              </span>
                            </h4>
                          </div>
                          <div className="grid grid-cols-3 gap-3 flex-grow">
                            {program.skills.map((skill, sIndex) => {
                              const colors = [
                                'from-violet-100 to-purple-100 border-violet-300',
                                'from-blue-100 to-cyan-100 border-blue-300',
                                'from-green-100 to-emerald-100 border-green-300',
                                'from-yellow-100 to-orange-100 border-yellow-300',
                                'from-pink-100 to-rose-100 border-pink-300',
                                'from-indigo-100 to-blue-100 border-indigo-300'
                              ];
                              const iconColors = [
                                'from-violet-500 to-purple-500',
                                'from-blue-500 to-cyan-500',
                                'from-green-500 to-emerald-500',
                                'from-yellow-500 to-orange-500',
                                'from-pink-500 to-rose-500',
                                'from-indigo-500 to-blue-500'
                              ];
                              return (
                                <div
                                  key={sIndex}
                                  className={`flex flex-col items-center gap-2 p-4 bg-gradient-to-br ${colors[sIndex % colors.length]} rounded-xl border-2 hover:border-[var(--brand-orange)] hover:shadow-lg hover:scale-[1.01] transition-all duration-300 group animate-fade-in`}
                                  style={{ animationDelay: `${sIndex * 80}ms` }}
                                >
                                  <div className={`p-2 rounded-lg bg-gradient-to-r ${iconColors[sIndex % iconColors.length]} group-hover:scale-105 transition-all duration-300 shadow-md`}>
                                    <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0" />
                                  </div>
                                  <span className="text-sm text-gray-700 font-medium text-center">
                                    {skill}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </Slider>
                  </div>

                  <div className="w-full mt-auto pt-6 bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] px-5 py-5 flex flex-col items-center text-center rounded-xl shadow-lg gap-4 relative z-10">
                    <div>
                      <h4 className="text-base font-bold text-white mb-1">
                        Ready to Get Started?
                      </h4>
                      <p className="text-white/90 text-xs">
                        Take our free assessment or book a consultation with our experts.
                      </p>
                    </div>
                    <div className="flex gap-2 w-full justify-center">
                      <Link
                        to="/assessment"
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-white text-[var(--brand-red)] hover:shadow-lg hover:scale-[1.02] transition-all duration-300 font-semibold text-xs flex-1 max-w-[150px] justify-center"
                      >
                        Apply Now
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                      <Link
                        to="/corporate-training"
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg border border-white text-white hover:bg-white hover:text-[var(--brand-red)] hover:scale-[1.02] transition-all duration-300 font-semibold text-xs flex-1 max-w-[150px] justify-center"
                      >
                        Consultation
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
