import { ethers } from "ethers";

// Provider setup
export const getProvider = () => {
  if (!window.ethereum) throw new Error("Please install MetaMask");
  return new ethers.providers.Web3Provider(window.ethereum);
};

// Wallet connection
export const connectWallet = async () => {
  try {
    const provider = getProvider();
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    return { success: true, address };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Check if wallet is connected
export const checkWalletConnection = async () => {
  try {
    const provider = getProvider();
    const accounts = await provider.listAccounts();
    return accounts.length > 0;
  } catch (error) {
    return false;
  }
};

// Get network details
export const getNetworkInfo = async () => {
  try {
    const provider = getProvider();
    const network = await provider.getNetwork();
    return { success: true, network };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Contract interaction helper
export const createContractInstance = (address, abi, signer) => {
  try {
    const provider = getProvider();
    const contractSigner = signer ? provider.getSigner() : provider;
    return new ethers.Contract(address, abi, contractSigner);
  } catch (error) {
    throw new Error(`Contract creation failed: ${error.message}`);
  }
};

// Send transaction
export const sendTransaction = async (to, value) => {
  try {
    const provider = getProvider();
    const signer = provider.getSigner();
    const tx = await signer.sendTransaction({
      to,
      value: ethers.utils.parseEther(value.toString()),
    });
    return { success: true, hash: tx.hash };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Sign message
export const signMessage = async (message) => {
  try {
    const provider = getProvider();
    const signer = provider.getSigner();
    const signature = await signer.signMessage(message);
    return { success: true, signature };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Event listener setup
export const setupEventListener = (contract, eventName, callback) => {
  try {
    contract.on(eventName, callback);
    return true;
  } catch (error) {
    console.error(`Event listener setup failed: ${error.message}`);
    return false;
  }
};

// Chain ID validation
export const validateChainId = async (expectedChainId) => {
  try {
    const { network } = await getNetworkInfo();
    return network.chainId === expectedChainId;
  } catch (error) {
    return false;
  }
};
