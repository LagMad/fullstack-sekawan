import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <motion.div
            className="flex flex-col w-full items-center justify-center bg-slate-800 text-white gap-7 px-5 lg:px-16 py-10"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    type: "spring",
                    duration: 5.0,
                    damping: 10,
                    stiffness: 100,
                },
            }}
        >
            <div className="font-black text-3xl md:text-6xl">
                Vehi<span className="text-orange-400">Call</span>
            </div>
            <div className="relative group flex text-center">
                ©2025 Hizkia Jeremmy Krisna Ananta
                <div className="absolute left-1/2 -bottom-7 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 ml-2">
                    ❤️️
                </div>
            </div>
        </motion.div>
    );
};

export default Footer;
