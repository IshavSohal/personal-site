import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    name: "Languages",
    skills: ["Java", "SQL", "Python", "C/C++", "JavaScript", "TypeScript", "HTML/CSS"],
    color: "gradient-bg",
  },
  {
    name: "Technologies & Frameworks",
    skills: ["React.js", "Express", "Flask", "Node.js", "Vue.js", "Pinia", "Prisma", "npm", ".NET", "LangGraph", "PyTorch", "Scikit-Learn", "Pandas", "NumPy", "CUDA"],
    color: "gradient-accent-bg",
  },
  {
    name: "Systems/DevOps",
    skills: ["Linux", "Git", "Bash", "AWS", "Docker", "Postman"],
    color: "bg-gradient-to-r from-secondary to-cyan-500",
  },
  {
    name: "Databases/Storage",
    skills: ["SQLite", "PostgreSQL", "Cassandra", "Redis", "DynamoDB", "MongoDB", "Neo4j"],
    color: "bg-gradient-to-r from-emerald-500 to-teal-600",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="pt-24 pb-16">
      <div className="section-container">
        <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6 gradient-text">
          About Me
        </h2>
        <div className="mb-14 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14">
          <div className="space-y-5">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a recent Computer Science graduate from the University of Toronto and an AI Solutions
              Engineer at FGF Brands. I build AI-powered applications and the infrastructure around them,
              with a focus on backend systems, AI agents, and production-ready features for LLMs.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Recently, I've built cross-session memory for LangGraph agents using PostgreSQL and semantic
              retrieval, a multi-user agent collaboration system with role-based access control and
              real-time streaming, and MCP integrations for remote data sources. Previously, at Environment
              and Climate Change Canada, I worked across React, Vue, TypeScript, Node.js, and .NET—building
              an equipment-reservation platform that reduced erroneous reservations by 44% and saved more
              than three hours of manual work each month.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Outside of work, I've built distributed-systems projects including a Bitly-style URL shortener
              with Cassandra and Redis and a real-time r/Place-style application on AWS. I'm looking for
              backend, full-stack, or AI infrastructure roles where I can solve technically challenging,
              real-world problems and make a meaningful impact.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-xs lg:mx-0">
            <div className="absolute -inset-3 -z-10 rounded-3xl bg-primary/20 blur-2xl" />
            <div className="gradient-bg rounded-3xl p-1 shadow-xl">
              <img
                src="/ishav-sohal.jpg"
                alt="Ishav Sohal"
                width={400}
                height={400}
                loading="lazy"
                className="aspect-square w-full rounded-[1.3rem] object-cover"
              />
            </div>
          </div>
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
