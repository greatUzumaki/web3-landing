import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.company}>
            <h3>SwapMaster DEX</h3>
            <p>
              The next generation decentralized exchange platform. Trade
              smarter, faster, and safer.
            </p>
            <div className={styles.social}>
              <a href='https://twitter.com/swapmasterdex' aria-label='Twitter'>
                <TwitterIcon />
              </a>
              <a href='https://t.me/swapmasterdex' aria-label='Telegram'>
                <TelegramIcon />
              </a>
              <a href='https://discord.gg/swapmasterdex' aria-label='Discord'>
                <DiscordIcon />
              </a>
              <a href='https://github.com/swapmasterdex' aria-label='GitHub'>
                <GitHubIcon />
              </a>
            </div>
          </div>

          <div className={styles.links}>
            <h4>Product</h4>
            <Link href='/exchange'>Exchange</Link>
            <Link href='/liquidity'>Liquidity</Link>
            <Link href='/farms'>Farms</Link>
            <Link href='/staking'>Staking</Link>
          </div>

          <div className={styles.links}>
            <h4>Support</h4>
            <Link href='/docs'>Documentation</Link>
            <Link href='/api'>API</Link>
            <Link href='/status'>Status</Link>
            <Link href='/support'>Help Center</Link>
          </div>

          <div className={styles.contact}>
            <h4>Contact Us</h4>
            <p>Have questions? Get in touch with our team</p>
            <a href='mailto:contact@swapmasterdex.com'>
              contact@swapmasterdex.com
            </a>
            <address>
              123 Blockchain Street
              <br />
              Crypto Valley, CH-6300
              <br />
              Zug, Switzerland
            </address>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.legal}>
            <span>© {currentYear} SwapMaster DEX. All rights reserved.</span>
            <Link href='/privacy'>Privacy Policy</Link>
            <Link href='/terms'>Terms of Service</Link>
          </div>
          <div className={styles.disclaimer}>
            Trading crypto assets involves significant risk and can result in
            the loss of your capital. You should not invest more than you can
            afford to lose.
          </div>
        </div>
      </div>
    </footer>
  );
}

function TwitterIcon() {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='currentColor'>
      <path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='currentColor'>
      <path d='M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42l10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701l-.321 4.843c.47 0 .677-.216.94-.477l2.26-2.196l4.696 3.466c.866.48 1.488.233 1.704-.803l3.098-14.59c.317-1.269-.474-1.843-1.555-1.21z' />
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='currentColor'>
      <path d='M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z' />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='currentColor'>
      <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
    </svg>
  );
}
