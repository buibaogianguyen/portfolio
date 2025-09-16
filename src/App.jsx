import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LoadingBar from './components/LoadingBar';
import { FloatingDock } from './components/ui/floating-dock';
import { IconHome, IconUser, IconSettings } from '@tabler/icons-react';
import { MdOutlineWorkHistory } from "react-icons/md";
import { BsFolder2 } from "react-icons/bs";
import { BackgroundLines } from './components/ui/background-lines';
import { motion } from 'framer-motion';

import StarBackground from './components/StarBackground';

import About from './About';
import Experience from './Experience';
import Projects from './Projects';

const dockItems = [
  { title: 'Home', icon: <IconHome size={24} />, href: '#home' },
  { title: 'About', icon: <IconUser size={24} />, href: '#about' },
  { title: 'Experience', icon: <MdOutlineWorkHistory size={24} />, href: '#experience' },
  { title: 'Projects', icon: <BsFolder2 size={24} />, href: '#projects' }
];

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3300);

    return () => clearTimeout(timer);
  }, []);

    return (
        <div className="relative">
            <BackgroundLines className="hidden md:block absolute inset-0 -z-10" />
            

            

            {loading ? (
                <div className="flex justify-center items-center h-screen bg-[#000000] w-full">
                <LoadingBar />
                </div>
            ) : (

                <>
                
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 4, ease: "easeOut" }}
                >
                    <Navbar />

                    <StarBackground />

                    <section id="home">
                        <Hero />
                    </section>

                    <div className="h-1 w-full bg-gradient-to-r from-[#F58F7C] to-[#1DE9B6]" />

                    <section id="about" className="transform scale-85 md:scale-100">
                        <About />
                    </section>

                    <section id="experience" className="transform scale-85 md:scale-100">
                        <Experience />
                    </section>

                    <section id="projects" className="transform scale-85 md:scale-100">
                        <Projects />
                    </section>

                        <FloatingDock
                        items={dockItems}
                        desktopClassName="hidden md:flex fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
                        mobileClassName="flex md:hidden fixed bottom-8 right-4 z-50"
                    />
                    
                    <footer className="w-full text-center py-4 mt-8 pb-50 text-sm text-gray-400">
                    © {new Date().getFullYear()} Nguyen Bui's Portfolio — UI powered by Aceternity
                </footer>

                </motion.div>
                </>
            )}

            

        </div>
    );
}

export default App;