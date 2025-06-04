import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineUp } from "react-icons/ai";
import "./sectiontitle.styles.css";

export default function SectionTitle(props) {
    const { children, toggleDisplay } = props;
    const [rotation, setRotation] = useState(0);

    return (
        <>
            <div
                className="title clickable"
                onClick={() => {
                    toggleDisplay();
                    setRotation(rotation + 180);
                }}
            >
                <h1 className="title">{children}</h1>
                <motion.div
                    animate={{
                        rotateX: rotation,
                    }}
                >
                    <AiOutlineUp className="icon" />
                </motion.div>
            </div>
            <hr />
        </>
    );
}
