import {
  ReactLogo,
  TailwindLogo,
  NextjsLogo,
  JSLogo,
  TSLogo,
  NodeLogo,
  PostgreSQLLogo,
  PrismaLogo,
  DjangoLogo,
  GitLogo,
  ExpressLogo,
  NestLogo,
} from './logos';

interface Technology {
  name: string;
  Logo: React.FC<React.SVGProps<SVGSVGElement>>;
}

// Array de tecnologías
const technologies: Technology[] = [
  { name: 'React', Logo: ReactLogo },
  { name: 'TailwindCSS', Logo: TailwindLogo },
  { name: 'Next.js', Logo: NextjsLogo },
  { name: 'JavaScript', Logo: JSLogo },
  { name: 'TypeScript', Logo: TSLogo },
  { name: 'Node.js', Logo: NodeLogo },
  { name: 'PostgreSQL', Logo: PostgreSQLLogo },
  { name: 'Prisma', Logo: PrismaLogo },
  { name: 'Django', Logo: DjangoLogo },
  { name: 'Git', Logo: GitLogo },
  { name: 'Express', Logo: ExpressLogo },
  { name: 'Nest', Logo: NestLogo },
];

const MarqueeWithLogos: React.FC = () => {
  return (
    <div className="marquee relative z-30 flex h-[50vh] flex-col items-center gap-4 md:text-xl">
      <h2>Technologies I use</h2>
      <div
        className="marquee-track"
        style={{ '--num-items': technologies.length * 2 } as React.CSSProperties}
      >
        {[...technologies, ...technologies].map((tech, idx) => (
          <div key={idx} className="marquee-item flex flex-col gap-4">
            <p className="text-xs font-bold lg:text-base">{tech.name}</p>
            <tech.Logo />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeWithLogos;
