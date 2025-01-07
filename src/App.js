import React from "react";
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

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="p-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-purple-500" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              bobo
            </span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-purple-400 transition-colors">
              About
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              Events
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              Projects
            </a>
            <button className="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors">
              Connect Wallet
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-20">
        <div className="text-center space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl font-bold leading-tight"
          >
            Decentralized
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              Hackathon Platform
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Join the future of hackathons with our blockchain-powered platform.
            Build, collaborate, and showcase your projects in a truly
            decentralized environment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center space-x-4"
          >
            <button className="px-8 py-4 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2">
              <span>Get Started</span>
              <ChevronRight className="h-5 w-5" />
            </button>
            <button className="px-8 py-4 border border-purple-500 rounded-lg hover:bg-purple-900/50 transition-colors flex items-center space-x-2">
              <Github className="h-5 w-5" />
              <span>View Projects</span>
            </button>
          </motion.div>
        </div>
      </main>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors"
          >
            <Globe2 className="h-12 w-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Decentralized Judging</h3>
            <p className="text-gray-400">
              Fair and transparent evaluation through smart contracts and
              community participation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors"
          >
            <Users className="h-12 w-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Global Community</h3>
            <p className="text-gray-400">
              Connect with developers worldwide and form teams across borders.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors"
          >
            <Trophy className="h-12 w-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Token Rewards</h3>
            <p className="text-gray-400">
              Earn cryptocurrency rewards for your innovative solutions and
              contributions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-800/50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-4xl font-bold text-purple-500">500+</h4>
              <p className="text-gray-400 mt-2">Projects Submitted</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-purple-500">10k+</h4>
              <p className="text-gray-400 mt-2">Global Developers</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-purple-500">$1M+</h4>
              <p className="text-gray-400 mt-2">In Prizes Awarded</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center border-t border-gray-800 pt-8">
          <p className="text-gray-400">
            &copy; 2024 bobo. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
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
    </div>
  );
};

export default LandingPage;
