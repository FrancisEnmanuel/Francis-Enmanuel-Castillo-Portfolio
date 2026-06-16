'use client'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.grid}>

        {/* Left: text */}
        <div>
          <div className={`${styles.eyebrow} reveal`}>Disponible para proyectos</div>
          <h1 className={`${styles.name} reveal`}>
            Francis Enmanuel <br /><span className={styles.accent}>Castillo Lopez</span>
          </h1>
          <p className={`${styles.role} reveal`}>
                Cybersecurity Analyst
          </p>
          <p className={`${styles.desc} reveal`}>
            Construyo sistemas seguros, agentes de IA y aplicaciones escalables.
            De la defensa digital a la automatización inteligente.
          </p>
          <div className={`${styles.actions} reveal`}>
            <a href="#contact" className={styles.btnPrimary}>Trabajemos juntos →</a>
            <a href="#trayectoria" className={styles.btnGhost}>Ver trayectoria</a>
          </div>
        </div>

        {/* Right: terminal */}
        <div className="reveal">
          <div className={styles.terminal}>
            <div className={styles.termBar}>
              <span className={`${styles.dot} ${styles.dotR}`} />
              <span className={`${styles.dot} ${styles.dotY}`} />
              <span className={`${styles.dot} ${styles.dotG}`} />
              <span className={styles.termTitle}>FrancisEnmanuelCastillo@portfolio ~ </span>
            </div>
            <div className={styles.termBody}>
              <div className={styles.tLine}>
                <span className={styles.tPrompt}>❯</span>
                <span className={styles.tCmd}> About me </span>
              </div>
              <div className={styles.tOut}>Francis Enmanuel Castillo — Cybersecurity Analyst </div>
              <br />
              <div className={styles.tLine}>
                <span className={styles.tPrompt}>❯</span>
                <span className={styles.tCmd}> skills --list</span>
              </div>
              <div className={`${styles.tOut} ${styles.highlight}`}>→ n8n, MCP, Agentic AI</div>
              <div className={`${styles.tOut} ${styles.highlight}`}>→ Next.js, TypeScript, React</div>
              <div className={`${styles.tOut} ${styles.highlight}`}>→ Pentesting, Wireshark, Metasploit</div>
              <div className={`${styles.tOut} ${styles.highlight}`}>→ Docker, Linux, Python</div>
              <br />
              <div className={styles.tLine}>
                <span className={styles.tPrompt}>❯</span>
                <span className={styles.tCmd}> status</span>
              </div>
              <div className={`${styles.tOut} ${styles.success}`}>✔ Open to  &amp; full-time roles</div>
              <br />
              <div className={styles.tLine}>
                <span className={styles.tPrompt}>❯</span>
                <span className={styles.tCmd}> <span className={styles.cursor} /> </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
