
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-navy text-white py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-portfolio-light">
              &copy; {currentYear} Moch. Iqbal Rosyidi. All Rights Reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="https://github.com/arrosyid" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-portfolio-light hover:text-portfolio-secondary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/iqbal-ocid/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-portfolio-light hover:text-portfolio-secondary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:iqbal.rosyidi.32@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-portfolio-light hover:text-portfolio-secondary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <a 
            href="#top" 
            className="hidden md:flex items-center justify-center w-10 h-10 bg-portfolio-secondary text-white rounded-full hover:bg-white hover:text-portfolio-secondary transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </a>
        </div>
        
        <div className="md:hidden mt-6 flex justify-center">
          <a 
            href="#top" 
            className="flex items-center justify-center w-10 h-10 bg-portfolio-secondary text-white rounded-full hover:bg-white hover:text-portfolio-secondary transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
