import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Rocket,
  Globe2,
  Users,
  ChevronRight,
  Github,
  Trophy,
} from "lucide-react";
import { ethers } from "ethers";

const LandingPage = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [error, setError] = useState("");

  // Wallet connection
  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setWalletAddress(address);
      } else {
        setError("Please install MetaMask");
      }
    } catch (err) {
      setError("Failed to connect wallet");
    }
  };

  // Navigation functions
  const handleNavigation = (section) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  // Project viewing function
  const viewProjects = () => {
    window.location.href = "/projects";
  };

  // Get started function
  const getStarted = () => {
    if (!walletAddress) {
      connectWallet();
    } else {
      window.location.href = "/dashboard";
    }
  };

  // About section navigation
  const navigateToAbout = () => {
    handleNavigation("about");
  };

  // Events section navigation
  const navigateToEvents = () => {
    handleNavigation("events");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <nav className="p-6">
        <div className="container mx-auto flex justify-between items-center">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => (window.location.href = "/")}
          >
            <Code2 className="h-8 w-8 text-purple-500" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              bobo
            </span>
          </div>
          <div className="flex space-x-6">
            <button
              onClick={navigateToAbout}
              className="hover:text-purple-400 transition-colors"
            >
              About
            </button>
            <button
              onClick={navigateToEvents}
              className="hover:text-purple-400 transition-colors"
            >
              Events
            </button>
            <button
              onClick={viewProjects}
              className="hover:text-purple-400 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={connectWallet}
              className="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
            >
              {walletAddress
                ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
                : "Connect Wallet"}
            </button>
          </div>
        </div>
      </nav>

      {error && (
        <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-2 rounded-lg mx-auto max-w-md mt-4 text-center">
          {error}
        </div>
      )}

      <main className="container mx-auto px-6 py-20">
        <div className="text-center space-y-8">
          {/* ... Previous hero section JSX ... */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center space-x-4"
          >
            <button
              onClick={getStarted}
              className="px-8 py-4 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ChevronRight className="h-5 w-5" />
            </button>
            <button
              onClick={viewProjects}
              className="px-8 py-4 border border-purple-500 rounded-lg hover:bg-purple-900/50 transition-colors flex items-center space-x-2"
            >
              <Github className="h-5 w-5" />
              <span>View Projects</span>
            </button>
          </motion.div>
        </div>
      </main>

      {/* ... Rest of the components (Features, Stats, Footer) ... */}
    </div>
  );
};

export default LandingPage;
