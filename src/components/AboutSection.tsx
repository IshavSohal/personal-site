import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    name: "Languages",
    skills: ["Java", "Python", "C/C++", "JavaScript", "TypeScript", "SQL", "HTML/CSS", "Bash"],
    color: "gradient-bg",
  },
  {
    name: "Technologies & Frameworks",
    skills: ["CUDA", "PyTorch", "Scikit-Learn", "Pandas", "NumPy", "Vue.js", "React", "Flask", "Node.js", ".NET"],
    color: "gradient-accent-bg",
  },
  {
    name: "Cloud & DevOps",
    skills: ["AWS", "Lambda", "DynamoDB", "ElastiCache", "Docker", "Cassandra", "Redis", "Postman"],
    color: "gradient-bg",
  },
  {
    name: "Developer Tools",
    skills: ["Git", "GitHub", "Linux", "Bash", "Figma", "Trello"],
    color: "gradient-accent-bg",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6 gradient-text">
          About Me
        </h2>
        <div className="max-w-3xl mb-14">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a curious builder who thrives at the intersection of systems design and user experience. 
            Whether I'm architecting distributed backends, wiring up real-time collaborative tools, or 
            hacking together an idea at 3 AM during a hackathon, I'm driven by the challenge of making 
            complex things feel effortless. I care deeply about writing clean, reliable code and shipping 
            things that actually matter.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {skillCategories.map((cat) => (
            <div key={cat.name} className="space-y-3">
              <h3 className="font-display text-lg font-semibold text-foreground">
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <Badge
                    key={skill}
                    className={`${cat.color} text-primary-foreground border-0 px-3 py-1 text-sm font-medium hover-scale`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
