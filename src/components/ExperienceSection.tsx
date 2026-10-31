import { Briefcase, Calendar, MapPin } from "lucide-react";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Senior UI/UX Designer & Consultant",
    company: "Freelance & Product Advisory",
    period: "2024 — Present",
    location: "Remote / Global",
    type: "Contract & Client Work",
    description:
      "Spearheading end-to-end interface design, design system governance, and digital UX strategy for high-growth businesses and international startups.",
    highlights: [
      "Designed conversion-focused e-commerce storefronts (JEYANCIE Beauty, ZAYNAH, The Petrait) elevating product discovery.",
      "Architected clean mobile interfaces and telemetry dashboards (EV Power, Mednova Healthcare Management).",
      "Delivered comprehensive UX audits and heuristic evaluations to optimize user flows and eliminate usability friction.",
    ],
  },
  {
    role: "UI/UX & Digital Product Designer",
    company: "Digital Studio & Independent Collaborations",
    period: "2022 — 2024",
    location: "Remote",
    type: "Full-cycle Product Design",
    description:
      "Collaborated closely with founders, engineers, and product managers to translate complex customer journeys into intuitive, accessible digital solutions.",
    highlights: [
      "Built multi-brand Figma design systems with scalable components, auto-layout variants, and WCAG accessibility standards.",
      "Conducted qualitative user interviews, usability benchmarking, and low-to-high-fidelity interactive prototyping.",
      "Crafted intuitive web platforms and dashboards for ed-tech and service businesses (Blackmon Tutoring, AEC Consultant).",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="relative scroll-mt-28 py-24 sm:py-32 px-6 md:px-10 border-t border-border">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 border-b border-border">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Career journey</p>
            <h2 className="mt-3 text-4xl font-semibold md:text-6xl">
              Work <span className="font-display text-5xl font-normal text-sky-deep md:text-7xl">experience</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-muted-foreground max-w-md text-sm md:text-base leading-relaxed">
            Two+ years delivering thoughtful web &amp; mobile solutions, leading client design initiatives, and shaping user-first digital products.
          </p>
        </div>

        <div className="mt-12 sm:mt-16 space-y-8 md:space-y-12">
          {experiences.map((exp) => (
            <div
              key={exp.role}
              className="group rounded-3xl border border-border/80 bg-card/60 dark:bg-card/30 p-7 sm:p-10 shadow-portfolio backdrop-blur-sm transition-all duration-300 hover:border-purple-500/30"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-sky-deep/20 bg-sky-soft/40 px-3.5 py-1 text-xs font-semibold text-sky-deep dark:text-sky">
                    <Briefcase className="size-3" />
                    <span>{exp.type}</span>
                  </div>
                  <h3 className="mt-4 text-2xl sm:text-3xl font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="mt-1 text-lg font-medium text-muted-foreground">
                    {exp.company}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 px-3 py-1.5">
                    <Calendar className="size-3.5" />
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 px-3 py-1.5">
                    <MapPin className="size-3.5" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                {exp.description}
              </p>

              <div className="mt-6 border-t border-border/60 pt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Key Achievements &amp; Contributions
                </p>
                <ul className="mt-4 space-y-2.5">
                  {exp.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                      <span className="mt-1.5 size-1.5 rounded-full bg-sky-deep shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

