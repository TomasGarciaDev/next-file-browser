import styles from "../styles/Sidebar.module.css";
import SidebarItem from './SidebarItem';
import { IoDocumentSharp } from "react-icons/io5";
import { AiOutlinePicture } from "react-icons/ai";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { MdOutlineLocalMovies } from "react-icons/md";

export default function Sidebar() {
  return (
    <aside className={styles.container}>
      <SidebarItem title="Documents" icon={<IoDocumentSharp />}/>
      <SidebarItem title="Pictures" icon={<AiOutlinePicture />}/>
      <SidebarItem title="Music" icon={<BsMusicNoteBeamed />}/>
      <SidebarItem title="Videos" icon={<MdOutlineLocalMovies />}/>
    </aside>
  )
}
