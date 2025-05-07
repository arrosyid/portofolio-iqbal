
import { Mail, Phone, MapPin, Github, Linkedin, BookOpen } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-heading">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-portfolio-slate mb-6">
              I'm currently open to new opportunities and would love to hear about your project. Whether you have a question or just want to say hi, I'll do my best to get back to you as soon as possible.
            </p>
            
            <div className="space-y-5">
              <a href="mailto:iqbal.rosyidi.32@gmail.com" className="flex items-center group">
                <div className="bg-portfolio-accent bg-opacity-50 p-3 rounded-full mr-4 group-hover:bg-portfolio-secondary group-hover:text-white transition-colors">
                  <Mail className="text-portfolio-navy group-hover:text-white transition-colors" size={20} />
                </div>
                <div>
                  <p className="text-sm text-portfolio-slate">Email</p>
                  <p className="text-portfolio-navy group-hover:text-portfolio-secondary transition-colors">iqbal.rosyidi.32@gmail.com</p>
                </div>
              </a>
              <div className="flex items-center">
                <div className="bg-portfolio-accent bg-opacity-50 p-3 rounded-full mr-4">
                  <MapPin className="text-portfolio-navy" size={20} />
                </div>
                <div>
                  <p className="text-sm text-portfolio-slate">Location</p>
                  <p className="text-portfolio-navy">Yogyakarta, Indonesia</p>
                </div>
              </div>
              
              <a href="https://github.com/arrosyid" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                <div className="bg-portfolio-accent bg-opacity-50 p-3 rounded-full mr-4 group-hover:bg-portfolio-secondary group-hover:text-white transition-colors">
                  <Github className="text-portfolio-navy group-hover:text-white transition-colors" size={20} />
                </div>
                <div>
                  <p className="text-sm text-portfolio-slate">GitHub</p>
                  <p className="text-portfolio-navy group-hover:text-portfolio-secondary transition-colors">github.com/arrosyid</p>
                </div>
              </a>
              
              <a href="https://www.linkedin.com/in/iqbal-ocid/" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                <div className="bg-portfolio-accent bg-opacity-50 p-3 rounded-full mr-4 group-hover:bg-portfolio-secondary group-hover:text-white transition-colors">
                  <Linkedin className="text-portfolio-navy group-hover:text-white transition-colors" size={20} />
                </div>
                <div>
                  <p className="text-sm text-portfolio-slate">LinkedIn</p>
                  <p className="text-portfolio-navy group-hover:text-portfolio-secondary transition-colors">linkedin.com/in/iqbal-ocid</p>
                </div>
              </a>
              
              <a href="https://medium.com/@iqbal-rosyidi" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                <div className="bg-portfolio-accent bg-opacity-50 p-3 rounded-full mr-4 group-hover:bg-portfolio-secondary group-hover:text-white transition-colors">
                  <BookOpen className="text-portfolio-navy group-hover:text-white transition-colors" size={20} />
                </div>
                <div>
                  <p className="text-sm text-portfolio-slate">Medium</p>
                  <p className="text-portfolio-navy group-hover:text-portfolio-secondary transition-colors">medium.com/@iqbal-rosyidi</p>
                </div>
              </a>
            </div>
          </div>
          
          <form className="bg-white p-6 rounded-lg shadow-subtle" action="https://formspree.io/f/xjkwrkvz" method="POST">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-portfolio-navy mb-1">
                Name
              </label>
              <input 
                type="text" 
                id="name"
                name="name" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-secondary focus:border-portfolio-secondary transition"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-portfolio-navy mb-1">
                Email
              </label>
              <input 
                type="email" 
                id="email"
                name="email" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-secondary focus:border-portfolio-secondary transition"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium text-portfolio-navy mb-1">
                Subject
              </label>
              <input 
                type="text" 
                id="subject"
                name="subject" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-secondary focus:border-portfolio-secondary transition"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-portfolio-navy mb-1">
                Message
              </label>
              <textarea 
                id="message"
                name="message" 
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-secondary focus:border-portfolio-secondary transition"
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="button-primary w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
