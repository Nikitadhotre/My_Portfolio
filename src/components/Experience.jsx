import { ExternalLink } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Experience = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const timeline = [
    {
      type: 'work',
      title: 'Full Stack Developer Intern',
      organization: 'FarmsEasy',
      period: 'Oct 2025 – Present',
      description:
        'Contributing to web application development by working on backend logic, API integration, database operations, and responsive frontend components while collaborating with the team using version control and API testing tools.',
      achievements: [
        'Developed and maintained 20+ RESTful APIs following MVC architecture',
        'Designed and optimized PostgreSQL schemas using efficient query structures to improve performance',
        'Implemented secure JWT-based authentication and role-based authorization middleware',
        'Handled asynchronous operations using async/await with structured error handling',
        'Tested and validated APIs using Postman to ensure reliability and performance',
        'Collaborated in Agile sprints and managed version control using Git and GitHub',
      ],
    },
    {
      type: 'education',
      title: 'B.Tech Computer Science & Engineering',
      organization:
        'Deogiri Institute of Engineering and Management Studies, Chh. Sambhajinagar, Maharashtra [DIEMS]',
      period: 'Nov 2022 – 2026',
      description:
        'Pursuing B.Tech in Computer Science with a strong foundation in DBMS, Operating Systems, Computer Networks, and software development principles.',
      achievements: ['CGPA: 6.5/10'],
    },
    {
      type: 'education',
      title: 'HSC Science (Computer Science)',
      organization: 'Deogiri College, Chh. Sambhajinagar, Maharashtra',
      period: 'Sep 2020 – Mar 2022',
      description:
        'Completed Higher Secondary Education in Science with Computer Science, building strong fundamentals in programming, mathematics, and analytical thinking.',
      achievements: ['Percentage: 81.67%'],
    },
    {
      type: 'education',
      title: 'SSC',
      organization:
        'Gajanan Bahuuddeshiya School, Chh. Sambhajinagar, Maharashtra',
      period: 'Jun 2019 – Mar 2020',
      description:
        'Completed Secondary School Certificate with strong academic performance and a solid foundation in mathematics and science.',
      achievements: ['Percentage: 85.60%'],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-cyan-900/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Experience &{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Education
            </span>
          </h2>

          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            My professional journey and educational background
          </p>

          {/* Timeline Container */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-cyan-500 to-cyan-600"></div>

            {timeline.map((item, index) => (
              <div
                key={index}
                className="relative pl-12 md:pl-16 mb-12 last:mb-0"
              >
                {/* Dot */}
                <div className="absolute left-2 md:left-4 top-2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 shadow-lg z-10">
                  <div className="absolute inset-0 rounded-full bg-white animate-pulse"></div>
                </div>

                {/* Card */}
                <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-cyan-500/20 p-6 transform hover:-translate-y-1 transition-all duration-300 ease-out">
                  
                  {/* Badge */}
                  <span
                    className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-2 border ${
                      item.type === 'work'
                        ? 'bg-gradient-to-r from-blue-600/10 to-cyan-600/10 text-blue-600 dark:text-cyan-400 border-blue-600/20 dark:border-cyan-400/20'
                        : 'bg-gradient-to-r from-purple-600/10 to-pink-600/10 text-purple-600 dark:text-pink-400 border-purple-600/20 dark:border-pink-400/20'
                    }`}
                  >
                    {item.type === 'work'
                      ? 'Work Experience'
                      : 'Education'}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>

                  {/* Organization */}
                  <p
                    className={`font-semibold mt-1 text-sm ${
                      item.type === 'work'
                        ? 'text-blue-600 dark:text-cyan-400'
                        : 'text-purple-600 dark:text-pink-400'
                    }`}
                  >
                    {item.organization}
                  </p>

                  {/* Period */}
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1 mb-4">
                    📅 {item.period}
                  </div>

                  {/* Description */}
                  {item.description && (
                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  )}

                  {/* Achievements */}
                  <ul className="space-y-2">
                    {item.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-sm"
                      >
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 mt-2"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Optional External Link */}
                  {item.website && (
                    <a
                      href={item.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-3 text-blue-600 dark:text-cyan-400 font-semibold text-sm hover:text-blue-800 dark:hover:text-cyan-600 transition-colors group"
                    >
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      <span>Learn more</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;