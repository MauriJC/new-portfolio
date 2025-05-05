import { motion } from 'framer-motion';

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative z-10 mx-auto h-screen max-w-5xl px-4 py-16">
      <h2 className="mb-10 text-center text-3xl font-bold">Work Experience</h2>

      <div className="space-y-5">
        {/* ASZ Software */}
        <motion.div
          className="cursor-pointer"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ x: 10 }}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 0.3, once: true }}
        >
          <h3 className="text-xl font-semibold">ASZ Software</h3>
          <p className="mb-2 text-sm text-gray-500">Fullstack Developer · Jan 2025 - Present</p>
          <p className="mb-1">
            <strong>Technologies:</strong> Next.js · TailwindCSS · PostgreSQL · Shadcn UI
          </p>
          <p>
            I built the landing page and core authentication features for a software startup. This
            included user registration, login, and the ability to save favorite articles to a
            PostgreSQL database.
          </p>
        </motion.div>

        {/* PCN */}
        <motion.div
          className="cursor-pointer"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ x: 10 }}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 0.3, once: true }}
        >
          <h3 className="text-xl font-semibold">PCN - Programa con Nosotros</h3>
          <p className="mb-2 text-sm text-gray-500">Open Source Contributor · Nov 2024 - Present</p>
          <p className="mb-1">
            <strong>Technologies:</strong> Next.js · TailwindCSS · PostgreSQL · Shadcn UI
          </p>
          <p>
            Contributed to the development of the official website for this programming community.
            Focused on UI components and best practices for collaborative open-source development.
          </p>
        </motion.div>

        {/* Cooperative Project */}
        <motion.div
          className="cursor-pointer"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ x: 10 }}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 0.3, once: true }}
        >
          <h3 className="text-xl font-semibold">Telecommunications Cooperative</h3>
          <p className="mb-2 text-sm text-gray-500">
            Fullstack Developer (Freelance Project) · 2024
          </p>
          <p className="mb-1">
            <strong>Technologies:</strong> React · Express.js · PostgreSQL · Expo · Material UI
          </p>
          <p>
            Designed and developed an internal CRM to manage customer claims and installation
            requests. Built a responsive web app and synchronized mobile app with real-time data
            handling.
          </p>
        </motion.div>

        {/* GIMSA */}
        {/* <motion.div
          className="cursor-pointer"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ x: 10 }}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 0.3, once: true }}
        >
          <h3 className="text-xl font-semibold">GIMSA (Local Gym)</h3>
          <p className="mb-2 text-sm text-gray-500">Backend and Frontend Developer · 2022</p>
          <p className="mb-1">
            <strong>Technologies:</strong> Django · SQLite · HTML · CSS · JavaScript
          </p>
          <p>
            Developed a custom CRM to manage gym memberships and subscriptions. It included
            registration, client tracking, and payment history. This was my first live production
            project.
          </p>
        </motion.div> */}

        <motion.div
          className="cursor-pointer"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ x: 10 }}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 0.3, once: true }}
        >
          <h3 className="text-xl font-semibold">Sovos</h3>
          <p className="mb-2 text-sm text-gray-500">QA Engineer Intern · 2022</p>
          <p className="mb-1">
            <strong>Technologies:</strong> Cypress · Jira · Zephyr · Manual/Automated Testing ·
            React
          </p>
          <p>
            Contributed to software quality assurance by designing and executing both manual and
            automated tests using Cypress. Created comprehensive test suites and documented test
            cases in Jira with the Zephyr plugin. Collaborated closely with developers to ensure
            front-end features built in React met functionality and reliability standards.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
