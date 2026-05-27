import {
  BookOpen,
  Brain,
  Briefcase,
  Building2,
  Clock3,
  Code2,
  Database,
  FileText,
  Globe2,
  GraduationCap,
  LineChart, 
  Megaphone,
  Settings,
  Shield,
  Rocket,
  Sparkles,
  Target,
  Users,
  Zap
} from "lucide-react";

export const clients = [
  ["HETTICH", "Innovation in Hardware Systems"],
  ["SSLGROUP", "Lighting & Electrical Solutions"],
  ["MOTHERSON", "Global Manufacturing Leader"],
  ["FORTUNE 500", "Executive AI Enablement"],
  ["TECHSTART", "Product Automation Partner"]
];

export const journey = [
  { title: "Register", text: "Create your account and set your career goals", icon: Users },
  { title: "Take Assessment", text: "Evaluate your current skills and knowledge", icon: Target },
  { title: "Roadmap Generated", text: "Get your personalized learning path", icon: LineChart },
  { title: "Book Consultation", text: "Discuss your roadmap with our experts", icon: BookOpen },
  { title: "Start Training", text: "Begin your transformation journey", icon: Rocket }
];

export const testimonials = [
  {
    quote: "I transitioned from marketing to an AI Product Manager role in just 6 months. The personalized learning path and mentor support were game-changers. Now earning ₹22 LPA!",
    name: "Rahul Kumar",
    role: "AI Product Manager @ TCS",
    salary: "₹12L → ₹22L",
    initials: "RK"
  },
  {
    quote: "Being from a finance background, I was nervous about coding. The AI/ML Mastery program broke everything down perfectly. Landed a Data Scientist role at Wipro!",
    name: "Priya Mehta",
    role: "Data Scientist @ Wipro",
    salary: "₹8L → ₹18L",
    initials: "PM"
  },
  {
    quote: "The LLM & Prompt Engineering course was exactly what I needed. Built 3 AI projects during the program and got hired as an AI Engineer. Best investment ever!",
    name: "Amit Sharma",
    role: "AI Engineer @ Infosys",
    salary: "₹10L → ₹20L",
    initials: "AS"
  }
];

export const marketStats = [
  { value: "50,000+", label: "Job Openings", icon: Briefcase },
  { value: "35% YoY", label: "Avg. Salary Growth", icon: LineChart },
  { value: "60%", label: "Remote Opportunities", icon: Target },
  { value: "2,500+", label: "Hiring Companies", icon: Building2 }
];

export const jobRoles = [
  ["AI/ML Engineer", "Design and deploy machine learning models and AI systems", "₹12-25 LPA", "₹6-10 LPA", "1-5 years", ["Python", "TensorFlow", "PyTorch", "Scikit-learn"], ["TCS", "Infosys", "Wipro"], "Very High", "+45%", Brain, "orange"],
  ["Data Scientist", "Analyze complex data and build predictive models", "₹10-22 LPA", "₹5-9 LPA", "1-5 years", ["Python", "R", "SQL", "Statistics", "ML"], ["Flipkart", "Amazon", "PayTM"], "Very High", "+42%", LineChart, "amber"],
  ["AI Product Manager", "Lead AI product strategy and development", "₹18-35 LPA", "₹10-15 LPA", "3-7 years", ["Product Strategy", "AI/ML", "Agile", "Data Analysis"], ["Meta", "Google", "Freshworks"], "High", "+38%", Briefcase, "pink"],
  ["Prompt Engineer", "Optimize AI prompts and fine-tune LLM responses", "₹8-18 LPA", "₹4-8 LPA", "0-3 years", ["LLMs", "NLP", "Prompt Design", "GPT APIs"], ["OpenAI", "Anthropic", "Startups"], "Rapidly Growing", "+120%", Sparkles, "amber"],
  ["LLM Developer", "Build and fine-tune large language models", "₹15-30 LPA", "₹8-12 LPA", "2-6 years", ["Transformers", "BERT", "GPT", "Python", "HuggingFace"], ["Google", "Microsoft", "NVIDIA"], "Very High", "+85%", Code2, "pink"],
  ["AI Research Scientist", "Conduct cutting-edge AI research and innovation", "₹20-40 LPA", "₹12-18 LPA", "3-8 years", ["Deep Learning", "Research", "Mathematics", "Publications"], ["IIT Labs", "DRDO", "Google Research"], "High", "+35%", Brain, "orange"],
  ["Computer Vision Engineer", "Develop image and video analysis AI systems", "₹12-28 LPA", "₹7-11 LPA", "2-6 years", ["OpenCV", "CNNs", "YOLO", "Image Processing"], ["Tesla", "Bosch", "Samsung"], "Very High", "+50%", Zap, "orange"],
  ["NLP Engineer", "Build natural language processing applications", "₹12-26 LPA", "₹6-10 LPA", "2-5 years", ["NLP", "NLTK", "spaCy", "Transformers", "Python"], ["Google", "Amazon", "Flipkart"], "High", "+48%", Code2, "amber"],
  ["AI Solutions Architect", "Design scalable AI infrastructure and systems", "₹22-45 LPA", "₹12-18 LPA", "5-10 years", ["Cloud (AWS/Azure)", "MLOps", "Architecture", "AI/ML"], ["Accenture", "Deloitte", "IBM"], "High", "+40%", Database, "pink"]
];

export const programs = [
  ["AI Agents", "Build intelligent autonomous agents using LangChain, AutoGPT, and modern frameworks", Brain, "orange"],
  ["Prompt Engineering", "Master the art of crafting effective prompts for GPT models and AI systems", Sparkles, "amber"],
  ["Large Language Models", "Deep dive into LLMs, fine-tuning, and deploying custom language models", Code2, "pink"],
  ["AI/ML", "Comprehensive machine learning from foundations to advanced neural networks", LineChart, "orange"],
  ["Data Analytics", "Transform data into insights with Python, SQL, and business intelligence tools", Database, "amber"],
  ["Generative AI", "Create with AI: image generation, text-to-image, and creative AI applications", Zap, "pink"]
];

export const programDetails = [
  {
    title: "AI Agents",
    icon: Brain,
    tone: "orange",
    description: "Master the development of intelligent autonomous agents that can interact, learn, and execute complex tasks using cutting-edge frameworks.",
    skills: ["Agent architecture", "Tool calling", "LangChain workflows", "Vector memory", "Automation planning", "Evaluation loops"],
    outcomes: [["AI Agent Developer", "₹15-28 LPA"], ["Automation Engineer", "₹12-24 LPA"], ["AI Solutions Architect", "₹22-45 LPA"], ["ML Engineering roles", "₹12-30 LPA"]]
  },
  {
    title: "Prompt Engineering",
    icon: Sparkles,
    tone: "amber",
    description: "Learn the art and science of crafting effective prompts to maximize AI model performance and unlock the full potential of language models.",
    skills: ["Prompt design patterns", "Few-shot learning", "Context engineering", "Chain-of-thought prompting", "Prompt optimization", "Model-specific techniques"],
    outcomes: [["Prompt Engineer", "₹8-18 LPA"], ["AI Content Strategist", "₹10-22 LPA"], ["LLM Integration Specialist", "₹12-25 LPA"], ["Conversational AI Designer", "₹10-20 LPA"]]
  },
  {
    title: "Large Language Models",
    icon: Code2,
    tone: "pink",
    description: "Deep dive into the architecture, training, and deployment of large language models. Learn to fine-tune and optimize LLMs for specific use cases.",
    skills: ["Transformer architecture", "RAG (Retrieval Augmented Generation)", "Model deployment", "Model fine-tuning", "Vector databases", "Optimization techniques"],
    outcomes: [["LLM Engineer", "₹15-30 LPA"], ["AI Research Engineer", "₹18-35 LPA"], ["NLP Specialist", "₹12-26 LPA"], ["ML Platform Engineer", "₹16-32 LPA"]]
  },
  {
    title: "AI/ML",
    icon: LineChart,
    tone: "orange",
    description: "Comprehensive machine learning program covering fundamentals to advanced topics including deep learning, neural networks, and model deployment.",
    skills: ["Python for ML", "Deep learning & neural networks", "Model evaluation & tuning", "Supervised & unsupervised learning", "TensorFlow & PyTorch", "MLOps & deployment"],
    outcomes: [["Machine Learning Engineer", "₹12-25 LPA"], ["Data Scientist", "₹10-22 LPA"], ["AI Engineer", "₹14-28 LPA"], ["Research Scientist", "₹20-40 LPA"]]
  },
  {
    title: "Data Analytics / Business Analytics",
    icon: Database,
    tone: "amber",
    description: "Transform raw data into actionable insights. Master data analysis, visualization, and business intelligence tools to drive data-driven decisions.",
    skills: ["Python & SQL", "Statistical analysis", "Business intelligence", "Data cleaning & preprocessing", "Power BI & Tableau", "Predictive analytics"],
    outcomes: [["Data Analyst", "₹6-14 LPA"], ["Business Analyst", "₹8-18 LPA"], ["BI Developer", "₹10-20 LPA"], ["Analytics Consultant", "₹12-24 LPA"]]
  },
  {
    title: "Generative AI",
    icon: Zap,
    tone: "pink",
    description: "Explore the creative side of AI with generative models. Learn to build systems that can create images, text, audio, and more.",
    skills: ["Stable Diffusion & DALL-E", "GANs & VAEs", "Multi-modal AI", "GPT models & text generation", "Audio generation", "Creative AI applications"],
    outcomes: [["Generative AI Engineer", "₹14-30 LPA"], ["Creative AI Developer", "₹12-26 LPA"], ["AI Product Designer", "₹15-32 LPA"], ["Innovation Specialist", "₹16-35 LPA"]]
  }
];

export const learningDurations = [
  {
    title: "3 Months",
    subtitle: "Fast-track your AI career with intensive learning",
    hours: "15-20 hours/week",
    cta: "Explore 3M Programs",
    features: ["One specialized program", "6 bi-weekly mentor sessions", "4-6 hands-on projects", "Job placement support", "Certificate of completion"]
  },
  {
    title: "6 Months",
    subtitle: "Comprehensive learning with balanced pace",
    hours: "12-15 hours/week",
    cta: "Explore 6M Programs",
    popular: true,
    features: ["Two advanced programs", "12 weekly mentor sessions", "8-10 industry projects", "Portfolio development", "Interview preparation", "Dedicated job placement", "Certificate of completion"]
  },
  {
    title: "9 Months",
    subtitle: "Deep mastery with flexible learning schedule",
    hours: "10-12 hours/week",
    cta: "Explore 9M Programs",
    features: ["Three comprehensive programs", "18 weekly 1-on-1 sessions", "12+ projects + capstone", "Complete portfolio building", "Resume & personal branding", "Premium job placement", "Interview coaching", "Lifetime access & support"]
  }
];

export const corporateFeatures = [
  ["Customized Curriculum", "Training programs tailored to your industry and business objectives", Target],
  ["Scalable Delivery", "Train teams from 10 to 1000+ employees with flexible formats", Users],
  ["Expert Instructors", "Industry professionals with real-world AI implementation experience", GraduationCap],
  ["Measurable Results", "Track progress with assessments and performance metrics", LineChart]
];

export const industries = [
  ["💰", "Finance & Banking", ["Fraud detection systems", "Risk assessment models", "Automated trading algorithms"]],
  ["🏥", "Healthcare", ["Medical image analysis", "Patient data analytics", "Predictive diagnostics"]],
  ["🛒", "Retail & E-commerce", ["Recommendation engines", "Inventory optimization", "Customer behavior analysis"]],
  ["🏭", "Manufacturing", ["Predictive maintenance", "Quality control automation", "Supply chain optimization"]],
  ["📱", "Marketing & Media", ["Content generation", "Campaign optimization", "Sentiment analysis"]],
  ["💻", "Technology", ["Product development", "Code automation", "DevOps optimization"]]
];

export const trainingFormats = [
  ["On-Site Training", "Instructors at your location for immersive, hands-on training", Building2, ["Customized to your infrastructure", "Direct team collaboration", "Full-day intensive sessions"]],
  ["Remote Training", "Live virtual sessions with interactive workshops and projects", Users, ["Flexible scheduling", "Recorded sessions", "Global team access"]],
  ["Hybrid Training", "Combination of on-site and remote for maximum flexibility", LineChart, ["Best of both formats", "Phased implementation", "Ongoing support"]]
];

export const productOfferings = [
  {
    title: "AI Analyzer Tools",
    description: "Transform raw data into actionable insights with intelligent automation",
    icon: LineChart,
    features: [["Data Analysis Automation", "Automate complex data processing workflows and generate insights in real-time"], ["Pattern Recognition Systems", "Identify trends, anomalies, and opportunities hidden in your data"], ["Business Intelligence Dashboards", "Visualize KPIs and metrics with customizable, interactive dashboards"]],
    tags: ["Cloud-Ready", "Enterprise Security"]
  },
  {
    title: "LMS (Learning Management System)",
    description: "Empower your organization with intelligent learning platforms",
    icon: Shield,
    features: [["Custom E-Learning Platforms", "Tailored learning experiences with AI-driven content recommendations"], ["Progress Tracking & Analytics", "Monitor learner performance with detailed insights and reports"], ["Interactive Course Management", "Create, manage, and deliver engaging courses with multimedia support"]],
    tags: ["Multi-Tenant", "AI-Powered"]
  }
];

export const teamGroups = [
  {
    title: "Human Resources",
    subtitle: "Building and nurturing our talent",
    tone: "red",
    icon: Users,
    members: [
      ["Priya Mehta", "Head of HR & Culture", "HR leader with 12+ years of experience in talent acquisition and organizational development. Builds high-performing teams and fosters positive workplace culture.", "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80"],
      ["Neha Kapoor", "Talent Acquisition Specialist", "Recruiting expert passionate about finding the right talent. 8 years of experience in tech recruitment and employer branding.", "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80"]
    ]
  },
  {
    title: "Technology Team",
    subtitle: "Building the future of AI education",
    tone: "orange",
    icon: Code2,
    members: [
      ["Arjun Sharma", "Chief Technology Officer", "Ex-Microsoft AI Engineer with 14+ years of experience in MLOps, cloud architecture, and scalable AI systems. Built AI solutions serving 100M+ users.", "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"],
      ["Sneha Reddy", "Senior AI Engineer", "Deep Learning and NLP specialist with 8 years at Amazon ML. Expert in building production-ready AI models and RAG systems.", "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80"],
      ["Vikram Patel", "Cloud Solutions Architect", "10+ years of experience in cloud architecture with AWS and Azure. Ex-Accenture, specializes in AI infrastructure and DevOps.", "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80"],
      ["Kavya Iyer", "ML Engineer - Computer Vision", "Computer Vision and Image AI expert with 7 years at Adobe. Builds cutting-edge CV models for real-world applications.", "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80"]
    ]
  },
  {
    title: "Sales Team",
    subtitle: "Connecting professionals with opportunities",
    tone: "green",
    icon: LineChart,
    members: [
      ["Amit Gupta", "Head of Sales", "Sales leader with 10+ years in EdTech and B2B sales. Track record of building high-performing sales teams and exceeding revenue targets.", "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80"],
      ["Ritu Sharma", "Corporate Sales Manager", "Enterprise sales specialist focused on corporate training solutions. 8 years of experience in building client relationships.", "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=80"],
      ["Rohit Verma", "Business Development Manager", "Strategic partnership builder with expertise in EdTech market expansion. Passionate about creating win-win business opportunities.", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80"]
    ]
  },
  {
    title: "Marketing Team",
    subtitle: "Spreading the word about AI education",
    tone: "purple",
    icon: Megaphone,
    members: [
      ["Anjali Desai", "Head of Marketing", "Digital marketing strategist with 12+ years of experience. Expert in growth marketing, content strategy, and brand building in the EdTech space.", "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80"],
      ["Karan Malhotra", "Content Marketing Manager", "Content strategist and storyteller with a passion for AI education. Creates engaging content that drives conversions and builds community.", "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=900&q=80"],
      ["Pooja Nair", "Social Media Specialist", "Social media expert who builds engaged online communities. 6 years of experience in digital marketing and influencer partnerships.", "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=80"]
    ]
  },
  {
    title: "Operations Team",
    subtitle: "Ensuring excellence in delivery",
    tone: "blue",
    icon: Settings,
    members: [
      ["Suresh Kumar", "Head of Operations", "Operations leader with 15+ years of experience in process optimization and team management. Ensures smooth delivery of all training programs.", "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80"],
      ["Divya Menon", "Program Manager", "Project management professional specializing in education program delivery. PMP certified with 9 years of experience.", "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=900&q=80"],
      ["Ramesh Iyer", "Quality Assurance Lead", "Quality champion ensuring excellence in every training program. 10+ years in operations and quality management.", "https://images.unsplash.com/photo-1562788869-4ed32648eb72?auto=format&fit=crop&w=900&q=80"]
    ]
  }
];

export const founder = {
  name: "Dr. Rajesh Kumar",
  role: "Founder & CEO",
  image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=1000&q=80",
  bio: "Visionary entrepreneur with 15+ years of experience in AI and EdTech. Former AI Lead at Google with a PhD in Computer Science from IIT Delhi. Founded SMARRTIF AI with the mission to democratize AI education and help non-technical professionals transition into high-paying AI careers. Has mentored over 500 professionals and built AI solutions used by millions globally.",
  tags: ["AI Strategy", "Machine Learning", "EdTech Innovation", "Team Building"],
  facts: ["15+ years in AI & ML", "Ex-Google AI Lead", "PhD from IIT Delhi", "500+ professionals mentored"]
};

export const careerServices = [
  {
    title: "Professional CV Creation",
    price: "₹1,499",
    icon: FileText,
    description: "Get an ATS-friendly, professionally designed CV that highlights your AI skills and experience",
    features: ["ATS-optimized format", "Industry-specific keywords", "Achievement-focused content", "2 rounds of revisions", "PDF & Word formats"],
    cta: "Order CV Service"
  },
  {
    title: "Digital Portfolio Website",
    price: "₹3,499",
    icon: Globe2,
    description: "Showcase your AI projects with a stunning, responsive portfolio website",
    features: ["Custom responsive design", "Project showcases", "About & skills sections", "Contact form integration", "Free hosting for 1 year"],
    cta: "Order Portfolio Service"
  }
];

export const insightCards = [
  { title: "Average Hiring Time", value: "45-60 Days", text: "From application to offer for qualified candidates with right skills", icon: Clock3, tone: "red" },
  { title: "Certification Impact", value: "+30% Salary", text: "Certified AI professionals earn significantly higher packages", icon: Briefcase, tone: "amber" },
  { title: "Job Market Growth", value: "250% by 2027", text: "AI job openings projected to triple in the next 18 months", icon: LineChart, tone: "green" }
];

export const careerBundle = {
  title: "Complete Career Transition Package",
  price: "₹24,999",
  description: "The ultimate bundle to guarantee your successful transition into AI tech roles.",
  features: [
    "All 6+ Expert Programs included",
    "Professional CV Creation",
    "Digital Portfolio Website",
    "1-on-1 Mentorship & Interview Prep",
    "Job Placement Assistance",
    "Lifetime community access"
  ]
};
