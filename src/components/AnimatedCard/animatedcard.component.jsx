"use client";

import React, { useEffect, useState } from "react";
import "./animatedcard.styles.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

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
        <div className="flip-card">
            <motion.div
                ref={ref}
                className="flip-card-front"
                initial={{ rotateY: 180 - rotation }}
                animate={controlFront}
                transition={{ duration: transitionDuration, delay: transitionDelay }}
                onHoverStart={() => setRotation(180)}
                onTouchStart={() => setRotation(180)}
                onHoverEnd={() => setRotation(0)}
                onTouchEnd={() => setRotation(0)}
            >
                <div className="internship-company">
                    <a href={website} target="_blank" rel="noreferrer">
                        <Image src={logoSrc} alt={name} width={140} height={35} />
                    </a>
                </div>
                <hr />
                <div className="internship-role">
                    <h2>💼 Role</h2>
                    <p>{internshipRole}</p>
                </div>
                <hr />
                <div className="internship-duration">
                    <h2>📅 Duration</h2>
                    <p>{internshipDuration}</p>
                </div>
                <hr />
                <div className="internship-tags">
                    <h2>📝 Description</h2>
                    <ul key={`${name}-list`}>
                        {internshipDescriptionList.map((listItem, index) => (
                            <li key={`${name}-${index}`}>{listItem}</li>
                        ))}
                    </ul>
                </div>
            </motion.div>
            <motion.div
                ref={ref}
                className="flip-card-back"
                style={{ backgroundColor: color }}
                initial={{ rotateY: 0 }}
                animate={controlBack}
                transition={{ duration: transitionDuration, delay: transitionDelay }}
                onHoverStart={() => setRotation(180)}
                onHoverEnd={() => setRotation(0)}
            >
                <a href={website} target="_blank" rel="noreferrer">
                    <Image src={previewLogoSrc} alt={name} width={100} height={100} />
                </a>
            </motion.div>
        </div>
    );
}
