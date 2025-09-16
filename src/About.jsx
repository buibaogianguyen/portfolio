import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { useState } from "react";

const About = () => {

  return (
        <div>
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 50 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.7 }}
            className="max-w-4xl mx-auto text-[#F58F7C] text-center bg-[#1E1E1E] border border-[#F58F7C] rounded-xl shadow-lg p-6 mt-256 min-h-10"
        >
            <div className="p-8 text-[#ffffff] text-left">  
            <h1 className="text-3xl font-bold mb-4">About Me 👋🚀</h1>
            <div style={{ fontFamily: "'Source Code Pro', monospace" }}>

                <p>
                Hey there! My name is Nguyen, I am a current sophomore at the University of Central Florida. I am taking my Bachelor's degree in Computer Science with a lean towards machine learning/deep learning. I was originally a Video Game Developer because I love playing them and building things with a visual reward. Although my focus has shifted toward AI and machine learning, I still enjoy playing video games and occasionally creating them. Additionally, I also spend a lot of time listening to music; my favourites are restrospective, chill, melancholic, and folk music. My favourite artist is Gregory Alan Isakov. Check out my playlist below!                 </p>
            </div>
                
            </div>
            
        </motion.div>


                <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 50 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="flex justify-center my-5 pt-7"
            >
                <iframe
                    src="https://open.spotify.com/embed/playlist/5SYboTG0Q5WYIaKAjrNMqN"
                    width="750"
                    height="355"
                    allow="encrypted-media"
                />
                </motion.div>
        </div>

  );
};

export default About;
