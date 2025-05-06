
const About = () => {
  return (
    <section id="about" className="bg-white">
      <div className="container mx-auto">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <p className="text-portfolio-slate">
              I'm Moch. Iqbal Rosyidi, a Web Developer with a strong foundation in Informatics Engineering and Information Management.
            </p>
            
            <p className="text-portfolio-slate">
              I craft scalable, maintainable, and user-focused web applications for government institutions and private clients. My work combines technical precision with a deep understanding of practical business needs.
            </p>
            
            <p className="text-portfolio-slate">
              With a background in both applied technology and software development, I'm known for my clarity in communication, reliability in collaboration, and a strong drive to solve real-world problems through clean, effective code. I take pride in writing solutions that not only work but scale, evolve, and serve users efficiently.
            </p>
            
            <p className="text-portfolio-slate">
              Outside of development, I actively explore modern web trends and emerging technologies, ensuring that I stay sharp and deliver forward-thinking solutions in every project I tackle.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-portfolio-light bg-opacity-40 p-6 rounded-lg shadow-subtle">
              <h3 className="text-xl font-semibold mb-4 text-portfolio-navy">Professional Values</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-portfolio-secondary mr-2 font-bold">▹</span>
                  <span>Driven by a passion for building intuitive, accessible, and user-focused web applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-portfolio-secondary mr-2 font-bold">▹</span>
                  <span>Sharp problem-solver with a strong eye for detail and technical precision</span>
                </li>
                <li className="flex items-start">
                  <span className="text-portfolio-secondary mr-2 font-bold">▹</span>
                  <span>Committed to writing clean, maintainable, and scalable code that serves real-world needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-portfolio-secondary mr-2 font-bold">▹</span>
                  <span>Lifelong learner—consistently exploring new tools, technologies, and best practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-portfolio-secondary mr-2 font-bold">▹</span>
                  <span>Clear communicator and dependable team player who thrives in collaborative environments</span>
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
