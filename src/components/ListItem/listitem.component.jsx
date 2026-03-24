import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./listitem.styles.css";
import Image from "next/image";

const imageVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
        },
    },
};

export default function ListItem(props) {
    const { skill, logo, description } = props;
    const [logoIndex, setLogoIndex] = useState(0);
    const milliseconds = 2000;

    useEffect(() => {
        const timer = setInterval(() => {
            if (Array.isArray(logo)) {
                setLogoIndex((logoIndex + 1) % logo.length);
            }
        }, milliseconds);

        return () => clearInterval(timer);
    });

    return (
        <div className="skill-item">
            {Array.isArray(logo) ? (
                <AnimatePresence>
                    <motion.div initial="hidden" animate="visible" exit="hidden" variants={imageVariants}>
                        <Image src={logo[logoIndex]} className="skill-logo" alt={skill} width={60} height={60} />
                    </motion.div>
                </AnimatePresence>
            ) : (
                <Image src={logo} className="skill-logo" alt={skill} width={60} height={60} />
            )}
            <div className="skill-description">
                <h2>{skill}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}
