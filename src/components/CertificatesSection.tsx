import { Award, CheckCircle2 } from "lucide-react";

interface CertificateItem {
  title: string;
  issuer: string;
  year: string;
  skills: string[];
  description: string;
}

const certificates: CertificateItem[] = [
  {
    title: "Google UX Design Professional Certificate",
    issuer: "Google / Coursera",
    year: "2023",
    description:
      "End-to-end UX curriculum covering empathy research, wireframing, usability testing, and cross-platform UI prototyping.",
    skills: ["User Research", "Wireframing", "Figma Prototyping", "Usability Benchmarking"],
  },
  {
    title: "Advanced Design Systems & Token Architecture",
    issuer: "Interaction Design Institute",
    year: "2024",
    description:
      "Specialized certification in building scalable design systems, multi-theme token workflows, and cross-team design handoff.",
    skills: ["Design Systems", "Figma Auto-Layout", "Design Tokens", "Accessibility (WCAG)"],
  },
  {
    title: "Human-Centered Interaction & UX Audit",
    issuer: "UX Design Guild",
    year: "2023",
    description:
      "Certified heuristic analysis, user journey optimization, and conversion-centered design principles for digital web apps.",
    skills: ["Heuristic Evaluation", "A/B Testing", "Information Architecture", "UX Audit"],
  },
  {
    title: "Responsive Web & Digital Product Design",
    issuer: "Digital Arts Certification",
    year: "2022",
    description:
      "Mastery of responsive typography, responsive grid frameworks, visual hierarchy, and modern component architecture.",
    skills: ["Responsive Layouts", "Typography", "Visual Identity", "Micro-interactions"],
  },
];

export function CertificatesSection() {
  return (
    <section id="certificates" className="relative scroll-mt-28 py-24 sm:py-32 px-6 md:px-10 bg-sky-soft/40 dark:bg-card/20 border-t border-border">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 border-b border-border/80">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Certified expertise</p>
            <h2 className="mt-3 text-4xl font-semibold md:text-6xl">
              Certificates &amp; <span className="font-display text-5xl font-normal text-sky-deep md:text-7xl">credentials</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-muted-foreground max-w-md text-sm md:text-base leading-relaxed">
            Continuous professional learning in design systems, human-centered methodologies, and modern UI architectures.
          </p>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.title}
              className="group rounded-3xl border border-border/80 bg-card/80 dark:bg-card/50 p-6 sm:p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-purple-500/30 hover:shadow-md hover:-translate-y-1"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  <Award className="size-6" />
                </div>
                <span className="rounded-full border border-border/80 px-3 py-1 text-xs font-semibold text-muted-foreground">
                  {cert.year}
                </span>
              </div>

              <h3 className="mt-5 text-xl sm:text-2xl font-semibold text-foreground leading-snug">
                {cert.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-sky-deep dark:text-sky">
                {cert.issuer}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {cert.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-border/60 pt-5">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 rounded-full bg-accent/60 px-3 py-1 text-xs font-medium text-foreground/80"
                  >
                    <CheckCircle2 className="size-3 text-sky-deep dark:text-sky" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

