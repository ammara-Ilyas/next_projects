import styles from "../src/app/style/page.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <div className={styles.navbar_con}>
        <ul className={styles.navbar}>
          <li>
            <Link className={styles.nav_link} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.nav_link} href="/quiz">
              Quiz
            </Link>
          </li>{" "}
          <li>
            <Link className={styles.nav_link} href="/random">
              Random
            </Link>
          </li>{" "}
          <li>
            <Link className={styles.nav_link} href="/image">
              Image
            </Link>
          </li>{" "}
          <li>
            <Link className={styles.nav_link} href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
