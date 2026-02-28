import { Heart, ArrowUp, Github, Linkedin, Mail, FileText, Code2, Zap } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import AnimatedBackground from './AnimatedBackground';

const Footer = () => {
  const { theme } = useTheme();
  
  const scrollToTop = () => {
    document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/Nikitadhotre', icon: Github },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/nikitadhotre/', icon: Linkedin },
    { name: 'Email', href: 'mailto:nikitadhotre1704@gmail.com', icon: Mail },
    { name: 'Resume', href: 'https://drive.google.com/file/d/1Kg4HuQ2H_-C93PbKdCWtec8SzAo8UMsS/view?usp=sharing', icon: FileText },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-cyan-900/20 text-gray-900 dark:text-white py-12 relative overflow-hidden transition-colors duration-300">

      {/* Animated Background */}
      <AnimatedBackground theme={theme} />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-4 right-6 lg:right-12 p-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 z-10"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mb-6 text-center md:text-left">

          {/* Brand Section */}
          <div className="md:w-1/3">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <Code2 className="w-6 h-6 text-blue-600" />
              <span className="text-lg font-bold">Nikita Dhotre</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-xs max-w-xs mx-auto md:mx-0">
              Full Stack Developer passionate about building innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:w-1/3 text-center">
            <h3 className="text-base font-semibold mb-2 flex items-center justify-center gap-2">
              <Zap className="w-4 h-4 text-blue-600" />
              Quick Links
            </h3>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-200 text-xs"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="md:w-1/3 text-center md:text-right">
            <h3 className="text-base font-semibold mb-2">Connect With Me</h3>
            <div className="flex justify-center md:justify-end gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.name !== 'Email' ? '_blank' : '_self'}
                  rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 dark:border-white/10 pt-4">
          <div className="flex justify-center items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" /> By Nikita
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
