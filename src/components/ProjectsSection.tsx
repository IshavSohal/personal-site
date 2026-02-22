import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    name: "Bitly",
    tagline: "Distributed URL shortener with 1000 req/s throughput",
    tech: ["Docker", "Redis", "Cassandra", "Python", "Flask"],
    highlights: [
      "Built with Docker Swarm, Cassandra, and Redis for high-throughput URL shortening",
      "Deployed Redis primary–replica architecture as LRU cache, reducing GET latency by 42%",
      "3-node Cassandra cluster (RF=2) for persistent, fault-tolerant storage",
      "Writer–Logger stack using Redis streams reduced perceived write latency by 37%",
    ],
    gradient: "from-primary to-secondary",
    github: "#",
  },
  {
    name: "r/Place",
    tagline: "Real-time collaborative pixel canvas on AWS",
    tech: ["AWS", "Redis", "Python", "WebSockets", "DynamoDB"],
    highlights: [
      "WebSocket API Gateway for real-time connections, disconnections, and board updates",
      "NAT gateway enabling private Lambda functions with secure outbound access",
      "SQS decoupling improved DynamoDB write throughput by 29%",
      "ElastiCache for latest board state and active user tracking",
    ],
    gradient: "from-secondary to-primary",
    github: "#",
  },
  {
    name: "CUDA Laplacian Filter",
    tagline: "GPU-accelerated image processing with CUDA & C++",
    tech: ["CUDA", "C++", "POSIX Threads"],
    highlights: [
      "CUDA-based Laplacian filter with shared memory and coalesced access — 25× speedup over CPU",
      "Optimized CPU baseline with POSIX threads, row-level parallelism, and barrier synchronization",
      "Five GPU kernel variants with different workload layouts; best achieved 10%+ higher throughput",
    ],
    gradient: "from-accent to-secondary",
    github: "#",
  },
  {
    name: "CNN Plays GeoGuessr",
    tagline: "Deep learning model predicting locations from Street View imagery",
    tech: ["Python", "PyTorch", "Pandas", "NumPy", "sklearn"],
    highlights: [
      "EVA-02 backbone (ImageNet-22k) for global photo geolocation from Street View images",
      "Two-stage architecture with classification + continent-conditioned regression, reducing large errors by 64%",
      "Joint loss combining cross-entropy and cosine-similarity angular loss",
      "90.6% continent accuracy and 762 km mean error after 40 epochs",
    ],
    gradient: "from-primary to-accent",
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
    gradient: "from-secondary to-accent",
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

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
