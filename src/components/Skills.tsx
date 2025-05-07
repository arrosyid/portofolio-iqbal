
import { Code, Database, TerminalSquare, BookOpen } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages & Frameworks",
      icon: <Code className="h-6 w-6 text-portfolio-secondary" />,
      skills: ["Node.JS", "Express.js", "Laravel", "CodeIgniter 3", "Bootstrap"]
    },
    {
      category: "Database",
      icon: <Database className="h-6 w-6 text-portfolio-secondary" />,
      skills: ["MySQL", "Redis", "PostgreSQL"]
    },
    {
      category: "Tools & Technologies",
      icon: <TerminalSquare className="h-6 w-6 text-portfolio-secondary" />,
      skills: ["Eloquent ORM", "Prisma ORM", "Blade", "Coolify", "GitHub",]
    },
    {
      category: "Concepts",
      icon: <BookOpen className="h-6 w-6 text-portfolio-secondary" />,
      skills: ["MVC", "RESTful API", "Responsive Design", "Microservice"]
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
