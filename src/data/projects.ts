import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'FinTech Trading Platform',
    category: 'saas',
    year: '2024',
    slug: 'fintech-trading-platform',
    coverImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'Built a real-time trading platform handling 100K+ transactions per second. Architected the matching engine and risk management systems using event-driven microservices.',
    client: 'Fortune 500 Financial Services',
    technologies: ['Go', 'Kafka', 'Redis', 'PostgreSQL', 'Kubernetes'],
    results: '99.99% uptime, 60% reduction in latency',
    images: [
      {
        id: '1-1',
        src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'Trading dashboard interface',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '2',
    title: 'E-Commerce Platform Rebuild',
    category: 'web-app',
    year: '2024',
    slug: 'ecommerce-platform-rebuild',
    coverImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'Led complete re-architecture of a legacy e-commerce platform serving 10M+ users. Migrated from monolith to microservices while maintaining zero downtime.',
    client: 'Major Retail Brand',
    technologies: ['React', 'Node.js', 'GraphQL', 'AWS', 'Elasticsearch'],
    results: '40% faster page loads, 3x conversion increase',
    images: [
      {
        id: '2-1',
        src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'E-commerce platform',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '3',
    title: 'Healthcare Data Analytics',
    category: 'consulting',
    year: '2023',
    slug: 'healthcare-data-analytics',
    coverImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'Designed and implemented a HIPAA-compliant data analytics platform for a healthcare startup. Built secure data pipelines and real-time dashboards for clinical insights.',
    client: 'HealthTech Startup',
    technologies: ['Python', 'Snowflake', 'dbt', 'React', 'Terraform'],
    results: 'SOC 2 certified, 10x faster data processing',
    images: [
      {
        id: '3-1',
        src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'Healthcare analytics dashboard',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '4',
    title: 'AI-Powered Content Platform',
    category: 'saas',
    year: '2023',
    slug: 'ai-content-platform',
    coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'Built an AI-powered content generation and management platform. Integrated multiple LLM providers with custom fine-tuning pipelines for enterprise clients.',
    client: 'Media & Publishing Company',
    technologies: ['Python', 'FastAPI', 'OpenAI', 'PostgreSQL', 'React'],
    results: '80% reduction in content creation time',
    images: [
      {
        id: '4-1',
        src: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'AI content platform',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '5',
    title: 'Developer Tools CLI',
    category: 'open-source',
    year: '2023',
    slug: 'developer-tools-cli',
    coverImage: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'Created a popular open-source CLI tool for automating development workflows. Features intelligent code generation, testing automation, and deployment pipelines.',
    technologies: ['Rust', 'TypeScript', 'GitHub Actions'],
    results: '5K+ GitHub stars, 50K+ weekly downloads',
    images: [
      {
        id: '5-1',
        src: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'Terminal with CLI tool',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '6',
    title: 'Mobile Banking App',
    category: 'mobile',
    year: '2022',
    slug: 'mobile-banking-app',
    coverImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'Led development of a cross-platform mobile banking application with biometric authentication, real-time notifications, and seamless payment integrations.',
    client: 'Digital Bank',
    technologies: ['React Native', 'TypeScript', 'Node.js', 'PostgreSQL'],
    results: '4.8★ app store rating, 500K+ downloads',
    images: [
      {
        id: '6-1',
        src: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'Mobile banking app interface',
        aspectRatio: 'portrait'
      }
    ]
  }
];

// Helper function to get project by slug
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

// Helper function to get projects by category
export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};

// Helper function to get featured projects (first 4)
export const getFeaturedProjects = (): Project[] => {
  return projects.slice(0, 4);
};

// Helper function to get next/previous project
export const getAdjacentProjects = (currentSlug: string): { prev: Project | null; next: Project | null } => {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug);
  
  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null
  };
};
