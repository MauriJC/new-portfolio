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
      'A system made to identify different pulmonar diseases through the analysis of toraxic radiographies using a convolutional neural network',
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
      'A CRM system developed to manage claims and installation requests for a telecommunications cooperative, utilizing technologies like React.js, Express, and PostgreSQL to streamline task management and improve operational efficiency.',
    shortDescription: '',
    technologies: ['Express', 'React', 'Expo', 'Material UI', 'PostgreSQL'],
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
    technologies: ['Next', 'TailwindCSS', 'PosrgreSQL', 'Shadcn UI'],
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
    description: 'A client CRM made for a local gym to manage their clients subscriptions.',
    shortDescription: '',
    technologies: ['Django', 'HTML', 'CSS', 'Javascript'],
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
    name: 'What the food?',
    description: '',
    shortDescription: '',
    technologies: ['Nest', 'React', 'Tailwind', 'ShadCN'],
    repoLink: '',
    videoUrl: '',
    imagesUrls: ['/images/background.png'],
  },
  {
    id: 6,
    name: 'ASZ-Software home page',
    description: 'Landing page for ASZ-Software',
    shortDescription: '',
    technologies: ['Next.js', 'PostgreSQL', 'Tailwind', 'Shadcn'],
    repoLink: 'https://www.asz-studio.com/',
    videoUrl: '',
    imagesUrls: ['/images/projects/asz/asz.webp'],
  },
];

const ProjectsSection = () => {
  /* Que proyectos pongo: galenos, PCN, ASZ?, Telefonica => front + back + mobile, sistema del gimnasio?*/
  return (
    <section className="relative z-30 flex h-screen w-full flex-wrap justify-around" id="projects">
      <div className="mt-20 w-full">
        <h2 className="text-center text-5xl text-white">Projects</h2>
      </div>
      <ProjectList projects={projects} />
      <MarqueeWithLogos />
    </section>
  );
};

export default ProjectsSection;
