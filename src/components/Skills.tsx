
import { Code, Database, TerminalSquare, BookOpen } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Web Development",
      icon: <Code className="h-6 w-6 text-portfolio-secondary" />,
      skills: ["Express.js", "Laravel", "CodeIgniter 3", "Bootstrap", "MySQL", "Redis", "PostgreSQL", "Responsive Design", "Microservice", "Clean Code Principles", "Design Patterns", "Version Control", "Docker"]
    },
    {
      category: "Cybersecurity Standards & Best Practices",
      icon: <Database className="h-6 w-6 text-portfolio-secondary" />,
      skills: ["OWASP ASVS", "OWASP Top 10", "Secure Coding Practices", "Vulnerability Assessment & Management", "Security Architecture Review", "Technical Compliance Checklists"]
    },
    {
      category: "Tools & Technologies",
      icon: <TerminalSquare className="h-6 w-6 text-portfolio-secondary" />,
      skills: ["Tenable Nessus", "Postman", "Swagger", "BurpSuite", "Harbor", "Fortify SAST,DAST, SCA"]
    },
    {
      category: "Concepts",
      icon: <BookOpen className="h-6 w-6 text-portfolio-secondary" />,
      skills: ["Secure SDLC", "Shift-Left Security", "Left of Boom", "Technical Compliance Checklists"]
    }
  ];

  return (
    <section id="skills" className="bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-heading">Skills & Technologies</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-subtle hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold ml-2 text-portfolio-navy">
                  {category.category}
                </h3>
              </div>
              
              <div className="flex flex-wrap">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
