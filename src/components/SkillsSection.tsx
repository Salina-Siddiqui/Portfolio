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
    name: "Adobe Photoshop",
    category: "Visual Design",
    icon: (
      <div className="flex size-11 sm:size-12 items-center justify-center rounded-xl bg-[#001E36] border border-[#31A8FF]/40 shadow-xs">
        <span className="font-bold text-base sm:text-lg tracking-tight text-[#31A8FF]">Ps</span>
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
  {
    name: "Claude",
    category: "AI Design Assistant",
    icon: (
      <div className="flex size-11 sm:size-12 items-center justify-center rounded-xl bg-[#D97757] text-white shadow-xs p-2.5">
        <svg viewBox="0 0 24 24" className="size-6" fill="currentColor" aria-hidden="true">
          <path d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"/>
        </svg>
      </div>
    ),
  },
  {
    name: "Lovable",
    category: "Full-Stack Builder",
    icon: (
      <div className="flex size-11 sm:size-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#FF3366] via-[#FF5E8E] to-[#7928CA] text-white shadow-xs p-2.5">
        <svg viewBox="0 0 24 24" className="size-6" fill="currentColor" aria-hidden="true">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </div>
    ),
  },
  {
    name: "Antigravity IDE",
    category: "Agentic Development",
    icon: (
      <div className="flex size-11 sm:size-12 items-center justify-center rounded-xl bg-gradient-to-tr from-[#1E1B4B] via-[#4338CA] to-[#06B6D4] text-white shadow-xs p-2">
        <svg viewBox="0 0 113 113" className="size-6" fill="currentColor" aria-hidden="true">
          <path d="M89.6992 93.695C94.3659 97.195 101.366 94.8617 94.9492 88.445C75.6992 69.7783 79.7825 18.445 55.8659 18.445C31.9492 18.445 36.0325 69.7783 16.7825 88.445C9.78251 95.445 17.3658 97.195 22.0325 93.695C40.1159 81.445 38.9492 59.8617 55.8659 59.8617C72.7825 59.8617 71.6159 81.445 89.6992 93.695Z"/>
        </svg>
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
          <h2 className="mt-4 text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-foreground">
            My <span className="font-display text-5xl sm:text-7xl md:text-8xl font-normal text-sky-deep">skills</span>
          </h2>
          <p className="mt-5 text-center text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Here are some tools, methods, and technologies that I use to create modern and user-friendly digital experiences.
          </p>
        </div>

        {/* Tools Grid styled to match portfolio color theme */}
        <div className="mt-12 sm:mt-16 grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-3.5 sm:gap-4 max-w-6xl mx-auto">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="group flex min-h-[72px] items-center gap-3.5 rounded-2xl border border-border/80 bg-card p-3.5 sm:p-4 shadow-portfolio backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-border-strong"
            >
              <div className="shrink-0 transition-transform duration-300 group-hover:scale-105">
                {tool.icon}
              </div>
              <span className="text-sm sm:text-[15px] font-semibold tracking-tight text-foreground leading-snug">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
