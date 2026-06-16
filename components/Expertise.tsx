import styles from './Expertise.module.css'

const cards = [
{
icon: '🤖',
title: 'AI Automation & Agentic Systems',
desc: 'Formación en automatización inteligente mediante n8n y MCP, desarrollando agentes de IA capaces de interactuar con herramientas, APIs y flujos de trabajo avanzados.',
tags: ['n8n', 'MCP', 'Agentic AI'],
},
{
icon: '🛡️',
title: 'Defensive Cybersecurity',
desc: 'Capacitación en ciberseguridad defensiva, protección de sistemas, análisis de amenazas y aplicación de buenas prácticas de seguridad informática.',
tags: ['Security', 'Threat Analysis', 'Defense'],
},
{
icon: '💻',
title: 'FullStack Development',
desc: 'Desarrollo de aplicaciones web y de escritorio utilizando tecnologías modernas, desde los fundamentos hasta la implementación profesional.',
tags: ['FullStack', 'Web Apps', 'Desktop Apps'],
},
{
icon: '📚',
title: 'JavaScript Expertise',
desc: 'Formación completa en JavaScript, cubriendo desde conceptos básicos hasta técnicas avanzadas para el desarrollo de aplicaciones modernas.',
tags: ['JavaScript', 'ES6+', 'Programming'],
},
]

export default function Expertise() {
  return (
    <section id="expertise" className={styles.section}>
      <div className={styles.wrap}>
        <p className={`${styles.label} reveal`}>Áreas de enfoque</p>
        <h2 className={`${styles.title} reveal`}>My Expertise</h2>
        
        <p className={`${styles.sub} reveal`}>
          Soluciones que integran inteligencia artificial, seguridad robusta y desarrollo escalable.
        </p>

        <div className={styles.grid}>
          {cards.map((card) => (
            <div key={card.title} className={`${styles.card} reveal`}>
              <div className={styles.icon}>{card.icon}</div>
              <div className={styles.cardTitle}>{card.title}</div>
              <p className={styles.cardDesc}>{card.desc}</p>
              <div className={styles.tags}>
                {card.tags.map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
