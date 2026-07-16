import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const COLORS = {
  sky: "oklch(0.78 0.17 175)",     // teal
  lemon: "oklch(0.72 0.22 350)",   // hot pink
  mint: "oklch(0.9 0.2 105)",      // electric lime
  coral: "oklch(0.55 0.24 295)",   // deep violet
  lilac: "oklch(0.72 0.2 45)",     // tangerine
  peach: "oklch(0.85 0.15 200)",   // cyan
  paper: "oklch(0.98 0.015 90)",   // cream
};

function Card({
  children,
  bg = COLORS.paper,
  className = "",
}: {
  children: React.ReactNode;
  bg?: string;
  className?: string;
}) {
  return (
    <div
      className={`border-4 border-black rounded-[2rem] shadow-brutal ${className}`}
      style={{ background: bg }}
    >
      {children}
    </div>
  );
}

function Chip({
  children,
  bg,
  className = "",
}: {
  children: React.ReactNode;
  bg: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-block border-2 border-black px-3 py-1 font-mono text-xs md:text-sm font-bold ${className}`}
      style={{ background: bg }}
    >
      {children}
    </span>
  );
}

function SectionTag({ children, bg }: { children: React.ReactNode; bg: string }) {
  return (
    <div
      className="inline-block border-2 border-black px-3 py-1 font-mono text-xs font-bold mb-4 shadow-brutal-sm"
      style={{ background: bg }}
    >
      {children}
    </div>
  );
}

function Portfolio() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () =>
      setTime(new Date().toLocaleTimeString("en-IN", { hour12: false }));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const nav = [
    { label: "about", href: "#about" },
    { label: "skills", href: "#skills" },
    { label: "projects", href: "#projects" },
    { label: "experience", href: "#experience" },
    { label: "contact", href: "#contact" },
  ];

  return (
    <>
      <IntroOverlay />
      <main
        className="min-h-screen px-4 py-6 md:px-10 md:py-10"
        style={{ background: COLORS.paper, animation: "hero-pop 0.7s 1.4s ease-out both" }}
      >
      <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">
        {/* NAV PILL */}
        <nav
          className="border-4 border-black rounded-full shadow-brutal flex items-center justify-between px-5 md:px-8 py-3 md:py-4"
          style={{ background: COLORS.lilac }}
        >
          <a href="#top" className="font-display italic text-2xl md:text-3xl font-bold text-white drop-shadow-[2px_2px_0_#000]">
            PORTFOLIO
          </a>
          <div className="hidden md:flex gap-1">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="font-mono text-xs font-bold px-3 py-2 border-2 border-transparent hover:border-black hover:bg-white rounded-full transition"
              >
                {n.label}()
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-black border-2 border-black flex items-center justify-center text-white font-mono text-xl"
            aria-label="Menu"
          >
            ≡
          </a>
        </nav>

        {/* HERO */}
        <section id="top">
          <Card bg={COLORS.paper} className="p-6 md:p-10">
            <div className="flex flex-col items-center text-center">
              <div
                className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-black"
              >
                 <img
                    src="images/Profile.jpeg"
                    alt="Roylin"
                    className="w-full h-full object-cover"
                  />
              </div>

              <h1 className="mt-6 font-display italic text-4xl md:text-5xl leading-none">
                ROYLIN
              </h1>
              <div
                className="mt-4 border-2 border-black rounded-full px-5 py-2 font-mono text-sm md:text-base font-bold text-white shadow-brutal-sm"
                style={{ background: "#111" }}
              >
                ENGINEERING STUDENT()
              </div>

              <div className="w-full h-[2px] bg-black my-6" />

              <div className="w-full space-y-3 text-left max-w-md mx-auto">
                <div className="flex items-center gap-3 flex-wrap">
                  <Chip bg={COLORS.lemon}>[LOCATION]</Chip>
                  <span className="font-mono text-sm md:text-base">MANGALURU, INDIA</span>
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                  <Chip bg={COLORS.mint}>[STATUS]</Chip>
                  <span className="font-mono text-sm md:text-base">4th YEAR CS AI/ML</span>
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                  <Chip bg={COLORS.sky}>[MISSION]</Chip>
                  <span className="font-mono text-sm md:text-base">Imagine. Analyze. Create.</span>
                </div>
              </div>

              <div className="w-full max-w-md mx-auto mt-6 space-y-3">
                <a
                  href="/Resume.pdf"
                  className="block border-4 border-black rounded-2xl py-4 font-mono font-bold text-lg shadow-brutal-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition"
                  style={{ background: COLORS.mint }}
                >
                  ⬇  DOWNLOAD_RESUME
                </a>
                <a
                  href="#contact"
                  className="block border-4 border-black rounded-2xl py-4 font-mono font-bold text-lg text-white shadow-brutal-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition"
                  style={{ background: COLORS.coral }}
                >
                  ✉  CONTACT ME
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-3 mt-6">
                <SocialIcon href="mailto:roylinlasrado05@gmail.com" bg={COLORS.coral} label="Email">
                  ✉
                </SocialIcon>
                <SocialIcon href="https://github.com/roylin05" bg="#111" label="GitHub" fg="white">
                  gh
                </SocialIcon>
                <SocialIcon
                  href="https://www.linkedin.com/in/roylin-lasrado-31b828284"
                  bg="#0A66C2"
                  label="LinkedIn"
                  fg="white"
                >
                  in
                </SocialIcon>
                <SocialIcon href="https://instagram.com/royliinn_" bg={COLORS.lilac} label="Instagram">
                  ig
                </SocialIcon>
                <SocialIcon href="https://substack.com/@royli05" bg={COLORS.lemon} label="Substack">
                  subs
                </SocialIcon>
              </div>
            </div>
          </Card>
        </section>

        {/* ABOUT */}
        <section id="about">
          <Card bg={COLORS.lemon} className="p-6 md:p-10">
            <SectionTag bg={COLORS.paper}>01 // ABOUT</SectionTag>
            <h2 className="font-display italic text-5xl md:text-6xl mb-6">Hi people!</h2>
            <div className="space-y-4 text-lg md:text-xl leading-relaxed">
              <p>
                I am a <Highlight>4th-year CS (AI/ML) student at Sahyadri College</Highlight>,
                Mangaluru, currently maintaining an{" "}
                <Highlight>8.96 / 10 CGPA</Highlight>. I like building things that
                <b> see, hear, and think</b> — offline-first and privacy-first.
              </p>
              <p>
                My focus sits at the intersection of{" "}
                <Highlight>applied ML, computer vision, and accessibility</Highlight>. Most
                recently I've been designing VISTA, a multimodal AI assistant that fuses
                local LLM reasoning with real-time vision and voice — nothing leaves the
                device.
              </p>
              <p>
                Outside project work, I'm <b>Outreach Lead at GDG On Campus SCEM</b>, a
                member of the <b>Sahyadri Robotics Club</b>, and an{" "}
                <b>IEEE Student Member</b>. I've mentored 100+ students through our Bridge
                Course.
              </p>
            </div>
            <div className="mt-6 border-4 border-black rounded-2xl bg-white p-4 md:p-5 font-bold text-base md:text-lg">
              🚀 Open to AI/ML Internships & Research Collaborations
            </div>

            <div
              className="mt-6 border-4 border-black rounded-xl overflow-hidden font-mono text-sm md:text-base"
              style={{ background: "#111", color: "#c8f5c8" }}
            >
              <div className="flex items-center gap-2 px-4 py-2 border-b-2 border-black" style={{ background: "#e8e8e8" }}>
                <span className="w-3 h-3 rounded-full bg-red-500 border border-black" />
                <span className="w-3 h-3 rounded-full bg-yellow-400 border border-black" />
                <span className="w-3 h-3 rounded-full bg-green-500 border border-black" />
                <span className="flex-1 text-center text-black font-bold">root@roylin:~</span>
              </div>
              <pre className="p-4 whitespace-pre-wrap">{`> whoami
roylin.lasrado — cs (ai/ml), sahyadri college
> localtime
${time || "--:--:--"} IST
> now.building
VISTA — offline multimodal ai assistant`}</pre>
            </div>
          </Card>
        </section>

        {/* SKILLS */}
        <section id="skills">
          <Card bg={COLORS.mint} className="p-6 md:p-10">
            <SectionTag bg={COLORS.paper}>02 // SKILLS</SectionTag>
            <h2 className="font-display italic text-4xl md:text-5xl mb-2">The stack.</h2>
            <p className="mb-6 font-mono text-sm md:text-base">
              Tools I actually reach for.
            </p>
            <div className="grid md:grid-cols-2 gap-4 md:gap-5">
              <SkillBlock
                title="AI / ML & GENAI"
                color={COLORS.coral}
                tags={["LLaMA", "YOLO", "BLIP", "TensorFlow", "Scikit-learn", "Keras", "NumPy", "Pandas"]}
              />
              <SkillBlock
                title="LANGUAGES"
                color={COLORS.lemon}
                tags={["Python", "C", "JavaScript", "SQL", "HTML/CSS"]}
              />
              <SkillBlock
                title="WEB DEV"
                color={COLORS.lilac}
                tags={["React.js", "Node.js", "Flask", "MongoDB"]}
              />
              <SkillBlock
                title="TOOLS & PLATFORMS"
                color={COLORS.sky}
                tags={["Git", "GitHub", "OpenCV", "VS Code", "Jupyter", "Colab"]}
              />
              <SkillBlock
                title="CORE"
                color={COLORS.peach}
                tags={["Machine Learning", "NLP", "DSA", "OOP"]}
              />
              <SkillBlock
                title="WORKING STYLE"
                color={COLORS.mint}
                tags={["Strategic Thinking", "Problem-Solving", "Collaboration", "Leadership", "Mentoring"]}
              />
            </div>
          </Card>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <Card bg={COLORS.coral} className="p-6 md:p-10">
            <SectionTag bg={COLORS.paper}>03 // PROJECTS</SectionTag>
            <h2 className="font-display italic text-4xl md:text-5xl mb-6 text-white drop-shadow-[3px_3px_0_#000]">
              Selected works.
            </h2>
            <div className="space-y-5">
              <ProjectCard
                bg={COLORS.paper}
                accent={COLORS.lilac}
                date="Feb 2026 — Present"
                status="ACTIVE"
                title="VISTA — Offline Multimodal AI Assistant"
                desc="100% offline multimodal assistant: LLaMA 3.2 for local reasoning, BLIP-2 + YOLOv8 for real-time vision, Whisper STT + Piper TTS for hands-free voice — all on local hardware."
                tags={["Python", "LLaMA 3.2", "YOLOv8", "BLIP-2", "Piper"]}
                href="https://github.com/roylin05/vista"
              />
              <ProjectCard
                bg={COLORS.paper}
                accent={COLORS.lemon}
                date="Aug 2025 — Dec 2025"
                status="COMPLETED"
                title="News2Voice — Newspaper-to-Audio"
                desc="Converts news articles and PDFs into audio. Google Cloud Vision for OCR, gTTS for speech, OpenCV preprocessing, multilingual support — for visually impaired and non-literate users."
                tags={["Python", "Google Cloud Vision", "gTTS", "OpenCV"]}
                href="https://github.com/roylin05/news2voice"
              />
              <ProjectCard
                bg={COLORS.paper}
                accent={COLORS.mint}
                date="Sept 2024 — Nov 2024"
                status="TOP 30 · VEDHA HACKATHON"
                title="Edu Ease — Accessible Learning Platform"
                desc="Full-stack web app supporting students with visual and auditory impairments. TTS, STT, visual aids, gamified adaptive learning paths, multilingual and culturally sensitive content."
                tags={["Python", "Flask", "HTML/CSS", "JS", "TTS"]}
                href="https://github.com/roylin05/EDUEASE"
              />
              
            </div>
          </Card>
        </section>

        {/* EXPERIENCE */}
        <section id="experience">
          <Card bg={COLORS.lilac} className="p-6 md:p-10">
            <SectionTag bg={COLORS.paper}>04 // EXPERIENCE</SectionTag>
            <h2 className="font-display italic text-4xl md:text-5xl mb-6">
              Leadership & experience.
            </h2>
            <div className="space-y-5">
              <ExpItem
                bg={COLORS.paper}
                date="SEP 2024 — PRESENT"
                role="Outreach Lead"
                org="Google Developer Groups (GDG) On Campus SCEM · Mangaluru"
                bullets={[
                  "Outreached 30+ students for AI/ML and web dev workshops.",
                  "Coordinated technical events, hackathons and coding competitions.",
                  "Collaborated with Google Developer Experts on GCP & Firebase sessions.",
                  "Mentored 100+ students via a bridge course on presentation, design & bot-building.",
                ]}
              />
              <ExpItem
                bg={COLORS.lemon}
                date="APR 2024 — PRESENT"
                role="Technical Member"
                org="Sahyadri Robotics Club · Mangaluru"
                bullets={[
                  "Integrated AI/ML algorithms for autonomous navigation & object detection.",
                  "Developed real-time computer vision modules with OpenCV + Python.",
                  "Participated in inter-collegiate robotics competitions.",
                ]}
              />
              <ExpItem
                bg={COLORS.mint}
                date="2026 — PRESENT"
                role="IEEE Student Member"
                org="Institute of Electrical and Electronics Engineers"
                bullets={[
                  "Engaging with IEEE technical resources, publications, and events.",
                ]}
              />
            </div>
          </Card>
        </section>

        {/* EDUCATION */}
        <section id="education">
          <Card bg={COLORS.peach} className="p-6 md:p-10">
            <SectionTag bg={COLORS.paper}>05 // EDUCATION</SectionTag>
            <h2 className="font-display italic text-4xl md:text-5xl mb-6">Education.</h2>
            <ExpItem
              bg={COLORS.paper}
              date="2023 — 2027 (EXPECTED MAR 2027)"
              role="B.E. Computer Science — AI & ML"
              org="Sahyadri College of Engineering & Management · Mangaluru"
              bullets={[
                "Current CGPA: 8.96 / 10.0",
                "Coursework: Machine Learning, NLP, DSA, OOP",
              ]}
            />
          </Card>
        </section>

        {/* ACHIEVEMENTS */}
        <section id="achievements">
          <Card bg={COLORS.paper} className="p-6 md:p-10">
            <SectionTag bg={COLORS.lemon}>06 // ACHIEVEMENTS</SectionTag>
            <h2 className="font-display italic text-4xl md:text-5xl mb-6">
              Recognition along the way.
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Cert bg={COLORS.sky} icon="✦" title="Prompt Engineering" sub="Infosys Springboard" />
              <Cert bg={COLORS.lilac} icon="◈" title="TensorFlow" sub="Infosys Springboard" />
              <Cert bg={COLORS.coral} icon="▲" title="Intro to Data Science" sub="Infosys Springboard" />
              <Cert bg={COLORS.mint} icon="★" title="Top 10 · IEEE CIS National Hackathon" sub="Selected from 30+ teams" />
              <Cert bg={COLORS.lemon} icon="♛" title="Winner · College Internal Hackathon" sub="Sahyadri College" />
              <Cert bg={COLORS.peach} icon="⬢" title="Smart India Hackathon" sub="Participant 2023 & 2024" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <Counter bg={COLORS.lemon} value="8.96" label="CGPA" />
              <Counter bg={COLORS.mint} value="3+" label="MAJOR PROJECTS" />
              <Counter bg={COLORS.coral} value="150+" label="STUDENTS REACHED" />
              <Counter bg={COLORS.lilac} value="2x" label="SIH PARTICIPATION" />
            </div>
          </Card>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <Card bg={COLORS.sky} className="p-6 md:p-10">
            <SectionTag bg={COLORS.paper}>07 // CONTACT</SectionTag>
            <h2 className="font-display italic text-4xl md:text-6xl mb-4 text-center">
              Let's build something.
            </h2>
            <p className="text-center max-w-xl mx-auto mb-8 text-base md:text-lg">
              Open to AI/ML internships, research collabs, and interesting technical problems.
              I read everything myself.
            </p>

            <div className="max-w-2xl mx-auto border-4 border-black rounded-2xl bg-white p-6 md:p-8 space-y-3">
              <ContactRow label="EMAIL" bg={COLORS.coral} value="roylinlasrado05@gmail.com" href="mailto:roylinlasrado05@gmail.com" />
              <ContactRow label="PHONE" bg={COLORS.lemon} value="+91 93537 18435" />
              <ContactRow label="GITHUB" bg={COLORS.mint} value="github.com/roylin05" href="https://github.com/roylin05" />
              <ContactRow label="LINKEDIN" bg={COLORS.lilac} value="roylin-lasrado" href="https://www.linkedin.com/in/roylin-lasrado-31b828284" />
              <ContactRow label="INSTAGRAM" bg={COLORS.peach} value="@royliinn_" href="https://instagram.com/royliinn_" />
              <ContactRow label="RESUME" bg={COLORS.sky} value="Download PDF ↗" href="/Resume.pdf" />
            </div>
          </Card>
        </section>

        <footer className="text-center py-8 font-mono text-sm font-bold">
          © 2026 ROYLIN LASRADO · BUILT WITH INTENT ✦
        </footer>
      </div>
    </main>
    </>
  );
}

function IntroOverlay() {
  const [gone, setGone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setGone(true), 2200);
    return () => clearTimeout(t);
  }, []);
  if (gone) return null;
  const letters = "ROYLIN".split("");
  const palette = [COLORS.lemon, COLORS.mint, COLORS.sky, COLORS.lilac, COLORS.coral, COLORS.peach];
  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{
        background: COLORS.paper,
        animation: "intro-slide-up 2.2s cubic-bezier(0.85,0,0.15,1) forwards",
      }}
      aria-hidden
    >
      <div className="absolute top-8 left-8 font-mono text-xs md:text-sm font-bold flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-black inline-block" style={{ animation: "spin-slow 2s linear infinite" }} />
        booting portfolio…
      </div>
      <div className="flex overflow-hidden">
        {letters.map((ch, i) => (
          <span
            key={i}
            className="font-display italic text-6xl md:text-9xl leading-none inline-block px-1"
            style={{
              color: palette[i % palette.length],
              WebkitTextStroke: "2px black",
              animation: `intro-letter 0.7s ${i * 0.09}s cubic-bezier(0.2,0.9,0.3,1.4) both`,
            }}
          >
            {ch}
          </span>
        ))}
      </div>
      <div className="mt-6 h-3 w-64 md:w-96 border-4 border-black overflow-hidden" style={{ background: "white" }}>
        <div
          className="h-full origin-left"
          style={{ background: COLORS.coral, animation: "intro-bar 1.6s 0.2s ease-out forwards" }}
        />
      </div>
      <div className="mt-4 font-mono text-xs font-bold tracking-widest">AI · ML · ENGINEER</div>
    </div>
  );
}

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="border-2 border-black px-2 py-0.5 bg-white font-bold whitespace-nowrap">
      {children}
    </span>
  );
}

function SocialIcon({
  href,
  bg,
  fg = "black",
  label,
  children,
}: {
  href: string;
  bg: string;
  fg?: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-11 h-11 md:w-12 md:h-12 rounded-lg border-2 border-black flex items-center justify-center font-mono font-bold shadow-brutal-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition"
      style={{ background: bg, color: fg }}
    >
      {children}
    </a>
  );
}

function SkillBlock({
  title,
  color,
  tags,
}: {
  title: string;
  color: string;
  tags: string[];
}) {
  return (
    <div className="border-4 border-black rounded-2xl bg-white p-5 shadow-brutal-sm">
      <div
        className="inline-block border-2 border-black px-3 py-1 font-mono text-xs font-bold mb-4"
        style={{ background: color }}
      >
        {title}
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="border-2 border-black rounded-md px-2.5 py-1 text-sm font-mono bg-white hover:-translate-y-0.5 transition"
            style={{ background: "#fafafa" }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({
  bg,
  accent,
  date,
  status,
  title,
  desc,
  tags,
  href,
}: {
  bg: string;
  accent: string;
  date: string;
  status: string;
  title: string;
  desc: string;
  tags: string[];
  href: string;
}) {
  return (
    <div
      className="border-4 border-black rounded-2xl p-5 md:p-6 shadow-brutal-sm hover:-translate-y-1 transition"
      style={{ background: bg }}
    >
      <div className="flex flex-wrap items-center gap-3 mb-3">
        <span
          className="border-2 border-black px-2 py-0.5 font-mono text-xs font-bold"
          style={{ background: accent }}
        >
          {status}
        </span>
        <span className="font-mono text-xs">{date}</span>
      </div>
      <h3 className="font-display italic text-2xl md:text-3xl mb-3">{title}</h3>
      <p className="text-base leading-relaxed mb-4">{desc}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((t) => (
          <span key={t} className="border-2 border-black px-2 py-0.5 font-mono text-xs bg-white">
            {t}
          </span>
        ))}
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block border-2 border-black rounded-full px-4 py-2 font-mono text-sm font-bold bg-black text-white hover:bg-white hover:text-black transition"
      >
        View on GitHub →
      </a>
    </div>
  );
}

function ExpItem({
  bg,
  date,
  role,
  org,
  bullets,
}: {
  bg: string;
  date: string;
  role: string;
  org: string;
  bullets: string[];
}) {
  return (
    <div
      className="border-4 border-black rounded-2xl p-5 md:p-6 shadow-brutal-sm"
      style={{ background: bg }}
    >
      <div className="font-mono text-xs font-bold mb-2">{date}</div>
      <h3 className="font-display italic text-2xl md:text-3xl mb-1">{role}</h3>
      <div className="font-mono text-sm mb-3">{org}</div>
      <ul className="list-disc pl-5 space-y-1 text-base">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

function Cert({
  bg,
  icon,
  title,
  sub,
}: {
  bg: string;
  icon: string;
  title: string;
  sub: string;
}) {
  return (
    <div
      className="border-4 border-black rounded-2xl p-5 shadow-brutal-sm hover:-translate-y-1 transition"
      style={{ background: bg }}
    >
      <div className="w-10 h-10 rounded-lg border-2 border-black bg-white flex items-center justify-center text-xl mb-3">
        {icon}
      </div>
      <h4 className="font-bold text-base leading-snug mb-1">{title}</h4>
      <span className="font-mono text-xs">{sub}</span>
    </div>
  );
}

function Counter({ bg, value, label }: { bg: string; value: string; label: string }) {
  return (
    <div
      className="border-4 border-black rounded-2xl p-5 text-center shadow-brutal-sm"
      style={{ background: bg }}
    >
      <div className="font-display italic text-4xl md:text-5xl">{value}</div>
      <div className="font-mono text-xs font-bold mt-2">{label}</div>
    </div>
  );
}

function ContactRow({
  label,
  bg,
  value,
  href,
}: {
  label: string;
  bg: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-3 flex-wrap">
      <span
        className="border-2 border-black px-2 py-1 font-mono text-xs font-bold"
        style={{ background: bg }}
      >
        [{label}]
      </span>
      <span className="font-mono text-sm md:text-base break-all">{value}</span>
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block hover:translate-x-1 transition">
      {content}
    </a>
  ) : (
    content
  );
}
