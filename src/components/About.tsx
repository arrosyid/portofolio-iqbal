
const About = () => {
  return (
    <section id="about" className="bg-white">
      <div className="container mx-auto">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <p className="text-portfolio-slate">
              I'm a Cybersecurity Assurance with a background in Web Development, currently focused on Application Security, Secure Coding, and Governance, Risk, and Compliance (GRC).
            </p>
            
            <p className="text-portfolio-slate">
              My current role involves performing pre-production application security audits within the PLN environment, using the OWASP Application Security Verification Standard (ASVS) as a primary reference. I review application security requirements, assess the design and implementation of security controls, and document technical compliance checklists to help ensure applications meet secure coding and security standards before deployment.
            </p>
            
            <p className="text-portfolio-slate">
              I also contribute to the organization's Secure SDLC by applying Shift-Left Security and Left of Boom approaches to identify and address security risks as early as possible in the development lifecycle. This includes working closely with Development teams to review compliance evidence, validate security control implementations, and provide guidance on addressing identified gaps. In addition, I conduct vulnerability assessments using Tenable Nessus and prepare technical vulnerability reports to support remediation and risk management activities.
            </p>
            
            <p className="text-portfolio-slate">
              My previous experience as a Web Developer has given me a strong foundation in application development, including PHP, Laravel, CodeIgniter, JavaScript, TypeScript, Next.js, and MySQL. This development background helps me bridge the gap between security requirements and practical implementation, particularly when working with development teams.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-portfolio-light bg-opacity-40 p-6 rounded-lg shadow-subtle">
              <h3 className="text-xl font-semibold mb-4 text-portfolio-navy">Professional Values</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-portfolio-secondary mr-2 font-bold">▹</span>
                  <span>Driven by a strong commitment to building secure, resilient, and compliant applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-portfolio-secondary mr-2 font-bold">▹</span>
                  <span>Detail-oriented in reviewing security requirements, controls, and implementation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-portfolio-secondary mr-2 font-bold">▹</span>
                  <span>Lifelong learner. consistently exploring new tools, technologies, and best practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-portfolio-secondary mr-2 font-bold">▹</span>
                  <span>Collaborative and open to learning from Development, Security, and cross-functional teams</span>
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
