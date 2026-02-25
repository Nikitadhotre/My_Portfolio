import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white py-12 relative">
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute top-20 right-8 p-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-blue-700 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Built with <Heart className="w-4 h-4 text-red-500 fill-current" /> by Nikita
          </p> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;
