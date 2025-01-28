import React from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Github,
  Globe2,
  Users,
  Trophy,
  Rocket,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = ({ connectWallet, walletAddress }) => {
  const navigate = useNavigate();
  const getStarted = () => {
    if (!walletAddress) {
      connectWallet();
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <>
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
            <button
              onClick={getStarted}
              className="px-8 py-4 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ChevronRight className="h-5 w-5" />
            </button>
            <button
              onClick={() => navigate("/projects")}
              className="px-8 py-4 border border-purple-500 rounded-lg hover:bg-purple-900/50 transition-colors flex items-center space-x-2"
            >
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
            className="p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors cursor-pointer"
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
            className="p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors cursor-pointer"
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
            className="p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors cursor-pointer"
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-4xl font-bold text-purple-500">500+</h4>
              <p className="text-gray-400 mt-2">Projects Submitted</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-4xl font-bold text-purple-500">10k+</h4>
              <p className="text-gray-400 mt-2">Global Developers</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-4xl font-bold text-purple-500">$1M+</h4>
              <p className="text-gray-400 mt-2">In Prizes Awarded</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-2xl p-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-6">
            Ready to Join the Revolution?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Start your journey in the world of decentralized hackathons today.
            Connect your wallet and become part of our growing community.
          </p>
          <button
            onClick={getStarted}
            className="px-8 py-4 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2 mx-auto"
          >
            <Rocket className="h-5 w-5" />
            <span>Launch Your Journey</span>
          </button>
        </motion.div>
      </section>
    </>
  );
};

export default Home;
