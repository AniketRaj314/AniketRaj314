import React from "react";
import { motion } from "framer-motion";
import AnimatedTypingText from "../../components/AnimatedTypingText/animatedtypingtext.component";
import "./intro.styles.css";

const emojiVariant = {
    hidden: {
        opacity: 0,
    },
    visible: {
        rotateZ: [0, -40, 0, -40, 0],
        originX: "50%",
        originY: "100%",
        opacity: 1,
    },
    hover: {
        rotateZ: [0, -40, 0, -40, 0],
        originX: "50%",
        originY: "100%",
        transition: {
            delay: 0,
        },
    },
};

export default function Intro() {
    return (
        <div className="intro">
            <div className="column">
                <motion.div
                    className="profile"
                    style={{ backgroundImage: "url(/images/profile.jpg)" }}
                    initial={{ x: -500, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                />
                <AnimatedTypingText fontSize="30px" color="white" reanimate>
                    Aniket Raj
                </AnimatedTypingText>
                <AnimatedTypingText fontSize="24px" color="white" reanimate>
                    Community Lead, Devfolio
                </AnimatedTypingText>
            </div>
            <div className="column">
                <div style={{ display: "flex", alignItems: "center" }}>
                    <motion.h3
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        Hey there!
                    </motion.h3>
                    <motion.span
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        variants={emojiVariant}
                        className="wave-emoji"
                        transition={{ delay: 1.5 }}
                    >
                        👋
                    </motion.span>
                </div>
                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                    style={{ fontSize: "16px" }}
                >
                    I'm more than your average geek with a keen interest in community and tech.
                </motion.p>
            </div>
        </div>
    );
}
