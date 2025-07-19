import { 
  SocialLink, 
  Skill, 
  SkillCategory, 
  SkillLevel, 
  Project, 
  ProjectCategory, 
  ProjectStatus, 
  Experience,
  NavItem,
  Education
} from '../types';

// Import company logos
import camberLogo from '../assets/images/camber-logo.png';
import farragutLogo from '../assets/images/farragut-logo.png';
import anomalySixLogo from '../assets/images/anomaly-six-logo.png';

// Navigation items
export const navItems: NavItem[] = [
//   { label: 'Home', href: '#hero' },
//   { label: 'Projects', href: '#projects' },
//   { label: 'Experience', href: '#experience' },
//   { label: 'Skills', href: '#skills' },
//   { label: 'Contact', href: '#reach-out' },
];

// Personal information
export const personalInfo = {
  name: 'Nalin Nagar',
  title: 'Engineer',
  bio: "I love high-performance, distributed, and low-latency systems. Mainly working with C++ and Python. Reach out if you'd like to chat!",
  location: 'New York, NY',
  email: 'nalinn2@illinois.edu',
  resume: '/NalinResumeCS.pdf',
  avatar: 'https://via.placeholder.com/150x150?text=NN',
};

// Social links
export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/nndev1',
    icon: 'FaGithub',
    color: '#333',
    username: 'nndev1'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/nalin-nagar',
    icon: 'FaLinkedin',
    color: '#0077B5',
    username: 'nalin-nagar'
  },
  {
    id: 'medium',
    name: 'Medium',
    url: 'https://medium.com/@nalinnagar1',
    icon: 'FaMedium',
    color: '#12100E',
    username: '@nalinnagar1'
  },
  {
    id: 'email',
    name: 'Email',
    url: 'mailto:nalinn2@illinois.edu',
    icon: 'FaEnvelope',
    color: '#EA4335'
  }
];

// Skills
export const skills: Skill[] = [
  // Languages
  { id: 'python', name: 'Python', category: SkillCategory.LANGUAGES, level: SkillLevel.EXPERT, icon: 'FaPython', color: '#3776AB' },
  { id: 'cpp', name: 'C++', category: SkillCategory.LANGUAGES, level: SkillLevel.ADVANCED, icon: 'SiCplusplus', color: '#00599C' },
  { id: 'javascript', name: 'JavaScript', category: SkillCategory.LANGUAGES, level: SkillLevel.ADVANCED, icon: 'FaJs', color: '#F7DF1E' },
//   { id: 'java', name: 'Java', category: SkillCategory.LANGUAGES, level: SkillLevel.INTERMEDIATE, icon: 'FaJava', color: '#ED8B00' },
  
  // Frontend
  { id: 'react', name: 'React.js', category: SkillCategory.FRONTEND, level: SkillLevel.ADVANCED, icon: 'FaReact', color: '#61DAFB' },
  
  // Backend
  { id: 'nodejs', name: 'Node.js', category: SkillCategory.BACKEND, level: SkillLevel.ADVANCED, icon: 'FaNodeJs', color: '#339933' },
//   { id: 'express', name: 'Express.js', category: SkillCategory.BACKEND, level: SkillLevel.ADVANCED, icon: 'SiExpress', color: '#000000' },
//   { id: 'flask', name: 'Flask', category: SkillCategory.BACKEND, level: SkillLevel.ADVANCED, icon: 'SiFlask', color: '#000000' },
  { id: 'fastapi', name: 'FastAPI', category: SkillCategory.BACKEND, level: SkillLevel.ADVANCED, icon: 'SiFastapi', color: '#009688' },
  
  // Database
  { id: 'postgresql', name: 'PostgreSQL', category: SkillCategory.DATABASE, level: SkillLevel.ADVANCED, icon: 'SiPostgresql', color: '#336791' },
  { id: 'mongodb', name: 'MongoDB', category: SkillCategory.DATABASE, level: SkillLevel.ADVANCED, icon: 'SiMongodb', color: '#47A248' },
  
  // DevOps & Cloud
  { id: 'aws', name: 'AWS', category: SkillCategory.DEVOPS, level: SkillLevel.INTERMEDIATE, icon: 'FaAws', color: '#232F3E' },
//   { id: 'aws-sagemaker', name: 'AWS SageMaker', category: SkillCategory.DEVOPS, level: SkillLevel.INTERMEDIATE, icon: 'FaAws', color: '#FF9900' },
//   { id: 'aws-lambda', name: 'AWS Lambda', category: SkillCategory.DEVOPS, level: SkillLevel.INTERMEDIATE, icon: 'FaAws', color: '#FF9900' },
  { id: 'azure', name: 'Azure', category: SkillCategory.DEVOPS, level: SkillLevel.INTERMEDIATE, icon: 'SiMicrosoftazure', color: '#0078D4' },
//   { id: 'azure-ai', name: 'Azure AI Foundry', category: SkillCategory.DEVOPS, level: SkillLevel.INTERMEDIATE, icon: 'SiMicrosoftazure', color: '#0078D4' },
//   { id: 'azure-cosmos', name: 'Azure CosmosDB', category: SkillCategory.DEVOPS, level: SkillLevel.INTERMEDIATE, icon: 'SiMicrosoftazure', color: '#0078D4' },
  { id: 'docker', name: 'Docker', category: SkillCategory.DEVOPS, level: SkillLevel.INTERMEDIATE, icon: 'FaDocker', color: '#2496ED' },
  { id: 'git', name: 'Git', category: SkillCategory.TOOLS, level: SkillLevel.ADVANCED, icon: 'FaGit', color: '#F05032' },
  
  // ML & Data Science
  { id: 'pytorch', name: 'PyTorch', category: SkillCategory.TOOLS, level: SkillLevel.ADVANCED, icon: 'SiPytorch', color: '#EE4C2C' },
//   { id: 'langchain', name: 'LangChain', category: SkillCategory.TOOLS, level: SkillLevel.ADVANCED, icon: 'SiLangchain', color: '#2563EB' },
//   { id: 'huggingface', name: 'HuggingFace', category: SkillCategory.TOOLS, level: SkillLevel.ADVANCED, icon: 'SiHuggingface', color: '#FFD21E' },
  { id: 'pandas', name: 'Pandas', category: SkillCategory.TOOLS, level: SkillLevel.ADVANCED, icon: 'SiPandas', color: '#150458' },
  { id: 'sklearn', name: 'Scikit-Learn', category: SkillCategory.TOOLS, level: SkillLevel.ADVANCED, icon: 'SiScikitlearn', color: '#F7931E' },
  { id: 'spark', name: 'Apache Spark', category: SkillCategory.TOOLS, level: SkillLevel.INTERMEDIATE, icon: 'SiApachespark', color: '#E25A1C' },
//   { id: 'dask', name: 'Dask', category: SkillCategory.TOOLS, level: SkillLevel.INTERMEDIATE, icon: 'SiDask', color: '#FC6E6B' }
];

// Experience - placeholder for now, will be added next
export const experience: Experience[] = [];

// Education - placeholder for now
export const education: Education[] = [];

// Projects
export const projects: Project[] = [
  {
    id: 'rapidmatch',
    title: 'RapidMatch',
    description: 'High-performance C++ order book matching engine with FastAPI integration',
    longDescription: 'Designed and implemented a high-performance C++ order book matching engine supporting market, limit (GTC), and fill-or-kill (FOK) orders with price-time priority. Achieved throughput of over 400,000 orders per second with 2.5 μs average latency. Built custom TCP client with optimized bitfield-encoded messages and FastAPI middleware for HTTP communication.',
    image: 'https://via.placeholder.com/600x400?text=RapidMatch+Order+Book',
    technologies: ['C++', 'TCP', 'FastAPI', 'Python', 'JSON'],
    githubUrl: 'https://github.com/NNDEV1/RapidMatch',
    featured: true,
    category: ProjectCategory.API,
    status: ProjectStatus.COMPLETED
  },
//   {
//     id: 'portfolio-website',
//     title: 'Portfolio Website',
//     description: 'Modern portfolio website built with React and TypeScript',
//     longDescription: 'A responsive portfolio website showcasing projects, skills, and experience. Built with React 18, TypeScript, Styled Components, and Framer Motion for smooth animations.',
//     image: 'https://via.placeholder.com/600x400?text=Portfolio+Website',
//     technologies: ['React', 'TypeScript', 'Styled Components', 'Framer Motion'],
//     githubUrl: 'https://github.com/nndev1/portfolio',
//     liveUrl: 'https://nndev1.github.io',
//     featured: true,
//     category: ProjectCategory.WEB,
//     status: ProjectStatus.COMPLETED
//   }
];

// Experience
export const experiences: Experience[] = [
  {
    id: 'camber',
    company: 'Camber',
    position: 'Software Engineer - Internship',
    location: 'New York, NY',
    startDate: 'June 2025',
    current: true,
    description: [
      'database efficiency and backend route optimization'
    ],
    technologies: ['Python', 'SQL', 'FastAPI', 'React', 'AWS'],
    companyUrl: 'https://camber.health',
    companyLogo: camberLogo
  },
  {
    id: 'farragut',
    company: 'Farragut',
    position: 'Software Engineer - Internship',
    location: 'Durham, NC',
    startDate: 'June 2024',
    endDate: 'September 2024',
    current: false,
    description: [
        'automated mass real estate appraisal'
    ],
    technologies: ['Python', 'LangChain', 'Azure AI Foundry', 'CosmosDB', 'FastAPI', 'Docker', 'React', "Typescript"],
    companyUrl: 'https://farragut.com',
    companyLogo: farragutLogo
  },
  {
    id: 'anomaly-six',
    company: 'Anomaly Six',
    position: 'Machine Learning Engineer - Internship',
    location: 'Alexandria, VA',
    startDate: 'June 2023',
    endDate: 'September 2023',
    current: false,
    description: [
      'terabytes of geolocation data processing and memory constrained llm fine-tuning'
    ],
    technologies: ['Python', 'Apache Spark', 'Dask', 'PyTorch', 'LangChain', 'HuggingFace', 'SQL'],
    companyUrl: 'https://anomalysix.com',
    companyLogo: anomalySixLogo
  }
];

// Recent Updates
export const recentUpdates = [
  {
    id: '1',
    type: 'github',
    title: 'Released RapidMatch - High-Performance Order Book Engine',
    source: 'GitHub',
    date: '2024-12-15',
    url: 'https://github.com/NNDEV1/RapidMatch'
  },
  {
    id: '2',
    type: 'blog',
    title: 'Building High-Performance Trading Systems with C++',
    source: 'Medium',
    date: '2024-12-10',
    url: 'https://medium.com/@nalinnagar1'
  },
  {
    id: '3',
    type: 'project',
    title: 'Optimizing TCP Communication for Low-Latency Applications',
    source: 'Personal Blog',
    date: '2024-12-05',
    url: '#'
  }
]; 