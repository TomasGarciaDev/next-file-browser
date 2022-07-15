import styles from "../styles/SidebarItem.module.css";
import { IoDocumentSharp } from "react-icons/io5"

export default function SidebarItem({ title, icon }) {
  const handleClick = (e) => {
    e.preventDefault()

    console.log('Clicked')
  }
  return (
    <div className={styles.container} onClick={handleClick}>{ icon }  { title }</div>
  )
}
