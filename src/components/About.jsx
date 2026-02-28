import { Code2, Palette, Zap, Award } from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useTheme } from "../hooks/useTheme";
import AnimatedBackground from "./AnimatedBackground";

const About = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const { theme } = useTheme();

  return (
    <section id="about" className="py-12 bg-white dark:bg-gray-900 relative overflow-hidden">
      <AnimatedBackground theme={theme} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 mb-12 md:mb-16">
{/* Image Section */}
            <div className="mb-6 sm:mb-8 relative flex flex-col justify-center items-center">
              <div 
                className="w-48 sm:w-56 md:w-64 lg:w-80 h-48 sm:h-56 md:h-64 lg:h-80 rounded-full border-4 border-blue-600 dark:border-cyan-400 shadow-2xl transform hover:scale-105 transition-transform duration-300 flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: '#ffffff !important' }}
              >
                {/* Inner solid background to prevent transparency */}
                <div 
                  className="w-full h-full flex items-center justify-center"
                  style={{ backgroundColor: '#ffffff !important' }}
                >
                  <img
                    src="/Nikita_Dhotre.jpg"
                    alt="Nikita Dhotre Profile"
                    className="w-full h-full object-cover"
                    style={{ opacity: 1 }}
                  />
                </div>

              </div>
            </div>

            {/* Text Section */}
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
                I am currently seeking an entry-level Software Developer role
                where I can contribute to meaningful applications, collaborate
                with a team, and continue growing as a developer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;