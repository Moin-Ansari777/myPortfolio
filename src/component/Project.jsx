import React from 'react';
import { FaShoppingCart,FaRegNewspaper,FaGithub,FaExternalLinkAlt } from 'react-icons/fa';
const projects = [
  {
    title: "E-Commerce",
    description: "A full-scale frontend storefront featuring dynamic product grids, category filtering, and a persistent shopping cart.",
    tech: ["React", "Redux Toolkit", "Tailwind", "DaisyUI", "Axios"],
    icon: <FaShoppingCart />,
    link: "#",
    badge: "API Integrated"
  },
  {
    title: "Global News",
    description: "Real-time news aggregator fetching data across various categories with search functionality and responsive reading layouts.",
    tech: ["React", "Axios", "React Router", "Tailwind"],
    icon: <FaRegNewspaper />,
    link: "#",
    badge: "Real-time"
  },
  {
    title: "Complete Shopping Site",
    description: "Enterprise-level web form with robust authentication, SQL database integration, and Bootstrap styling.",
    tech: ["Html", "SQL Database", "Bootstrap", "WebForms"],
    icon: <FaShoppingCart />,
    link: "https://github.com/Moin-Ansari777/E-commerce-Project",
    badge: "Full Stack"
  }
];

const Project = () => {
  return (
    <section id='project' className="bg-base-100 min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-base-content tracking-tight">
            Featured <span className="text-orange-600 italic">Projects</span>
          </h2>
          <div className="divider w-24 mx-auto divider-primary"></div>
          <p className="mt-4 text-lg text-base-content/70 max-w-2xl mx-auto">
            A showcase of my ability to handle complex state, external APIs, and secure data management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-300 group">
      <div className="card-body">
        <div className="flex justify-between items-start">
          <div className="p-3 bg-primary/10 text-primary rounded-xl group-hover:bg-primary group-hover:text-primary-content transition-colors">
            {project.icon}
          </div>
          <div className="badge badge-outline opacity-70">{project.badge}</div>
        </div>
        
        <h3 className="card-title mt-4 text-xl font-bold">{project.title}</h3>
        <p className="text-sm text-base-content/70 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 my-4">
          {project.tech.map((t, i) => (
            <span key={i} className="badge badge-sm badge-secondary badge-outline">{t}</span>
          ))}
        </div>

        <div className="card-actions justify-end mt-4 pt-4 border-t border-base-300">
          <button className="btn btn-ghost btn-sm btn-circle">
            <FaGithub size={18} />
          </button>
          <button className="btn bg-orange-600 btn-sm gap-2 text-white">
            View Live <FaExternalLinkAlt className='text-white' size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
