"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineUp } from "react-icons/ai";
import styles from "./sectiontitle.styles.module.css";

export default function SectionTitle(props) {
    const { children, toggleDisplay } = props;
    const [rotation, setRotation] = useState(0);

    return (
        <>
            <div
                className={`${styles.title} ${styles.clickable}`}
                onClick={() => {
                    toggleDisplay();
                    setRotation(rotation + 180);
                }}
            >
                <h1 className={styles.title}>{children}</h1>
                <motion.div
                    animate={{
                        rotateX: rotation,
                    }}
                >
                    <AiOutlineUp className={styles.icon} />
                </motion.div>
            </div>
            <hr />
        </>
    );
}
