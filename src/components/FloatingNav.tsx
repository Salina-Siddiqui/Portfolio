import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  sectionId: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#top", sectionId: "top" },
  { label: "About", href: "#about", sectionId: "about" },
  { label: "Skills", href: "#skills", sectionId: "skills" },
  { label: "Projects", href: "#work", sectionId: "work" },
  { label: "Certificates", href: "#certificates", sectionId: "certificates" },
  { label: "Experience", href: "#experience", sectionId: "experience" },
  { label: "Highlight", href: "#case-studies", sectionId: "case-studies" },
  { label: "Contact", href: "#contact", sectionId: "contact" },
];

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState<string>("skills");
  const [isDark, setIsDark] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const activeDark = savedTheme === "dark" || (!savedTheme && prefersDark);

    if (activeDark) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  // Scroll spy to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const element = document.getElementById(item.sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.sectionId);
            return;
          }
        }
      }

      // Default to top if near the top
      if (window.scrollY < 200) {
        setActiveSection("top");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, sectionId: string) => {
    e.preventDefault();
    setActiveSection(sectionId);
    setMobileMenuOpen(false);

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      {/* Desktop Floating Pill Navigation */}
      <nav
        className="pointer-events-auto hidden md:flex items-center gap-6 lg:gap-8 rounded-full border border-border/80 bg-background/85 px-7 py-3 backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300"
        aria-label="Primary navigation"
      >
        <div className="flex items-center gap-6 lg:gap-7">
          {navItems.map((item) => {
            const isActive = activeSection === item.sectionId;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.sectionId)}
                className={`text-sm tracking-tight transition-colors duration-200 relative ${
                  isActive
                    ? "font-semibold text-purple-600 dark:text-purple-400"
                    : "font-medium text-foreground/75 hover:text-foreground"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 size-1 rounded-full bg-purple-600 dark:bg-purple-400" />
                )}
              </a>
            );
          })}
        </div>

        {/* Separator */}
        <div className="h-4 w-px bg-border/60" />

        {/* Theme Toggle Button */}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
          className="group relative flex size-8 items-center justify-center rounded-full text-foreground/75 transition-colors hover:text-foreground hover:bg-accent focus:outline-none"
        >
          {isDark ? (
            <Sun className="size-4 text-amber-400 transition-transform group-hover:rotate-45" />
          ) : (
            <Moon className="size-4 transition-transform group-hover:-rotate-12" />
          )}
        </button>
      </nav>

      {/* Mobile Floating Pill Navigation */}
      <div className="pointer-events-auto md:hidden w-full max-w-sm">
        <div className="flex items-center justify-between rounded-full border border-border/80 bg-background/90 px-5 py-2.5 backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.1)]">
          <a
            href="#top"
            onClick={(e) => handleNavClick(e, "#top", "top")}
            className="font-display text-xl leading-none text-foreground font-semibold"
          >
            Salina.
          </a>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
              className="flex size-8 items-center justify-center rounded-full text-foreground/75 hover:text-foreground hover:bg-accent transition-colors"
            >
              {isDark ? <Sun className="size-4 text-amber-400" /> : <Moon className="size-4" />}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="flex size-8 items-center justify-center rounded-full text-foreground/75 hover:text-foreground hover:bg-accent transition-colors"
            >
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="mt-2 overflow-hidden rounded-2xl border border-border/80 bg-background/95 p-3 backdrop-blur-lg shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-2 gap-1.5">
              {navItems.map((item) => {
                const isActive = activeSection === item.sectionId;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href, item.sectionId)}
                    className={`flex items-center px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-purple-500/10 text-purple-600 dark:text-purple-400 font-semibold"
                        : "text-foreground/80 hover:bg-accent hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

