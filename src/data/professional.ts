import type { ProfessionalInfo, Service } from "@/types";

/* =========================
   PROFESSIONAL INFO
========================= */

export const professionalInfo: ProfessionalInfo = {
  name: "Dr. Shubhi Harbola",
  title: "Principal AI Consultant & Researcher",
  tagline: "Transforming complex data into intelligent solutions",

  heroIntroduction:
    "I help enterprises harness the power of AI and machine learning to solve real-world challenges. With a Ph.D. in Deep Learning and 10+ years of experience spanning research and industry, I specialize in LLM-based agents, predictive analytics, and sustainable AI solutions.",

  biography: `I’m a Principal AI Consultant with a passion for building intelligent systems that deliver measurable business impact. My journey spans education and research at IIT Kanpur, HFT Stuttgart, Universität Stuttgart to leading AI strategy and solution delivery for Fortune 500 companies.

With deep expertise in deep learning, predictive modeling, and explainable AI, I’ve designed and deployed solutions that have saved organizations millions in operational costs while also advancing sustainable and responsible AI practices. My work has been published in top-tier journals and applied to real-world challenges across environmental science, manufacturing, and enterprise operations.

I’m currently open to consulting engagements as well as research collaborations, where I can contribute to applied AI research, industry–academia partnerships, and impact-driven innovation. I welcome conversations around LLM-powered systems, forecasting and decision intelligence, explainable AI, and sustainable AI solutions—and I’m always happy to connect with like-minded researchers, practitioners, and organizations.`,

  expertise: [
    "LLM & Generative AI",
    "Deep Learning",
    "Predictive Analytics",
    "Explainable AI (XAI)",
    "Time Series Forecasting",
    "Sustainable AI",
  ],

  skills: [
    "Python",
    "TensorFlow",
    "PyTorch",
    "LangChain",
    "XGBoost",
    "LSTM / CNN",
    "Random Forest",
    "SQL",
    "Azure ML",
    "Docker",
  ],

  experience: {
    years: 11,
    projects: 50,
    clients: 30,
  },

  achievements: [
    "Designed LLM-based enterprise agent saving 40+ hours/month through automation",
    "Built sales and inventory forecasting models improving accuracy by 18% at BASF",
    "Developed wind prediction AI for cost-efficient urban turbine evaluation",
    "Created Smart Quality Predictor enabling early defect detection, saving $60K/year",
    "Published 13 peer-reviewed research papers",
    "Ph.D. in Deep Learning with highest distinction (1.0), Universität Stuttgart",
  ],

  location: "Germany",
  email: "drshoffical@gmail.com",
  phone: "+49 XXX XXXXXXX",
  availability: "Open for AI Consulting, Advisory & Research Collaboration",
  consultingRate: "Project-based & Hourly",

  socialLinks: {
    github: "https://github.com/shubhiharbola",
    linkedin: "https://www.linkedin.com/in/drshubhiharbola",
    twitter: "https://twitter.com/shubhiharbola",
    researchgate: "https://www.researchgate.net/profile/Shubhi-Harbola",
    googleScholar: "https://scholar.google.com/citations?hl=de&user=cTLLuFgAAAAJ",
    // optional
    // calendly: "https://calendly.com/your-link"
  },

  profileImage: "", // image imported directly in components
};

/* =========================
   SERVICES
========================= */

export const services: Service[] = [
  {
    id: "ai-strategy",
    title: "AI Strategy & Consulting",
    description:
      "Strategic guidance on AI adoption—from use-case identification to execution roadmaps. Helping organizations make informed, sustainable AI investments.",
    icon: "Lightbulb",
    features: [
      "AI readiness assessment",
      "Use-case prioritization",
      "Technology & architecture recommendations",
      "Build vs. buy decision support",
    ],
  },
  {
    id: "llm-genai",
    title: "LLM & Generative AI Solutions",
    description:
      "Design and development of enterprise-grade LLM applications including intelligent assistants, RAG systems, and automated research tools.",
    icon: "Brain",
    features: [
      "Custom LLM agents & copilots",
      "RAG-based knowledge systems",
      "Prompt engineering & optimization",
      "Enterprise system integration",
    ],
  },
  {
    id: "predictive-analytics",
    title: "Predictive Analytics & Forecasting",
    description:
      "End-to-end forecasting solutions for sales, demand, quality, and operations with proven accuracy improvements.",
    icon: "TrendingUp",
    features: [
      "Time-series forecasting",
      "Demand & sales prediction",
      "Quality anomaly detection",
      "Model deployment & monitoring",
    ],
  },
  {
    id: "sustainable-ai",
    title: "Sustainable AI & Green Tech",
    description:
      "AI solutions addressing environmental and sustainability challenges including renewable energy, smart cities, and green AI design.",
    icon: "Leaf",
    features: [
      "Environmental AI models",
      "Smart city analytics",
      "Energy optimization",
      "Green AI toolkit development",
    ],
  },
];

/* =========================
   EDUCATION
========================= */

export const education = [
  {
    degree: "Ph.D., Computer Science (Informatics)",
    institution: "Universität Stuttgart, Germany",
    year: "", // 2017 – 2021
    grade: "", // 1.0 (Highest Distinction)
    focus: "Deep learning-based prediction and visual analytics for temporal data",
  },
  {
    degree: "M.Tech., Scientific Computing Engineering",
    institution: "IIT Kanpur, India",
    year: "", // 2014 – 2016
    grade: "", // 7.9 / 10
    focus: "Informatics, numerical modeling, and scientific computing",
  },
  {
    // degree: "B.Tech., Computer Science Engineering",
    // institution: "UTU, India", //
    // year: "", // 2007 – 2011
    // grade: "", // Honors (80%)
    // focus: "Object-oriented programming and applied mathematics",
  },
];

/* =========================
   EXPERIENCE
========================= */

export const experience = [
  {
    title: "Principal Consultant – AI",
    company: "Continental, Germany",
    period: "", // 2023 – Present
    description:
      "Leading enterprise LLM agent development and analytics product strategy. Streamlined internal data workflows, saving 40+ hours/month through automation.",
  },
  {
    title: "Data Scientist – Digital Products",
    company: "BASF, Germany",
    period: "", // 2021 – 2023
    description:
      "Built forecasting frameworks improving sales and inventory prediction accuracy by 18%. Delivered Python-based analytics for strategic planning.",
  },
  {
    title: "Research Associate – Environmental AI",
    company: "Universität Stuttgart & HFT Stuttgart",
    period: "", // 2017 – 2021
    description:
      "Published peer-reviewed research and developed wind prediction AI for cost-effective urban turbine planning with explainable AI integration.",
  },
  {
    title: "ML Modeling Researcher",
    company: "IIT Kanpur & IIT Gandhinagar",
    period: "", // 2016 – 2017
    description:
      "Developed AQTA—an urban air-quality forecasting portal with real-time visualization, deployed publicly on GitHub.",
  },
];

/* =========================
   PUBLICATIONS (SELECTED)
========================= */

export const publications = [
  {
    title:
      "Deep Learning Model for Wind Forecasting: Classification Analyses for Temporal Meteorological Data",
    journal:
      "PFG – Journal of Photogrammetry, Remote Sensing and Geoinformation Science",
    year: "2021",
  },
  {
    title:
      "One-dimensional convolutional neural network architectures for wind prediction",
    journal: "Energy Conversion and Management",
    year: "2019",
  },
  {
    title:
      "Comparative analysis of LSTM, RF and SVM architectures for predicting wind nature for smart city planning",
    journal:
      "ISPRS Annals of the Photogrammetry, Remote Sensing and Spatial Information Sciences",
    year: "2019",
  },
];

/* =========================
   FEATURED PROJECTS
========================= */

export const featuredProjects = [
  {
    title: "LLM Assistant for Product Teams",
    description:
      "Built an intelligent research assistant that reduced product research time by 40% and accelerated decision-making.",
    impact: "40% faster research",
    tags: ["LLM", "RAG", "Enterprise"],
  },
  {
    title: "Smart Quality Predictor",
    description:
      "ML-based early defect detection system enabling proactive quality control in manufacturing.",
    impact: "$60K/year saved",
    tags: ["ML", "Manufacturing", "Prediction"],
  },
  {
    title: "Sales & Inventory Forecasting",
    description:
      "Forecasting frameworks at BASF delivering an 18% improvement in prediction accuracy.",
    impact: "18% accuracy boost",
    tags: ["Forecasting", "Python", "Analytics"],
  },
  {
    title: "Wind Prediction AI",
    description:
      "Deep learning models for urban wind forecasting supporting renewable energy planning.",
    impact: "Peer-reviewed research",
    tags: ["Deep Learning", "Energy", "Research"],
  },
];
