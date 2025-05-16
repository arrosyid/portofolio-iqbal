import { ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true); // True: typing, False: deleting

  const textToType = "Hi, my name is";
  const typingSpeed = 100; // milliseconds
  const deletingSpeed = 70; // milliseconds
  const pauseBeforeDelete = 5000; // milliseconds (pause after full text typed)
  const pauseBeforeRetype = 1000; // milliseconds (pause after full text deleted - user request)

  const charIndexRef = useRef(0); // Current character index in textToType

  useEffect(() => {
    let animationTimeoutId: number;

    const typeEffect = () => {
      if (charIndexRef.current < textToType.length) {
        setDisplayedText(textToType.substring(0, charIndexRef.current + 1));
        charIndexRef.current++;
        animationTimeoutId = window.setTimeout(typeEffect, typingSpeed);
      } else {
        // Finished typing, pause then switch to deleting
        animationTimeoutId = window.setTimeout(() => {
          setIsTyping(false);
        }, pauseBeforeDelete);
      }
    };

    const deleteEffect = () => {
      if (charIndexRef.current > 0) {
        setDisplayedText(textToType.substring(0, charIndexRef.current - 1));
        charIndexRef.current--;
        animationTimeoutId = window.setTimeout(deleteEffect, deletingSpeed);
      } else {
        // Finished deleting, pause then switch to typing
        animationTimeoutId = window.setTimeout(() => {
          setIsTyping(true);
        }, pauseBeforeRetype);
      }
    };

    if (isTyping) {
      // If we are switching to typing and text is empty, it means we start a new cycle.
      // Reset charIndexRef if we are about to type from scratch.
      if (displayedText.length === 0) {
          charIndexRef.current = 0;
      }
      typeEffect();
    } else {
      // We are in deleting phase
      deleteEffect();
    }

    return () => {
      clearTimeout(animationTimeoutId);
    };
  }, [isTyping]); // Effect runs when isTyping state changes

  return (
    <>
      <style>
        {`
          .blinking-cursor-span {
            animation: blink-animation 1s step-end infinite;
            font-weight: normal; /* Or bold if preferred */
          }
          @keyframes blink-animation {
            from, to { color: inherit; } /* Show cursor */
            50% { color: transparent; } /* Hide cursor */
          }
          .typed-text-container {
            min-height: 1.5em; /* Adjust based on your font size to prevent layout shift */
            display: inline; /* Keep it inline with text */
          }
        `}
      </style>
      <section id="hero" className="min-h-screen flex items-center relative bg-gradient-to-br from-white via-portfolio-light/30 to-portfolio-accent/50">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fadeIn">
            <p className="text-portfolio-secondary font-mono">
              <span className="typed-text-container">{displayedText}</span>
              <span className="blinking-cursor-span">|</span>
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-navy">
              Moch. Iqbal Rosyidi
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-portfolio-slate">
              Web Developer and Back-end Developer
            </h2>
            <p className="text-portfolio-slate max-w-lg">
              A skilled Web Developer specializing in delivering IT solutions that enhance business operations. With expertise in creating responsive and efficient websites and applications. With years of experience in PHP, Laravel 11, Codeigniter, and MySQL.
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
                src="assets/hero.jpg" 
                alt="Moch. Iqbal Rosyidi" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
