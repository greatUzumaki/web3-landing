import Link from 'next/link';
import styles from './Header.module.css';
import Logo from '../Logo';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href='/' className={styles.logo}>
          <Logo />
          <span>SwapMaster</span>
        </Link>

        <div className={styles.tagline}>Trade Smarter, Faster, Safer</div>

        <div className={styles.actions}>
          <Link href='/docs' className={styles.link}>
            Docs
          </Link>
          <Link href='/about' className={styles.link}>
            About
          </Link>
          <button className={styles.primaryButton}>Launch App</button>
        </div>
      </div>
    </header>
  );
}
