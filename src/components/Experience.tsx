
import { Calendar, Building, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Full Time Web Developer",
      company: "CV. Mascitra Teknologi Informasi",
      location: "Jember, Indonesia",
      period: "June 2024 - September 2024",
      description: [
        "Developed SIMBMD (regional asset management) and SIDIA (regional inventory system) for Pasuruan Regency",
        "Developed saktipos.com, an online cashier application",
        "Collaborated with clients to gather requirements, resolve issues, and ensure project alignment",
        "Delivered clean, responsive interfaces using CodeIgniter 3, Bootstrap, and jQuery",
        "Met tight deadlines while maintaining code quality and documentation standards"
      ]
    },
    {
      title: "Web Developer Intern",
      company: "CV. Mascitra Teknologi Informasi",
      location: "Jember, Indonesia",
      period: "February 2024 - June 2024",
      description: [
        "Analyzed and designed E-Certificate application, including fixing unresolved technical issues",
        "Developed SIMBMD (regional asset management) and SIDIA (regional inventory system) for Pasuruan Regency",
        "Applied design patterns and clean code principles to enhance maintainability and performance",
        "Used Git and GitHub for version control and team collaboration during feature development"
      ]
    },
    {
      title: "Freelance Web Developer",
      company: "Argopuro Kurir",
      location: "Jember, Indonesia (Remote)",
      period: "February 2021 - April 2021",
      description: [
        "Developed a CRUD-based web application using CodeIgniter 3 and MySQL",
        "Designed and optimized database systems for performance and reliability",
        "Built the front-end with AdminLTE and Bootstrap 4 for a responsive UI",
        "Managed deployment and version control using GitHub"
      ]
    },
    {
      title: "Web Developer Intern",
      company: "Department of Communication and Informatics, Malang Regency",
      location: "Malang, Indonesia",
      period: "September 2020 - December 2020",
      description: [
        "Developed a CRUD web application using CodeIgniter 3 and MySQL",
        "Designed, configured, and optimized the database for performance and security",
        "Collaborated with front-end developers to ensure smooth UI–backend integration",
        "Maintained data integrity and system reliability throughout development"
      ]
    }
  ];

  return (
    <section id="experience" className="bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-heading">Work Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="experience-card bg-white p-6 rounded-lg shadow-subtle border-l-4 border-portfolio-secondary hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-portfolio-navy">{exp.title}</h3>
                  <div className="flex items-center text-portfolio-secondary font-medium mt-1">
                    <Building size={16} className="mr-1" />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center text-portfolio-slate text-sm mt-1">
                    <MapPin size={14} className="mr-1" />
                    <span>{exp.location}</span>
                  </div>
                </div>
                <div className="text-portfolio-slate font-mono flex items-center mt-2 lg:mt-0">
                  <Calendar size={16} className="mr-1" />
                  <span>{exp.period}</span>
                </div>
              </div>
              
              <ul className="space-y-2 mt-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-portfolio-secondary mr-2 font-bold">▹</span>
                    <span className="text-portfolio-slate">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
