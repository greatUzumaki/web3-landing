import { ethers } from 'ethers';

export class WalletConnector {
  private provider: ethers.BrowserProvider | null = null;
  private signer: ethers.Signer | null = null;

  async connectWallet(): Promise<string | null> {
    try {
      if (!window.ethereum) {
        throw new Error('Please install MetaMask');
      }

      this.provider = new ethers.BrowserProvider(window.ethereum);
      await this.provider.send('eth_requestAccounts', []);

      this.signer = await this.provider.getSigner();

      const address = await this.signer.getAddress();
      return address;
    } catch (error) {
      console.error('Error connecting wallet:', error);
      return null;
    }
  }

  async getBalance(address: string): Promise<string> {
    if (!this.provider) {
      throw new Error('Provider not initialized');
    }

    const balance = await this.provider.getBalance(address);
    return ethers.formatEther(balance);
  }

  async disconnect(): Promise<void> {
    this.provider = null;
    this.signer = null;
  }
}
