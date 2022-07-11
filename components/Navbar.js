import { AiOutlineSearch } from 'react-icons/ai';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const searchIcon = <AiOutlineSearch />
  return (
    <nav className={styles.container}>
      <h1>File Browser</h1>
      <input type='text' className={styles.inputBox} placeholder="Search"/>
    </nav>
  )
}
