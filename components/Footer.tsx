import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.copy}>© 2025 Francis Castillo. Todos los derechos reservados.</span>
      <span className={styles.badge}>Open to work</span>
    </footer>
  )
}
