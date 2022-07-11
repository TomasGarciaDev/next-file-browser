import Navbar from "./Navbar";
import styles from "../styles/Layout.module.css";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div className={styles.main_container}>
      <Navbar/>
      <div className={styles.container}>
      <Sidebar/>
      <Sidebar/>
      <Sidebar/>
      </div>
    </div>
  )
}
