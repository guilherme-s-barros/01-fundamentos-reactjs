import styles from './avatar.module.css'

export function Avatar({ src, hasBorder = true }) {
  return (
    <img
      src={src}
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
    />
  )
}
