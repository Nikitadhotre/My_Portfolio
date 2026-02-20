import { Briefcase, GraduationCap, ExternalLink } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Experience = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const timeline = [
    {
      type: 'work',
      title: 'Full Stack Developer Intern',
      organization: 'FarmsEasy',
      period: 'Oct 2025 - Present',
      description: 'Developed custom web solutions for clients across various industries. Collaborated with designers and project managers.',
      achievements: [
        'Delivered 20+ client projects',
        'Increased client satisfaction by 30%',
        'Implemented responsive designs',
      ],
      website: 'https://farmseasy.in/',
      logo: '/logos/farmseasy_logo.png'
    },
    {
      type: 'education',
      title: 'B.Tech Computer Science & Engineering',
      organization: 'Deogiri Institute of Engineering and Management Studies, Chh. Sambhajinagar, Maharashtra [DIEMS]',
      period: 'Nov 2022 - 2026',
      description: 'Graduated with honors. Focused on software engineering and web development.',
      achievements: [
        'CGPA: 6.5/10',
      ],
      website: 'https://www.dietms.org/',
      logo: '/diems_logo.bmp'
    },
    {
      type: 'education',
      title: 'HSC Science (Computer Science)',
      organization: 'Deogiri College, Chh. Sambhajinagar, Maharashtra',
      period: 'September 2020 - March 2022',
      description: 'Started career while studying. Worked on various startup projects and learned industry best practices.',
      achievements: [
        'Percentage: 81.67%',
      ],
      website: 'https://deogiricollege.org/',
      logo: '/Public/dc_logo.png'
    },
    {
      type: 'education',
      title: 'SSC',
      organization: 'Gajanan Bahuuddeshiya School, Chh. Sambhajinagar, Maharashtra',
      period: 'June 2019 – March 2020',
      description: 'Started career while studying. Worked on various startup projects and learned industry best practices.',
      achievements: [
        'Percentage: 85.60%',
      ],
      // website: 'https://deogiricollege.org/',
      // logo: '/Public/dc_logo.png'
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-cyan-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Experience & <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            My professional journey and educational background
          </p>

          <div className="relative flex flex-col items-center space-y-12">
            <div className="absolute left-60 top-10 w-0.5 h-[calc(100%-2.5rem)] bg-gradient-to-b from-blue-600 to-cyan-600"></div>

            {timeline.map((item, index) => {
              const Icon = item.type === 'work' ? Briefcase : GraduationCap;

              return (
                <div
                  key={index}
                  className="relative flex items-center justify-start w-full max-w-4xl ml-20"
                >
                  {/* Left side: rounded icon box without timeline line behind */}
                  <div className="flex-shrink-0 w-20 h-20 rounded-full shadow-lg flex items-center justify-center mr-8
                    bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-600 dark:to-cyan-600 z-10">
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Right side: content area */}
                  <div
                    className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md p-6
                      flex flex-col w-full"
                  >
                    {item.type === 'education' ? (
                      <>
                        <p className="text-blue-600 dark:text-cyan-400 font-semibold text-xl mb-1 flex items-center gap-2">
                          {item.organization}
                        </p>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                      </>
                    ) : (
                      <>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 flex items-center gap-2">
                          {item.title}
                        </h3>
                        <p className="text-blue-600 dark:text-cyan-400 font-semibold mb-1">{item.organization}</p>
                      </>
                    )}
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">{item.period}</span>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 text-sm mb-4">
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                    {item.website && (
                      <a
                        href={item.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center mt-3 text-indigo-600 dark:text-indigo-400 font-semibold text-sm hover:text-indigo-800 dark:hover:text-indigo-600 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
