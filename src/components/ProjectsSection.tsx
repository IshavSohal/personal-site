import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    name: "Bitly Clone",
    tagline: "Distributed URL shortener built for scale",
    tech: ["Docker", "Redis", "Cassandra", "Java", "Spring Boot"],
    highlights: [
      "Designed a horizontally scalable architecture with consistent hashing",
      "Implemented caching layer with Redis for sub-millisecond redirects",
      "Built fault-tolerant storage with Apache Cassandra",
    ],
    gradient: "from-primary to-secondary",
    github: "#",
  },
  {
    name: "r/Place Clone",
    tagline: "Real-time collaborative pixel canvas",
    tech: ["AWS", "Redis", "WebSockets", "React", "Node.js"],
    highlights: [
      "Supports thousands of concurrent users placing pixels in real time",
      "WebSocket-based architecture with Redis pub/sub for instant updates",
      "Deployed on AWS with auto-scaling and load balancing",
    ],
    gradient: "from-secondary to-primary",
    github: "#",
  },
  {
    name: "FaceVote",
    tagline: "Identity-verified voting app — DeerHacks 2023",
    tech: ["Python", "OpenCV", "Flask", "React"],
    highlights: [
      "Facial recognition-based voter authentication to prevent fraud",
      "Built in 36 hours at DeerHacks hackathon",
      "End-to-end secure voting pipeline with encrypted ballot storage",
    ],
    gradient: "from-accent to-primary",
    github: "#",
  },
  {
    name: "CarbonTrack",
    tagline: "Mobile carbon footprint tracker with gamification",
    tech: ["React Native", "Node.js", "MongoDB", "Express"],
    highlights: [
      "Gamified sustainability tracking with daily challenges and leaderboards",
      "Calculates carbon impact from transportation, diet, and energy usage",
      "Social features to compete and collaborate with friends",
    ],
    gradient: "from-primary to-accent",
    github: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <h2 className="font-display text-4xl sm:text-5xl font-bold mb-14 gradient-accent-text">
          Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group relative rounded-2xl border border-border bg-card p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Top gradient accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`} />

              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">
                    {project.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{project.tagline}</p>
                </div>
                <Button
                  asChild
                  size="icon"
                  variant="ghost"
                  className="opacity-60 group-hover:opacity-100 transition-opacity"
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} on GitHub`}>
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tech.map((t) => (
                  <Badge
                    key={t}
                    variant="secondary"
                    className="text-xs font-medium"
                  >
                    {t}
                  </Badge>
                ))}
              </div>

              <ul className="space-y-2">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    {h}
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

export default ProjectsSection;
