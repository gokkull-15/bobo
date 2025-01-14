import React from "react";
import { Code2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = ({ connectWallet, walletAddress }) => {
  const navigate = useNavigate();

  return (
    <nav className="p-6">
      <div className="container mx-auto flex justify-between items-center items-center">
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <Code2 className="h-8 w-8 text-purple-500" />
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            bobo
          </span>
        </div>
        <div className="flex space-x-6">
          <button
            onClick={() => navigate("/about")}
            className="hover:text-purple-400 transition-colors"
          >
            About
          </button>
          <button
            onClick={() => navigate("/events")}
            className="hover:text-purple-400 transition-colors"
          >
            Events
          </button>
          <button
            onClick={() => navigate("/projects")}
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
  );
};

export default Header;
