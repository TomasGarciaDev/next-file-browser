import styles from "../styles/Files.module.css"

export default function Files({file}) {
  return (
    <div className={styles.container}>{file.id}</div>
  )
}


