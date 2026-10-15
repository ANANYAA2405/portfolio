
import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown,
  ArrowUpRight,
  ArrowRight,
  Menu,
  X,
  Mail,
  Sparkles,
  Network,
  Database,
  ShieldCheck,
  Lightbulb,
  Trophy,
  Compass,
  Terminal,
  ExternalLink
} from "lucide-react";
import "./styles.css";

const projects = [
 
{
  number: "01",
  category: "DATA ENGINEERING",
  title: "Hospital Command Center",
  summary: "A streaming-data analytics project aimed at making hospital capacity and emergency-department pressure easier to monitor.",
  problem: "Bed availability and emergency-department crowding can change quickly; delayed or fragmented information makes operational decisions harder.",
  solution: "Shape an end-to-end data pipeline around event ingestion, stream processing, storage, and searchable operational views.",
  contribution: "Focused the system design on the path from incoming operational events to usable analytics, connecting Kafka-based ingestion with Spark Structured Streaming and an analytics layer for exploration.",
  stack: ["Python", "Apache Kafka", "Spark Structured Streaming", "Apache Hive", "Elasticsearch", "Kibana", "Docker"],
  outcome: "The project is structured around a clear operational use case and a scalable streaming architecture. The next meaningful validation step is to measure processing latency, data quality, and the usefulness of the resulting occupancy and crowding views.",
  github: "",
  demo: "",
  accent: "blue"
},
{
  number: "02",
  category: "CYBERSECURITY",
  title: "Post-Quantum Secure Authentication",
  summary: "A post-quantum authentication prototype exploring quantum-resistant key establishment and protected communication.",
  problem: "Authentication systems need to consider long-term confidentiality and the future risk posed by quantum-capable attackers.",
  solution: "Combine a Kyber-based key-encapsulation concept with authenticated encryption, expose the workflow through an API, and make system behaviour observable.",
  contribution: "Connected the cryptography-focused workflow with a Python/FastAPI service and an observability stack using Prometheus and Grafana, with the goal of making security-related behaviour easier to inspect and test.",
  stack: ["Python", "Kyber KEM", "AEAD", "FastAPI", "Prometheus", "Grafana", "Docker"],
  outcome: "The prototype brings key establishment, authenticated encryption, API integration, and monitoring into one system design. Security claims should be based on documented tests and review; the architecture alone is not a substitute for a formal security audit.",
  github: "",
  demo: "",
  accent: "blue"
},
{
  number: "03",
  category: "FULL-STACK & ML",
  title: "GridShare",
  summary: "A peer-to-peer energy-trading project exploring how local producers and consumers could coordinate renewable-energy sharing.",
  problem: "Distributed energy producers and consumers need a clearer way to represent availability, coordinate exchanges, and make local energy sharing practical.",
  solution: "Frame the experience as a web application using a Next.js/React interface, with Python and scikit-learn available for relevant data-driven features.",
  contribution: "Worked across the product and technical shape of the project: a user-facing energy-sharing workflow, a modern web interface, and a Python-based path for machine-learning functionality where applicable.",
  stack: ["Next.js", "React", "Tailwind CSS", "Python", "scikit-learn", "REST APIs", "Git"],
  outcome: "The project translates a broad sustainability idea into a concrete software direction: coordinate energy-sharing activity through an accessible interface and leave room for data-informed decisions. Evaluation should focus on usability, matching quality, and the feasibility of the trading workflow.",
  github: "",
  demo: "",
  accent: "blue"
},
{
  number: "04",
  category: "HACKATHON & INNOVATION",
  title: "MARISYN",
  summary: "An innovation project developed for the GeoRift Hackathon, where MARISYN earned second place.",
  problem: "The challenge was to turn a real-world problem into a compelling, technically grounded solution under hackathon time constraints.",
  solution: "The team developed the MARISYN concept and translated its core idea into a prototype, balancing the user problem, feasibility, and presentation of the solution.",
  contribution: "Contributed to shaping the solution and the team's hackathon submission. The case study can be strengthened further with the exact feature ownership, design decisions, and implementation work from the final build.",
  stack: [
  "React",
  "Three.js",
  "Python",
  "TensorFlow",
  "OpenCV"
],
  outcome: "Second place at the GeoRift Hackathon — a concrete recognition of the team's solution and its presentation. The strongest follow-up evidence is a demo walkthrough that shows the problem, the prototype, and the reasoning behind key decisions.",
  github: "",
  demo: "",
  accent: "blue"
},
{
  number: "05",
  category: "DISTRIBUTED SYSTEMS",
  title: "Distributed Screen-Time Monitoring",
  summary: "A distributed screen-time monitoring project exploring federated learning as a privacy-aware approach to collaborative analysis.",
  problem: "Centralising personal device-usage data can create privacy and data-governance concerns, even when the goal is to understand usage patterns.",
  solution: "Explore a distributed design in which learning can be coordinated across clients while limiting the need to pool raw user data in one place.",
  contribution: "Focused the project around the interaction between usage monitoring, distributed coordination, and a federated-learning workflow. The final case study should distinguish implemented components from planned privacy protections.",
  stack: ["Python", "Federated Learning", "Distributed Systems"],
  outcome: "The core value proposition is privacy-aware analysis rather than simply collecting more data in one central location. Useful evaluation criteria include model quality, communication overhead, and how much raw data remains local.",
  github: "",
  demo: "",
  accent: "blue"
},
{
  number: "06",
  category: "TELECOM & ANALYTICS",
  title: "Telecom360",
  summary: "A telecom-focused software project using a modern web interface and Python API stack to organise operational workflows.",
  problem: "Telecom workflows often span multiple services and data sources; teams need clear interfaces and reliable APIs to move information through the system consistently.",
  solution: "The technology stack supports a layered application design: React for the interface, FastAPI for service endpoints, PostgreSQL for persistent data, Redis for fast-access needs, and authentication/role-based access patterns where implemented.",
  
 
stack: [
  "React",
  "Python",
  "FastAPI",
  "SQLAlchemy",
  "PostgreSQL",
  "Redis",
  "REST APIs",
  "WebSockets",
  "JWT",
  "RBAC",
  "PyTest",
  "Vitest"
],

  outcome: "The project is framed around maintainable service boundaries, structured persistence, and a testable API layer. A strong demo should walk through one end-to-end workflow and show how validation, access control, and automated tests support reliability.",
  github: "",
  demo: "",
  accent: "blue"
}

];

const awards = [
  {
    label: "02ND PLACE",
    title: "GeoRift Hackathon",
    description: "Second place for the MARISYN team project. A standout milestone in turning an idea into a judged hackathon submission."
  },
  {
    label: "RESEARCH",
    title: "Patent and Research Work",
    description: "Research and patent-related work reflecting curiosity beyond coursework. Specific titles and status can be linked when ready to share."
  },
  {
    label: "LEADERSHIP",
    title: "CSED VIT — PR & Marketing",
    description: "PR and marketing experience with a student community, bringing together communication, coordination, and audience awareness."
  },
  {
    label: "LEADERSHIP",
    title: "Riviera — Sponsorship Coordination",
    description: "Sponsorship coordination experience connected to a large student festival, where clear communication and follow-through matter."
  }
];

function Reveal({ children, className = "" }) {
  return (
    <div data-reveal className={className}>
      {children}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKey = (event) => {
      if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "k"
      ) {
        event.preventDefault();
        setCommandOpen((previous) => !previous);
      }

      if (event.key === "Escape") {
        setCommandOpen(false);
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
    setMenuOpen(false);
    setCommandOpen(false);
  };

  const filters = [
    "ALL",
    "DATA",
    "SECURITY",
    "PRODUCT",
    "INNOVATION"
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "ALL") return true;
    if (activeFilter === "DATA")
      return project.category.includes("DATA") ||
        project.category.includes("TELECOM");
    if (activeFilter === "SECURITY")
      return project.category.includes("CYBERSECURITY");
    if (activeFilter === "PRODUCT")
      return project.category.includes("PRODUCT");
    return project.category.includes("INNOVATION");
  });

  const navigation = [
    ["Home", "home"],
    ["About", "about"],
    ["Work", "work"],
    ["Education", "education"],
    ["Beyond code", "beyond-code"],
    ["Case studies", "case-studies"],
    ["Impact", "impact"],
    ["Ideas", "ideas"],
    ["Journey", "journey"],
    ["Contact", "contact"]
  ];

  return (
    <>
      <div className="grain" aria-hidden="true" />

      <header className="nav">
        <a
          className="brand"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            go("home");
          }}
        >
          <span className="brand-mark">
            A<span>.</span>
          </span>
          <span>
            ANANYA AGARWAL
            <small>SYSTEMS IN MOTION</small>
          </span>
        </a>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {[
            ["Work", "work"],
            ["Education", "education"],
            ["Beyond code", "beyond-code"],
            ["Case studies", "case-studies"]
          ].map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                go(id);
              }}
            >
              {label}
            </a>
          ))}

          <a
            className="nav-contact"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              go("contact");
            }}
          >
            Let's connect <ArrowUpRight size={15} />
          </a>
        </nav>

        <button
          className="icon-btn mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-grid" aria-hidden="true" />

          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              IT ENGINEERING STUDENT
              <span className="eyebrow-divider">/</span>
              PRODUCT-MINDED BUILDER
            </div>

            <h1>
              I turn complex
              <br />
              <span className="outline-text">ideas</span> into things
              <br />
              that <span className="blue-word">matter.</span>
            </h1>

            <p className="hero-sub">
              Technology. Systems. Products. People.
            </p>

            <p className="hero-description">
              I enjoy understanding how things work, why people need
              them, and what it takes to turn an idea into something useful.
            </p>

            <div className="hero-actions">
              <button
                className="button button-primary"
                onClick={() => go("work")}
              >
                Explore my work <ArrowDown size={16} />
              </button>

              <button
                className="button button-ghost"
                onClick={() => go("contact")}
              >
                Get in touch <ArrowUpRight size={16} />
              </button>
            </div>

            <div className="hero-meta">
              <span>BASED IN INDIA</span>
              <span className="meta-line" />
              <span>BUILDING WHAT'S NEXT</span>
            </div>
          </div>

          <div className="hero-art">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />

            <div className="core">
              <span>A</span>
              <i />
            </div>

            {Array.from({ length: 18 }, (_, index) => (
              <span
                key={index}
                className={`particle p${index + 1}`}
              />
            ))}

            <div className="art-label label-top">
              <span>01 / CURIOSITY</span>
              <b>Always exploring</b>
            </div>

            <div className="art-label label-bottom">
              <span>02 / EXECUTION</span>
              <b>Ideas into systems ↗</b>
            </div>

            <svg
              className="constellation-lines"
              viewBox="0 0 500 500"
              aria-hidden="true"
            >
              <path d="M250 250 L110 125 L180 55 M250 250 L390 135 L420 220 M250 250 L360 385 L275 440 M250 250 L105 350 L65 275 M110 125 L65 275 M390 135 L420 220 M360 385 L420 220" />
            </svg>
          </div>

          <div className="hero-bottom">
            <span>SCROLL TO EXPLORE</span>
            <div className="scroll-line">
              <i />
            </div>
            <span>01 — 08</span>
          </div>
        </section>

        <section className="intro section" id="about">
          <Reveal className="section-kicker">
            <span>01 / THE HUMAN BEHIND THE CODE</span>
            <span>GET TO KNOW ME ↘</span>
          </Reveal>

          <div className="intro-layout">
            <Reveal className="intro-heading">
              <h2>
                Engineer by training.
                <br />
                <em>Curious by nature.</em>
              </h2>
            </Reveal>

            <Reveal className="intro-body">
              <p className="lead">
                I'm Ananya — an IT engineering student interested in
                the space between technology and the people it serves.
              </p>
              <p>
                I'm drawn to problems that need structured thinking
                and imagination: building data systems, exploring
                security, experimenting with ideas, and asking what
                would make a product genuinely useful.
              </p>
              <p>
                This portfolio is a snapshot of what I've built,
                what I've learned, and what I'm curious enough to try next.
              </p>

              <div className="trait-row">
                <span>CURIOUS</span>
                <span>DRIVEN</span>
                <span>COLLABORATIVE</span>
                <span>ALWAYS LEARNING</span>
              </div>
            </Reveal>
          </div>

         
<section className="about-visual">
  <div className="about-copy">
    <span className="eyebrow">
      THE PERSON BEHIND THE PROJECTS
    </span>

    <h2>
      Beyond the <span>code.</span>
    </h2>

    <p>
      I'm an engineering student who enjoys building
      systems, exploring ideas, and turning complex
      problems into useful solutions.
    </p>

    <p>
      My interests sit at the intersection of
      technology, product thinking, and real-world impact.
    </p>

    <div className="about-tags">
      <span>Engineering</span>
      <span>Data & Systems</span>
      <span>Product Thinking</span>
    </div>
  </div>

  <div className="about-portrait">
    <img
      src="/images/ananya-portrait.png"
      alt="Ananya in a cinematic tech workspace"
      className="profile-photo"
    />
    <span className="portrait-caption">
      Curiosity in motion.
    </span>
  </div>
</section>

        </section>

        <section className="skills section" id="skills">
          <Reveal className="section-kicker">
            <span>02 / THE ENGINEERING MIND</span>
            <span>HOW THE DOTS CONNECT</span>
          </Reveal>

          <Reveal>
            <h2 className="section-title">
              Different disciplines.
              <br />
              <em>One curious mind.</em>
            </h2>
          </Reveal>

          <p className="section-desc">
            My interests move across systems, security, data, and products.
            The interesting work often happens where they overlap.
          </p>

          <div className="skill-grid">
            {[
              {
                Icon: Database,
                title: "DATA & STREAMING",
                desc: "Kafka · Spark · SQL · Analytics",
                number: "01"
              },
              {
                Icon: Network,
                title: "DISTRIBUTED SYSTEMS",
                desc: "Event-driven systems · Architecture",
                number: "02"
              },
              {
                Icon: ShieldCheck,
                title: "SECURITY & RESEARCH",
                desc: "Authentication · Post-quantum concepts",
                number: "03"
              },
              {
                Icon: Lightbulb,
                title: "AI & PRODUCT THINKING",
                desc: "ML · Prototyping · User problems",
                number: "04"
              }
            ].map(({ Icon, title, desc, number }) => (
              <Reveal className="skill-card" key={number}>
                <div className="skill-card-top">
                  <Icon size={22} />
                  <span>{number}</span>
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <span className="card-arrow">↗</span>
              </Reveal>
            ))}
          </div>

          <div className="tech-strip">
            <span>ALSO WORKING WITH</span>
            <div>
              Python <i /> Java <i /> JavaScript <i /> React <i />
              FastAPI <i /> Docker <i /> Elasticsearch <i /> Git
            </div>
          </div>
        </section>

        <section className="work section" id="work">
          <Reveal className="section-kicker">
            <span>03 / SELECTED WORK</span>
            <span>THOUGHT → BUILD → LEARN</span>
          </Reveal>

          <div className="work-heading">
            <Reveal>
              <h2 className="section-title">
                Things I've <em>built.</em>
              </h2>
            </Reveal>
            <Reveal>
              <p className="section-desc">
                A selection of systems, experiments, and product ideas.
                Each one starts with a question worth exploring.
              </p>
            </Reveal>
          </div>

          <div className="filter-row">
            {filters.map((filter) => (
              <button
                key={filter}
                className={
                  activeFilter === filter ? "filter active" : "filter"
                }
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="project-grid">
            {filteredProjects.map((project) => (
              <Reveal
                className={`project-card ${project.accent}`}
                key={project.number}
              >
                <div className="project-visual">
                  <div className="visual-grid" />
                  <div className="visual-orb">
                    <span>{project.number}</span>
                  </div>
                  <span className="visual-type">{project.category}</span>
                  <span className="visual-arrow">
                    <ArrowUpRight />
                  </span>
                </div>

                <div className="project-content">
                  <div className="project-number">
                    PROJECT / {project.number}
                  </div>
                  <h3>{project.title}</h3>
                  
<p className="project-summary">
  {project.summary || project.description}
</p>

{project.problem && (
  <div className="project-detail">
    <span className="detail-label">THE PROBLEM</span>
    <p>{project.problem}</p>
  </div>
)}

{project.solution && (
  <div className="project-detail">
    <span className="detail-label">THE APPROACH</span>
    <p>{project.solution}</p>
  </div>
)}

<div className="tag-row">
  {project.stack.map((technology) => (
    <span key={technology}>{technology}</span>
  ))}
</div>

<button
  className="project-link"
  onClick={() => setSelectedProject(project)}
>
  Explore case study <ArrowUpRight size={14} />
</button>

                </div>
              </Reveal>
            ))}
          </div>

          <div className="project-footnote">
            <span>MORE WORK IS IN PROGRESS</span>
            <span>Have a question? Let's connect ↗</span>
          </div>
        </section>

        <section className="impact section" id="impact">
          <Reveal className="section-kicker">
            <span>04 / PROOF OF WORK</span>
            <span>THE RECEIPTS</span>
          </Reveal>

          <div className="impact-heading">
            <Reveal>
              <h2 className="section-title">
                Milestones, not
                <br />
                <em>just milestones.</em>
              </h2>
            </Reveal>
            <Reveal>
              <p className="section-desc">
                A growing archive of recognition, responsibility,
                and experiences that have shaped how I work.
              </p>
            </Reveal>
          </div>

          <div className="award-list">
            {awards.map((award, index) => (
              <Reveal className="award-row" key={award.title}>
                <span className="award-index">
                  0{index + 1}
                </span>
                <span className="award-label">{award.label}</span>
                <div className="award-detail">
                  <h3>{award.title}</h3>
                  <p>{award.description}</p>
                </div>
                <ArrowUpRight className="award-icon" size={19} />
              </Reveal>
            ))}
          </div>

          <div className="impact-note">
            <Trophy size={20} />
            <p>
              <b>Built beyond the classroom.</b> Academic milestones, research, volunteering, chess, debate, badminton, and student leadership all contribute to how I approach complex work.
            </p>
          </div>
        </section>

        <section className="ideas section" id="ideas">
          <Reveal className="section-kicker">
            <span>05 / BEYOND ENGINEERING</span>
            <span>TECHNOLOGY × BUSINESS</span>
          </Reveal>

          <div className="ideas-layout">
            <Reveal>
              <h2 className="section-title">
                I don't just ask
                <br />
                “<em>Can we build it?</em>”
              </h2>
            </Reveal>

            <Reveal className="ideas-copy">
              <p className="lead">
                I also want to understand who needs it, why it matters,
                and what would make it work in the real world.
              </p>
              <p>
                That means thinking about users, adoption, trade-offs,
                cost, product priorities, and what evidence would tell
                us we're solving the right problem.
              </p>
              <button className="text-link" onClick={() => go("work")}>
                Explore the projects <ArrowUpRight size={16} />
              </button>
            </Reveal>
          </div>

          <div className="idea-cards">
            {[
              {
                Icon: Lightbulb,
                number: "01 / PRODUCT",
                title: "Start with the problem.",
                description:
                  "Who is this for? What pain point are we solving? What would a useful first version look like?"
              },
              {
                Icon: Compass,
                number: "02 / STRATEGY",
                title: "Think beyond the build.",
                description:
                  "Explore feasibility, value propositions, adoption barriers, costs, and alternatives."
              },
              {
                Icon: Terminal,
                number: "03 / EXPERIMENTS",
                title: "Learn by making.",
                description:
                  "Prototype, test assumptions, listen to feedback, and improve based on evidence."
              }
            ].map(({ Icon, number, title, description }) => (
              <Reveal className="idea-card" key={number}>
                <span>{number}</span>
                <Icon size={23} />
                <h3>{title}</h3>
                <p>{description}</p>
              </Reveal>
            ))}
          </div>

          <div className="ideas-bottom">
            <span>IDEAS LAB / 001</span>
            <p>
              Exploring how technology becomes a useful, usable product.
            </p>
            <span>MORE TO COME ↗</span>
          </div>
        </section>

        <section className="journey section" id="journey">
          <Reveal className="section-kicker">
            <span>06 / THE JOURNEY</span>
            <span>STILL IN PROGRESS</span>
          </Reveal>

          <Reveal>
            <h2 className="section-title">
              Becoming is
              <br />
              <em>part of the work.</em>
            </h2>
          </Reveal>

          <div className="timeline">
            {[
              [
                "FOUNDATIONS",
                "Curiosity becomes a craft",
                "Academic foundations, early achievements, and an interest in understanding how things work."
              ],
              [
                "ENGINEERING",
                "Learning to build systems",
                "IT engineering at VIT Vellore, technical labs, software projects, and exploring computing."
              ],
              [
                "BUILDING",
                "From coursework to real problems",
                "Projects, hackathons, research, and collaborative work connecting technology with practical needs."
              ],
              [
                "WHAT'S NEXT",
                "Building with more intention",
                "Deepening engineering skills while exploring product strategy, business, and new challenges."
              ]
            ].map(([label, title, description], index) => (
              <Reveal className="timeline-item" key={label}>
                <span className="timeline-dot" />
                <span className="timeline-label">{label}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="education section" id="education">
          <Reveal className="section-kicker">
            <span>07 / THE FOUNDATION</span>
            <span>EDUCATION & ACADEMIC HIGHLIGHTS</span>
          </Reveal>
          <div className="education-layout">
            <Reveal className="education-main">
              <span className="education-overline">BACHELOR'S DEGREE · IN PROGRESS</span>
              <h2 className="section-title">Learning to build<br /><em>what comes next.</em></h2>
              <div className="education-card">
                <div className="education-mark">VIT</div>
                <div>
                  <h3>Vellore Institute of Technology</h3>
                  <p>B.Tech in Information Technology</p>
                  <span>Expected graduation: 2027</span>
                </div>
              </div>
            </Reveal>
            <Reveal className="education-highlights">
              <span className="detail-label">ACADEMIC HIGHLIGHTS</span>
              <div className="education-highlight"><b>01</b><div><strong>Machine Learning</strong><p>Achieved an S grade in the theoretical course.</p></div></div>
              <div className="education-highlight"><b>02</b><div><strong>Consistent academic performance</strong><p>Scored 90%+ in both Class X and Class XII, building a strong foundation for engineering studies.</p></div></div>
              <div className="education-highlight"><b>03</b><div><strong>Learning through practice</strong><p>Coursework, labs, research, hackathons, and applied software projects.</p></div></div>
            </Reveal>
          </div>
          <p className="section-desc education-note">A foundation in computing, strengthened through hands-on labs, research, and project-based learning.</p>
        </section>

        <section className="beyond-code section" id="beyond-code">
          <Reveal className="section-kicker">
            <span>08 / THE PERSON, NOT JUST THE PORTFOLIO</span>
            <span>BEYOND THE CODE</span>
          </Reveal>
          <Reveal>
            <h2 className="section-title">Different arenas.<br /><em>Same curiosity.</em></h2>
            <p className="section-desc">The experiences outside engineering shape how I think, communicate, collaborate, and solve problems.</p>
          </Reveal>
          <div className="beyond-grid">
            <Reveal className="beyond-card"><span className="beyond-number">01 / STRATEGY</span><div className="beyond-icon">♟</div><h3>Chess</h3><p>Thinking several moves ahead, weighing trade-offs, and staying patient when the answer isn't obvious.</p><span className="beyond-tag">STRATEGIC THINKING</span></Reveal>
            <Reveal className="beyond-card"><span className="beyond-number">02 / VOICE</span><div className="beyond-icon">↗</div><h3>Debate & Communication</h3><p>Learning to build an argument, listen to opposing views, and communicate ideas with clarity.</p><span className="beyond-tag">COMMUNICATION</span></Reveal>
            <Reveal className="beyond-card"><span className="beyond-number">03 / COMMUNITY</span><div className="beyond-icon">✳</div><h3>Volunteering</h3><p>Contributing to initiatives that bring people together around a shared purpose.</p><span className="beyond-tag">COMMUNITY IMPACT</span></Reveal>
            <Reveal className="beyond-card"><span className="beyond-number">04 / TEAMWORK</span><div className="beyond-icon">⌁</div><h3>Leadership & Sport</h3><p>Experiences in student activities and badminton have helped me value coordination, consistency, and team effort.</p><span className="beyond-tag">COLLABORATION</span></Reveal>
          </div>
          <p className="beyond-footnote">Beyond the technical stack, these experiences shape how I plan, communicate, collaborate, and keep learning.</p>
        </section>

        <section className="case-studies section" id="case-studies">
          <Reveal className="section-kicker">
            <span>09 / OPEN THE PROCESS</span>
            <span>CASE STUDIES & DEMOS</span>
          </Reveal>
          <div className="case-study-heading">
            <Reveal><h2 className="section-title">Not just the result.<br /><em>The thinking behind it.</em></h2></Reveal>
            <Reveal><p className="section-desc">Open a project to explore the problem, architecture, technical choices, trade-offs, and the questions that would validate its real-world impact.</p></Reveal>
          </div>
          <div className="case-study-list">
            {projects.map((project) => (
              <button className="case-study-row" key={project.number} onClick={() => setSelectedProject(project)}>
                <span className="case-study-index">{project.number}</span>
                <span className="case-study-name"><small>{project.category}</small><strong>{project.title}</strong></span>
                <span className="case-study-open">OPEN CASE STUDY <ArrowUpRight size={15} /></span>
              </button>
            ))}
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="contact-glow" />

          <Reveal className="section-kicker">
            <span>07 / THE NEXT CHAPTER</span>
            <span>OPEN TO INTERESTING PROBLEMS</span>
          </Reveal>

          <Reveal>
            <p className="contact-pretitle">
              HAVE SOMETHING INTERESTING IN MIND?
            </p>
            <h2>
              Let's build
              <br />
              <em>something meaningful.</em>
            </h2>
            <p className="contact-desc">
              Opportunities, collaborations, thoughtful conversations,
              or a problem worth solving — I'm happy to connect.
            </p>
            <a
              className="button button-primary contact-button"
              href="mailto:agarwalananya042@gmail.com"
            >
              agarwalananya042@gmail.com <Mail size={16} />
            </a>
          </Reveal>

          <footer className="footer">
            <a className="brand" href="#home" onClick={(e) => {
              e.preventDefault();
              go("home");
            }}>
              <span className="brand-mark">A<span>.</span></span>
              <span>
                ANANYA AGARWAL
                <small>SYSTEMS IN MOTION</small>
              </span>
            </a>

            <div className="footer-links">
              
<a
  className="resume-button"
  href="/resume.pdf"
  target="_blank"
  rel="noreferrer"
>
  View Resume ↗
</a>

              <a
                href="https://github.com/ANANYAA2405"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <ExternalLink size={13} />
              </a>

              <a
                href="https://www.linkedin.com/in/ananya-agarwal-ba81952b6/?isSelfProfile=true"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <ExternalLink size={13} />
              </a>
              <button onClick={() => setCommandOpen(true)}>
                <Terminal size={13} /> Quick navigate
              </button>
            </div>

            <span className="copyright">
              DESIGNED TO KEEP EVOLVING · © {new Date().getFullYear()}
            </span>
          </footer>
        </section>
      </main>

      {selectedProject && (
        <div className="case-modal-backdrop" role="presentation" onClick={() => setSelectedProject(null)}>
          <article className="case-modal" role="dialog" aria-modal="true" aria-label={`${selectedProject.title} case study`} onClick={(event) => event.stopPropagation()}>
            <div className="case-modal-top">
              <span className="detail-label">CASE STUDY / {selectedProject.number}</span>
              <button className="case-modal-close" onClick={() => setSelectedProject(null)} aria-label="Close case study"><X size={20} /></button>
            </div>
            <span className="visual-type">{selectedProject.category}</span>
            <h2>{selectedProject.title}</h2>
            <p className="case-modal-summary">{selectedProject.summary}</p>
            <div className="case-modal-columns">
              <section><span className="detail-label">THE PROBLEM</span><p>{selectedProject.problem || "A focused problem statement is part of the project brief."}</p></section>
              <section><span className="detail-label">THE APPROACH</span><p>{selectedProject.solution || "The approach is guided by the use case, constraints, and intended user outcome."}</p></section>
              <section><span className="detail-label">MY CONTRIBUTION</span><p>{selectedProject.contribution || "The contribution is described in the project overview."}</p></section>
              <section><span className="detail-label">OUTCOME & LEARNINGS</span><p>{selectedProject.outcome || "The next step is to evaluate the implementation against clear success criteria."}</p></section>
            </div>
            <section className="architecture-section">
              <span className="detail-label">SYSTEM FLOW / ARCHITECTURE</span>
              <p className="architecture-note">High-level system flow — the exact components and boundaries depend on the project implementation.</p>
              <div className="architecture-flow"><span>INPUT<br /><small>Data / user need</small></span><b>→</b><span>PROCESS<br /><small>Core logic</small></span><b>→</b><span>OUTPUT<br /><small>Insight / action</small></span></div>
            </section>
            <section className="architecture-section">
              <span className="detail-label">TECH STACK</span>
              <div className="tag-row case-stack">{selectedProject.stack.map((technology) => <span key={technology}>{technology}</span>)}</div>
            </section>
                        <div className="case-media-grid">
              <div className="case-media-placeholder">
                <span>PROJECT OVERVIEW</span>
                <small>
                  Explore the problem, core workflow, technology choices,
                  and intended real-world value of this project above.
                </small>
              </div>
              <div className="case-media-placeholder">
                <span>ENGINEERING DECISIONS</span>
                <small>
                  Review the architecture, design trade-offs, testing strategy,
                  and technical lessons documented in this case study.
                </small>
              </div>
            </div>
            <div className="case-modal-actions">
              {selectedProject.github ? <a href={selectedProject.github} target="_blank" rel="noreferrer">View source <ExternalLink size={14} /></a> : <span>Technical case study</span>}
              {selectedProject.demo ? <a href={selectedProject.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={14} /></a> : <span>Project documentation</span>}
            </div>
          </article>
        </div>
      )}

      <button
        className="command-trigger"
        onClick={() => setCommandOpen(true)}
        title="Quick navigate"
      >
        <Terminal size={16} />
        <span>Quick navigate</span>
        <kbd>Ctrl K</kbd>
      </button>

      {commandOpen && (
        <div
          className="command-backdrop"
          onClick={() => setCommandOpen(false)}
        >
          <div
            className="command-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="command-title">
              <Terminal size={18} />
              <span>Where would you like to go?</span>
              <button onClick={() => setCommandOpen(false)}>
                <X size={17} />
              </button>
            </div>

            {navigation.map(([label, id]) => (
              <button
                className="command-item"
                key={id}
                onClick={() => go(id)}
              >
                {label}
                <ArrowUpRight size={15} />
              </button>
            ))}

            <div className="command-hint">
              PRESS ESC TO CLOSE
            </div>
          </div>
        </div>
      )}
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
