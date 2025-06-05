"use client";

import React, { useState } from "react";
import { SkillsData } from "../../data";
import ListItem from "../../components/ListItem/listitem.component";
import "./skills.styles.css";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../../components/SectionTitle/sectiontitle.component";

export default function Skills() {
    const [displaySkills, setDisplaySkills] = useState(true);
    return (
        <div className="skills-section">
            <SectionTitle toggleDisplay={() => setDisplaySkills(!displaySkills)}>Skills</SectionTitle>
            <AnimatePresence>
                {displaySkills && (
                    <motion.div
                        className="skills"
                        initial={{ y: -16 }}
                        animate={{ y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                    >
                        {SkillsData.map((item, index) => (
                            <div className="skill-parent-item" key={index}>
                                <ListItem {...item} key={index} />
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
