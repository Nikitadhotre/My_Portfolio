import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const sampleProjects = [
{
  id: 1,
  title: 'CaseMate',
  description:
    'A responsive web application for managing and tracking case-related information with a clean UI, dynamic components, and structured data handling.',
  image_url: '/CaseMate_image.png',
  tech_stack: ['React', 'Tailwind CSS', 'JavaScript'],
  github_url: 'https://github.com/username/portfolio',
  live_url: 'https://username.github.io/portfolio',
},
{
  id: 2,
  title: 'Portfolio',
  description:
    'A personal developer portfolio built with a modern UI, dark/light theme, animated sections, and optimized component-based architecture to showcase projects and technical skills.',
  image_url: '/Portfolio_image.png',
  tech_stack: ['React', 'Tailwind CSS', 'JavaScript'],
  github_url: 'https://github.com/Nikitadhotre/My_Portfolio.git',
  live_url: 'https://ecommerce-store.example.com',
},
{
  id: 3,
  title: 'Arogyapath',
  description:
    'A health management system that tracks vaccination records, provides automated reminders, supports doctor verification, and includes role-based authentication with secure data handling.',
  image_url: '/Arogyapath_image.png',
  tech_stack: ['React', 'Node.js', 'Express', 'MongoDB'],
  github_url: 'https://github.com/username/ecommerce-store',
  live_url: 'https://ecommerce-store.example.com',
},
{
  id: 4,
  title: 'Career Guide',
  description:
    'A career guidance platform that helps users explore career paths, view structured information, and access resources through an intuitive and responsive interface.',
  image_url: '/Career_Guidance_image.png',
  tech_stack: ['React', 'Node.js', 'Express', 'MongoDB'],
  github_url: 'https://github.com/username/ecommerce-store',
  live_url: 'https://ecommerce-store.example.com',
},
{
  id: 5,
  title: 'Nourish Together',
  description:
    'A community-driven web platform designed to connect food donors with people in need, featuring structured data management and a user-friendly interface for resource sharing.',
  image_url: '/Nourish_Together_image.png',
  tech_stack: ['React', 'Node.js', 'Express', 'MongoDB'],
  github_url: 'https://github.com/Nikitadhotre/Nourish_Together.git',
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

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
           {sampleProjects.map((project, index) => (
             <div
               key={project.id}
               className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-cyan-500/30 transform hover:-translate-y-2 transition-all duration-300 ease-out"
               style={{ animationDelay: `${index * 100}ms` }}
             >
              <div className="relative h-48 sm:h-52 md:h-58 overflow-hidden">
                 <img
                   src={project.image_url}
                   alt={project.title}
                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></div>
               </div>

               <div className="p-6">
                 <div className="flex items-center justify-between mb-3">
                   <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                     {project.title}
                   </h3>
                   <div className="flex gap-2">
                     {project.github_url && (
                       <a
                         href={project.github_url}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="p-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                       >
                         <Github className="w-5 h-5" />
                       </a>
                     )}
                     {project.live_url && (
                       <a
                         href={project.live_url}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="p-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                       >
                         <ExternalLink className="w-5 h-5" />
                       </a>
                     )}
                   </div>
                 </div>
                 <p className="text-gray-600 text-xs dark:text-gray-400 mb-4">
                   {project.description}
                 </p>

                 <div className="flex flex-wrap gap-2">
                   {project.tech_stack?.map((tech, techIndex) => (
                     <span
                       key={techIndex}
                       className="px-3 py-1 text-xs bg-gradient-to-r from-blue-600/10 to-cyan-600/10 dark:from-blue-400/20 dark:to-cyan-400/20 border border-blue-600/20 dark:border-cyan-400/20 rounded-md text-gray-800 dark:text-gray-200"
                     >
                       {tech}
                     </span>
                   ))}
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
