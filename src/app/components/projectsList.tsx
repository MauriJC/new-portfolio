'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

export default function ProjectList({ projects }: { projects: Project[] }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleClose = () => setSelectedProject(null);

  const mid = Math.ceil(projects.length / 2);
  const firstHalf = projects.slice(0, mid);
  const secondHalf = projects.slice(mid);
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((prev) => (prev === selectedProject.imagesUrls.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? selectedProject.imagesUrls.length - 1 : prev - 1));
  };

  useEffect(() => {
    setCurrentImage(0);
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProject]);

  const renderProjects = (projectsList: Project[]) => {
    return projectsList.map((project) => (
      <motion.li
        key={project.id}
        className="cursor-pointer border-b p-2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ x: 10 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.3, once: true }}
        onClick={() => setSelectedProject(project)}
      >
        {project.name}
      </motion.li>
    ));
  };

  return (
    <>
      <div className="mt-15 h-[80vh] w-[45%] font-[neue-medium] md:text-4xl">
        <ul className="flex h-full flex-col justify-around">{renderProjects(firstHalf)}</ul>
      </div>

      <div className="mt-15 h-[80vh] w-[45%] font-[neue-medium] md:text-4xl">
        <ul className="flex h-full flex-col justify-around">{renderProjects(secondHalf)}</ul>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <motion.div
              className="w-full max-w-lg rounded-lg border border-[rgba(245,238,230,0.5)] p-6 shadow-lg backdrop-blur-sm"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="mb-4 text-2xl font-bold">{selectedProject.name}</h2>
              <div className="relative mb-4 h-48 w-full">
                <motion.img
                  key={selectedProject.imagesUrls[currentImage]}
                  src={selectedProject.imagesUrls[currentImage]}
                  alt={`Image ${currentImage + 1}`}
                  className="h-full w-full rounded object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
                <button
                  onClick={handlePrev}
                  className="bg-opacity-30 absolute top-1/2 left-2 -translate-y-1/2 rounded bg-black px-2 py-1 text-white"
                >
                  ‹
                </button>
                <button
                  onClick={handleNext}
                  className="bg-opacity-30 absolute top-1/2 right-2 -translate-y-1/2 rounded bg-black px-2 py-1 text-white"
                >
                  ›
                </button>
              </div>

              <p className="mb-4">{selectedProject.description}</p>
              <p>Technologies applied:</p>
              <div className="mt-2 mb-2 flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded border border-[rgba(245,238,230,0.5)] bg-transparent px-2 py-1 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p>
                Want to see the code? Check the repo here! =&gt;{' '}
                <a
                  href={selectedProject.repoLink}
                  target="blank_"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Repo here!
                </a>
              </p>

              <button
                onClick={handleClose}
                className="mt-6 rounded border border-[rgba(245,238,230,0.5)] bg-transparent px-4 py-2 text-white hover:bg-[rgba(245,238,230,0.5)]"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
