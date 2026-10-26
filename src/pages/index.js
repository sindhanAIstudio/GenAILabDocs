import React, {useEffect, useState} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const topics = [
  {
    icon: '🧠',
    title: 'Generative AI',
    description:
      'From prompting to foundation models — how modern LLMs perceive, reason and generate.',
  },
  {
    icon: '🤖',
    title: 'LLM Agents',
    description:
      'Design autonomous agents that plan, call tools and reason through long tasks.',
  },
  {
    icon: '⚡',
    title: 'LLM Inference',
    description: 'Serve, fine-tune and scale open models with engineering confidence.',
  },
  {
    icon: '🛠️',
    title: 'LLM Tooling',
    description:
      'Frameworks, vector stores and APIs that plug intelligence into real applications.',
  },
  {
    icon: '🔁',
    title: 'LLMOps',
    description: 'Evaluate, monitor and ship reliable LLM features into production.',
  },
  {
    icon: '📊',
    title: 'MLOps',
    description:
      'Pipelines, governance and versioning for production-grade AI systems.',
  },
];

const tools = [
  {icon: '🤖', name: 'OpenAI GPT'},
  {icon: '🧠', name: 'Gemini'},
  {icon: '🤝', name: 'Claude'},
  {icon: '🦙', name: 'Llama'},
  {icon: '⚡', name: 'Ollama'},
  {icon: '🔗', name: 'LangChain'},
  {icon: '🎨', name: 'Stable Diffusion'},
  {icon: '📚', name: 'RAG'},
];

const faqs = [
  {
    question: 'Do I need coding experience to begin?',
    answer:
      'No — the beginner-friendly tracks start from prompting fundamentals, and the labs build on high-level SDKs.',
  },
  {
    question: 'How long does a lab typically take?',
    answer:
      'Most hands-on labs run between 30 and 90 minutes and include a challenge at the end.',
  },
  {
    question: 'Is the core documentation free?',
    answer:
      'Yes — the core documentation and introductory material are free for every learner.',
  },
  {
    question: 'How often is the curriculum updated?',
    answer:
      'New modules and labs are added each month based on community feedback and model releases.',
  },
  {
    question: 'Can I build and deploy my own AI agent?',
    answer:
      'Absolutely — the learning tracks walk you through agent construction and deployment end to end.',
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(-1);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const updateBackToTop = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener('scroll', updateBackToTop, {passive: true});
    updateBackToTop();
    return () => window.removeEventListener('scroll', updateBackToTop);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <Layout
      title="GenAI Lab Docs"
      description="Tutorials, guides and hands-on labs on LLMs, agents, RAG and MLOps."
      noNavbar
      noFooter
      wrapperClassName={styles.wrapper}>
      <header className={styles.siteHeader} id="top">
        <nav className={styles.nav} aria-label="Main navigation">
          <a href="#home" className={styles.navBrand} onClick={closeMenu}>
            <span className={styles.logoMark} aria-hidden="true">
              ✦
            </span>
            <span>GenAI Lab</span>
          </a>

          <ul
            id="primaryNavLinks"
            className={`${styles.navLinks} ${menuOpen ? styles.navOpen : ''}`}>
            <li>
              <a href="#topics" onClick={closeMenu}>
                Topics
              </a>
            </li>
            <li>
              <a href="#faq" onClick={closeMenu}>
                FAQ
              </a>
            </li>
          </ul>

          <Link
            to="/docs/intro"
            className={`${styles.button} ${styles.buttonPrimary} ${styles.buttonSmall} ${styles.navCta}`}>
            Start Learning
          </Link>
          <button
            className={`${styles.navToggle} ${menuOpen ? styles.navToggleOpen : ''}`}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primaryNavLinks"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((isOpen) => !isOpen)}>
            <span />
            <span />
            <span />
          </button>
        </nav>
      </header>

      <main>
        <section className={styles.hero} id="home">
          <div className={styles.heroGlowOne} aria-hidden="true" />
          <div className={styles.heroGlowTwo} aria-hidden="true" />
          <div className={styles.heroOverlay} aria-hidden="true" />
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>
              ✦ The Generative AI Learning Lab
            </span>
            <h1>
              Learn Generative AI
              <br />
              by Building It
            </h1>
            <p>
              Step-by-step documentation, hands-on labs and real-world experiments
              on LLMs, agents, RAG and MLOps — designed for the next generation of
              AI builders.
            </p>
            <div className={styles.heroActions}>
              <a
                href="#topics"
                className={`${styles.button} ${styles.buttonPrimary}`}>
                Start Learning
              </a>
              <a
                href="#topics"
                className={`${styles.button} ${styles.buttonGhost}`}>
                Explore Topics
              </a>
            </div>
          </div>
        </section>

        <section className={styles.section} id="topics">
          <div className={styles.container}>
            <span className={styles.eyebrow}>Curriculum</span>
            <h2>What You&apos;ll Learn</h2>
            <p className={styles.sectionSubtitle}>
              Six tightly-scoped tracks that take you from your very first prompt
              to a production-ready AI system.
            </p>
            <div className={styles.cardGrid}>
              {topics.map((topic) => (
                <article className={styles.card} key={topic.title}>
                  <div className={styles.cardIcon} aria-hidden="true">
                    {topic.icon}
                  </div>
                  <h3>{topic.title}</h3>
                  <p>{topic.description}</p>
                  <Link className={styles.cardLink} to="/docs/intro">
                    Start track <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.stats} aria-label="Learning platform statistics">
          <div className={`${styles.container} ${styles.statsGrid}`}>
            <div>
              <span className={styles.statNumber}>120+</span>
              <span className={styles.statLabel}>Practical Tutorials</span>
            </div>
            <div>
              <span className={styles.statNumber}>6</span>
              <span className={styles.statLabel}>Learning Tracks</span>
            </div>
            <div>
              <span className={styles.statNumber}>40+</span>
              <span className={styles.statLabel}>Hands-on Labs</span>
            </div>
            <div>
              <span className={styles.statNumber}>25,000+</span>
              <span className={styles.statLabel}>Builders Learning</span>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionTight}`} id="faq">
          <div className={styles.container}>
            <span className={styles.eyebrow}>FAQ</span>
            <h2>Frequently asked questions</h2>
            <p className={styles.sectionSubtitle}>
              Everything you need to know before diving in.
            </p>
            <div className={styles.faqList}>
              {faqs.map((faq, index) => (
                <div
                  className={`${styles.faqItem} ${
                    openFaq === index ? styles.faqItemOpen : ''
                  }`}
                  key={faq.question}>
                  <button
                    className={styles.faqQuestion}
                    type="button"
                    aria-expanded={openFaq === index}
                    onClick={() =>
                      setOpenFaq((current) => (current === index ? -1 : index))
                    }>
                    <span>{faq.question}</span>
                    <span className={styles.faqChevron} aria-hidden="true">
                      ▾
                    </span>
                  </button>
                  <div className={styles.faqAnswer}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <div className={styles.orbitWidget} role="img" aria-label="Generative AI tools">
        <div className={styles.orbitRing} />
        <div className={styles.orbitCore} aria-hidden="true">
          ✨
        </div>
        <div className={styles.orbit}>
          {tools.map((tool, index) => (
            <span
              className={styles.orbitItem}
              key={tool.name}
              style={{'--angle': `${index * (360 / tools.length)}deg`}}
              title={tool.name}
              aria-hidden="true">
              {tool.icon}
            </span>
          ))}
        </div>
      </div>

      {showBackToTop && (
        <button
          className={styles.backToTop}
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          ↑
        </button>
      )}

      <footer className={styles.siteFooter} id="footer">
        <div className={`${styles.container} ${styles.footerInner}`}>
          <p className={styles.footerCopy}>
            © {new Date().getFullYear()} GenAI Lab Docs. All rights reserved.
          </p>
          <ul className={styles.footerSocial}>
            <li>
              <a href="https://github.com/sindhanAIstudio/GenAILabDocs">GitHub</a>
            </li>
            <li>
              <Link to="/docs/intro">Documentation</Link>
            </li>
          </ul>
        </div>
      </footer>
    </Layout>
  );
}
