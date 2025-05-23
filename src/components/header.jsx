import igniteLogo from '../assets/ignite-logo.svg'

import styles from './header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo do Ignite Feed" />
      <strong>Ignite Feed</strong>
    </header>
  )
}