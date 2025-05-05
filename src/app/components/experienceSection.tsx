import { motion } from 'framer-motion';

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="relative z-10 mx-auto h-screen w-full max-w-5xl px-4 sm:px-6"
    >
      <h2 className="text-center text-2xl font-bold sm:text-4xl">Work Experience</h2>
      <div className="space-y-5 sm:space-y-8">
        {[
          {
            company: 'ASZ Software',
            role: 'Fullstack Developer · Jan 2025 - Present',
            technologies: 'Next.js · TailwindCSS · PostgreSQL · Shadcn UI',
            description:
              'I built the landing page and core authentication features for a software startup. This included user registration, login, and the ability to save favorite articles to a PostgreSQL database.',
          },
          {
            company: 'PCN - Programa con Nosotros',
            role: 'Open Source Contributor · Nov 2024 - Present',
            technologies: 'Next.js · TailwindCSS · PostgreSQL · Shadcn UI',
            description:
              'Contributed to the development of the official website for this programming community. Focused on UI components and best practices for collaborative open-source development.',
          },
          {
            company: 'Telecommunications Cooperative',
            role: 'Fullstack Developer (Freelance Project) · 2024',
            technologies: 'React · Express.js · PostgreSQL · Expo · Material UI',
            description:
              'Designed and developed an internal CRM to manage customer claims and installation requests. Built a responsive web app and synchronized mobile app with real-time data handling.',
          },
          {
            company: 'Sovos',
            role: 'QA Engineer Intern · 2022',
            technologies: 'Cypress · Jira · Zephyr · Manual/Automated Testing · React',
            description:
              'Contributed to software quality assurance by designing and executing both manual and automated tests using Cypress. Created comprehensive test suites and documented test cases in Jira with the Zephyr plugin. Collaborated closely with developers to ensure front-end features built in React met functionality and reliability standards.',
          },
        ].map((exp, index) => (
          <motion.div
            key={index}
            className="mt-4 cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ x: 10 }}
            transition={{ duration: 0.5 }}
            viewport={{ amount: 0.3, once: true }}
          >
            <h3 className="text-md font-semibold sm:text-xl">{exp.company}</h3>
            <p className="mb-0 text-sm text-gray-500">{exp.role}</p>
            <p className="mb-1 text-sm sm:text-base">
              <strong>Technologies:</strong> {exp.technologies}
            </p>
            <p className="text-xs sm:text-lg">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
