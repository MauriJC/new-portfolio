'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { DownloadLogo, EmailLogo, GitHubLogo, LinkedInLogo } from './ui/logos';

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-transparent-to-b relative z-30 flex h-screen items-center justify-center px-6 py-20 text-white"
    >
      <div className="mx-auto max-w-xl text-center">
        <h2 className="mb-10 text-center text-6xl font-bold">Contact</h2>
        <motion.h2
          className="mb-4 text-4xl font-bold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Let&apos;s Work Together
        </motion.h2>

        <motion.p
          className="mb-8 text-gray-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          I&apos;m currently open to work opportunities — whether it&apos;s a full-time role,
          freelance collaboration or just a chat about tech.
        </motion.p>

        <motion.div
          className="flex flex-col items-center justify-around gap-6 sm:flex-row"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <a href="mailto:xaviermauricio33@gmail.com">
            <EmailLogo className="h-10 transition hover:scale-115" />
          </a>

          <Link
            href="/CV Chaile Mauricio Javier - Developer.pdf"
            className="flex flex-col items-center justify-center gap-2 rounded-lg px-6 py-3 font-bold transition hover:scale-105 hover:bg-[#ffffff4d]"
            target="_blank"
          >
            Download CV
            <DownloadLogo className="h-10" />
          </Link>

          <a
            href="https://www.linkedin.com/in/mauriciojavierchaile"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <LinkedInLogo className="h-10 transition hover:scale-115"></LinkedInLogo>
          </a>

          <a
            href="https://github.com/MauriJC"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <GitHubLogo className="h-10 transition hover:scale-115"></GitHubLogo>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
