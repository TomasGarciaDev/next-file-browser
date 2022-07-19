import styles from "../styles/FileItem.module.css";
import Image from "next/image";

export default function FileItem({picture}) {
  return (
    <div className={styles.event}>{picture.name}
      {/* <Image src={file.image && file.image} width={170} height={100}/> */}
    </div>
  )
}
