import { ArrowDownRight, ArrowUpRight, Asterisk, MoveRight } from "lucide-react";
import { ContactForm } from "./components/contact-form";

const capabilities = [
  {
    number: "01",
    title: "Identity & direction",
    copy: "A visual system with a point of view—type, color, rhythm, voice, and the rules that make it hold together.",
  },
  {
    number: "02",
    title: "Interfaces that move",
    copy: "Responsive experiences that feel composed at every size, with interaction that clarifies instead of decorating.",
  },
  {
    number: "03",
    title: "Systems that last",
    copy: "Accessible components, clean data paths, useful error states, and maintainable code behind the finished surface.",
  },
];

const principles = [
  ["01", "Start with the real problem", "The sharpest interface begins with knowing what a person needs to understand or do next."],
  ["02", "Make one strong decision", "A memorable product needs a governing idea—not fifty fashionable details competing for attention."],
  ["03", "Sweat the invisible work", "Performance, validation, accessibility, responsive behavior, and failure states are part of the design."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Studio and Design home">
          <span>Studio</span><i /> <span>Design</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#archive">Archive</a>
          <a href="#practice">Practice</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="#contact">
          Start a project <ArrowUpRight aria-hidden="true" />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-kicker reveal">
          <span>Austin, Texas</span>
          <span>Established 2016</span>
          <span>Reimagined 2026</span>
        </div>

        <div className="hero-copy reveal delay-1">
          <p className="eyebrow"><Asterisk aria-hidden="true" /> Independent digital practice</p>
          <h1>Built once<br />by hand.<br /><em>Rebuilt with intent.</em></h1>
        </div>

        <div className="hero-media reveal delay-2">
          <img src="/studio-hero.png" alt="Sculptural glass and graphite forms representing digital craft" />
          <div className="hero-stamp" aria-hidden="true">
            <span>10</span>
            <small>years<br />later</small>
          </div>
        </div>

        <div className="hero-footer reveal delay-3">
          <p>A ten-year-old web-design experiment, rebuilt as a study in how far the tools—and the person using them—have come.</p>
          <a href="#archive" aria-label="Continue to the archive section"><ArrowDownRight /></a>
        </div>
      </section>

      <section className="archive-section" id="archive">
        <div className="section-label"><span>01</span><p>The archive</p></div>
        <div className="archive-grid">
          <div className="archive-heading">
            <p className="overline">October–December 2016</p>
            <h2>Nine units.<br />Fifty-six commits.<br />One idea taking shape.</h2>
          </div>
          <div className="archive-copy">
            <p className="lead">Before design systems, server components, and AI-assisted development, there was an empty HTML document and a stubborn willingness to figure it out.</p>
            <p>The original repository moves from a three-page personal portfolio, through wireframes and a wine-and-culinary concept, into a complete small-business studio site. This rebuild preserves the ambition while replacing the scaffolding beneath it.</p>
            <a href="https://github.com/kylelentz/Web" target="_blank" rel="noreferrer">
              View the original repository <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <div className="timeline" aria-label="Project evolution">
            <article><span>Unit 01</span><strong>Personal portfolio</strong><small>HTML · CSS · first principles</small></article>
            <article><span>Unit 02</span><strong>Wireframes</strong><small>Structure before styling</small></article>
            <article><span>Units 03–04</span><strong>The Cultured</strong><small>Editorial food & wine concept</small></article>
            <article><span>Units 05–09</span><strong>Studio & Design</strong><small>Responsive commercial site</small></article>
          </div>
        </div>
      </section>

      <section className="practice-section" id="practice">
        <div className="section-label light"><span>02</span><p>The practice</p></div>
        <div className="practice-intro">
          <h2>Beautiful on the surface.<br /><em>Disciplined underneath.</em></h2>
          <p>Good digital work should feel inevitable: clear enough to use without instruction, distinctive enough to remember, and engineered well enough to trust.</p>
        </div>
        <div className="capability-list">
          {capabilities.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <MoveRight aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="principles-section">
        <div className="section-label"><span>03</span><p>How it works</p></div>
        <div className="principles-layout">
          <div className="principles-heading">
            <p className="overline">A quieter process</p>
            <h2>Less theater.<br />More judgment.</h2>
          </div>
          <div className="principles-list">
            {principles.map(([number, title, copy]) => (
              <article key={number}>
                <span>{number}</span>
                <div><h3>{title}</h3><p>{copy}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-intro">
          <div className="section-label light"><span>04</span><p>Start something</p></div>
          <div>
            <p className="overline">Have a useful idea?</p>
            <h2>Let&apos;s make it<br /><em>feel inevitable.</em></h2>
            <p className="contact-note">Tell me what you are trying to build, who it is for, and what a successful version would change.</p>
          </div>
          <footer>
            <a href="https://github.com/kylelentz" target="_blank" rel="noreferrer">GitHub <ArrowUpRight /></a>
            <p>Studio & Design<br />Austin, Texas</p>
          </footer>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
