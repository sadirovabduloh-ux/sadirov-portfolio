import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Menu, Sparkles, X } from "lucide-react";
import { Button } from "./components/ui/button";
import { Tag } from "./components/ui/tag";
import { cn } from "./lib/utils";
import portraitImage from "./assets/abdulloh-portrait.jpg";
import {
  aboutCards,
  capabilityPillars,
  contacts,
  heroStats,
  journey,
  links,
  navItems,
  projects,
  skillGroups,
} from "./data/portfolio";

const sectionMotion = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const aosMotion = {
  up: {
    hidden: { opacity: 0, y: 34, scale: 0.96 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  },
  left: {
    hidden: { opacity: 0, x: -42, rotateY: -8 },
    visible: (delay = 0) => ({
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.82,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  },
  right: {
    hidden: { opacity: 0, x: 42, rotateY: 8 },
    visible: (delay = 0) => ({
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.82,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  },
};

function SectionHeading({ eyebrow, title, text }) {
  return (
    <motion.div
      variants={sectionMotion}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="max-w-4xl"
    >
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/8 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.24em] text-cyan-100/85 sm:px-4 sm:text-xs sm:tracking-[0.28em]">
        <Sparkles className="h-3.5 w-3.5" />
        {eyebrow}
      </div>
      <h2 className="max-w-5xl text-[2rem] font-semibold leading-[1.04] tracking-[-0.05em] text-white sm:text-[2.6rem] lg:text-5xl">
        {title}
      </h2>
      <p className="mt-7 pt-7 max-w-3xl text-[15px] leading-7 text-slate-300 sm:mt-8 sm:text-lg sm:leading-8">
        {text}
      </p>
    </motion.div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-slate-950/65 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src="/sadirov-logo.svg"
            alt="sadirov.dev logo"
            className="h-10 w-10 rounded-2xl shadow-[0_0_24px_rgba(56,189,248,0.18)] sm:h-11 sm:w-11"
          />
          <div className="flex flex-col">
            <span className="text-[12px] font-medium uppercase tracking-[0.22em] text-slate-100 sm:text-sm sm:tracking-[0.28em]">
              sadirov.dev
            </span>
            <span className="hidden text-[11px] text-slate-400 sm:block">Fullstack Developer • AI/ML Engineer</span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild variant="secondary" size="sm">
            <a href={links.email}>Let’s Talk</a>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/8 px-4 py-5 sm:px-6 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-slate-200"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_30%),radial-gradient(circle_at_85%_12%,rgba(59,130,246,0.16),transparent_18%)]" />
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:120px_120px]" />
      <div className="relative mx-auto max-w-[1500px] px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-10 lg:pb-28 lg:pt-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 xl:gap-16">
          <motion.div
            variants={sectionMotion}
            initial="hidden"
            animate="visible"
            className="scene-3d max-w-4xl"
          >
            <div className="ios-pill layer-pop-soft mb-5 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] uppercase tracking-[0.22em] text-cyan-100/80 sm:mb-6 sm:px-4 sm:text-xs sm:tracking-[0.3em]">
              <Sparkles className="h-3.5 w-3.5" />
              Fullstack Developer • AI/ML Engineer
            </div>
            <h1 className="layer-pop max-w-5xl text-[3rem] font-semibold leading-[0.98] tracking-[-0.065em] text-white sm:text-[4.2rem] lg:text-[5.7rem] xl:text-[6.5rem]">
              Building scalable
              <span className="block bg-[linear-gradient(120deg,#f8fafc_0%,#a5f3fc_35%,#38bdf8_100%)] bg-clip-text text-transparent">
                AI-powered web systems
              </span>
              with premium product taste.
            </h1>
            <p className="layer-pop-soft mt-6 pt-7 max-w-2xl text-base leading-7 text-slate-300 sm:mt-7 sm:text-lg sm:leading-8 lg:text-xl">
              Abdulloh Sadirov engineers modern digital experiences at the intersection of
              frontend precision, backend architecture, and intelligent application design.
            </p>
            <div className="layer-pop-soft mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a href="#projects" className="!text-slate-950">
                  Explore Projects
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
                <a href={links.resume} target="_blank" rel="noreferrer">
                  View Resume
                  <FileText className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            variants={sectionMotion}
            initial="hidden"
            animate="visible"
            custom={0.12}
            className="scene-3d relative mx-auto w-full max-w-[620px]"
          >
            <div className="ios-card ios-shine tilt-panel hero-float relative rounded-[1.8rem] p-3 sm:rounded-[2.2rem] sm:p-4">
              <div className="absolute inset-0 rounded-[2.2rem] bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_35%)]" />
              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 sm:rounded-[1.8rem]">
                <img
                  src={portraitImage}
                  alt="Portrait of Abdulloh Sadirov"
                  className="h-[420px] w-full object-cover object-[center_34%] sm:h-[520px]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.08),rgba(2,6,23,0.55)_60%,rgba(2,6,23,0.9)_100%)]" />
                <div className="layer-pop-soft absolute left-0 right-0 top-0 flex items-center justify-between p-3 sm:p-5">
                  <div className="ios-pill rounded-full px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-cyan-100/75 sm:px-4 sm:text-xs sm:tracking-[0.28em]">
                    Abdulloh Sadirov
                  </div>
                  <div className="flex gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400/90" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300/90" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/90" />
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-5">
                  <div className="ios-card layer-pop rounded-[1.25rem] p-4 sm:rounded-[1.5rem] sm:p-5">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-cyan-100/60 sm:text-xs sm:tracking-[0.28em]">Developer Identity</p>
                    <h3 className="mt-2 text-xl font-medium leading-tight text-white sm:text-2xl">Fullstack Developer • AI/ML Engineer</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-300 sm:leading-7">
                      Building modern interfaces, scalable backend systems, and intelligent web experiences with a premium product mindset.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="scene-3d mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {heroStats.map((item, index) => (
            <motion.div
              key={item.value}
              variants={sectionMotion}
              initial="hidden"
              animate="visible"
              custom={0.18 + index * 0.08}
              className="ios-card ios-shine tilt-panel tilt-panel-soft grid-float rounded-[1.75rem] p-5"
              style={{ animationDelay: `${index * 0.6}s` }}
            >
              <p className="text-lg font-medium tracking-[-0.03em] text-white">{item.value}</p>
              <p className="mt-2 text-sm leading-7 text-slate-400">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="About"
          title="A premium engineering identity built around systems, clarity, and intelligent products."
          text="This portfolio is designed to position Abdulloh as more than a coder: a builder who understands interface craft, scalable architecture, modern delivery, and the product value of AI."
        />

        <div className="mt-12 grid gap-6 lg:mt-14 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            variants={aosMotion.left}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="ios-card rounded-[1.6rem] p-5 sm:rounded-[2rem] sm:p-8"
          >
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-100/70">Engineering Philosophy</p>
            <p className="mt-6 text-lg leading-8 text-slate-200">
              Abdulloh Sadirov is focused on building modern digital systems where frontend
              elegance, backend structure, and AI capability work together. The goal is not just
              to ship interfaces, but to create dependable products that feel premium, scale
              cleanly, and communicate technical confidence immediately.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {capabilityPillars.map((item) => (
                <div key={item.title} className="ios-card rounded-[1.4rem] p-4">
                  <div className="ios-pill rounded-2xl p-3 text-cyan-200 w-fit">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-medium text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

            <div className="grid gap-6 sm:grid-cols-2">
            {aboutCards.map((item, index) => (
              <motion.div
                key={item.title}
                variants={aosMotion.right}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index * 0.08}
                className="ios-card ios-shine rounded-[1.5rem] p-5 sm:rounded-[1.75rem] sm:p-6"
              >
                <div className="ios-pill inline-flex rounded-2xl p-3 text-cyan-200">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-medium text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Skills"
          title="A fullstack capability stack shaped for modern product teams."
          text="The skill architecture is separated the way founders and recruiters actually think: frontend strength, backend systems, data, deployment, AI capability, and everyday shipping tools."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.title}
              variants={aosMotion.up}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              custom={index * 0.06}
              className="ios-card ios-shine rounded-[1.5rem] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/25 sm:rounded-[1.9rem] sm:p-6"
            >
              <div className="flex items-center justify-between">
                <div className="ios-pill rounded-2xl p-3 text-cyan-200">
                  <group.icon className="h-5 w-5" />
                </div>
                <span className="text-xs uppercase tracking-[0.25em] text-slate-500">
                  {group.skills.length} items
                </span>
              </div>
              <h3 className="mt-5 text-2xl font-medium text-white">{group.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{group.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work framed like production systems, not student demos."
          text="Each concept is presented as a startup-ready build: clear purpose, mature stack, premium interface direction, and technical depth across the full product surface."
        />

        <div className="scene-3d mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={index % 2 === 0 ? aosMotion.left : aosMotion.right}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.16 }}
              custom={index * 0.07}
              className="ios-card ios-shine tilt-panel overflow-hidden rounded-[1.6rem] sm:rounded-[2rem]"
            >
              <div className={cn("relative overflow-hidden p-5 sm:p-7", `bg-gradient-to-br ${project.accent}`)}>
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(2,6,23,0.72))]" />
                <div className="layer-pop relative">
                  <div className="flex items-center justify-between">
                    <Tag className="border-cyan-300/20 bg-cyan-300/10 text-cyan-100">{project.type}</Tag>
                    <project.icon className="h-5 w-5 text-cyan-200" />
                  </div>
                  {project.previewVariant === "edutc" ? (
                    <div className="mt-10 rounded-[1.35rem] border border-white/10 bg-slate-950/55 p-4 backdrop-blur sm:mt-14 sm:rounded-[1.75rem] sm:p-5">
                      <div className="h-[150px] overflow-hidden rounded-[1.05rem] border border-white/10 bg-[#101826] shadow-[0_18px_50px_rgba(2,8,23,0.45)] sm:rounded-[1.25rem]">
                        <div className="flex items-center justify-between border-b border-white/8 bg-white/[0.03] px-3 py-2.5">
                          <div className="flex items-center gap-2">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[linear-gradient(180deg,#4cc9f0,#1d4ed8)] text-[10px] font-semibold text-white">
                              E
                            </div>
                            <span className="text-[11px] font-medium text-white sm:text-xs">EduTC</span>
                          </div>
                          <div className="hidden items-center gap-2 text-[10px] text-slate-400 sm:flex">
                            <span className="rounded-full bg-white/[0.04] px-2 py-1 text-sky-300">Главная</span>
                            <span>Курсы</span>
                            <span>О нас</span>
                          </div>
                          <div className="rounded-full bg-[#2383ff] px-2.5 py-1 text-[10px] font-medium text-white">
                            Войти
                          </div>
                        </div>
                        <div className="relative bg-[radial-gradient(circle_at_75%_25%,rgba(125,211,252,0.22),transparent_18%),linear-gradient(180deg,#0f1724,#101826)] p-3 sm:p-4">
                          <div className="grid gap-3 sm:grid-cols-[1.05fr_0.95fr]">
                            <div className="min-w-0">
                              <div className="inline-flex rounded-full border border-white/8 bg-white/[0.03] px-2.5 py-1 text-[10px] text-slate-300">
                                Плавный iPhone-style интерфейс
                              </div>
                              <h4 className="mt-3 text-[1.2rem] font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:text-[1.6rem]">
                                Образование,
                                <span className="block text-[#2f95ff]">которое feels native</span>
                              </h4>
                              <p className="mt-3 max-w-xs text-[10px] leading-5 text-slate-300 sm:text-[11px]">
                                Языки, IT и понятный учебный путь в интерфейсе, который ощущается как аккуратное мобильное приложение.
                              </p>
                              <div className="mt-4 flex flex-wrap gap-2">
                                <div className="rounded-full bg-[#2383ff] px-3 py-1.5 text-[10px] font-medium text-white shadow-[0_10px_24px_rgba(35,131,255,0.3)]">
                                  Открыть курсы
                                </div>
                                <div className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-[10px] text-slate-200">
                                  Лидерборд
                                </div>
                              </div>
                            </div>
                            <div className="rounded-[1rem] border border-white/8 bg-[linear-gradient(180deg,#121a28,#0f1724)] p-3">
                              <div className="rounded-[0.9rem] bg-[radial-gradient(circle_at_top_right,rgba(125,211,252,0.4),transparent_24%),radial-gradient(circle_at_left,rgba(244,114,182,0.22),transparent_18%),linear-gradient(180deg,#101826,#131c2c)] p-3">
                                <div className="flex items-start justify-between gap-2">
                                  <div>
                                    <p className="text-[9px] uppercase tracking-[0.24em] text-slate-400">EDUTC</p>
                                    <h5 className="mt-1.5 text-sm font-medium text-white">Liquid Learning</h5>
                                  </div>
                                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[9px] text-white">
                                    Glass UI
                                  </span>
                                </div>
                                <div className="mt-4 rounded-[0.8rem] bg-black/12 p-2.5">
                                  <div className="flex items-center justify-between text-[10px] text-slate-300">
                                    <span>Активное обучение</span>
                                    <span className="text-sky-300">72%</span>
                                  </div>
                                  <div className="mt-2 h-1.5 rounded-full bg-white/10">
                                    <div className="h-1.5 w-[72%] rounded-full bg-[linear-gradient(90deg,#2dd4bf,#2563eb,#818cf8)]" />
                                  </div>
                                  <p className="mt-3 text-xs font-medium text-white">Frontend Essentials</p>
                                </div>
                                <div className="mt-3 grid grid-cols-2 gap-2">
                                  <div className="rounded-[0.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(56,189,248,0.12),rgba(15,23,42,0.3))] p-2.5 text-white">
                                    <p className="text-sm">🗣️</p>
                                    <p className="mt-3 text-[10px] font-medium">Языки</p>
                                  </div>
                                  <div className="rounded-[0.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(167,139,250,0.14),rgba(15,23,42,0.26))] p-2.5 text-white">
                                    <p className="text-sm">💻</p>
                                    <p className="mt-3 text-[10px] font-medium">IT</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="pointer-events-none absolute inset-x-8 bottom-0 h-12 rounded-full bg-cyan-300/10 blur-2xl" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-10 rounded-[1.35rem] border border-white/10 bg-slate-950/55 p-4 backdrop-blur sm:mt-14 sm:rounded-[1.75rem] sm:p-5">
                      <div className="space-y-3">
                        <div className="h-2 w-2/3 rounded-full bg-white/12" />
                        <div className="h-2 w-full rounded-full bg-white/10" />
                        <div className="h-2 w-4/5 rounded-full bg-white/10" />
                        <div className="mt-6 grid grid-cols-3 gap-3">
                          <div className="h-18 rounded-2xl bg-white/6" />
                          <div className="h-18 rounded-2xl bg-white/6" />
                          <div className="h-18 rounded-2xl bg-white/6" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="layer-pop-soft p-5 sm:p-7">
                <h3 className="text-xl font-medium text-white sm:text-2xl">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{project.summary}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Button asChild className="w-full sm:w-auto">
                    <a href={project.demoLink ?? links.live}>
                      Live Demo
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="secondary" className="w-full sm:w-auto">
                    <a href="#contact">Discuss Project</a>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section id="journey" className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Journey"
          title="A growth path from interface craft to fullstack systems and AI."
          text="The timeline is intentionally simple and mature: it shows progression, not noise. That makes the technical narrative easier for employers and collaborators to trust."
        />

        <div className="relative mt-12 sm:mt-14">
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-cyan-300/45 via-white/10 to-transparent md:left-1/2" />
          <div className="grid gap-8">
            {journey.map((item, index) => (
              <motion.div
                key={item.title}
                variants={index % 2 === 0 ? aosMotion.left : aosMotion.right}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.18 }}
                custom={index * 0.07}
                className={cn(
                  "ios-card ios-shine relative ml-10 rounded-[1.5rem] p-5 md:ml-0 md:w-[calc(50%-2rem)] md:p-6 md:rounded-[1.8rem]",
                  index % 2 === 0 ? "md:mr-auto" : "md:ml-auto",
                )}
              >
                <span
                  className={cn(
                    "absolute top-8 h-3 w-3 rounded-full border border-cyan-300/50 bg-slate-950 shadow-[0_0_16px_rgba(103,232,249,0.7)] md:h-3.5 md:w-3.5",
                    "left-[-1.65rem] md:left-auto",
                    index % 2 === 0 ? "md:right-[-2.2rem]" : "md:left-[-2.2rem]",
                  )}
                />
                <p className="text-xs uppercase tracking-[0.28em] text-cyan-100/60">{item.year}</p>
                <h3 className="mt-3 text-2xl font-medium text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.points.map((point) => (
                    <Tag key={point}>{point}</Tag>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Contact"
          title="Open to ambitious teams, products, and AI-focused builds."
          text="The final section is intentionally clean and direct. It should feel like the start of a serious product conversation, not just a social footer."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            variants={aosMotion.left}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="ios-card rounded-[1.6rem] p-5 sm:rounded-[2rem] sm:p-8"
          >
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-100/65">Let’s build</p>
            <h3 className="mt-5 max-w-xl text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
              Fullstack architecture, premium frontend execution, and AI capability in one identity.
            </h3>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              If you want someone who can build the interface, structure the backend, think through
              delivery, and make AI practical inside the product, Abdulloh is the kind of profile
              this portfolio is built to communicate.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild className="w-full sm:w-auto">
                <a href={links.email}>
                  Start a Conversation
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="secondary" className="w-full sm:w-auto">
                <a href={links.contact}>Telegram</a>
              </Button>
            </div>
          </motion.div>

          <div className="grid gap-4">
            {contacts.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                variants={aosMotion.right}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index * 0.07}
                className="ios-card ios-shine flex items-center justify-between gap-4 rounded-[1.25rem] px-4 py-4 transition duration-300 hover:border-cyan-300/25 sm:rounded-[1.5rem] sm:px-5"
              >
                <div className="flex items-center gap-4">
                  <div className="ios-pill rounded-2xl p-3 text-cyan-200">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">{item.label}</p>
                    <p className="text-base font-medium text-white">{item.value}</p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-slate-500" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/8 py-8">
      <div className="mx-auto flex max-w-[1500px] flex-col items-center justify-between gap-3 px-4 text-center text-sm text-slate-500 sm:flex-row sm:px-6 sm:text-left lg:px-10">
        <p>sadirov.dev © 2026</p>
        <p>Fullstack Developer • AI/ML Engineer • Web Systems Builder</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="relative overflow-x-hidden bg-transparent text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
