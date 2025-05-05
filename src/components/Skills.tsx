
import { Code, Database, TerminalSquare, BookOpen } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages & Frameworks",
      icon: <Code className="h-6 w-6 text-portfolio-secondary" />,
      skills: ["Laravel", "CodeIgniter 3", "HTML", "CSS", "PHP", "JavaScript", "Bootstrap", "jQuery"]
    },
    {
      category: "Database",
      icon: <Database className="h-6 w-6 text-portfolio-secondary" />,
      skills: ["MySQL", "Redis"]
    },
    {
      category: "Tools & Technologies",
      icon: <TerminalSquare className="h-6 w-6 text-portfolio-secondary" />,
      skills: ["Git", "GitHub", "Visual Studio Code", "XAMPP", "WSL", "NPM", "PNPM"]
    },
    {
      category: "Concepts",
      icon: <BookOpen className="h-6 w-6 text-portfolio-secondary" />,
      skills: ["MVC", "RESTful API", "Clean Code", "Responsive Design", "Caching Strategies", "Authentication and Authorization", "HTTP Protocol", "Algorithm Implementation (SAW, AHP)", "Debugging and Testing"]
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
