import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-secondary/20 blur-3xl animate-pulse [animation-delay:1s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/10 blur-3xl animate-pulse [animation-delay:2s]" />
      </div>

      <div className="section-container text-center py-20">
        <p className="text-lg font-medium text-muted-foreground mb-4 animate-fade-in">
          Hey, I'm
        </p>
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl font-extrabold mb-6 gradient-text animate-fade-in [animation-delay:0.1s]">
          Ishav Sohal
        </h1>
        <p className="font-display text-xl sm:text-2xl font-semibold text-muted-foreground mb-8 animate-fade-in [animation-delay:0.2s]">
          Full-Stack Developer · Systems Thinker · Builder
        </p>
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed mb-10 animate-fade-in [animation-delay:0.3s]">
          Computer Science student at the University of Toronto with a passion for building
          scalable, reliable systems. I love hackathons, distributed computing, and turning
          ambitious ideas into production-ready software.
        </p>

        <div className="flex items-center justify-center gap-4 animate-fade-in [animation-delay:0.4s]">
          <Button asChild size="icon" variant="outline" className="rounded-full h-12 w-12 hover:gradient-bg hover:text-primary-foreground hover:border-transparent transition-all">
            <a href="https://github.com/ishavsohal" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button asChild size="icon" variant="outline" className="rounded-full h-12 w-12 hover:gradient-bg hover:text-primary-foreground hover:border-transparent transition-all">
            <a href="https://linkedin.com/in/ishavsohal" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button asChild size="icon" variant="outline" className="rounded-full h-12 w-12 hover:gradient-accent-bg hover:text-accent-foreground hover:border-transparent transition-all">
            <a href="mailto:ishav.sohal@mail.utoronto.ca" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/40 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 rounded-full bg-muted-foreground/60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
