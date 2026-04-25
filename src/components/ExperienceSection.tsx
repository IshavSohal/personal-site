import { Briefcase, GraduationCap } from "lucide-react";

const ExperienceSection = () => {
  return (
    <>
      <section id="experience" className="scroll-mt-16 pt-16 pb-12">
        <div className="section-container">
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-14 gradient-text">
            Experience
          </h2>

          <div className="max-w-3xl">
            {/* Work */}
            <div className="relative pl-8 border-l-2 border-primary/30">
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
                  "Built an Equipment Reservation Platform using React, Express, and Prisma, improving data consistency, reducing erroneous reservations by 44%, and saving 3+ hours of manual work per month",
                  "Designed Shared Asset System to prevent duplication of asset files, resulting in 30% decrease in product size",
                  "Developed .NET REST endpoints to manage cached datasets, including cache validation and regeneration workflows, reducing dataset retrieval latency by 40%",
                  "Built Admin Upload Component to securely process zipped product uploads, saving 2+ hours per month",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="scroll-mt-16 pt-12 pb-16">
        <div className="section-container">
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-14 gradient-text">
            Education
          </h2>

          <div className="max-w-6xl">
            {/* Education */}
            <div className="relative pl-8 border-l-2 border-accent/30">
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
              <ul className="space-y-4 mt-4">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  GPA: 3.65 / 4.0 — Dean's List Scholar (2021–2024)
                </li>
                <li className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                    Relevant coursework:
                  </div>
                  <ul className="grid gap-x-8 gap-y-2 pl-3 sm:grid-cols-[repeat(3,minmax(max-content,1fr))]">
                    {[
                      "Parallel Programming",
                      "Scalable Computing",
                      "Neural Networks and Deep Learning",
                      "Introduction to Databases",
                      "Introduction to Information Security",
                      "Principles of Computer Networks",
                      "Introduction to AI",
                      "Operating Systems",
                      "Introduction to Software Engineering",
                      "Software Tools and Systems Programming",
                      "Algorithm Design and Analysis",
                    ].map((course) => (
                      <li key={course} className="flex items-start gap-2 whitespace-nowrap">
                        <span className="text-accent shrink-0">-</span>
                        {course}
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExperienceSection;
