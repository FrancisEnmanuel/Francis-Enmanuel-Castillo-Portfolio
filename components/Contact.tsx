import styles from './Contact.module.css'
import { FiMail } from 'react-icons/fi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const links = [
  {
    icon: <FiMail className={styles.email} />,
    label: 'Email',
    value: 'Enmanuellopez2504@gmail.com',
    href: 'mailto:Enmanuellopez2504@gmail.com',
  },
  {
    icon: <FaLinkedin className={styles.linkedin} />,
    label: 'LinkedIn',
    value: 'Francis Enmanuel Castillo Lopez',
    href: 'https://www.linkedin.com/in/francis-enmanuel-castillo-lopez-a6163628a/',
  },
  {
    icon: <FaGithub className={styles.github} />,
    label: 'GitHub',
    value: 'Francis Enmanuel Castillo',
    href: 'https://github.com/franciscastillo',
  },
]

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.wrap}>
        <p className={`${styles.label} reveal`}>Hablemos</p>
        <h2 className={`${styles.title} reveal`}>
          ¿Listo para construir algo{' '}
          <span className={styles.accent}>seguro e inteligente?</span>
        </h2>
        

        <div className={`${styles.linksGrid} reveal`}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className={styles.card}
            >
              <div className={styles.cardIcon}>{link.icon}</div>
              <div>
                <div className={styles.cardLabel}>{link.label}</div>
                <div className={styles.cardValue}>{link.value}</div>
              </div>
              <span className={styles.arrow}>→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
};
