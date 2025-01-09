import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ethers } from "ethers";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Projects from "./pages/Projects";

const App = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [error, setError] = useState("");

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

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
        <Header connectWallet={connectWallet} walletAddress={walletAddress} />
        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-2 rounded-lg mx-auto max-w-md mt-4 text-center">
            {error}
          </div>
        )}
        <Routes>
          <Route
            path="/"
            element={
              <Home
                connectWallet={connectWallet}
                walletAddress={walletAddress}
              />
            }
          />
          <Route path="/about" element={<div>About Page</div>} />
          <Route
            path="/"
            element={
              <Home
                connectWallet={connectWallet}
                walletAddress={walletAddress}
              />
            }
          />
          <Route path="/events" element={<Events />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/events" element={<div>Events Page</div>} />
          <Route path="/projects" element={<div>Projects Page</div>} />
          <Route path="/dashboard" element={<div>Dashboard Page</div>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
