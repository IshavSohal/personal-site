import { Briefcase, GraduationCap } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="section-container">
        <h2 className="font-display text-4xl sm:text-5xl font-bold mb-14 gradient-text">
          Experience
        </h2>

        <div className="max-w-3xl">
          {/* Work */}
          <div className="relative pl-8 pb-12 border-l-2 border-primary/30">
            <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full gradient-bg flex items-center justify-center">
              <Briefcase className="h-4 w-4 text-primary-foreground" />
            </div>
            <div className="mb-2">
              <h3 className="font-display text-xl font-bold text-foreground">
                Software Developer
              </h3>
              <p className="text-sm font-medium text-primary">
                Environment and Climate Change Canada
              </p>
              <p className="text-sm text-muted-foreground">May 2024 – August 2025</p>
            </div>
            <ul className="space-y-2 mt-4">
              {[
                "Built an Equipment Reservation Platform using React, Express, and Prisma — 44% decline in erroneous reservations",
                "Designed Shared Asset System to prevent file duplication, resulting in 30% decrease in product size",
                "Built Admin Upload Component for secure zipped product uploads, saving 2+ hours/month",
                "Conducted major refactor of Vue & TypeScript codebase, migrating to Pinia stores for faster performance and fewer bugs",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div className="relative pl-8">
            <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full gradient-accent-bg flex items-center justify-center">
              <GraduationCap className="h-4 w-4 text-accent-foreground" />
            </div>
            <div className="mb-2">
              <h3 className="font-display text-xl font-bold text-foreground">
                Honours Bachelor of Science — Computer Science
              </h3>
              <p className="text-sm font-medium text-accent">
                University of Toronto
              </p>
              <p className="text-sm text-muted-foreground">Sep 2020 – Expected Apr 2026</p>
            </div>
            <ul className="space-y-2 mt-4">
              {[
                "GPA: 3.65 / 4.0 — Dean's List Scholar (2021–2024)",
                "Relevant coursework: Data Structures & Algorithms, Operating Systems, Databases, Software Engineering",
                "Active hackathon participant — DeerHacks, Hack Canada, GenAI Genesis",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
