import Navbar from "./Navbar";
import styles from "../styles/Layout.module.css";
import Sidebar from "./Sidebar";
import Files from "./Files";
import Preview from "./Preview";

export default function Layout({children}) {
  return (
    <div className={styles.main_container}>
      <Navbar/>
      <div className={styles.container}>
      <Sidebar/>
      <div className={styles.container_files}>{children}</div>
      {/* <Files/> */}
      <Preview />
      </div>
    </div>
  )
}
