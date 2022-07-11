import styles from "../styles/SidebarItem.module.css"

export default function SidebarItem({ title }) {
  return (
    <div className={styles.container}>{title}</div>
  )
}
