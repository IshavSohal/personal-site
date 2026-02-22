import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="section-container text-center">
        <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6 gradient-accent-text">
          Let's Connect
        </h2>
        <p className="max-w-xl mx-auto text-lg text-muted-foreground mb-10">
          I'm always open to chatting about new opportunities, interesting projects, or just
          tech in general. Drop me a line!
        </p>

        <div className="flex items-center justify-center gap-4">
          <Button asChild className="gradient-bg text-primary-foreground rounded-full px-8 h-12 text-base font-semibold hover:opacity-90 transition-opacity">
            <a href="mailto:ishav.sohal@mail.utoronto.ca">
              <Mail className="h-5 w-5 mr-2" />
              Email Me
            </a>
          </Button>
          <Button asChild variant="outline" className="rounded-full px-8 h-12 text-base font-semibold">
            <a href="https://linkedin.com/in/ishavsohal" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 mr-2" />
              LinkedIn
            </a>
          </Button>
          <Button asChild variant="outline" className="rounded-full px-8 h-12 text-base font-semibold">
            <a href="https://github.com/ishavsohal" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              GitHub
            </a>
          </Button>
        </div>

        <p className="mt-16 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ishav Sohal. Built with ❤️
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
