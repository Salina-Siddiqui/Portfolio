import type { ReactNode } from "react";

interface ToolItem {
  name: string;
  icon: ReactNode;
  category?: string;
}

const tools: ToolItem[] = [
  {
    name: "Figma",
    category: "Design & Prototyping",
    icon: (
      <div className="flex size-11 sm:size-12 items-center justify-center rounded-xl bg-pink-500/10 dark:bg-pink-500/15 p-2 shadow-xs">
        <svg viewBox="0 0 38 57" className="size-6" fill="none" aria-hidden="true">
          <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
          <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
          <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
          <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
          <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
        </svg>
      </div>
    ),
  },
  {
    name: "Adobe XD",
    category: "Interface Design",
    icon: (
      <div className="flex size-11 sm:size-12 items-center justify-center rounded-xl bg-[#470137] shadow-xs">
        <span className="font-bold text-base sm:text-lg tracking-tight text-[#FF61F6]">Xd</span>
      </div>
    ),
  },
  {
    name: "UX Research",
    category: "User Insights",
    icon: (
      <div className="flex size-11 sm:size-12 items-center justify-center rounded-xl bg-[#38BDF8] text-white shadow-xs">
        <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="10" cy="8" r="4" />
          <path d="M4 20c0-3.3 2.7-6 6-6h1" />
          <circle cx="17" cy="15" r="3" />
          <path d="m19.5 17.5 2.5 2.5" />
        </svg>
      </div>
    ),
  },
  {
    name: "Wireframing",
    category: "Information Architecture",
    icon: (
      <div className="flex size-11 sm:size-12 items-center justify-center rounded-xl bg-[#F59E0B] text-white shadow-xs">
        <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 21V9" />
          <path d="m3 3 18 18" strokeDasharray="2 2" strokeOpacity="0.4" />
        </svg>
      </div>
    ),
  },
  {
    name: "Prototyping",
    category: "Interaction Design",
    icon: (
      <div className="flex size-11 sm:size-12 items-center justify-center rounded-xl bg-[#10B981] text-white shadow-xs">
        <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect width="12" height="18" x="6" y="3" rx="2" />
          <path d="M10 17h4" />
          <path d="m14 10-3 3 1.5 1.5" />
          <circle cx="12" cy="7" r="1" fill="currentColor" />
        </svg>
      </div>
    ),
  },
  {
    name: "Maze",
    category: "Product Testing",
    icon: (
      <div className="flex size-11 sm:size-12 items-center justify-center rounded-xl bg-[#FF455B] text-white shadow-xs">
        <svg viewBox="0 0 32 32" className="size-6" fill="currentColor" aria-hidden="true">
          <path d="M21.5 9C19 9 17.5 10.5 16 12C14.5 10.5 13 9 10.5 9C6.9 9 4 11.9 4 15.5C4 19.1 6.9 22 10.5 22C13 22 14.5 20.5 16 19C17.5 20.5 19 22 21.5 22C25.1 22 28 19.1 28 15.5C28 11.9 25.1 9 21.5 9ZM10.5 19C8.6 19 7 17.4 7 15.5C7 13.6 8.6 12 10.5 12C12 12 13.3 13.1 14.5 14.5C13.3 15.9 12 19 10.5 19ZM21.5 19C20 19 18.7 17.9 17.5 16.5C18.7 15.1 20 12 21.5 12C23.4 12 25 13.6 25 15.5C25 17.4 23.4 19 21.5 19Z" />
        </svg>
      </div>
    ),
  },
  {
    name: "Adobe Photoshop",
    category: "Visual Design",
    icon: (
      <div className="flex size-11 sm:size-12 items-center justify-center rounded-xl bg-[#001E36] border border-[#31A8FF]/40 shadow-xs">
        <span className="font-bold text-base sm:text-lg tracking-tight text-[#31A8FF]">Ps</span>
      </div>
    ),
  },
  {
    name: "UI Design",
    category: "Visual Interfaces",
    icon: (
      <div className="flex size-11 sm:size-12 items-center justify-center rounded-xl bg-[#6366F1] text-white shadow-xs">
        <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect width="18" height="14" x="3" y="5" rx="2" />
          <path d="M7 9h4" />
          <path d="M7 12h2" />
          <circle cx="16" cy="12" r="2" fill="currentColor" fillOpacity="0.5" />
        </svg>
      </div>
    ),
  },
  {
    name: "Design System",
    category: "Atomic Components",
    icon: (
      <div className="flex size-11 sm:size-12 items-center justify-center rounded-xl bg-[#0EA5E9] text-white shadow-xs">
        <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect width="7" height="7" x="3" y="3" rx="1.5" />
          <rect width="7" height="7" x="14" y="3" rx="1.5" />
          <rect width="7" height="7" x="14" y="14" rx="1.5" />
          <rect width="7" height="7" x="3" y="14" rx="1.5" />
        </svg>
      </div>
    ),
  },
  {
    name: "Notion",
    category: "Documentation & Docs",
    icon: (
      <div className="flex size-11 sm:size-12 items-center justify-center rounded-xl bg-[#191919] text-white shadow-xs">
        <svg viewBox="0 0 24 24" className="size-6" fill="currentColor" aria-hidden="true">
          <path d="M4.222 3.865l13.567-1.785c1.472-.194 2.211.393 2.211 1.768v13.52c0 1.375-.739 2.161-2.211 2.355l-13.567 1.786c-1.472.194-2.222-.393-2.222-1.768V5.633c0-1.375.75-2.162 2.222-1.768zm3.606 3.123v10.024h2.463l3.882-6.529v6.529h2.463V6.988h-2.463l-3.882 6.529V6.988H7.828z" />
        </svg>
      </div>
    ),
  },
  {
    name: "VS Code",
    category: "Frontend Hand-off",
    icon: (
      <div className="flex size-11 sm:size-12 items-center justify-center rounded-xl bg-[#007ACC]/15 dark:bg-[#007ACC]/25 shadow-xs">
        <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden="true">
          <path d="M17.8 2.2 6.4 10.7 2.3 7.6a1 1 0 0 0-1.3.4l-.8 1.4a1 1 0 0 0 .3 1.3L5 13.9.5 17.3a1 1 0 0 0-.3 1.3l.8 1.4a1 1 0 0 0 1.3.4l4.1-3.1 11.4 8.5a1.2 1.2 0 0 0 1.8-.7V3a1.2 1.2 0 0 0-1.8-.8zm0 5.4v8.8L10.3 12l7.5-4.4z" fill="#007ACC" />
        </svg>
      </div>
    ),
  },
  {
    name: "Miro",
    category: "Workshops & Mapping",
    icon: (
      <div className="flex size-11 sm:size-12 items-center justify-center rounded-xl bg-[#FFD02F] text-black shadow-xs">
        <svg viewBox="0 0 24 24" className="size-6" fill="currentColor" aria-hidden="true">
          <path d="M4 17.5L7.2 6.5h3L7 17.5H4zm5.5 0L12.7 6.5h3L12.5 17.5h-3zm5.5 0L18.2 6.5h3L18 17.5h-3z" />
        </svg>
      </div>
    ),
  },
  {
    name: "Trello",
    category: "Agile Management",
    icon: (
      <div className="flex size-11 sm:size-12 items-center justify-center rounded-xl bg-[#0079BF] text-white shadow-xs">
        <svg viewBox="0 0 24 24" className="size-6" fill="currentColor" aria-hidden="true">
          <rect x="5" y="5" width="5.5" height="13" rx="1.5" />
          <rect x="13.5" y="5" width="5.5" height="9" rx="1.5" />
        </svg>
      </div>
    ),
  },
  {
    name: "Canva",
    category: "Graphics & Social",
    icon: (
      <div className="flex size-11 sm:size-12 items-center justify-center rounded-xl bg-gradient-to-tr from-[#00C4CC] via-[#5B4FE1] to-[#7D2AE8] text-white shadow-xs">
        <svg viewBox="0 0 24 24" className="size-6" fill="currentColor" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.88 14.73c-1.58.55-3.32.32-4.59-.6-1.51-1.09-2.18-2.97-1.74-4.8.44-1.84 1.95-3.23 3.82-3.53 1.45-.23 2.92.21 3.96 1.18.33.31.29.84-.08 1.1-.34.24-.81.18-1.12-.12-.7-.66-1.69-.96-2.67-.8-1.28.21-2.31 1.16-2.61 2.42-.3 1.25.16 2.53 1.18 3.27.87.63 2.05.79 3.13.41.38-.13.8.07.93.45.13.38-.07.8-.45.93l-.37.09z" />
        </svg>
      </div>
    ),
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="relative scroll-mt-28 py-24 sm:py-32 px-6 md:px-10 overflow-hidden">
      {/* Subtle brand ambient lighting */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[650px] rounded-full bg-sky/[0.08] blur-[160px] -z-10" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header matching site typography and color theme */}
        <div className="text-center">
          <p className="text-sm font-medium text-muted-foreground">Tools &amp; technologies</p>
          <div className="mt-4 inline-flex items-center justify-center gap-3">
            <span className="text-4xl sm:text-5xl select-none" role="img" aria-label="Robot icon">
              🤖
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-foreground">
              My <span className="font-display text-5xl sm:text-7xl md:text-8xl font-normal text-sky-deep">skills</span>
            </h2>
          </div>
          <p className="mt-5 text-center text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Here are some tools, methods, and technologies that I use to create modern and user-friendly digital experiences.
          </p>
        </div>

        {/* 14 Tools Grid styled to match portfolio color theme */}
        <div className="mt-14 sm:mt-18 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-3.5 sm:gap-4 md:gap-5">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="group flex items-center gap-3.5 rounded-2xl border border-border/80 bg-canvas-alt dark:bg-card p-3.5 sm:p-4 shadow-portfolio backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-deep/50 hover:shadow-portfolio"
            >
              <div className="shrink-0 transition-transform duration-300 group-hover:scale-105">
                {tool.icon}
              </div>
              <span className="text-sm sm:text-[15px] font-semibold tracking-tight text-foreground leading-tight">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

