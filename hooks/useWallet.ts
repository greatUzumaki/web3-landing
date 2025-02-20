import { useState, useCallback } from 'react';
import { WalletConnector } from '../utils/wallet';

export const useWallet = () => {
  const [address, setAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);

  const walletConnector = new WalletConnector();

  const connect = useCallback(async () => {
    try {
      setIsConnecting(true);
      const connectedAddress = await walletConnector.connectWallet();

      if (connectedAddress) {
        setAddress(connectedAddress);
        const balance = await walletConnector.getBalance(connectedAddress);
        setBalance(balance);
      }
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    } finally {
      setIsConnecting(false);
    }
  }, []);

  const disconnect = useCallback(async () => {
    await walletConnector.disconnect();
    setAddress(null);
    setBalance(null);
  }, []);

  return {
    address,
    balance,
    isConnecting,
    connect,
    disconnect,
  };
};
