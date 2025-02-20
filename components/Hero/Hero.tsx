import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>
            Next Generation
            <span className={styles.gradient}> DEX Platform</span>
          </h1>
          <p className={styles.description}>
            Experience lightning-fast trades with minimal fees. Our advanced DEX
            platform provides the most efficient and secure way to swap your
            digital assets.
          </p>
          <div className={styles.actions}>
            <button className={styles.primaryButton}>Start Trading</button>
            <button className={styles.secondaryButton}>Learn More</button>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.value}>$2B+</span>
              <span className={styles.label}>Trading Volume</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.value}>100K+</span>
              <span className={styles.label}>Active Traders</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.value}>0.01%</span>
              <span className={styles.label}>Trading Fee</span>
            </div>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src='/hero2.webp'
            alt='SwapMaster DEX Interface'
            width={800}
            height={500}
            className={styles.productImage}
            priority
            unoptimized
          />
          <div className={styles.glow} />
        </div>
      </div>
    </section>
  );
}
