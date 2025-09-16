import { motion } from "framer-motion";
import { useState } from "react";

const Projects = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="pb-75">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.7 }}
        className="max-w-4xl h-25 mx-auto text-[#F58F7C] text-center bg-[#1E1E1E] border border-[#F58F7C] rounded-xl shadow-lg mt-205"
      >
        <div className="p-8 text-[#ffffff] text-left">
          <h1 className="text-3xl font-bold mb-4">Projects</h1>
        </div>
      </motion.div>


      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.7 }}
        className="max-w-4xl mx-auto text-[#F58F7C] text-center bg-[#1E1E1E] border border-[#F58F7C] rounded-xl shadow-lg p-6 mt-7"
      >
        <div className="p-8 text-[#ffffff] text-left">
          <h1 className="text-3xl font-bold mb-4">ClearChat 🚫</h1>
          <h2 className="text-[#949494]">July 2025 - Present</h2>
          <p style={{ fontFamily: "'Source Code Pro', monospace" }}>
            ClearChat filters YouTube and Twitch messages via their APIs,
            classifying them as offensive or safe, and automatically applies
            punishments for violations.
          </p>
        </div>
      </motion.div>


      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.7 }}
        className="max-w-4xl mx-auto text-[#F58F7C] text-center bg-[#1E1E1E] border border-[#F58F7C] rounded-xl shadow-lg p-6 mt-3"
      >
        <div className="p-8 text-[#ffffff] text-left">
          <h1 className="text-3xl font-bold mb-4">
            Vision Transformers for Skin Cancer Prediction and Classification 🔍
          </h1>
          <h2 className="text-[#949494]">July 2025 - Present</h2>
          <p style={{ fontFamily: "'Source Code Pro', monospace" }}>
            A RESTful API for skin lesion classification using FastAPI, PyTorch,
            and SQLAlchemy, including model inference, preprocessing, and
            database storage.
          </p>
        </div>
      </motion.div>


      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.7 }}
        className="max-w-4xl mx-auto text-[#F58F7C] text-center bg-[#1E1E1E] border border-[#F58F7C] rounded-xl shadow-lg p-6 mt-3"
      >
        <div className="p-8 text-[#ffffff] text-left">
          <h1 className="text-3xl font-bold mb-4">
            Snake Game Reinforcement Learning 🐍
          </h1>
          <h2 className="text-[#949494]">July 2025 - September 2025</h2>
          <p style={{ fontFamily: "'Source Code Pro', monospace" }}>
            DQN and PPO Reinforcement Learning Agents for the classic Snake
            Game, implemented using TensorFlow and TensorFlow Keras.
          </p>
        </div>
      </motion.div>


      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.7 }}
        className="max-w-4xl mx-auto text-[#F58F7C] text-center bg-[#1E1E1E] border border-[#F58F7C] rounded-xl shadow-lg p-6 mt-3"
      >
        <div className="p-8 text-[#ffffff] text-left">
          <h1 className="text-3xl font-bold mb-4">CNN from Zero 0️⃣</h1>
          <h2 className="text-[#949494]">July 2025 - August 2025</h2>
          <p style={{ fontFamily: "'Source Code Pro', monospace" }}>
            A simple Convolutional Neural Network (CNN) implementation from
            scratch using NumPy, without frameworks, to better understand Deep
            Learning models.
          </p>
        </div>
      </motion.div>


      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.7 }}
        className="max-w-4xl mx-auto text-[#F58F7C] text-center bg-[#1E1E1E] border border-[#F58F7C] rounded-xl shadow-lg p-6 mt-3"
      >
        <div className="p-8 text-[#ffffff] text-left">
          <h1 className="text-3xl font-bold mb-4">
            View my full list of projects on my GitHub!
          </h1>
          <p
            style={{ fontFamily: "'Source Code Pro', monospace" }}
            className="text-[#F58F7C]"
          >
            <a
              href="https://github.com/buibaogianguyen"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Click Here!
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
