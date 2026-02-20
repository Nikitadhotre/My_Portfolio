import { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react';


const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = ['Full Stack Developer','Software Engineer', 'Frontend Developer', 'Backend Developer' , 'Data Analyst Enthusiast'];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, phrases]);

  const scrollToContact = (e) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-cyan-900/20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="text-center">
          

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
            Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Nikita Dhotre</span>
          </h1>

          <div className="text-2xl md:text-4xl mb-8 text-gray-700 dark:text-gray-300 h-12">
            <span className="font-semibold">{text}</span>
            <span className="animate-pulse">|</span>
          </div>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Crafting beautiful, functional, and user-friendly digital experiences with modern technologies and best practices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="https://drive.google.com/file/d/1jbmn6tTRbZhp0DXPJH5RwU7Nq1VqCSji/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 justify-center"
            >
              Download Resume
              <FileText className="w-6 h-6" />
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            className="px-8 py-4 border-2 border-blue-600 dark:border-cyan-400 text-blue-600 dark:text-cyan-400 rounded-full font-semibold hover:bg-blue-600 dark:hover:bg-cyan-400 hover:text-white dark:hover:text-gray-900 transition-all duration-300 dark:bg-gray-800 dark:text-cyan-400"
            >
              View Projects
            </a>
            <a
              href="#contact"
              onClick={scrollToContact}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Get In Touch
            </a>
            
          </div>

          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com/Nikitadhotre"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-blue-600 dark:hover:bg-cyan-400 hover:text-white dark:text-white hover:dark:text-white transition-all duration-300 transform hover:-translate-y-1"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/nikitadhotre/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-blue-600 dark:hover:bg-cyan-400 hover:text-white dark:text-white hover:dark:text-white transition-all duration-300 transform hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:nikitadhotre1704@gmail.com"
              className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-blue-600 dark:hover:bg-cyan-400 hover:text-white dark:text-white hover:dark:text-white transition-all duration-300 transform hover:-translate-y-1"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-8 h-8 text-gray-600 dark:text-gray-400" />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
