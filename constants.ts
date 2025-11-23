import { BlogPost, Project, Service, TeamMember, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'High-performance, scalable websites built with React, Next.js, and modern frameworks.',
    icon: 'Globe',
    priceRange: '$5k - $20k',
    timeline: '4 - 8 weeks',
    features: ['Responsive Design', 'SEO Optimization', 'CMS Integration', 'PWA Support']
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: 'Smartphone',
    priceRange: '$15k - $50k',
    timeline: '12 - 24 weeks',
    features: ['React Native / Flutter', 'App Store Submission', 'Push Notifications', 'Offline Mode']
  },
  {
    id: 'ecommerce',
    title: 'Shopify & E-commerce',
    description: 'Custom storefronts and headless commerce solutions that drive sales.',
    icon: 'ShoppingCart',
    priceRange: '$8k - $30k',
    timeline: '6 - 12 weeks',
    features: ['Custom Themes', 'Payment Integration', 'Inventory Management', 'Conversion Optimization']
  },
  {
    id: 'digital-transform',
    title: 'Digital Transformation',
    description: 'Modernizing legacy systems and automating business processes.',
    icon: 'Zap',
    priceRange: '$20k+',
    timeline: '3 - 6 months',
    features: ['Cloud Migration', 'Process Automation', 'API Integration', 'Data Analytics']
  },
  {
    id: 'devops',
    title: 'Cloud & DevOps',
    description: 'Secure, scalable infrastructure setup on AWS, Azure, or Google Cloud.',
    icon: 'Cloud',
    priceRange: '$3k - $10k',
    timeline: '2 - 4 weeks',
    features: ['CI/CD Pipelines', 'Serverless Architecture', 'Security Audits', 'Performance Tuning']
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    slug: 'fintech-dashboard',
    title: 'Nexus Finance Dashboard',
    category: 'Portal',
    image: 'https://picsum.photos/800/600?random=1',
    client: 'Nexus FinCorp',
    description: 'A comprehensive financial analytics dashboard for enterprise clients.',
    challenge: 'The client needed to visualize millions of data points in real-time without latency.',
    solution: 'We built a React-based dashboard using D3.js and WebSockets for sub-second updates.',
    techStack: ['React', 'D3.js', 'Node.js', 'WebSockets']
  },
  {
    id: '2',
    slug: 'urban-eats',
    title: 'Urban Eats Delivery',
    category: 'App',
    image: 'https://picsum.photos/800/600?random=2',
    client: 'Urban Eats',
    description: 'A food delivery mobile application connecting local chefs with foodies.',
    challenge: 'Seamless GPS tracking and order coordination between three parties.',
    solution: 'Developed a cross-platform Flutter app with Google Maps integration.',
    techStack: ['Flutter', 'Firebase', 'Google Maps API']
  },
  {
    id: '3',
    slug: 'eco-market',
    title: 'EcoMarket Store',
    category: 'E-commerce',
    image: 'https://picsum.photos/800/600?random=3',
    client: 'GreenLife Inc.',
    description: 'A headless Shopify store for sustainable products.',
    challenge: 'Custom product customization workflow that Shopify default themes could not handle.',
    solution: 'Implemented a headless storefront using Next.js and Shopify Storefront API.',
    techStack: ['Next.js', 'Shopify API', 'Tailwind CSS']
  },
  {
    id: '4',
    slug: 'corp-landing',
    title: 'Apex Corporate Identity',
    category: 'Website',
    image: 'https://picsum.photos/800/600?random=4',
    client: 'Apex Global',
    description: 'A brand-forward corporate website with immersive 3D elements.',
    challenge: 'High-performance 3D rendering on mobile devices.',
    solution: 'Used Three.js with optimized models and lazy loading.',
    techStack: ['React', 'Three.js', 'GSAP']
  },
  {
    id: '5',
    slug: 'med-portal',
    title: 'MediCare Patient Portal',
    category: 'Portal',
    image: 'https://picsum.photos/800/600?random=5',
    client: 'HealthPlus',
    description: 'HIPAA-compliant patient portal for appointment scheduling and records.',
    challenge: 'Strict security and accessibility requirements (WCAG AAA).',
    solution: 'Built a secure, accessible React app with comprehensive audit logging.',
    techStack: ['React', 'Redux', 'AWS Cognito']
  },
  {
    id: '6',
    slug: 'fashion-app',
    title: 'Vogue AR Try-On',
    category: 'App',
    image: 'https://picsum.photos/800/600?random=6',
    client: 'Vogue Styles',
    description: 'Augmented reality app allowing users to try on glasses virtualy.',
    challenge: 'Real-time face tracking and model rendering.',
    solution: 'Leveraged native ARKit/ARCore through React Native bridges.',
    techStack: ['React Native', 'ARKit', 'Node.js']
  },
   {
    id: '7',
    slug: 'crypto-exchange',
    title: 'BitFlow Exchange',
    category: 'Website',
    image: 'https://picsum.photos/800/600?random=7',
    client: 'BitFlow',
    description: 'A secure and fast cryptocurrency exchange landing page.',
    challenge: 'Trust and speed were the primary design drivers.',
    solution: 'Designed a dark-mode first, high-contrast UI with real-time ticker widgets.',
    techStack: ['Next.js', 'Tailwind', 'Framer Motion']
  },
  {
    id: '8',
    slug: 'estate-crm',
    title: 'RealtyPro CRM',
    category: 'Portal',
    image: 'https://picsum.photos/800/600?random=8',
    client: 'RealtyPro',
    description: 'Internal CRM for a large real estate agency.',
    challenge: 'Complex data relationships and calendar management.',
    solution: 'Custom CRM built with React Query and extensive caching strategies.',
    techStack: ['React', 'React Query', 'PostgreSQL']
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'future-of-web-2024',
    title: 'The Future of Web Development in 2024',
    excerpt: 'Explore the emerging trends, from AI-driven coding to edge computing.',
    date: 'Oct 15, 2023',
    readTime: '5 min read',
    image: 'https://picsum.photos/800/400?random=10'
  },
  {
    id: '2',
    slug: 'why-headless-cms',
    title: 'Why Headless CMS is Winning',
    excerpt: 'Decoupling your backend content from your frontend presentation is the way forward.',
    date: 'Nov 02, 2023',
    readTime: '4 min read',
    image: 'https://picsum.photos/800/400?random=11'
  },
  {
    id: '3',
    slug: 'react-server-components',
    title: 'Understanding React Server Components',
    excerpt: 'A deep dive into how RSCs are changing the React ecosystem.',
    date: 'Nov 20, 2023',
    readTime: '8 min read',
    image: 'https://picsum.photos/800/400?random=12'
  }
];

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Aman',
    role: 'Founder & CTO',
    bio: 'Full Stack expert specializing in AI integration and scalable architectures. 10+ years of experience building for the web.',
    image: 'https://picsum.photos/200/200?random=20'
  },
  {
    id: '2',
    name: 'Sarah',
    role: 'Co-Founder & Design Lead',
    bio: 'Award-winning UI/UX designer with a passion for mobile experiences and accessible design systems.',
    image: 'https://picsum.photos/200/200?random=21'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'John Doe',
    role: 'CEO',
    company: 'TechStart Inc',
    content: "Floxenta transformed our digital presence. The new platform is 3x faster and our conversion rate doubled.",
    avatar: 'https://picsum.photos/100/100?random=30'
  },
  {
    id: '2',
    name: 'Jane Smith',
    role: 'Marketing Director',
    company: 'Growth Co.',
    content: "Professional, timely, and incredibly skilled. They didn't just build what we asked for, they built what we needed.",
    avatar: 'https://picsum.photos/100/100?random=31'
  }
];