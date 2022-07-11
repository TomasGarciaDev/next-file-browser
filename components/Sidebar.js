import styles from "../styles/Sidebar.module.css";
import SidebarItem from './SidebarItem';

export default function Sidebar() {
  return (
    <aside className={styles.container}>
      <SidebarItem title="Documents" />
      <SidebarItem title="Pictures" />
      <SidebarItem title="Music" />
      <SidebarItem title="Videos" />
    </aside>
  )
}
