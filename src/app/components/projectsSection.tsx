import MarqueeWithLogos from './ui/marqueeWithLogos';
import ProjectList from './projectsList';

type Project = {
  id: number;
  name: string;
  description: string;
  shortDescription: string;
  technologies: string[];
  repoLink: string;
  videoUrl: string;
  imagesUrls: string[];
};

const projects: Project[] = [
  {
    id: 1,
    name: 'GalenOS',
    description:
      'A medical AI system that analyzes thoracic X-rays to detect pulmonary diseases using a convolutional neural network. Built with a Django backend and TensorFlow model for classification, integrated into a React-based interface.',
    shortDescription: '',
    technologies: ['React', 'Django', 'TensorFlow', 'PostgreSQL'],
    repoLink: 'https://github.com/MauriJC/galenos',
    videoUrl: '/images/projects/Video1.mp4',
    imagesUrls: [
      '/images/projects/galenos/galenos4.webp',
      '/images/projects/galenos/Galenos1.webp',
      '/images/projects/galenos/galenos2.webp',
      '/images/projects/galenos/Galenos3.webp',
      '/images/projects/galenos/Galenos5.webp',
      '/images/projects/galenos/galenos6.webp',
    ],
  },
  {
    id: 2,
    name: 'Claims and installations management system',
    description:
      'A custom CRM for a telecommunications company to manage client claims and installation requests. Built with React.js (frontend), Expo (mobile frontend), Express (backend), and PostgreSQL, it improves task tracking and team coordination.',
    shortDescription: '',
    technologies: ['React', 'Express', 'Expo (Mobile)', 'PostgreSQL', 'Material UI'],
    repoLink: 'https://github.com/MauriJC/frontend-reclamos-telefonica',
    videoUrl: '',
    imagesUrls: [
      '/images/projects/claims/1.webp',
      '/images/projects/claims/2.webp',
      '/images/projects/claims/3.webp',
      '/images/projects/claims/4.webp',
      '/images/projects/claims/5.webp',
      '/images/projects/claims/6.webp',
      '/images/projects/claims/7.webp',
      '/images/projects/claims/8.webp',
    ],
  },
  {
    id: 3,
    name: 'PCN - programa con nosotros',
    description:
      'Connect, learn, and grow with top software engineers. Share knowledge, exchange experiences, and build meaningful connections in the world of programming! This is the PCN(programa con nosotros) slogan. I worked as collaborator for this open source project.',
    shortDescription: '',
    technologies: [
      'Next.js',
      'TypeScript',
      'TailwindCSS',
      'PostgreSQL',
      'Shadcn UI',
      'Prisma',
      'zod',
      'Docker',
    ],
    repoLink: 'https://github.com/MauriJC/pcn-website/tree/main',
    videoUrl: '',
    imagesUrls: [
      '/images/projects/pcn/pcn.webp',
      '/images/projects/pcn/pcn2.webp',
      '/images/projects/pcn/pcn3.webp',
    ],
  },
  {
    id: 4,
    name: 'Gym Clients management system ',
    description:
      'A lightweight CRM built for a local gym to manage client data and subscription statuses. Developed with Django and SQLite, featuring a simple UI with HTML/CSS and JavaScript.',
    shortDescription: '',
    technologies: ['Django', 'Javascript', 'SQLite', 'API Rest'],
    repoLink: 'https://github.com/MauriJC/gimsa',
    videoUrl: '',
    imagesUrls: [
      '/images/projects/gim/1.webp',
      '/images/projects/gim/2.webp',
      '/images/projects/gim/3.webp',
      '/images/projects/gim/4.webp',
    ],
  },
  {
    id: 5,
    name: 'ASZ-Software home page',
    description:
      'A marketing site for ASZ-Software with integrated user authentication and article bookmarking. Built using Next.js and PostgreSQL, styled with Tailwind and ShadCN UI.',
    shortDescription: '',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind', 'Shadcn', 'zod', 'Prisma'],
    repoLink: 'https://www.asz-studio.com/',
    videoUrl: '',
    imagesUrls: ['/images/projects/asz/asz.webp'],
  },
  /*   {
    id: 6,
    name: 'What the food?',
    description:
      'A recipe-sharing and food discovery platform. Built with a Nest.js backend and React frontend styled with Tailwind and ShadCN UI. Includes user auth, recipe browsing, and bookmarking.',
    shortDescription: '',
    technologies: ['Nest', 'React', 'Tailwind', 'ShadCN'],
    repoLink: '',
    videoUrl: '',
    imagesUrls: ['/images/background.png'],
  }, */
];

const ProjectsSection = () => {
  return (
    <section className="relative z-30 flex h-[150vh] w-full flex-col" id="projects">
      <div className="h-screen">
        <h2 className="text-center text-[clamp(2rem,10vw,4rem)] text-white">Projects</h2>
        <div className="flex flex-row justify-between gap-4">
          <ProjectList projects={projects} />
        </div>
      </div>

      <MarqueeWithLogos />
    </section>
  );
};

export default ProjectsSection;
