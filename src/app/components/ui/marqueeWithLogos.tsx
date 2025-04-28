import {
    ReactLogo, TailwindLogo, NextjsLogo, JSLogo, TSLogo, NodeLogo, PostgreSQLLogo, PrismaLogo, DjangoLogo, GitLogo
} from './logos';

interface Technology {
    name: string;
    Logo: React.FC<React.SVGProps<SVGSVGElement>>;
}

// Array de tecnologías
const technologies: Technology[] = [
    { name: "React", Logo: ReactLogo },
    { name: "TailwindCSS", Logo: TailwindLogo },
    { name: "Next.js", Logo: NextjsLogo },
    { name: "JavaScript", Logo: JSLogo },
    { name: "TypeScript", Logo: TSLogo },
    { name: "Node.js", Logo: NodeLogo },
    { name: "PostgreSQL", Logo: PostgreSQLLogo },
    { name: "Prisma", Logo: PrismaLogo },
    { name: "Django", Logo: DjangoLogo },
    { name: "Git", Logo: GitLogo },
];

const MarqueeWithLogos: React.FC = () => {
    return (
        <div className="marquee">
            <div
                className="marquee-track"
                style={{ '--num-items': technologies.length * 2 } as React.CSSProperties}
            >
                {[...technologies, ...technologies].map((tech, idx) => (
                    <div key={idx} className="marquee-item flex flex-col gap-4">
                        <p className="font-bold text-xs lg:text-base">{tech.name}</p>
                        <tech.Logo />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MarqueeWithLogos;
