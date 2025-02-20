'use client';

import React from 'react';
import { useWallet } from '../../hooks/useWallet';
import styles from './WalletConnection.module.css';

export const WalletConnection: React.FC = () => {
  const { address, balance, isConnecting, connect, disconnect } = useWallet();

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className={styles.walletWidget}>
      {!address ? (
        <button
          className={`${styles.walletButton} ${
            isConnecting ? styles.connecting : ''
          }`}
          onClick={connect}
          disabled={isConnecting}
        >
          <span className={styles.buttonContent}>
            {isConnecting ? (
              <>
                <span className={styles.loadingSpinner}></span>
                Connecting...
              </>
            ) : (
              <>
                <svg
                  className={styles.walletIcon}
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M19 7h-1V6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3zm-1 9h-2a2 2 0 1 1 0-4h2v4z'
                    fill='currentColor'
                  />
                </svg>
                Connect Wallet
              </>
            )}
          </span>
        </button>
      ) : (
        <div className={styles.connectedState}>
          <div className={styles.walletInfo}>
            <div className={styles.addressSection}>
              <span className={styles.label}>Address:</span>
              <span className={styles.address}>{formatAddress(address)}</span>
            </div>
            <div className={styles.balanceSection}>
              <span className={styles.label}>Balance:</span>
              <span className={styles.balance}>
                {Number(balance).toFixed(4)} ETH
              </span>
            </div>
          </div>
          <button className={styles.disconnectButton} onClick={disconnect}>
            Disconnect
          </button>
        </div>
      )}
    </div>
  );
};
