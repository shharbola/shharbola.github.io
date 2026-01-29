import type { ProfessionalInfo, Service } from '@/types';

export const professionalInfo: ProfessionalInfo = {
  name: 'Dr. Shubhi Harbola',
  title: 'Principal AI Consultant & Researcher',
  tagline: 'Transforming complex data into intelligent solutions',
  heroIntroduction: 'I help enterprises harness the power of AI and machine learning to solve real-world challenges. With a Ph.D. in Deep Learning and 10+ years of experience spanning research and industry, I specialize in LLM-based agents, predictive analytics, and sustainable AI solutions.',
  biography: `I’m a Principal AI Consultant with a passion for building intelligent systems that deliver measurable business impact. My journey spans academic research at Universität Stuttgart to leading AI strategy and solution delivery for Fortune 500 companies.

With deep expertise in deep learning, predictive modeling, and explainable AI, I’ve designed and deployed solutions that have saved organizations millions in operational costs while also advancing sustainable and responsible AI practices. My work has been published in top-tier journals and applied to real-world challenges across environmental science, manufacturing, and enterprise operations.

I’m currently open to consulting engagements as well as research collaborations, where I can contribute to applied AI research, industry–academia partnerships, and impact-driven innovation. I welcome conversations around LLM-powered systems, forecasting and decision intelligence, explainable AI, and sustainable AI solutions—and I’m always happy to connect with like-minded researchers, practitioners, and organizations.`,
  expertise: [
    'LLM & Generative AI',
    'Deep Learning',
    'Predictive Analytics',
    'Explainable AI (XAI)',
    'Time Series Forecasting',
    'Sustainable AI'
  ],
  skills: [
    'Python',
    'TensorFlow',
    'PyTorch',
    'LangChain',
    'XGBoost',
    'LSTM/CNN',
    'Random Forest',
    'SQL',
    'Azure ML',
    'Docker'
  ],
  experience: {
    years: 10,
    projects: 50,
    clients: 30
  },
  achievements: [
    'Designed LLM-based agent for enterprise use; saved 40+ hours/month through automation',
    'Built sales and inventory models boosting forecast precision by 18% at BASF',
    'Developed wind prediction AI used in cost-saving urban turbine evaluations',
    'Created Smart Quality Predictor enabling early defect detection—saved $60K/year',
    'Published 13 research papers in top-tier journals',
    'Ph.D. in Deep Learning with highest distinction (1.0) from Universität Stuttgart'
  ],
  location: 'Germany',
  email: 'drshoffical@gmail.com',
  phone: '+49 XXX XXXXXXX',
  availability: 'Open for AI Consulting & Advisory',
  consultingRate: 'Project-based & Hourly',
  socialLinks: {
    github: 'https://github.com/shubhiharbola',
    linkedin: 'https://www.linkedin.com/in/drshubhiharbola',
    twitter: 'https://twitter.com/shubhiharbola',
    researchgate: 'https://www.researchgate.net/profile/Shubhi-Harbola',
    googleScholar: 'https://scholar.google.com/citations?hl=de&user=cTLLuFgAAAAJ'
  },
  profileImage: '' // Will be set via import
};

export const services: Service[] = [
  {
    id: '1',
    title: 'AI Strategy & Consulting',
    description: 'Strategic guidance on AI adoption, from use-case identification to implementation roadmaps. I help organizations make informed decisions about AI investments and build sustainable AI capabilities.',
    icon: 'Lightbulb',
    features: [
      'AI readiness assessment',
      'Use-case prioritization',
      'Technology stack recommendations',
      'Build vs. buy analysis'
    ]
  },
  {
    id: '2',
    title: 'LLM & Generative AI Solutions',
    description: 'Design and development of LLM-powered applications including intelligent assistants, document processing systems, and automated research tools tailored for enterprise needs.',
    icon: 'Brain',
    features: [
      'Custom LLM agents & assistants',
      'RAG-based knowledge systems',
      'Prompt engineering & optimization',
      'Enterprise integration'
    ]
  },
  {
    id: '3',
    title: 'Predictive Analytics & Forecasting',
    description: 'End-to-end development of forecasting systems for sales, demand, quality, and operations. Proven track record of 18%+ accuracy improvements.',
    icon: 'TrendingUp',
    features: [
      'Time series forecasting',
      'Demand & sales prediction',
      'Quality anomaly detection',
      'Model deployment & monitoring'
    ]
  },
  {
    id: '4',
    title: 'Sustainable AI & Green Tech',
    description: 'AI solutions for environmental challenges including smart city planning, renewable energy optimization, and sustainable design recommendations.',
    icon: 'Leaf',
    features: [
      'Environmental AI models',
      'Smart city analytics',
      'Energy optimization',
      'Green AI toolkit development'
    ]
  }
];

export const education = [
  {
    degree: 'Ph.D., Computer Science (Informatics)',
    institution: 'Universität Stuttgart, Germany',
    year: '', // 2017-2021
    grade: '', // 1.0 (Highest Distinction)
    focus: 'Deep learning based prediction and visual analytics for temporal data'
  },
  {
    degree: 'M.Tech., Scientific Computing Engineering',
    institution: 'IIT Kanpur, India',
    year: '', // 2014-2016
    grade: '', // 7.9/10.0
    focus: 'Informatics, numerical modeling and computing'
  },
  {
    degree: 'B.Tech., Computer Science Engineering',
    institution: 'UTU UK, India',
    year: '', // 2007-2011
    grade: '', // 80% (Honors)
    focus: 'Object oriented programming and applied mathematics'
  }
];

export const experience = [
  {
    title: 'Principal Consultant AI',
    company: 'CT, Germany',
    period: '2023 - Present',
    description: 'Senior AI Expert leading LLM-based agent development for enterprise use. Streamlined internal data operations and led analytics product strategy saving 40+ hours/month through automation.'
  },
  {
    title: 'Data Scientist – Digital Products',
    company: 'BASF, Germany',
    period: '2021 - 2023',
    description: 'Built sales and inventory models boosting forecast precision by 18%. Developed Python-based forecasting frameworks for strategic insights.'
  },
  {
    title: 'Research Associate – Environmental AI',
    company: 'Universität Stuttgart & HFT Stuttgart',
    period: '2017 - 2021',
    description: 'Published top-tier research and developed wind prediction AI used in cost-saving evaluations of urban turbines. Integrated explainable AI into public-facing environmental dashboards.'
  },
  {
    title: 'ML Modeling Researcher',
    company: 'IIT Kanpur & IIT Gandhinagar',
    period: '2016 - 2017',
    description: 'Built urban air quality forecasting portal (AQTA) with real-time visualization; deployed on GitHub.'
  }
];

export const publications = [
  {
    title: 'Deep Learning Model for Wind Forecasting: Classification Analyses for Temporal Meteorological Data',
    journal: 'PFG–Journal of Photogrammetry, Remote Sensing and Geoinformation Science',
    year: '2021'
  },
  {
    title: 'One dimensional convolutional neural network architectures for wind prediction',
    journal: 'Energy Conversion and Management',
    year: '2019'
  },
  {
    title: 'Comparative analysis of LSTM, RF and SVM Architectures for Predicting Wind Nature for smart city planning',
    journal: 'The International Annals of the Photogrammetry, Remote Sensing and Spatial Information Sciences',
    year: '2019'
  }
];

export const featuredProjects = [
  {
    title: 'LLM Assistant for Product Teams',
    description: 'Built an intelligent research assistant that cut product research time by 40% and accelerated decision-making across teams.',
    impact: '40% faster research',
    tags: ['LLM', 'RAG', 'Enterprise']
  },
  {
    title: 'Smart Quality Predictor',
    description: 'Developed ML models for early defect detection in manufacturing processes, enabling proactive quality control.',
    impact: '$60K/year saved',
    tags: ['ML', 'Manufacturing', 'Prediction']
  },
  {
    title: 'Sales & Inventory Forecasting',
    description: 'Built Python-based forecasting frameworks at BASF that improved prediction accuracy by 18%.',
    impact: '18% accuracy boost',
    tags: ['Forecasting', 'Python', 'Analytics']
  },
  {
    title: 'Wind Prediction AI',
    description: 'Developed deep learning models for urban wind forecasting, enabling cost-effective renewable energy planning.',
    impact: 'Published research',
    tags: ['Deep Learning', 'Energy', 'Research']
  }
];
