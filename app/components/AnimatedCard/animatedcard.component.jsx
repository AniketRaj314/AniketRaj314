"use client";

import React, { useEffect, useState } from "react";
import styles from "./animatedcard.styles.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AnimatedCard(props) {
    const {
        color,
        previewLogoSrc,
        logoSrc,
        internshipRole,
        internshipDuration,
        internshipDescription,
        website,
        name,
    } = props;
    const transitionDuration = 0.8;
    const transitionDelay = 0;
    const controlFront = useAnimation();
    const controlBack = useAnimation();
    const { ref, inView } = useInView();
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        if (inView) {
            controlFront.start({
                rotateY: rotation,
            });
            controlBack.start({
                rotateY: rotation - 180,
            });
        } else {
            controlFront.start({
                rotateY: 180 - rotation,
            });
            controlBack.start({
                rotateY: rotation,
            });
        }
    }, [controlFront, controlBack, inView, rotation]);

    const internshipDescriptionList = internshipDescription.split(";");

    return (
        <div className={styles["flip-card"]}>
            <motion.div
                ref={ref}
                className={styles["flip-card-front"]}
                initial={{ rotateY: 180 - rotation }}
                animate={controlFront}
                transition={{ duration: transitionDuration, delay: transitionDelay }}
                onHoverStart={() => setRotation(180)}
                onTouchStart={() => setRotation(180)}
                onHoverEnd={() => setRotation(0)}
                onTouchEnd={() => setRotation(0)}
            >
                <div className={styles["internship-company"]}>
                    <a href={website} target="_blank" rel="noreferrer">
                        <img src={logoSrc} alt={name} />
                    </a>
                </div>
                <hr />
                <div className={styles["internship-role"]}>
                    <h2>💼 Role</h2>
                    <p>{internshipRole}</p>
                </div>
                <hr />
                <div className={styles["internship-duration"]}>
                    <h2>📅 Duration</h2>
                    <p>{internshipDuration}</p>
                </div>
                <hr />
                <div className={styles["internship-tags"]}>
                    <h2>📝 Description</h2>
                    <ul className={styles.internshipList} key={`${name}-list`}>
                        {internshipDescriptionList.map((listItem, index) => (
                            <li key={`${name}-${index}`}>{listItem}</li>
                        ))}
                    </ul>
                </div>
            </motion.div>
            <motion.div
                ref={ref}
                className={styles["flip-card-back"]}
                style={{ backgroundColor: color }}
                initial={{ rotateY: 0 }}
                animate={controlBack}
                transition={{ duration: transitionDuration, delay: transitionDelay }}
                onHoverStart={() => setRotation(180)}
                onHoverEnd={() => setRotation(0)}
            >
                <a href={website} target="_blank" rel="noreferrer">
                    <img src={previewLogoSrc} alt={name} />
                </a>
            </motion.div>
        </div>
    );
}
