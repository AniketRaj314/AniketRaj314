"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const typingVariant = {
    hidden: {
        opacity: 0,
    },
    visible: (i) => ({
        opacity: 1,
        transition: {
            duration: 0.001,
            delay: i * 0.1,
        },
    }),
};

export default function AnimatedTypingText(props) {
    const { children, fontSize, color, reanimate } = props;
    const arr = children.split("");

    const { ref, inView } = useInView();
    const controls = useAnimation();

    useEffect(() => {
        if (inView && reanimate) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView, reanimate]);

    return (
        <p style={{ fontSize: fontSize, color: color }}>
            {arr.map((item, index) => (
                <motion.span
                    ref={ref}
                    custom={index}
                    variants={typingVariant}
                    initial="hidden"
                    animate={reanimate ? controls : "visible"}
                    key={index}
                >
                    {item}
                </motion.span>
            ))}
        </p>
    );
}
