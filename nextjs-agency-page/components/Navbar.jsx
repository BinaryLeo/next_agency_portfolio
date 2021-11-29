import styles from "../styles/Navbar.module.css"
import Link from "next/link"
const Navbar = () => {
    return (
        <div className={styles.container}>
         <Link href="/">SCOOTER</Link>
         <ul className={styles.list}>
         <li className={styles.listItem}> <Link href="/products/design">DESIGN</Link></li>
         <li className={styles.listItem}> <Link href="/products/development">DEVELOPMENT</Link></li>
         <li className={styles.listItem}> <Link href="/products/production">PRODUCTION</Link></li>
         <li className={styles.listItem}> <Link href="/products/photography">PHOTOGRAPHY</Link></li>
         <li className={styles.listItem}> <Link href="contact">CONTACT</Link></li>
         </ul>
        </div>
    )
}
export default Navbar