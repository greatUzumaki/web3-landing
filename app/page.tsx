import styles from './page.module.css';
import Hero from '@/components/Hero';
import Features from '@/components/Features';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Features />
    </main>
  );
}
