import styles from './Features.module.css';

const features = [
  {
    title: 'Lightning Fast Swaps',
    description:
      'Execute trades instantly with our optimized smart contracts and advanced routing system',
    icon: '⚡',
    gradient: 'blue',
  },
  {
    title: 'Maximum Security',
    description:
      'Your assets are protected by industry-leading security measures and audited smart contracts',
    icon: '🛡️',
    gradient: 'purple',
  },
  {
    title: 'Lowest Fees',
    description:
      'Enjoy minimal trading fees with our optimized liquidity pools and efficient routing',
    icon: '💎',
    gradient: 'pink',
  },
];

export default function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Why Choose SwapMaster DEX</h2>
          <p>
            Experience the next level of decentralized trading with our
            cutting-edge features
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${styles.featureCard} ${styles[feature.gradient]}`}
            >
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{feature.icon}</span>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
