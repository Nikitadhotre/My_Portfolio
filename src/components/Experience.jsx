import { ExternalLink } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Experience = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const experienceItems = [
    {
      type: 'work',
      title: 'Full Stack Developer Intern',
      organization: 'FarmsEasy',
      period: 'Oct 2025 – Present',
      achievements: [
        'Developed and maintained 20+ RESTful APIs following MVC architecture',
        'Designed and optimized PostgreSQL schemas using efficient query structures to improve performance',
        'Implemented secure JWT-based authentication and role-based authorization middleware',
        'Handled asynchronous operations using async/await with structured error handling',
        'Tested and validated APIs using Postman to ensure reliability and performance',
        'Collaborated in Agile sprints and managed version control using Git and GitHub',
      ],
    },
  ];

  const educationItems = [
    {
      type: 'education',
      title: 'B.Tech Computer Science & Engineering',
      organization:
        'Deogiri Institute of Engineering and Management Studies, Chh. Sambhajinagar, Maharashtra [DIEMS]',
      period: 'Nov 2022 – 2026',
      achievements: ['CGPA: 6.5/10'],
    },
    {
      type: 'education',
      title: 'HSC Science (Computer Science)',
      organization: 'Deogiri College, Chh. Sambhajinagar, Maharashtra',
      period: 'Sep 2020 – Mar 2022',
      achievements: ['Percentage: 81.67%'],
    },
    {
      type: 'education',
      title: 'SSC',
      organization:
        'Gajanan Bahuuddeshiya School, Chh. Sambhajinagar, Maharashtra',
      period: 'Jun 2019 – Mar 2020',
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

          {/* Experience Section */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Experience
              </span>
            </h3>

            <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
              My professional work experience
            </p>

            {/* Timeline Container - Different Layout: Cards on right side */}
            <div className="relative max-w-4xl mx-auto">

              {experienceItems.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-8 sm:pl-12 md:pl-16 mb-6 sm:mb-8 last:mb-0"
                >

                  {/* Card - Different style with left accent border */}
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg border-l-4 border-blue-500 p-5 hover:shadow-lg transition-all duration-300">
                    
                    {/* Badge - Different style: pill shape with icon */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium bg-gradient-to-r from-blue-600/20 to-cyan-600/20 text-blue-600 dark:text-cyan-400 rounded-md border border-blue-600/30 dark:border-cyan-400/30">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                        Work Experience
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>

                    {/* Organization with icon */}
                    <div className="flex items-center gap-1 mt-1 text-sm font-semibold text-blue-600 dark:text-cyan-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      {item.organization}
                    </div>

                    {/* Period with icon */}
                    <div className="flex items-center gap-1 text-sm font-medium text-gray-500 dark:text-gray-400 mt-1 mb-3">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {item.period}
                    </div>

                    {/* Achievements - Different style with checkmarks */}
                    <ul className="space-y-1.5">
                      {item.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-sm"
                        >
                          <svg className="w-4 h-4 flex-shrink-0 text-blue-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Optional External Link - Different style */}
                    {item.website && (
                      <a
                        href={item.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-3 text-blue-600 dark:text-cyan-400 font-medium text-sm hover:text-blue-800 dark:hover:text-cyan-600 transition-colors"
                      >
                        <span>Learn more</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Education
              </span>
            </h3>

            <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
              My educational background
            </p>

            {/* Timeline Container */}
            <div className="relative max-w-4xl mx-auto">
              {/* Vertical Line */}
              <div className="absolute left-3 sm:left-4 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-cyan-500 to-cyan-600"></div>

              {educationItems.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-8 sm:pl-12 md:pl-16 mb-8 sm:mb-10 md:mb-12 last:mb-0"
                >
                  {/* Dot */}
                  <div className="absolute left-1.5 sm:left-2 md:left-4 top-2 w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 shadow-lg z-10">
                    <div className="absolute inset-0 rounded-full bg-white animate-pulse"></div>
                  </div>

                  {/* Card */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-cyan-500/20 p-6 transform hover:-translate-y-1 transition-all duration-300 ease-out">
                    
                    {/* Badge */}
                    <span
                      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-2 border bg-gradient-to-r from-blue-600/10 to-cyan-600/10 text-blue-600 dark:text-cyan-400 border-blue-600/20 dark:border-cyan-400/20`}
                    >
                      Education
                    </span>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>

                    {/* Organization */}
                    <p className="font-semibold mt-1 text-sm text-blue-600 dark:text-cyan-400">
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
      </div>
    </section>
  );
};

export default Experience;