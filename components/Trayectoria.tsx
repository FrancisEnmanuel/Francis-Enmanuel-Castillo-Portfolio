import styles from './Trayectoria.module.css'

const formacion = [
  {
    date: '2022 — Actualidad',
    title: 'Ingeniería de Sistemas y Computación',
    org: 'Universidad Dominicana O&M',
    desc: 'Enfocado en ciberseguridad y desarrollo de software, aplicando conocimientos tecnológicos en proyectos reales.',
  },
  {
    date: '2026',
    title: 'Diplomado en Cybersecurity y Protección de Datos',
    org: 'Edutec',
    desc: 'Protección de activos digitales, ciberseguridad defensiva y marcos de trabajo NIST 800-181.',
  },
  {
    date: 'Certificaciones',
    title: 'FullStack, JavaScript & Cybersecurity Foundations',
    org: 'Udemy / Google',
    desc: 'Formación técnica en desarrollo web y principios fundamentales de defensa digital.',
  },
]

const experiencia = [
  {
    date: 'Ago 2024 — Sep 2025',
    title: 'Asistente de Cobros Backoffice',
    org: 'Banco Santa Cruz',
    desc: 'Gestión de llamadas, coordinación de acuerdos de pago para reducir morosidad y soporte proactivo al departamento de cobranzas.',
  },
  {
    date: 'Feb 2023 — Ago 2024',
    title: 'Oficial de Cobros y Recuperación de Activos',
    org: 'Banco Santa Cruz',
    desc: 'Implementación de estrategias para recuperación de pagos y gestión de cartera en mora.',
  },
]

export default function Trayectoria() {
  return (
    <section id="trayectoria" className={styles.section}>
      <div className={styles.wrap}>
        <p className={`${styles.label} reveal`}>Historial</p>
        <h2 className={`${styles.title} reveal`}>Trayectoria</h2>
        <p className={`${styles.sub} reveal`}>
          Formación académica, certificaciones y experiencia profesional que respaldan mi trabajo.
        </p>

        <div className={styles.cols}>
          <div className="reveal">
            <div className={styles.colTitle}><span>⬡</span> Formación &amp; Certs</div>
            <div className={styles.timeline}>
              {formacion.map((item) => (
                <div key={item.title} className={styles.tlItem}>
                  <div className={styles.tlDate}>{item.date}</div>
                  <div className={styles.tlTitle}>{item.title}</div>
                  <div className={styles.tlOrg}>{item.org}</div>
                  <p className={styles.tlDesc}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal">
            <div className={styles.colTitle}><span>⬡</span> Experiencia Laboral</div>
            <div className={styles.timeline}>
              {experiencia.map((item) => (
                <div key={item.title} className={styles.tlItem}>
                  <div className={styles.tlDate}>{item.date}</div>
                  <div className={styles.tlTitle}>{item.title}</div>
                  <div className={styles.tlOrg}>{item.org}</div>
                  <p className={styles.tlDesc}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
