
import { Github, ExternalLink, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "SIMBMD",
      description: "Regional asset management system for Pasuruan Regency, replacing manual tracking with an integrated web-based solution using CodeIgniter 3. Improved efficiency and accuracy by centralizing asset records.",
      technologies: ["CodeIgniter 3", "MySQL", "Bootstrap", "jQuery", "PHP"],
      image: "https://i.imgur.com/jI8eXKt.jpg",
      github: "#",
      demo: "#"
    },
    {
      title: "SIDIA",
      description: "Inventory information system (Sistem Informasi Persediaan) for structured and transparent management of institutional supplies, improving tracking and resource allocation.",
      technologies: ["CodeIgniter 3", "MySQL", "JavaScript", "Bootstrap", "PHP"],
      image: "https://i.imgur.com/O4sFztu.jpg",
      github: "#",
      demo: "#"
    },
    {
      title: "SaktiPOS",
      description: "Lightweight POS system that allows flexible transactions based on weight and volume. Used PHP and CodeIgniter for efficient stock handling and inventory management.",
      technologies: ["PHP", "CodeIgniter", "MySQL", "Bootstrap", "jQuery"],
      image: "https://i.imgur.com/M2GJPly.jpg",
      github: "#",
      demo: "#"
    },
    {
      title: "Plant Recommendation App",
      description: "Laravel-based system that suggests optimal plants based on soil type and custom user criteria using the SAW algorithm. Helps users make informed planting decisions.",
      technologies: ["Laravel 10", "MySQL", "Bootstrap", "SAW Algorithm", "PHP"],
      image: "https://i.imgur.com/jI8eXKt.jpg",
      github: "#",
      demo: "#"
    },
    {
      title: "Employee Assessment System",
      description: "Structured web-based evaluation platform using AHP and SAW algorithms to improve performance review processes and provide objective employee assessments.",
      technologies: ["Laravel", "AHP Algorithm", "SAW Algorithm", "MySQL", "Bootstrap"],
      image: "https://i.imgur.com/O4sFztu.jpg",
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
                  <a 
                    href={project.github} 
                    className="text-portfolio-navy hover:text-portfolio-secondary transition-colors flex items-center gap-1"
                    aria-label="GitHub Repository"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.demo} 
                    className="text-portfolio-navy hover:text-portfolio-secondary transition-colors flex items-center gap-1"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={18} />
                    <span>Demo</span>
                  </a>
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
