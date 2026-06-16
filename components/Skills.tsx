import styles from './Skills.module.css'

const groups = [
  {
    label: 'Offensive Security',
    color: 'blue',
    items: ['Pentesting', 'Metasploit', 'Python Scripting', 'CTF Experience', 'Vulnerability Analysis'],
  },
  {
  label: 'Cybersecurity & Data Protection',
  color: 'green',
  items: [
    'Network Security',
    'Wireshark',
    'Threat Analysis',
    'ISO 27001',
    'NIST 800-181'
  ],
},
  {
  label: 'Development & Infrastructure',
  color: 'purple',
  items: ['Next.js', 'React', 'Python', 'Linux', 'Docker Basics'],
},
]

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.wrap}>
        <p className={`${styles.label} reveal`}>Stack técnico</p>
        <h2 className={`${styles.title} reveal`}>Tecnologías</h2>
        <p className={`${styles.sub} reveal`}>
          Herramientas con las que construyo y defiendo sistemas en producción.
        </p>

        <div className={styles.grid}>
          {groups.map((g) => (
            <div key={g.label} className={`${styles.group} reveal`}>
              <div className={`${styles.groupTitle} ${styles[g.color]}`}>{g.label}</div>
              {g.items.map((item) => (
                <div key={item} className={styles.item}>
                  <span className={`${styles.dot} ${styles[g.color]}`} />
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
