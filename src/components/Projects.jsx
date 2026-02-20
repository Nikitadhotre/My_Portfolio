import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const sampleProjects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing my skills and projects using React and Tailwind CSS.',
    image_url: '/images/portfolio-screenshot.png',
    tech_stack: ['React', 'Tailwind CSS', 'JavaScript'],
    github_url: 'https://github.com/username/portfolio',
    live_url: 'https://username.github.io/portfolio',
  },
  {
    id: 2,
    title: 'E-commerce Store',
    description: 'A full-featured e-commerce store with shopping cart, user authentication, and payment integration.',
    image_url: '/images/ecommerce-screenshot.png',
    tech_stack: ['Next.js', 'Stripe', 'MongoDB'],
    github_url: 'https://github.com/username/ecommerce-store',
    live_url: 'https://ecommerce-store.example.com',
  },
  // Add more sample projects here
];

const Projects = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-cyan-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div
         ref={ref}
         className={`transition-all duration-1000 ${
           isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
         }`}
       >
         <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
           Featured{" "}
           <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
             Projects
           </span>
         </h2>
         <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
           Showcasing my latest work and creative solutions
         </p>

         <div className="grid md:grid-cols-2 gap-8">
           {sampleProjects.map((project, index) => (
             <div
               key={project.id}
               className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
               style={{ animationDelay: `${index * 100}ms` }}
             >
               <div className="relative h-64 overflow-hidden">
                 <img
                   src={project.image_url}
                   alt={project.title}
                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
               </div>

               <div className="p-6">
                 <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                   {project.title}
                 </h3>
                 <p className="text-gray-600 dark:text-gray-400 mb-4">
                   {project.description}
                 </p>

                 <div className="flex flex-wrap gap-2 mb-4">
                   {project.tech_stack?.map((tech, techIndex) => (
                     <span
                       key={techIndex}
                       className="px-3 py-1 text-sm bg-gradient-to-r from-blue-600/10 to-cyan-600/10 dark:from-blue-400/20 dark:to-cyan-400/20 border border-blue-600/20 dark:border-cyan-400/20 rounded-full text-gray-800 dark:text-gray-200"
                     >
                       {tech}
                     </span>
                   ))}
                 </div>

                 <div className="flex gap-4">
                   {project.github_url && (
                     <a
                       href={project.github_url}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                     >
                       <Github className="w-4 h-4" />
                       Code
                     </a>
                   )}
                   {project.live_url && (
                     <a
                       href={project.live_url}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:shadow-lg transition-shadow"
                     >
                       <ExternalLink className="w-4 h-4" />
                       Live Demo
                     </a>
                   )}
                 </div>
               </div>
             </div>
           ))}
         </div>
       </div>
      </div>
    </section>
  );
};

export default Projects;
