import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Check,
  Copy,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import aecImage from "@/assets/aec-new.jpg";
import albionshireImage from "@/assets/albionshire-new.webp";
import caseBranding from "@/assets/branding-case-cover.jpg.asset.json";
import caseDashboardGreen from "@/assets/sales-dashboard-green.jpg.asset.json";
import caseDashboardPurple from "@/assets/sales-dashboard-purple.jpg.asset.json";
import caseDuolingo from "@/assets/duolingo-case-cover.jpg.asset.json";
import caseSoulRoutes from "@/assets/soul-routes-case-cover.jpg.asset.json";
import caseStreaming from "@/assets/disney-hotstar-case-cover.jpg.asset.json";
import chilternImage from "@/assets/chiltern-new.jpg";
import caseKincare from "@/assets/kincare-case-cover.jpg.asset.json";
import jeyancieImage from "@/assets/jeyancie-new.jpg";
import reddynaturalsImage from "@/assets/reddynaturals-new.jpg";
import salinaPortrait from "@/assets/salina-portrait.png.asset.json";
import urbanshireImage from "@/assets/urbanshire-new.webp";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Salina Siddiqui — UI/UX Designer Portfolio" },
      {
        name: "description",
        content:
          "Salina Siddiqui is a UI/UX designer with two years of experience creating websites, products, UX audits, and digital case studies.",
      },
      { property: "og:title", content: "Salina Siddiqui — UI/UX Designer Portfolio" },
      {
        property: "og:description",
        content: "Selected client work and UX case studies by UI/UX designer Salina Siddiqui.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const projects = [
  {
    number: "01",
    title: "JEYANCIE Beauty",
    type: "Beauty · E-commerce",
    description: "Premium skincare e-commerce experience built around calm product storytelling.",
    image: jeyancieImage,
  },
  {
    number: "02",
    title: "Chiltern Global",
    type: "Defence · Equipment platform",
    description: "Specialist defence and police equipment platform with a dense, dependable catalogue.",
    image: chilternImage,
  },
  {
    number: "03",
    title: "AEC Consultant",
    type: "Education · Consultancy",
    description: "UK university admissions and education guidance platform for prospective students.",
    image: aecImage,
  },
  {
    number: "04",
    title: "Albion Shire",
    type: "Property · Real estate",
    description: "A professional property and real estate website experience built around clear discovery.",
    image: albionshireImage,
  },
  {
    number: "05",
    title: "Urbanshine Cleaner",
    type: "Services · Cleaning",
    description: "A clear, trustworthy digital home for a professional cleaning service.",
    image: urbanshireImage,
  },
  {
    number: "06",
    title: "Reddy Naturals",
    type: "Wellness · E-commerce",
    description: "Plant-based wellness e-commerce experience focused on clarity and conversion.",
    image: reddynaturalsImage,
  },
];

const navItems = [
  ["Work", "#work"],
  ["Case Studies", "#case-studies"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

const caseStudies = [
  {
    number: "01",
    title: "Duolingo UX Audit",
    type: "UX Audit · Product Analysis",
    description: "A focused review of Duolingo’s learning experience, usability patterns, and opportunities for improvement.",
    href: "https://www.behance.net/gallery/211873157/Duolingo-UX-audit",
    image: caseDuolingo.url,
    tone: "bg-sky-soft text-ink",
  },
  {
    number: "02",
    title: "Disney+ Hotstar",
    type: "UX Case Study · Streaming",
    description: "An end-to-end case study exploring a clearer and more engaging entertainment experience.",
    href: "https://www.behance.net/gallery/212924887/UX-Case-study-of-Disney-Hotstar",
    image: caseStreaming.url,
    tone: "bg-ink text-paper",
  },
  {
    number: "03",
    title: "Sales Dashboard",
    type: "Product Design · Data",
    description: "A sales dashboard designed to make business performance easier to scan, understand, and act on.",
    href: "https://www.behance.net/gallery/212499425/Dashboard-Sales-case-study",
    image: caseDashboardGreen.url,
    tone: "bg-paper text-ink",
  },
  {
    number: "04",
    title: "Business Analytics Dashboard",
    type: "Dashboard Design · Analytics",
    description: "A distinct analytics dashboard that organizes complex business insights into a focused visual workspace.",
    href: "https://www.behance.net/gallery/212499425/Dashboard-Sales-case-study",
    image: caseDashboardPurple.url,
    tone: "bg-ink text-paper",
  },
  {
    number: "05",
    title: "Kincare",
    type: "UX Case Study · Family Care",
    description: "A thoughtful digital care experience shaped around families, everyday support, and peace of mind.",
    href: "https://www.behance.net/gallery/213930253/Kincare-family-care",
    image: caseKincare.url,
    tone: "bg-sky-soft text-ink",
  },
  {
    number: "06",
    title: "Brand Identity",
    type: "Branding · Visual Design",
    description: "A visual identity exploration connecting a distinctive brand voice with a cohesive design language.",
    href: "https://www.behance.net/gallery/215777899/Branding",
    image: caseBranding.url,
    tone: "bg-ink text-paper",
  },
  {
    number: "07",
    title: "Soul Routes",
    type: "Luxury Travel · Web Design",
    description: "A refined travel website balancing immersive destinations with a calm, premium booking journey.",
    href: "https://www.behance.net/gallery/254268279/Soul-Routes-Luxury-Travel-Website",
    image: caseSoulRoutes.url,
    tone: "bg-paper text-ink",
  },
];

const heroLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/salina-siddiqui-57a286324/" },
  { label: "Behance", href: "https://www.behance.net/salinasiddiqui" },
  { label: "Email", href: "mailto:salinasiddiqui5@gmail.com" },
];

const skills = ["Figma", "Canva", "Wireframing", "Prototyping", "User Research", "Usability Testing", "UI Design"];
const services = ["Product strategy", "UX research & testing", "Interface design", "Design systems"];

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("salinasiddiqui5@gmail.com");
      setCopiedEmail(true);
      toast.success("Email copied to clipboard!", {
        description: "salinasiddiqui5@gmail.com",
      });
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  return (
    <main className="bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">
          <a href="#top" className="font-display text-3xl leading-none" aria-label="Salina Siddiqui, home">
            Salina.
          </a>
          <div className="hidden items-center gap-9 text-sm font-medium text-muted-foreground md:flex">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} className="transition-colors hover:text-foreground">{label}</a>
            ))}
          </div>
          <Button asChild variant="portfolio" className="hidden h-11 px-6 text-sm md:inline-flex">
            <a href="mailto:salinasiddiqui5@gmail.com">Let&apos;s talk <ArrowUpRight /></a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </nav>
        {menuOpen && (
          <div className="border-t border-border bg-background px-6 py-4 md:hidden">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)} className="block py-3 text-lg">{label}</a>
            ))}
          </div>
        )}
      </header>

      <section id="top" className="hero-editorial relative overflow-hidden text-ink">
        <div className="hero-sweep pointer-events-none absolute inset-x-0 bottom-0 h-[60%]" />
        <div className="relative mx-auto flex max-w-[1500px] flex-col px-4 pb-8 pt-8 md:min-h-[820px] md:px-8 md:pb-12 md:pt-14">
          <h1 className="hero-name-row relative z-20 flex w-full items-baseline justify-center gap-[0.1em] font-semibold">
            <span className="hero-outline">SALINA</span>
            <span className="text-ink">SIDDIQUI</span>
          </h1>

          <div className="pointer-events-none z-10 mt-4 flex justify-center md:absolute md:inset-x-0 md:bottom-0 md:mt-0">
            <img
              src={salinaPortrait.url}
              alt="Salina Siddiqui, UI/UX designer"
              width={768}
              height={768}
              fetchPriority="high"
              className="hero-person h-[300px] w-auto max-w-none object-contain object-bottom md:h-[620px]"
            />
          </div>

          <div className="relative z-20 mt-8 grid items-end gap-8 md:mt-auto md:grid-cols-[1fr_auto]">

            <div className="max-w-[17rem]">
              <p className="text-2xl font-semibold md:text-3xl">
                UI/UX <span className="font-display text-[1.25em] font-normal text-sky-deep">designer</span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink/60 md:text-base">
                Designing digital products that are clear, usable and conversion focused.
              </p>
              <a
                href="mailto:salinasiddiqui5@gmail.com"
                className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-6 text-sm font-medium text-paper transition-colors hover:bg-sky-deep"
              >
                Let&apos;s collaborate <ArrowUpRight className="size-4" />
              </a>
            </div>

            <div className="flex flex-wrap gap-3 md:flex-col md:items-end">
              {heroLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex min-h-11 min-w-[8.5rem] items-center justify-between gap-2 rounded-full border border-ink/15 bg-paper/80 px-5 text-sm font-medium backdrop-blur-sm transition-colors hover:bg-ink hover:text-paper"
                >
                  {label} <ArrowUpRight className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>


      <section className="overflow-hidden border-y border-ink/15 bg-ink py-5 text-paper" aria-label="Design skills">
        <div className="skills-track flex w-max items-center gap-8">
          {[...skills, ...skills].map((skill, index) => (
            <div key={`${skill}-${index}`} className="flex items-center gap-8" aria-hidden={index >= skills.length}>
               <span className="whitespace-nowrap text-sm font-semibold">{skill}</span>
              <span className="size-2 rounded-full bg-sky" />
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
        <div className="flex items-end justify-between border-b border-border pb-7">
          <div>
             <p className="text-sm font-medium text-muted-foreground">Client work</p>
            <h2 className="mt-4 text-5xl font-semibold md:text-7xl">Selected <span className="font-display text-6xl font-normal text-sky-deep md:text-8xl">projects</span></h2>
          </div>
           <span className="hidden text-sm text-muted-foreground sm:block">01—06</span>
        </div>

        <div className="space-y-24 pt-20 md:space-y-36 md:pt-28">
          {projects.map((project, index) => (
            <article key={project.title} className="group grid gap-9 md:grid-cols-12 md:items-center md:gap-14">
              <div className={`overflow-hidden rounded-3xl bg-canvas-alt shadow-portfolio md:col-span-7 ${index % 2 ? "md:order-2" : ""}`}>
                <img src={project.image} alt={`${project.title} website interface design`} width={1600} height={1000} loading="lazy" className="aspect-[8/5] w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]" />
              </div>
              <div className="md:col-span-5">
                 <span className="text-sm font-semibold text-sky-deep">{project.number} / 06</span>
                 <p className="mt-4 text-sm text-muted-foreground">{project.type}</p>
                <h3 className="mt-4 text-3xl font-semibold md:text-5xl">{project.title}</h3>
                <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">{project.description}</p>
                 <Button asChild variant="portfolio" className="mt-8 h-12 px-6 text-sm">
                  <a href="#contact">View live project <ArrowUpRight /></a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="case-studies" className="bg-ink px-4 py-24 text-paper md:px-8 md:py-36">
        <div className="mx-auto mb-16 flex max-w-7xl flex-col gap-8 md:mb-24 md:flex-row md:items-end md:justify-between">
          <div>
             <p className="text-sm font-medium text-paper/60">Research &amp; process</p>
            <h2 className="mt-5 text-5xl font-semibold md:text-7xl">Selected <span className="font-display text-6xl font-normal text-sky md:text-8xl">case studies</span></h2>
          </div>
           <a href="#case-study-01" className="inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-paper/70">Explore the studies <ArrowDown className="size-4" /></a>
        </div>

        <div className="mx-auto max-w-7xl space-y-8 md:space-y-12">
          {caseStudies.map((study) => (
            <article id={`case-study-${study.number}`} key={study.title} className={`case-card overflow-hidden rounded-[2rem] border border-paper/15 shadow-portfolio ${study.tone}`}>
              <div className="grid md:min-h-[580px] md:grid-cols-[0.9fr_1.1fr]">
                 <div className="relative flex flex-col justify-center p-7 text-center md:p-12 lg:p-16">
                   <div className="absolute left-7 right-7 top-7 flex items-center justify-between text-sm font-medium opacity-65 md:left-12 md:right-12 md:top-12 lg:left-16 lg:right-16 lg:top-16">
                    <span>Case study</span><span>{study.number} / 07</span>
                  </div>
                   <div className="mx-auto mt-20 max-w-xl md:mt-0">
                     <p className="text-sm font-medium opacity-65">{study.type}</p>
                    <h3 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">{study.title}</h3>
                    <p className="mt-5 max-w-lg leading-relaxed opacity-70">{study.description}</p>
                     <a href={study.href} target="_blank" rel="noreferrer" className="mt-8 inline-flex min-h-11 items-center gap-3 border-b border-current text-sm font-semibold" aria-label={`View ${study.title} case study on Behance`}>
                      View on Behance <ArrowUpRight className="size-4" />
                    </a>
                  </div>
                </div>
                <div className="group relative m-3 min-h-[280px] overflow-hidden rounded-[1.4rem] md:m-4 md:min-h-0">
                  <img src={study.image} alt={`${study.title} case study cover`} width={1400} height={900} loading="lazy" className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="bg-sky-soft">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-2 md:px-10 md:py-36">
          <div>
             <p className="text-sm font-medium text-ink/55">About me</p>
            <h2 className="mt-5 text-5xl font-semibold leading-tight md:text-7xl">Curious by <span className="font-display text-6xl font-normal text-sky-deep md:text-8xl">nature.</span></h2>
          </div>
          <div>
            <p className="text-xl leading-relaxed text-ink/70 md:text-2xl">I&apos;m Salina Siddiqui, a UI/UX designer with two years of experience delivering thoughtful websites and digital products across varied industries.</p>
            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-ink/20 pt-8">
               <div><strong className="text-3xl font-semibold">2+</strong><p className="mt-2 text-sm text-ink/55">Years</p></div>
               <div><strong className="text-3xl font-semibold">6</strong><p className="mt-2 text-sm text-ink/55">Projects</p></div>
               <div><strong className="text-3xl font-semibold">07</strong><p className="mt-2 text-sm text-ink/55">Studies</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
         <p className="text-sm font-medium text-muted-foreground">Ways I can help</p>
        <div className="mt-10 border-t border-border">
          {services.map((service, index) => (
            <div key={service} className="group flex min-h-24 items-center justify-between border-b border-border py-6">
              <div className="flex items-baseline gap-5"><span className="text-xs text-sky-deep">0{index + 1}</span><h3 className="text-2xl font-medium md:text-4xl">{service}</h3></div>
              <ArrowRight className="size-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          ))}
        </div>
      </section>

      <footer id="contact" className="relative overflow-hidden bg-ink text-paper py-28 md:py-40">
        {/* Subtle ambient lighting */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-sky/[0.08] blur-[160px]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />

        <div className="relative mx-auto max-w-7xl px-6 text-center md:px-10">
          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-paper/15 bg-paper/[0.04] px-4 py-1.5 text-xs font-medium text-paper/80 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span>Available for new projects</span>
          </div>

          {/* Core Headline */}
          <h2 className="mt-8 tracking-tight">
            <span className="block text-[clamp(2rem,6.4vw,6.4rem)] font-semibold leading-tight whitespace-nowrap">
              Let&apos;s make something
            </span>
            <span className="font-display block text-sky text-[clamp(3.2rem,10vw,9.5rem)] font-normal leading-[1.05] mt-1 sm:mt-2">
              worth using.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-md text-base text-paper/65 md:text-lg">
            Have a project or opportunity in mind? Let&apos;s connect.
          </p>

          {/* Interactive Email Bar */}
          <div className="mt-10 inline-flex flex-col sm:flex-row items-center gap-3 rounded-2xl border border-paper/15 bg-paper/[0.04] p-2.5 backdrop-blur-xl transition-all hover:border-sky/40">
            <a
              href="mailto:salinasiddiqui5@gmail.com"
              className="px-4 py-2 text-lg sm:text-2xl font-medium tracking-tight text-paper transition-colors hover:text-sky"
            >
              salinasiddiqui5@gmail.com
            </a>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 rounded-xl border border-paper/15 bg-paper/10 px-4 py-2.5 text-xs font-medium text-paper transition-all hover:bg-paper/20 active:scale-95"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check className="size-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="size-3.5 text-paper/80" />
                    <span>Copy</span>
                  </>
                )}
              </button>

              <a
                href="mailto:salinasiddiqui5@gmail.com"
                className="inline-flex items-center gap-1.5 rounded-xl bg-sky px-4 py-2.5 text-xs font-semibold text-ink transition-all hover:bg-sky/90 active:scale-95"
              >
                <span>Say Hello</span>
                <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-paper/60">
            <a
              href="https://www.linkedin.com/in/salina-siddiqui-57a286324/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-sky"
            >
              LinkedIn <ArrowUpRight className="size-3.5" />
            </a>
            <span className="text-paper/20">•</span>
            <a
              href="https://www.behance.net/salinasiddiqui"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-sky"
            >
              Behance <ArrowUpRight className="size-3.5" />
            </a>
          </div>

          {/* Bottom Bar */}
          <div className="mt-20 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-paper/10 pt-8 text-xs text-paper/45 md:mt-28">
            <p>© 2026 Salina Siddiqui · UI/UX Designer</p>

            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-1.5 text-paper/60 hover:text-paper transition-colors active:scale-95"
            >
              <span>Back to top</span>
              <ArrowUp className="size-3" />
            </button>
          </div>
        </div>
      </footer>
    </main>
  );
}