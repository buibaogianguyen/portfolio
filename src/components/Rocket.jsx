import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Rocket = () => {
    const [scrollSpeed, setScrollSpeed] = useState(0);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [scrollDirection, setScrollDirection] = useState("down");

    useEffect(() => {
        let lastTime = Date.now();

        const handleScroll = () => {
        const currentY = window.scrollY;
        const now = Date.now();

        const deltaY = currentY - lastScrollY;
        const deltaTime = now - lastTime;
        const speed = Math.abs(deltaY / deltaTime);

        setScrollSpeed(speed * 50);
        setScrollDirection(deltaY < 0 ? "up" : "down");
        setLastScrollY(currentY);
        lastTime = now;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const flipClass = scrollDirection === "up" ? "scale-y-[-1]" : "";

    return (
        <div className={`fixed top-5 -left-6 md:bottom-4 md:left-4 z-10 w-32 h-32 flex items-center justify-center ${flipClass}`}>
        <motion.img
            src="/rocket.png"
            alt="rocket"
            className="w-16 h-auto relative z-20"
            initial={{ y: 0 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1.2, repeat: Infinity }}
        />

        <motion.div
            className="absolute bottom-[70%] left-1/2 -translate-x-1/2 w-3 h-12 rounded-full bg-gradient-to-b from-[#fce307] via-[#e47a33] to-transparent blur-md"
            style={{
                height: `${2 + scrollSpeed*0.15}px`,
                opacity: 0.8 + Math.min(scrollSpeed / 20, 0.5)
            }}
            animate={{ opacity: [0.8, 1, 0.8], scaleY: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
        />
        </div>
    );
}

export default Rocket;