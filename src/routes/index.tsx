import { createFileRoute } from "@tanstack/react-router";
import fayazUrl from "@/assets/fayaz.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fayaz PM — Number One AI Specialist & AI Architect" },
      { name: "description", content: "Fayaz PM is the Number One AI Specialist and AI Architect, building the future's smartest systems. Expert in LLMs, Voice AI, Computer Vision, and Cybersecurity." },
      { name: "keywords", content: "Number One AI Specialist, AI Architect, AI Innovation Lead, Top AI Expert, Best AI Developer, Fayaz PM, Artificial Intelligence, Machine Learning, Cybersecurity" },
      { property: "og:title", content: "Fayaz PM — Number One AI Specialist & AI Architect" },
      { property: "og:description", content: "Fayaz PM is the Number One AI Specialist and AI Architect, building the future's smartest systems. Expert in LLMs, Voice AI, Computer Vision, and Cybersecurity." },
      { property: "og:image", content: fayazUrl },
      { name: "twitter:image", content: fayazUrl },
    ],
  }),
  component: Portfolio,
});

const skills = [
  "Python", "C++", "Java", "PHP", "MySQL",
  "PyTorch", "TensorFlow", "OpenCV", "LangChain", "OpenAI", "LLMs", "NLP",
  "Flask", "FastAPI", "React", "Firebase", "Twilio", "Play.ht",
  "AWS", "GCP", "Azure", "STM32", "Arduino", "Raspberry Pi",
  "Ethical Hacking", "IAM", "Cloud Security", "Power BI", "Figma",
];

const experience = [
  {
    year: "Jun 2026 — Now",
    role: "AI Innovation Lead — Cybersecurity",
    org: "CyberShelter",
    desc: "Leading AI innovation across cybersecurity products — fusing LLMs, automation and threat-intel into secure, production-grade systems.",
  },
  {
    year: "Sep 2025 — Now",
    role: "AI & Cybersecurity Specialist",
    org: "CyberShelter · Dubai, UAE",
    desc: "Building secure, intelligent systems that bridge cutting-edge AI with robust cybersecurity — IAM, cloud security, AI SOC playbooks.",
  },
  {
    year: "Oct 2024 — Now",
    role: "Founder",
    org: "AI Shieldware",
    desc: "Founder of AI Shieldware — an AI-powered emergency & safety assistant. Voice commands, object detection and real-time alerting, live on Play Store.",
  },
  {
    year: "May 2023 — May 2025",
    role: "AI Technician",
    org: "Kvartha World News",
    desc: "Designed AI prompting frameworks, automation pipelines and CI/CD for newsroom workflows — summarization, headlines, fact-check assistance, cost & latency optimisation.",
  },
  {
    year: "Jan 2023 — Aug 2024",
    role: "Artificial Intelligence Developer",
    org: "SJF Technology Pvt. Ltd. · Kerala, India",
    desc: "Designed an AI voice chat assistant and an AI Help Desk Bot. Integrated NLP and speech recognition for scalable, human-like automation.",
  },
  {
    year: "Jun 2024 — Jul 2024",
    role: "AI Intern",
    org: "Secneural LLC · Doha, Qatar",
    desc: "Hands-on real-time AI projects — automation pipelines and intelligent classification systems for production workloads.",
  },
  {
    year: "May 2023 — May 2024",
    role: "Data Science & Machine Learning",
    org: "TECHMAGHI",
    desc: "Applied ML and data-science engagements — modelling, feature engineering, evaluation and deployment support.",
  },
  {
    year: "May 2023 — Jan 2024",
    role: "Graphic Designer",
    org: "Brototype · Bengaluru",
    desc: "Brand systems, video edits and UI/UX material for startup launches and product storytelling.",
  },
  {
    year: "Aug 2022 — Feb 2024",
    role: "Founder",
    org: "AI Clothing 4U",
    desc: "Founded a personalised clothing-suggestion product driven by AI style detection and user preferences.",
  },
  {
    year: "Sep 2019 — Apr 2023",
    role: "Technical Lead",
    org: "Kvartha World News · Kasaragod",
    desc: "Led the technical stack for digital journalism — tooling, integrations and AI-assisted media systems.",
  },
  {
    year: "2021",
    role: "Coordinator / Motivational Speaker",
    org: "Junior Chamber International",
    desc: "Talks on AI, leadership and cybersecurity for student innovators across regional chapters.",
  },
];

const projects = [
  { name: "AI Shieldware", tag: "Live on Play Store", desc: "Android safety app with real-time AI alerts, voice commands, object detection and threat defence.", stack: ["Android", "Kotlin", "Flask", "Firebase", "Twilio", "OpenCV"], href: "https://play.google.com/store" },
  { name: "AI Document Parsing System", tag: "Enterprise", desc: "Extracts structured data from unstructured DOC/DOCX reports — images, vulnerabilities, metadata.", stack: ["Python", "Flask", "python-docx", "PyWin32", "OpenAI"], href: "#" },
  { name: "AI Doc Chat", tag: "RAG", desc: "Upload documents and chat with them. Precise answers grounded in your own files.", stack: ["Python", "LangChain", "OpenAI", "Streamlit"], href: "#" },
  { name: "AI Image Generator", tag: "Web", desc: "Text-to-image tool wrapped in a clean web UI on top of DALL·E and Stable Diffusion.", stack: ["Python", "Flask", "OpenAI", "JS"], href: "#" },
  { name: "Voice Assistant EVA", tag: "Desktop", desc: "A natural-language desktop assistant that understands and acts on smart commands.", stack: ["Python", "SpeechRecognition", "TTS"], href: "#" },
  { name: "Helping Mode + YOLO", tag: "Vision", desc: "Voice-triggered real-time object detection mode for personal safety scenarios.", stack: ["YOLOv2", "Python", "OpenCV"], href: "#" },
  { name: "AI Voice Chatbot Robo", tag: "Voice cloning", desc: "Personalised chatbot that listens and replies in a cloned human voice.", stack: ["JS", "HTML", "Play.ht", "SpeechRec"], href: "#" },
  { name: "Eyemate — Smart Glass", tag: "Hardware", desc: "AI glasses for visually impaired users — ultrasonic sensing with audio output.", stack: ["Arduino", "Python", "Ultrasonic"], href: "#" },
  { name: "Voice Translation in Calls", tag: "Realtime", desc: "Live translation layer inside video calls so people can talk across languages.", stack: ["WebRTC", "Node.js", "Google Translate"], href: "#" },
  { name: "AI Food Classification", tag: "ML", desc: "Image-recognition food classifier with nutrition suggestions.", stack: ["TensorFlow", "Python", "OpenCV", "Flask"], href: "#" },
  { name: "AI Chatbot Assistant", tag: "NLP", desc: "Conversational AI that simulates human-like responses and answers queries in real time.", stack: ["Python", "Flask", "OpenAI", "LangChain", "Streamlit"], href: "#" },
  { name: "JobFlow AI", tag: "Product", desc: "AI job application system — resume generation, opportunity matching and auto-apply.", stack: ["React", "Flask", "OpenAI", "MongoDB"], href: "#" },
  { name: "Anonymous Article Platform", tag: "Web", desc: "Secure web app for posting articles anonymously — focused on mental health and expression.", stack: ["Flask", "HTML", "Python"], href: "#" },
  { name: "AI Clothing 4U", tag: "Founder project", desc: "Personalised clothing suggestion system using AI-driven style detection.", stack: ["AI Model", "Flask", "Image Analysis"], href: "#" },
  { name: "KEAM Mock Test Platform", tag: "Edtech", desc: "Student-friendly KEAM mock-test platform with auto-scoring and question analytics.", stack: ["HTML", "CSS", "JS", "Firebase"], href: "#" },
  { name: "Jarvis Voice AI", tag: "Voice AI", desc: "Multi-functional voice AI chatbot for help-desk automation and natural interaction.", stack: ["Python", "NLP", "Speech"], href: "#" },
];

const testimonials: Array<{
  title: string;
  body: string;
  type: "video" | "poster";
  videoId?: string;
  image?: string;
  href?: string;
}> = [
  { title: "News Coverage 1", body: "AI Shieldware featured as a smart safety companion that warns users in real-time about mobile threats.", type: "video", videoId: "sZORu0pQ788" },
  { title: "News Coverage 2", body: "Media discusses how this student-made app is alerting users against Wi-Fi traps and fraud apps.", type: "video", videoId: "V09VzwOwLis" },
  { title: "News Coverage 3", body: "Regional reports call AI Shieldware a must-have app for students and the general public alike.", type: "video", videoId: "ntc9g3b_JO8" },
  { title: "News Coverage 4", body: "News anchor highlights how AI Shieldware transforms phones into protective shields with smart alerts.", type: "video", videoId: "dADBl_49cEs" },
  { title: "News Poster", body: "Media poster showing the buzz around AI Shieldware across student communities and local newsrooms.", type: "poster", image: "https://i.ibb.co/GQcP0hP2/Whats-App-Image-2025-06-19-at-1-02-43-PM.jpg", href: "https://ibb.co/Qvrmf5mN" },
  { title: "News Coverage 5", body: "Jarvis Robot Assistant was covered as a futuristic AI interface that listens and responds in real-time, developed locally.", type: "video", videoId: "WvWuOOA3j-Q" },
  { title: "News Coverage 6", body: "AI Jarvis robot captured public interest as a local innovation replicating voice-command smart control like Iron Man.", type: "video", videoId: "rAf8nRzG-Ug" },
  { title: "AI Robot Poster", body: "A news-poster announcing the JARVIS AI robot project and its rising recognition in engineering circuits.", type: "poster", image: "https://i.ibb.co/k6wbX5gc/Whats-App-Image-2025-06-19-at-1-10-53-PM.jpg", href: "https://ibb.co/M5tw7ZDN" },
  { title: "Press Highlight Poster", body: "Media appreciation poster showcasing AI innovation impact led by student Fayaz PM.", type: "poster", image: "https://i.ibb.co/CpFWM03K/Whats-App-Image-2025-06-19-at-1-08-27-PM.jpg", href: "https://ibb.co/DPnL8KHf" },
];


const certs = [
  { name: "AI Security & Governance", org: "Google", year: "2025" },
  { name: "Gemini in Google Drive", org: "Google", year: "2025" },
  { name: "AI Prompting", org: "Dubai Future Foundation", year: "2025" },
  { name: "Google Generative AI", org: "Google", year: "2024" },
  { name: "Large Language Models", org: "Simplilearn", year: "2024" },
  { name: "Machine Learning with Python", org: "IBM / Cognitive Class", year: "2024" },
  { name: "Data Analysis with Python", org: "freeCodeCamp", year: "2024" },
  { name: "AI-Powered Performance Ads", org: "Google Skillshop", year: "2024" },
  { name: "Google Analytics", org: "Google Skillshop", year: "2024" },
  { name: "Power BI Certification", org: "Microsoft", year: "2024" },
  { name: "LearnTube AI & Data Analytics", org: "LearnTube.ai", year: "2024" },
  { name: "Programming in HTML5 / JS / CSS3", org: "Microsoft", year: "—" },
  { name: "E-Commerce Level 1.1", org: "Flipkart", year: "2023" },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground bg-hero">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Projects />
      <Testimonials />
      <Certs />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm">
          <span className="size-2 rounded-full bg-primary animate-pulse-dot" />
          <span className="font-semibold">fayaz.pm</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition">About</a>
          <a href="#work" className="hover:text-foreground transition">Work</a>
          <a href="#projects" className="hover:text-foreground transition">Projects</a>
          <a href="#press" className="hover:text-foreground transition">Press</a>
          <a href="#certs" className="hover:text-foreground transition">Certs</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </nav>
        <a href="https://www.linkedin.com/in/fayaz-pm/" target="_blank" rel="noreferrer"
           className="text-sm px-4 py-2 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition">
          LinkedIn ↗
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative max-w-7xl mx-auto px-6 pt-20 pb-24 md:pt-32 md:pb-40">
      <div className="grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 z-10">
          <div className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            The AI Architect
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-bold leading-[1.05] tracking-tight">
            <span className="bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">Building the</span><br/>
            <span className="bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">Future's</span><br/>
            <span className="text-foreground">Smartest</span><br/>
            <span className="text-foreground">Systems.</span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-muted-foreground max-w-xl">
            Brilliant in AI. Relentless in Impact.
          </p>
          
          <div className="mt-14 flex flex-wrap items-center gap-8 font-mono text-sm tracking-widest uppercase text-muted-foreground">
            <span className="flex items-center gap-2"><span className="text-green-500 text-lg">⚙</span> AI INNOVATOR</span>
            <span className="flex items-center gap-2"><span className="text-green-500 text-lg">⌘</span> PROBLEM SOLVER</span>
            <span className="flex items-center gap-2"><span className="text-green-500 text-lg">⚡</span> FUTURE BUILDER</span>
          </div>
        </div>

        <div className="md:col-span-5 relative mt-20 md:mt-0 flex justify-end">
          <div className="relative w-full max-w-[450px]">
            {/* Top Right Labels */}
            <div className="absolute -top-8 md:-top-10 right-0 z-20 flex flex-wrap justify-end gap-2 md:gap-3 font-medium tracking-[0.15em] md:tracking-[0.2em] text-[10px] md:text-xs text-muted-foreground drop-shadow-sm w-max max-w-[90vw]">
              <span>VISIONARY.</span>
              <span>INNOVATOR.</span>
              <span>AI LEADER.</span>
              <span className="text-green-500">GAME CHANGER.</span>
            </div>

            <div className="relative aspect-[4/5] md:aspect-auto md:h-[600px] w-full rounded-2xl overflow-hidden border border-border/50 noise z-10">
              <img
                src={fayazUrl}
                alt="Portrait of Fayaz PM, Number One AI Specialist"
                className="absolute inset-0 size-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            </div>

            {/* Script Text - Placed OUTSIDE overflow-hidden container */}
            <div 
              className="absolute -bottom-8 md:-bottom-10 right-2 md:right-8 z-30 pointer-events-none text-right" 
              style={{ fontFamily: "'Brush Script MT', 'cursive'", fontStyle: "italic", fontSize: "clamp(1.8rem, 4.5vw, 3.5rem)", lineHeight: "1", color: "#22c55e", transform: "rotate(-6deg)", textShadow: "0px 4px 15px rgba(0,0,0,0.8)", whiteSpace: "nowrap" }}
            >
              Built Different.<br/>
              Built for What's Next.
            </div>
            
            <div className="absolute top-1/4 -left-10 size-64 rounded-full bg-green-500/10 blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [...skills, ...skills];
  return (
    <div className="border-y border-border bg-surface/40 overflow-hidden">
      <div className="flex animate-marquee gap-12 py-5 whitespace-nowrap font-mono text-sm text-muted-foreground">
        {items.map((s, i) => (
          <span key={i} className="flex items-center gap-12">
            {s}<span className="text-primary">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function SectionHeader({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-14">
      <div className="font-mono text-xs text-primary mb-3">{kicker}</div>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight max-w-2xl text-balance">{title}</h2>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-24 md:py-32">
      <SectionHeader kicker="01 — ABOUT" title="AI engineer, cybersecurity specialist, and relentless builder." />
      <div className="grid md:grid-cols-2 gap-12 text-lg leading-relaxed text-muted-foreground">
        <p>
          With strong command of Python, C++, Java, PHP and MySQL, I specialise in building
          intelligent systems that bridge AI with real-world applications. Over 5+ years across
          AI automation, <span className="text-foreground">LLMs, NLP, computer vision</span> and
          AI-SOC tooling — shipping voice assistants, document parsers, threat-detection systems
          and the occasional smart device.
        </p>
        <p>
          Beyond shipping, I run workshops on cybersecurity, ethical hacking, ML and modern AI
          toolchains for students and professionals. I've led teams under IEDC, IEEE and academic
          programs, and I'm always up for a conversation about a hard problem worth solving.
          Based in <span className="text-foreground">Kasaragod, India</span> · working out of
          <span className="text-foreground"> Dubai, UAE</span>.
        </p>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="work" className="max-w-7xl mx-auto px-6 py-24 md:py-32">
      <SectionHeader kicker="02 — EXPERIENCE" title="Selected work across AI, security, media and product." />
      <ol className="relative border-l border-border ml-3">
        {experience.map((e, i) => (
          <li key={i} className="pl-8 pb-12 last:pb-0 relative group">
            <span className="absolute -left-[7px] top-1.5 size-3 rounded-full bg-primary glow-primary" />
            <div className="font-mono text-xs text-muted-foreground">{e.year}</div>
            <h3 className="text-2xl font-semibold mt-2 group-hover:text-primary transition">{e.role}</h3>
            <div className="text-accent text-sm mt-1">{e.org}</div>
            <p className="mt-3 text-muted-foreground max-w-2xl">{e.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-24 md:py-32">
      <SectionHeader kicker="03 — PROJECTS" title="Things I've built. Most live, some experimental." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((p) => (
          <article key={p.name} className="group relative rounded-xl border border-border bg-surface/60 p-6 hover:border-primary hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className="font-mono text-[10px] text-primary uppercase tracking-wider">{p.tag}</div>
              <span className="text-muted-foreground group-hover:text-primary transition">↗</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{p.desc}</p>
            <div className="flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <span key={s} className="text-[10px] font-mono px-2 py-1 rounded bg-surface-2 text-muted-foreground border border-border">{s}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="press" className="max-w-7xl mx-auto px-6 py-24 md:py-32">
      <SectionHeader kicker="04 — PRESS & TESTIMONIALS" title="What media and the community say." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {testimonials.map((t) => {
          const href =
            t.type === "video"
              ? `https://www.youtube.com/watch?v=${t.videoId}`
              : t.href ?? "#";
          const thumb =
            t.type === "video"
              ? `https://i.ytimg.com/vi/${t.videoId}/hqdefault.jpg`
              : t.image!;
          return (
            <figure
              key={t.title}
              className="group rounded-xl border border-border bg-surface/60 overflow-hidden hover:border-primary transition flex flex-col"
            >
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="relative block aspect-video overflow-hidden bg-surface-2"
              >
                <img
                  src={thumb}
                  alt={t.title}
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover group-hover:scale-105 transition duration-500"
                />
                {t.type === "video" && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="size-14 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition">
                      <svg viewBox="0 0 24 24" className="size-6 ml-1" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </span>
                )}
              </a>
              <figcaption className="p-5">
                <div className="font-mono text-[10px] text-primary uppercase mb-2">
                  {t.type === "video" ? "★ Video Coverage" : "★ Press Poster"}
                </div>
                <h3 className="font-semibold text-foreground mb-1.5">{t.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.body}</p>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}


function Certs() {
  return (
    <section id="certs" className="max-w-7xl mx-auto px-6 py-24 md:py-32">
      <SectionHeader kicker="05 — CERTIFICATIONS" title="Continually learning, formally and otherwise." />
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
        {certs.map((c) => (
          <div key={c.name} className="rounded-lg border border-border p-5 bg-surface/40 hover:bg-surface transition">
            <div className="font-mono text-[10px] text-primary mb-2">{c.year}</div>
            <div className="font-semibold leading-tight">{c.name}</div>
            <div className="text-xs text-muted-foreground mt-1">{c.org}</div>
          </div>
        ))}
      </div>
      <div className="mt-10 rounded-xl border border-border p-6 bg-surface/40">
        <div className="font-mono text-xs text-primary mb-3">EDUCATION</div>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <div className="font-semibold">B.Tech, Artificial Intelligence</div>
            <div className="text-sm text-muted-foreground">APJ Abdul Kalam Technological University · Nov 2021 — Apr 2025</div>
          </div>
          <div>
            <div className="font-semibold">Data Science</div>
            <div className="text-sm text-muted-foreground">Jobaaj Learnings · Nov 2024</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-24 md:py-32">
      <div className="relative rounded-3xl border border-border bg-surface/60 p-10 md:p-16 overflow-hidden noise">
        <div className="absolute -top-20 -right-20 size-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 size-80 rounded-full bg-accent/15 blur-3xl" />
        <div className="relative">
          <div className="font-mono text-xs text-primary mb-4">06 — CONTACT</div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl text-balance">
            Got an AI or security problem worth solving? <span className="text-gradient">Let's talk.</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl">
            Open to freelance, full-time, advisory and speaking. Fastest reply is via email or LinkedIn.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-2xl">
            <a href="mailto:fayazpm4v@gmail.com" className="group rounded-xl border border-border p-5 hover:border-primary transition">
              <div className="text-xs font-mono text-muted-foreground">EMAIL</div>
              <div className="mt-1 font-medium group-hover:text-primary">fayazpm4v@gmail.com</div>
            </a>
            <a href="tel:+918129269317" className="group rounded-xl border border-border p-5 hover:border-primary transition">
              <div className="text-xs font-mono text-muted-foreground">PHONE</div>
              <div className="mt-1 font-medium group-hover:text-primary">+91 81292 69317</div>
            </a>
            <a href="https://www.linkedin.com/in/fayaz-pm/" target="_blank" rel="noreferrer" className="group rounded-xl border border-border p-5 hover:border-primary transition">
              <div className="text-xs font-mono text-muted-foreground">LINKEDIN</div>
              <div className="mt-1 font-medium group-hover:text-primary">in/fayaz-pm ↗</div>
            </a>
            <a href="https://github.com/fayaf2" target="_blank" rel="noreferrer" className="group rounded-xl border border-border p-5 hover:border-primary transition">
              <div className="text-xs font-mono text-muted-foreground">GITHUB</div>
              <div className="mt-1 font-medium group-hover:text-primary">@fayaf2 ↗</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs font-mono text-muted-foreground">
        <div>© 2026 Fayaz PM — Built with care.</div>
        <div>Kasaragod, IN · Dubai, UAE · <span className="text-primary">●</span> available for new work</div>
      </div>
    </footer>
  );
}
