
import { Calendar, GraduationCap, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Applied Bachelor's Degree – Information Technology",
      institution: "Polytechnic State of Jember",
      location: "Jember, Indonesia",
      period: "2021 - January 2025",
      description: "Developed employee assessment and plant recommendation applications using SAW and AHP methods. Final Project: IT assessment of Polije Press using COBIT 5 for improved IT implementation. Graduated with a 3.9 GPA.",
      projects: [
        "Employee assessment application using SAW and AHP methods",
        "Plant recommendation application based on soil conditions using Laravel 10",
        "IT assessment of Polije Press using COBIT 5 framework"
      ]
    },
    {
      degree: "Associate of Applied Science – Information Management",
      institution: "Polytechnic State of Jember",
      location: "Jember, Indonesia",
      period: "2018 - October 2021",
      description: "Final Project: Management Information System for Evaluating Student Learning Outcomes. Graduated with a 3.67 GPA.",
      projects: []
    }
  ];

  const certifications = [
    "Cloud Practitioner Essentials by Dicoding Indonesia",
    "Data Engineer Challenge with SQL by DQLab",
    "Learn Fundamental JavaScript Programming by Dicoding Indonesia",
    "Learn Fundamental Web Programming by Dicoding Indonesia",
    "Learn Fundamental Project management by Dicoding Indonesia",
    "Learn Basic Data Visualization by Dicoding Indonesia"
  ];

  return (
    <section id="education" className="bg-white">
      <div className="container mx-auto">
        <h2 className="section-heading">Education & Certifications</h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xl font-semibold flex items-center text-portfolio-navy mb-4">
              <GraduationCap size={20} className="mr-2 text-portfolio-secondary" />
              Education
            </h3>
            {education.map((item, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-subtle hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-portfolio-navy">{item.degree}</h4>
                    <p className="text-portfolio-secondary">{item.institution}</p>
                    <p className="text-portfolio-slate text-sm mt-1">{item.location}</p>
                  </div>
                  <div className="flex items-center mt-2 sm:mt-0 text-portfolio-slate font-mono">
                    <Calendar size={16} className="mr-1" />
                    <span>{item.period}</span>
                  </div>
                </div>
                <p className="mt-3 text-portfolio-slate">{item.description}</p>
                
                {item.projects.length > 0 && (
                  <div className="mt-3">
                    <p className="font-medium text-portfolio-navy">Key Projects:</p>
                    <ul className="mt-2 space-y-1">
                      {item.projects.map((project, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-portfolio-secondary mr-2">▹</span>
                          <span className="text-portfolio-slate text-sm">{project}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div>
            <h3 className="text-xl font-semibold flex items-center text-portfolio-navy mb-4">
              <Award size={20} className="mr-2 text-portfolio-secondary" />
              Certifications
            </h3>
            <div className="bg-gray-50 p-6 rounded-lg shadow-subtle">
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-portfolio-secondary mr-2 font-bold">▹</span>
                    <span className="text-portfolio-slate">{cert}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-4 border-t border-gray-200">
                <h4 className="text-portfolio-navy font-medium mb-2">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  <div className="bg-portfolio-accent px-3 py-1 rounded-full text-sm">
                    Indonesia: Native
                  </div>
                  <div className="bg-portfolio-accent px-3 py-1 rounded-full text-sm">
                    English: Professional Working
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
