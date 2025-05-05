
const About = () => {
  return (
    <section id="about" className="bg-white">
      <div className="container mx-auto">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <p className="text-portfolio-slate">
              I'm Moch. Iqbal Rosyidi, a detail-oriented Web Developer with a background in Informatics Engineering 
              (Applied Bachelor's Degree) and Information Management (Associate of Applied Science).
            </p>
            
            <p className="text-portfolio-slate">
              My experience spans across developing responsive, scalable web applications for 
              both government and private sectors using PHP, Laravel, and CodeIgniter 3. I specialize in 
              creating clean, efficient solutions with a focus on user experience and functionality.
            </p>
            
            <p className="text-portfolio-slate">
              I'm known for strong communication skills and team collaboration, with a rapid learning mindset
              that allows me to adapt to new technologies and challenges. I'm consistently seeking to expand
              my knowledge and improve my technical abilities.
            </p>
            
            <p className="text-portfolio-slate">
              When I'm not coding, I enjoy exploring new web development trends and technologies to
              stay at the cutting edge of the industry.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-portfolio-light bg-opacity-40 p-6 rounded-lg shadow-subtle">
              <h3 className="text-xl font-semibold mb-4 text-portfolio-navy">Professional Values</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-portfolio-secondary mr-2 font-bold">▹</span>
                  <span>Passionate about creating intuitive and accessible web experiences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-portfolio-secondary mr-2 font-bold">▹</span>
                  <span>Strong problem-solving skills and attention to detail</span>
                </li>
                <li className="flex items-start">
                  <span className="text-portfolio-secondary mr-2 font-bold">▹</span>
                  <span>Dedicated to writing clean, maintainable code</span>
                </li>
                <li className="flex items-start">
                  <span className="text-portfolio-secondary mr-2 font-bold">▹</span>
                  <span>Committed to continuous learning and improvement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-portfolio-secondary mr-2 font-bold">▹</span>
                  <span>Excellent communication and teamwork skills</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
