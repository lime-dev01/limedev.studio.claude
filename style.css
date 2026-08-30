/* ============================================= */
/* TOKENS                                         */
/* ============================================= */
:root {
  --bg: #FFFFFF;
  --bg-panel: #F5F7FE;
  --bg-dark: #10132B;
  --line: #E4E9FB;
  --line-strong: #C7CEE8;
  --text: #14173A;
  --text-muted: #6B7089;
  --accent: #7C3AED;
  --accent-2: #A855F7;
  --accent-blue: #5B8DEF;
  --accent-soft: rgba(124, 58, 237, 0.08);
  --gradient-main: linear-gradient(135deg, var(--accent-blue), var(--accent) 60%, var(--accent-2));

  --font-display: 'Space Grotesk', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'IBM Plex Mono', monospace;

  --container: 1180px;
}

/* ============================================= */
/* RESET & BASE                                   */
/* ============================================= */
* { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }

body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

a { color: inherit; text-decoration: none; }

:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  * { animation: none !important; transition: none !important; }
}

/* ============================================= */
/* HEADER                                         */
/* ============================================= */
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  max-width: var(--container);
  margin: 0 auto;
  padding: 22px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(10px);
}

.logo {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.15rem;
  letter-spacing: 0.02em;
  color: var(--text);
}

.site-nav {
  display: flex;
  align-items: center;
  gap: 30px;
  font-family: var(--font-mono);
  font-size: 0.76rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.site-nav a { position: relative; padding: 4px 0; transition: color 0.2s ease; }
.site-nav a::after {
  content: '';
  position: absolute;
  left: 0; bottom: 0;
  width: 0; height: 1.5px;
  background: var(--gradient-main);
  transition: width 0.25s ease;
}
.site-nav a:hover { color: var(--text); }
.site-nav a:hover::after { width: 100%; }

.nav-cta {
  color: #FFFFFF !important;
  background: var(--gradient-main);
  padding: 10px 18px;
  border-radius: 30px;
  box-shadow: 0 6px 16px rgba(124, 58, 237, 0.28);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.nav-cta::after { display: none; }
.nav-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(124, 58, 237, 0.4);
}

.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
}
.nav-toggle span {
  width: 22px;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: transform 0.25s ease, opacity 0.25s ease;
}

/* ============================================= */
/* HERO (ACCUEIL)                                 */
/* ============================================= */
.hero {
  position: relative;
  overflow: hidden;
  padding: 64px 32px 120px;
  isolation: isolate;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(70px);
  opacity: 0.55;
}
.blob--1 {
  width: 420px; height: 420px;
  top: -140px; right: -100px;
  background: radial-gradient(circle, var(--accent-2), transparent 70%);
  animation: float-slow 14s ease-in-out infinite;
}
.blob--2 {
  width: 340px; height: 340px;
  bottom: -160px; left: -80px;
  background: radial-gradient(circle, var(--accent-blue), transparent 70%);
  animation: float-slow 18s ease-in-out infinite reverse;
}
.blob--3 {
  width: 220px; height: 220px;
  top: 30%; left: 38%;
  background: radial-gradient(circle, var(--accent), transparent 70%);
  opacity: 0.3;
  animation: float-slow 20s ease-in-out infinite;
}

@keyframes float-slow {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(20px, -30px) scale(1.08); }
}

.shape { position: absolute; display: block; }

.shape--tri {
  top: 12%;
  right: 30%;
  width: 0; height: 0;
  border-left: 22px solid transparent;
  border-right: 22px solid transparent;
  border-bottom: 38px solid rgba(124, 58, 237, 0.18);
  transform: rotate(15deg);
  animation: spin-slow 30s linear infinite;
}

.shape--square {
  bottom: 22%;
  left: 6%;
  width: 40px; height: 40px;
  border: 2px solid var(--line-strong);
  border-radius: 6px;
  transform: rotate(20deg);
}

.shape--ring {
  top: 8%;
  left: 3%;
  width: 90px; height: 90px;
  border-radius: 50%;
  border: 1.5px dashed var(--accent-blue);
  opacity: 0.5;
  animation: spin-slow 40s linear infinite;
}

.shape--dots {
  bottom: 10%;
  right: 4%;
  width: 90px; height: 60px;
  background-image: radial-gradient(var(--line-strong) 1.6px, transparent 1.6px);
  background-size: 14px 14px;
  opacity: 0.7;
}

@keyframes spin-slow {
  to { transform: rotate(360deg); }
}

.hero-inner {
  position: relative;
  z-index: 2;
  max-width: var(--container);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  padding-top: 40px;
}

.doc-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  color: var(--accent);
  border: 1px solid var(--line-strong);
  background: #FFFFFF;
  box-shadow: 0 4px 14px rgba(124, 58, 237, 0.1);
  padding: 8px 16px;
  margin-bottom: 30px;
  border-radius: 30px;
}

.doc-tag__dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: var(--gradient-main);
  animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.4); opacity: 0.6; }
}

.hero-title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(2.6rem, 5.2vw, 4rem);
  line-height: 1.06;
  letter-spacing: -0.015em;
  margin-bottom: 26px;
  color: var(--text);
}

.accent-word {
  background: var(--gradient-main);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  position: relative;
}

.hero-subtitle {
  max-width: 46ch;
  color: var(--text-muted);
  font-size: 1.08rem;
  line-height: 1.65;
  margin-bottom: 42px;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

/* --- Boutons --- */
.btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  letter-spacing: 0.02em;
  padding: 16px 28px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  overflow: hidden;
  isolation: isolate;
  transition: transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.25s ease, color 0.25s ease;
}

.btn--primary {
  background: var(--gradient-main);
  background-size: 200% 200%;
  background-position: 0% 50%;
  color: #FFFFFF;
  box-shadow: 0 10px 26px rgba(124, 58, 237, 0.32);
}
.btn--primary:hover {
  transform: translateY(-3px) scale(1.02);
  background-position: 100% 50%;
  box-shadow: 0 16px 34px rgba(124, 58, 237, 0.45);
}
.btn--primary:active { transform: translateY(-1px) scale(0.99); }

.btn-arrow {
  width: 15px; height: 15px;
  transition: transform 0.25s ease;
}
.btn--primary:hover .btn-arrow { transform: translateX(4px); }

.btn--ghost {
  background: #FFFFFF;
  color: var(--text);
  border: 1.5px solid var(--line-strong);
}
.btn--ghost::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--gradient-main);
  opacity: 0;
  z-index: -1;
  transition: opacity 0.25s ease;
}
.btn--ghost:hover {
  color: #FFFFFF;
  border-color: transparent;
  transform: translateY(-3px);
  box-shadow: 0 14px 28px rgba(91, 141, 239, 0.3);
}
.btn--ghost:hover::before { opacity: 1; }

/* --- Mockup de navigateur --- */
.hero-visual {
  position: relative;
  perspective: 1400px;
}

.browser-mock {
  background: #FFFFFF;
  border-radius: 16px;
  border: 1px solid var(--line);
  box-shadow: 0 40px 80px -20px rgba(20, 23, 58, 0.28), 0 0 0 1px rgba(124,58,237,0.04);
  transform: rotateY(-10deg) rotateX(4deg);
  transition: transform 0.5s ease;
  animation: float-mock 7s ease-in-out infinite;
}

.hero-visual:hover .browser-mock {
  transform: rotateY(-4deg) rotateX(2deg);
}

@keyframes float-mock {
  0%, 100% { transform: rotateY(-10deg) rotateX(4deg) translateY(0); }
  50% { transform: rotateY(-10deg) rotateX(4deg) translateY(-14px); }
}

.browser-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 18px;
  border-bottom: 1px solid var(--line);
  background: var(--bg-panel);
  border-radius: 16px 16px 0 0;
}

.dot { width: 9px; height: 9px; border-radius: 50%; }
.dot--a { background: #FF6B6B; }
.dot--b { background: #FFC15E; }
.dot--c { background: #4ADE80; }

.browser-url {
  margin-left: 10px;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--text-muted);
  background: #FFFFFF;
  border: 1px solid var(--line);
  padding: 4px 12px;
  border-radius: 20px;
}

.browser-body { padding: 26px; }

.mock-nav {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 26px;
}
.mock-nav__logo {
  width: 24px; height: 24px;
  border-radius: 6px;
  background: var(--gradient-main);
}
.mock-nav__item {
  width: 40px; height: 8px;
  border-radius: 4px;
  background: var(--line-strong);
}
.mock-nav__cta {
  margin-left: auto;
  width: 60px; height: 20px;
  border-radius: 20px;
  background: var(--accent-soft);
  border: 1px solid var(--accent);
}

.mock-hero { margin-bottom: 26px; }
.mock-line {
  display: block;
  height: 12px;
  border-radius: 4px;
  background: linear-gradient(90deg, var(--line-strong), var(--line));
  margin-bottom: 10px;
}
.mock-line--lg { width: 82%; height: 18px; }
.mock-line--md { width: 60%; }
.mock-btn {
  display: inline-block;
  width: 90px; height: 26px;
  border-radius: 20px;
  background: var(--gradient-main);
  margin-top: 8px;
}

.mock-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
.mock-card {
  aspect-ratio: 1;
  border-radius: 10px;
  background: var(--bg-panel);
  border: 1px solid var(--line);
  position: relative;
  overflow: hidden;
}
.mock-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(124,58,237,0.12), transparent 60%);
}

/* --- Badges flottants --- */
.floating-badge {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 500;
  color: var(--text);
  background: #FFFFFF;
  padding: 10px 16px;
  border-radius: 30px;
  box-shadow: 0 14px 30px rgba(20, 23, 58, 0.16);
  border: 1px solid var(--line);
  animation: float-badge 5s ease-in-out infinite;
}

.floating-badge--online {
  bottom: -18px;
  left: -22px;
  animation-delay: 0.4s;
}
.floating-badge__dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: #4ADE80;
  box-shadow: 0 0 0 3px rgba(74, 222, 128, 0.25);
}

.floating-badge--stars {
  top: -16px;
  right: -14px;
  color: #F5A623;
  letter-spacing: 2px;
  font-size: 0.85rem;
}

@keyframes float-badge {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* ============================================= */
/* SECTIONS GÉNÉRIQUES                            */
/* ============================================= */
.section {
  position: relative;
  padding: 110px 32px;
}

.section--tinted { background: var(--bg-panel); }

.section-inner {
  max-width: var(--container);
  margin: 0 auto;
}

.section-inner--split {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 64px;
  align-items: start;
}

.section-tag {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  color: var(--accent);
  margin-bottom: 18px;
  text-transform: uppercase;
  position: relative;
  padding-left: 22px;
}
.section-tag::before {
  content: '';
  position: absolute;
  left: 0; top: 50%;
  transform: translateY(-50%);
  width: 14px; height: 2px;
  background: var(--gradient-main);
}

.section-title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(1.9rem, 3.2vw, 2.5rem);
  line-height: 1.15;
  color: var(--text);
}

.section-note {
  margin-top: 18px;
  color: var(--text-muted);
  font-size: 0.96rem;
  line-height: 1.6;
}

.inline-link {
  color: var(--accent);
  border-bottom: 1px solid var(--accent);
  transition: color 0.2s ease, border-color 0.2s ease;
}
.inline-link:hover { color: var(--accent-blue); border-color: var(--accent-blue); }

.section-body p {
  color: var(--text-muted);
  font-size: 1.03rem;
  line-height: 1.75;
  margin-bottom: 18px;
  max-width: 58ch;
}

/* ============================================= */
/* SAVOIR-FAIRE                                   */
/* ============================================= */
.skills-grid {
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.skill-card {
  background: #FFFFFF;
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 34px 28px;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}
.skill-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 3px;
  background: var(--gradient-main);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.35s ease;
}
.skill-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 24px 48px rgba(20, 23, 58, 0.1);
  border-color: transparent;
}
.skill-card:hover::before { transform: scaleX(1); }

.skill-index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px; height: 36px;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: #FFFFFF;
  background: var(--gradient-main);
  border-radius: 10px;
  margin-bottom: 22px;
}

.skill-card h3 {
  font-family: var(--font-display);
  font-size: 1.12rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: var(--text);
}

.skill-card p {
  color: var(--text-muted);
  font-size: 0.93rem;
  line-height: 1.65;
}

/* ============================================= */
/* POURQUOI ME CHOISIR                            */
/* ============================================= */
.arguments-grid {
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2px;
  background: var(--line);
  border: 1px solid var(--line);
  border-radius: 18px;
  overflow: hidden;
}

.argument-card {
  background: #FFFFFF;
  padding: 36px 34px;
  position: relative;
  transition: background 0.3s ease;
}
.argument-card:hover { background: var(--bg-panel); }

.argument-mark {
  display: block;
  width: 34px; height: 34px;
  margin-bottom: 20px;
  border-radius: 50%;
  background: var(--gradient-main);
  position: relative;
}
.argument-mark::after {
  content: '';
  position: absolute;
  inset: 10px;
  background: #FFFFFF;
  border-radius: 50%;
}

.argument-card h3 {
  font-family: var(--font-display);
  font-size: 1.08rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: var(--text);
}

.argument-card p {
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.65;
  max-width: 42ch;
}

/* ============================================= */
/* RÉALISATIONS                                   */
/* ============================================= */
.work-grid {
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.work-card {
  display: block;
  background: #FFFFFF;
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.work-card:hover {
  border-color: transparent;
  transform: translateY(-6px);
  box-shadow: 0 26px 50px rgba(20, 23, 58, 0.12);
}

.work-thumb {
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 12px;
  margin-bottom: 20px;
  background: linear-gradient(135deg, var(--accent-soft), var(--bg-panel) 70%);
  border: 1px solid var(--line);
  position: relative;
  overflow: hidden;
}
.work-thumb::after {
  content: '';
  position: absolute;
  width: 70px; height: 70px;
  border: 1.5px solid var(--line-strong);
  border-radius: 50%;
  top: -24px; right: -24px;
}
.work-thumb::before {
  content: '';
  position: absolute;
  width: 40px; height: 40px;
  background: var(--gradient-main);
  opacity: 0.15;
  bottom: -12px; left: -12px;
  transform: rotate(20deg);
}

.work-card h3 {
  font-family: var(--font-display);
  font-size: 1.04rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 6px;
}

.work-card p {
  color: var(--text-muted);
  font-size: 0.9rem;
}

/* ============================================= */
/* FORMULAIRE DE CONTACT                          */
/* ============================================= */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: #FFFFFF;
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 36px;
  box-shadow: 0 30px 60px rgba(20, 23, 58, 0.08);
}

.form-row { display: flex; flex-direction: column; gap: 8px; }

.form-row label {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-muted);
}

.form-row input,
.form-row textarea {
  font-family: var(--font-body);
  font-size: 0.96rem;
  color: var(--text);
  background: var(--bg-panel);
  border: 1.5px solid var(--line);
  border-radius: 10px;
  padding: 13px 16px;
  resize: vertical;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.form-row input:focus,
.form-row textarea:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 4px var(--accent-soft);
}

.contact-form .btn { align-self: flex-start; }

.form-feedback {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  margin-top: -4px;
}
.form-feedback--success { color: #16A34A; }
.form-feedback--error { color: #DC2626; }

/* ============================================= */
/* FOOTER                                         */
/* ============================================= */
.site-footer {
  background: var(--bg-dark);
  color: #C9CDEB;
  padding: 72px 32px 32px;
  position: relative;
  overflow: hidden;
}
.site-footer::before {
  content: '';
  position: absolute;
  top: -120px; right: -120px;
  width: 320px; height: 320px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(124,58,237,0.35), transparent 70%);
  filter: blur(20px);
}

.footer-inner {
  position: relative;
  max-width: var(--container);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: 48px;
  padding-bottom: 48px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.footer-brand .logo { color: #FFFFFF; }
.footer-brand p {
  margin-top: 14px;
  font-size: 0.9rem;
  line-height: 1.6;
  color: #9CA1CC;
  max-width: 34ch;
}

.footer-col h4 {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #FFFFFF;
  margin-bottom: 18px;
}

.footer-col { display: flex; flex-direction: column; gap: 12px; }
.footer-col a {
  font-size: 0.9rem;
  color: #9CA1CC;
  transition: color 0.2s ease;
  width: fit-content;
}
.footer-col a:hover { color: #FFFFFF; }

.footer-bottom {
  position: relative;
  max-width: var(--container);
  margin: 0 auto;
  padding-top: 28px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  font-family: var(--font-mono);
  font-size: 0.76rem;
  color: #7A80AC;
}

.footer-legal { display: flex; gap: 24px; }
.footer-legal a { transition: color 0.2s ease; }
.footer-legal a:hover { color: #FFFFFF; }

/* ============================================= */
/* RESPONSIVE                                     */
/* ============================================= */
@media (max-width: 1024px) {
  .site-nav { display: none; }
  .nav-toggle { display: flex; }
  .site-nav.is-open {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0; right: 0;
    background: #FFFFFF;
    padding: 24px 32px;
    border-bottom: 1px solid var(--line);
    gap: 18px;
  }
}

@media (max-width: 900px) {
  .hero-inner { grid-template-columns: 1fr; gap: 56px; text-align: left; }
  .hero-visual { max-width: 480px; }
  .section-inner--split { grid-template-columns: 1fr; gap: 32px; }
  .skills-grid { grid-template-columns: 1fr; }
  .arguments-grid { grid-template-columns: 1fr; }
  .work-grid { grid-template-columns: 1fr; }
  .footer-inner { grid-template-columns: 1fr; gap: 32px; }
}

@media (max-width: 560px) {
  .site-header { padding: 18px 20px; }
  .hero { padding: 48px 20px 100px; }
  .hero-actions { gap: 14px; }
  .section { padding: 72px 20px; }
  .site-footer { padding: 56px 20px 24px; }
  .footer-bottom { flex-direction: column; align-items: flex-start; }
}
