import { Code2, Palette, Zap, Award } from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const About = () => {
  const [ref, isVisible] = useIntersectionObserver();

  /* const stats = [
    { icon: Code2, label: 'Years Experience', value: '5+' },
    { icon: Award, label: 'Projects Completed', value: '50+' },
    { icon: Zap, label: 'Technologies', value: '20+' },
    { icon: Palette, label: 'Happy Clients', value: '30+' },
  ]; */

  // const skills = [
  //   "JavaScript",
  //   "React",
  //   "Node.js",
  //   "Express",
  //   "MongoDB",
  //   "PostgreSQL",
  //   "Tailwind CSS",
  //   "Git",
  //   "REST APIs",
  //   "Docker",
  // ];

  return (
    <section id="about" className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          {/* <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Passionate developer dedicated to creating exceptional digital
            experiences
          </p> */}

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="mb-8 relative inline-block flex flex-col justify-center items-center">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-blue-600 dark:border-cyan-400 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/Public/Nikita_Dhotre_Passport.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                Available for work
              </div> */}
            </div>

            <div className="space-y-6">
              <p className="text-gray-600 text-sm dark:text-gray-400 leading-relaxed">
                I am a Final Year Computer Science Engineering student with a
                strong passion for full-stack web development and building
                real-world applications. I enjoy turning ideas into functional
                and user-friendly products using modern JavaScript technologies
                and structured development practices.
              </p>

              <p className="text-gray-600 text-sm dark:text-gray-400 leading-relaxed">
                I have hands-on experience with MongoDB, Express.js, React.js,
                and Node.js, building secure authentication systems, RESTful
                APIs, and responsive user interfaces using Tailwind CSS. I focus
                on writing clean, maintainable code, designing scalable backend
                architectures, and applying best practices in database design
                and API integration. I use Git for version control and Postman
                for API testing to ensure efficient and organized development
                workflows.
              </p>

              <p className="text-gray-600 text-sm dark:text-gray-400 leading-relaxed">
                I am currently seeking an entry-level Software Developer role where I can contribute to meaningful applications, collaborate with a team, and continue growing as a developer.
              </p>

              {/* <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Skills & Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 dark:from-blue-400/20 dark:to-cyan-400/20 border border-blue-600/20 dark:border-cyan-400/20 rounded-full text-gray-800 dark:text-gray-200 font-medium hover:scale-105 transition-transform duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div> */}
            </div>
          </div>

          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="inline-flex p-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
