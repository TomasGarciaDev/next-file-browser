import Navbar from "./Navbar";
import styles from "../styles/Layout.module.css";
import Sidebar from "./Sidebar";
import Files from "./Files";
import Preview from "./Preview";

export default function Layout() {
  return (
    <div className={styles.main_container}>
      <Navbar/>
      <div className={styles.container}>
      <Sidebar/>
      <Files/>
      <Preview />
      </div>
    </div>
  )
}
