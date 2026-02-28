import { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import AnimatedBackground from './AnimatedBackground';


const Hero = () => {
  const { theme } = useTheme();
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

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

      setTypingSpeed(isDeleting ? 40 : 100);

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
      <AnimatedBackground theme={theme} />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        
        {/* Badge in top-right corner */}
        <div className="absolute top-24 right-8">
          <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 dark:from-blue-400/20 dark:to-cyan-400/20 border border-blue-600/20 dark:border-cyan-400/20 text-xs font-medium px-3 py-1.5 rounded-full text-gray-700 dark:text-gray-300 cursor-pointer hover:scale-105 transition-transform duration-200">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for work
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="text-center">
          

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 text-gray-900 dark:text-white">
            Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Nikita Dhotre</span>
          </h1>

          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 sm:mb-8 text-gray-700 dark:text-gray-300 h-10 sm:h-12">
            <span className="font-semibold">{text}</span>
            <span className="animate-pulse">|</span>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-4 sm:px-0">
            Crafting beautiful, functional, and user-friendly digital experiences with modern technologies and best practices.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-10 sm:mb-12">
            <a
              href="https://drive.google.com/file/d/1Kg4HuQ2H_-C93PbKdCWtec8SzAo8UMsS/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 justify-center text-sm sm:text-base"
            >
              Download Resume
              <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-600 dark:border-cyan-400 text-blue-600 dark:text-cyan-400 rounded-full font-semibold hover:bg-blue-600 dark:hover:bg-cyan-400 hover:text-white dark:hover:text-gray-900 transition-all duration-300 dark:bg-gray-800 dark:text-cyan-400 text-sm sm:text-base"
            >
              View Projects
            </a>
            <a
              href="#contact"
              onClick={scrollToContact}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base"
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
              onClick={(e) => {
                // Allow default mailto behavior - no preventDefault
                console.log('Email icon clicked, opening mail client');
              }}
              className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-blue-600 dark:hover:bg-cyan-400 hover:text-white dark:text-white dark:hover:text-white transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
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
