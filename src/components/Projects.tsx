
import { Github, ExternalLink, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Event Management Backend API",
      description: "This project is the backend system for an Event Management Application built with Node.js, Express.js, and Prisma. It provides a RESTful API for managing events, ticket types, user authentication, orders, payments (simulated), e-ticket generation, check-in validation, and more.",
      technologies: ["Express.js, Prisma ORM, Redis, MySQL"],
      image: "assets/event-app.png",
      github: "https://github.com/arrosyid/event-app",
      demo: "https://event-app.iqbalrosyidi.my.id/"
    },
    {
      title: "SIMBMD (asset management) & SIDIA (inventory management)",
      description: "Regional asset management system and regional inventory system for Pasuruan Regency, replacing manual tracking with an integrated web-based solution using CodeIgniter 3. Improved efficiency and accuracy by centralizing asset and inventory records.",
      technologies: ["CodeIgniter 3", "MySQL", "Bootstrap", "jQuery", "PHP"],
      image: "assets/simbmd.png",
      github: "#",
      demo: "#"
    },
    {
      title: "Responsive Company Profile Website",
      description: "A fully responsive company profile website using HTML, CSS, JavaScript, Bootstrap, and jQuery, delivered on an aggressive timeline with an initial 3-day build and 4 days dedicated to revisions. The site features smooth fade-in/fade-out animations and a design that adapts seamlessly to laptops, smartphones, and tablets.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
      image: "assets/company-profile-crop.png",
      github: "https://github.com/arrosyid/sumber-mas-jaya",
      demo: "https://arrosyid.github.io/sumber-mas-jaya/"
    },
    {
      title: "SaktiPOS",
      description: "Lightweight POS system that allows flexible transactions based on weight and volume. Used PHP and CodeIgniter for efficient stock handling and inventory management.",
      technologies: ["PHP", "CodeIgniter", "MySQL", "Bootstrap", "jQuery"],
      image: "assets/saktipos.png",
      github: "#",
      demo: "#"
    },
    {
      title: "Plant Recommendation App",
      description: "Laravel-based system that suggests optimal plants based on soil type and custom user criteria using the SAW algorithm. Helps users make informed planting decisions.",
      technologies: ["Laravel 10", "MySQL", "Bootstrap", "SAW Algorithm", "PHP"],
      image: "assets/plant-recomendation.png",
      github: "https://github.com/arrosyid/spk-tanaman",
      demo: "#"
    },
    {
      title: "Employee Assessment System",
      description: "Structured web-based evaluation platform using AHP and SAW algorithms to improve performance review processes and provide objective employee assessments.",
      technologies: ["Laravel", "AHP Algorithm", "SAW Algorithm", "MySQL", "Bootstrap"],
      image: "assets/employment-saw.png",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="bg-white">
      <div className="container mx-auto">
        <h2 className="section-heading">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="project-card bg-white rounded-lg overflow-hidden border border-gray-100 shadow-subtle hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div className="h-48 overflow-hidden relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-portfolio-secondary bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-portfolio-navy mb-2">{project.title}</h3>
                <p className="text-portfolio-slate mb-4 flex-grow text-sm">{project.description}</p>
                
                <div className="mb-4 flex flex-wrap">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="skill-pill text-xs">{tech}</span>
                  ))}
                </div>
                
                <div className="flex items-center space-x-4 mt-auto">
                  {project.github && project.github !== "#" && (
                    <a 
                      href={project.github} 
                      className="text-portfolio-navy hover:text-portfolio-secondary transition-colors flex items-center gap-1"
                      aria-label="GitHub Repository"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.demo && project.demo !== "#" && (
                    <a 
                      href={project.demo} 
                      className="text-portfolio-navy hover:text-portfolio-secondary transition-colors flex items-center gap-1"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={18} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
