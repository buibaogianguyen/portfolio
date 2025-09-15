import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { useState } from "react";

const Experience = () => {
        const [typingComplete, setTypingComplete] = useState(false);

  return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 50 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.7 }}
                className="max-w-4xl h-25 mx-auto text-[#F58F7C] text-center bg-[#1E1E1E] border border-[#F58F7C] rounded-xl shadow-lg mt-205"
            >
                <div className="p-8 text-[#ffffff] text-left">
                <h1 className="text-3xl font-bold mb-4">Experience</h1>
                    
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
                <h1 className="text-3xl font-bold mb-4">Data Science and AI Intern 💻🤖</h1>
                <h2 className="text-[#949494]">RikkeiSoft <span className="mx-2">|</span> April 2025 - Present</h2>
                <div style={{ fontFamily: "'Source Code Pro', monospace" }}>
                    <ReactTyped
                    strings={[
                        "Developed and deployed ML models for regression, classification, clustering, and MLP-based deep learning tasks using Scikit-learn and TensorFlow; optimized performance using gradient descent and backpropagation techniques. Implemented data pipelines and preprocessing in Pandas/OpenCV/Seaborn and managed relational data using Microsoft SQL Server. Created business-oriented visualizations with Power BI to drive data-driven decision making.",
                    ]}
                    typeSpeed={11}
                    backSpeed={50}
                    startWhenVisible={true}
                    onComplete={() => setTypingComplete(true)}
                    >
                    </ReactTyped>
                </div>
                    
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
                <h1 className="text-3xl font-bold mb-4">Software Development Intern - Game Development 👾🎮</h1>
                <h2 className="text-[#949494]">FPT Software <span className="mx-2">|</span> June 2024 - August 2024</h2>
                <div style={{ fontFamily: "'Source Code Pro', monospace" }}>
                    <ReactTyped
                    strings={[
                        "Designed and implemented game features in Unity with C#, including physics, post-processing, textures, lighting, input handling, collision, animations, and UI/UX elements. Optimized 2D/3D assets, object pooling, and shaders to enhance performance and reduce load times by 40%."
                    ]}
                    typeSpeed={18}
                    backSpeed={50}
                    startWhenVisible={true}
                    onComplete={() => setTypingComplete(true)}
                    >
                    </ReactTyped>
                </div>

                </div>
            </motion.div>
        </div>
);
};

export default Experience;
