
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 relative bg-gradient-to-br from-white via-portfolio-light/30 to-portfolio-accent/50">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 animate-fadeIn">
          <p className="text-portfolio-secondary font-mono">Hi, my name is</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-navy">
            Moch. Iqbal Rosyidi
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-portfolio-slate">
            Web Developer
          </h2>
          <p className="text-portfolio-slate max-w-lg">
            Skilled and detail-oriented Web Developer with expertise in building responsive, 
            scalable web applications for both government and private sectors using PHP, Laravel, 
            and CodeIgniter. Passionate about creating intuitive user experiences and 
            committed to continuously improving technical abilities.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <a href="#contact" className="button-primary flex items-center gap-2">
              Get in touch
              <ArrowRight size={16} />
            </a>
            <a href="#projects" className="button-outline">
              View my work
            </a>
          </div>
        </div>
        
        <div className="relative h-72 md:h-auto animate-fadeIn">
          <div className="relative overflow-hidden w-72 h-72 md:w-80 md:h-80 mx-auto rounded-full border-4 border-portfolio-secondary shadow-lg">
            <img 
              src="https://i.imgur.com/qBT9uFO.jpg" 
              alt="Moch. Iqbal Rosyidi" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
