'use client'
import Link from 'next/link'
import styles from './Nav.module.css'



export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="#" className={styles.logo}>
        FEC<span className={styles.accent}>.</span>
      </Link>

      <ul className={styles.links}>
        <li><a href="#expertise">Expertise</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#trayectoria">Trayectoria</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>

    <a
  href="/imagen/Francis Enmanuel Castillo CV.pdf"
  download="Francis Enmanuel Castillo CV.pdf"
  className={styles.cta}
  onClick={() => console.log("click")}
>
  Get My CV
</a>

    </nav>
  )
}