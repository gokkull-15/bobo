import React from "react";
import { Github, Globe2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="container mx-auto px-6 py-8">
      <div className="flex justify-between items-center border-t border-gray-800 pt-8">
        <p className="text-gray-400">&copy; 2024 bobo. All rights reserved.</p>
        <div className="flex space-x-6">
          <a
            href="https://github.com"
            className="text-gray-400 hover:text-purple-500 transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-purple-500 transition-colors"
          >
            <Globe2 className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
