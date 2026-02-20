import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:contact@example.com', label: 'Email' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Portfolio
            </h3>
            <p className="text-gray-400 mb-4">
              Building exceptional digital experiences with modern technologies and creative solutions.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  onClick={(e) => scrollToSection(e, '#home')}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => scrollToSection(e, '#about')}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => scrollToSection(e, '#projects')}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 rounded-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:-translate-y-1"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div> */}

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Built with <Heart className="w-4 h-4 text-red-500 fill-current" /> by Nikita
          </p> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;
