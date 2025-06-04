"use client";

import React, { useEffect } from "react";
import { AiFillGithub, AiOutlineInstagram, AiOutlineTwitter, AiOutlineMail } from "react-icons/ai";
import { FaTelegramPlane, FaReact } from "react-icons/fa";
import { SiFramer } from "react-icons/si";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./footer.styles.css";

const quoteVariant = {
	hidden: {
		y: 20,
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
	},
};

const iconsVariant = {
	hidden: {
		rotateY: 90,
	},
	visible: (i) => ({
		rotateY: 0,
		transition: {
			delay: i * 0.15,
			duration: 1,
		},
	}),
	hover: {
		scale: 1.2,
	},
};

const creditsVariant = {
	hidden: {
		scale: 0.5,
		opacity: 0,
	},
	visible: {
		scale: 1,
		opacity: 1,
	},
};

export default function Footer() {
	const { ref, inView } = useInView();
	const controls = useAnimation();

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		} else {
			controls.start("hidden");
		}
	}, [inView, controls]);

	return (
		<>
			<div className="footer">
				<hr />
				<motion.p
					ref={ref}
					initial="hidden"
					animate={controls}
					variants={quoteVariant}
					transition={{ duration: 1 }}
				>
					With Great Power, comes Great Responsibility
				</motion.p>
				<div className="footer-icons">
					<motion.a
						href="https://github.com/AniketRaj314"
						rel="noreferrer"
						target="_blank"
						custom={0}
						initial="hidden"
						whileHover="hover"
						animate={controls}
						variants={iconsVariant}
					>
						<AiFillGithub className="icon" />
					</motion.a>
					<motion.a
						href="https://instagram.com/aniketraj.eth"
						rel="noreferrer"
						target="_blank"
						custom={1}
						initial="hidden"
						whileHover="hover"
						animate={controls}
						variants={iconsVariant}
					>
						<AiOutlineInstagram className="icon" />
					</motion.a>
					<motion.a
						href="https://twitter.com/AniketRaj314"
						rel="noreferrer"
						target="_blank"
						custom={2}
						initial="hidden"
						whileHover="hover"
						animate={controls}
						variants={iconsVariant}
					>
						<AiOutlineTwitter className="icon" />
					</motion.a>
					<motion.a
						href="https://t.me/AniketRaj314"
						rel="noreferrer"
						target="_blank"
						custom={3}
						initial="hidden"
						whileHover="hover"
						animate={controls}
						variants={iconsVariant}
					>
						<FaTelegramPlane className="icon" />
					</motion.a>
					<motion.a
						href="mailto:hello@aniketraj.me"
						rel="noreferrer"
						target="_blank"
						custom={4}
						initial="hidden"
						whileHover="hover"
						animate={controls}
						variants={iconsVariant}
					>
						<AiOutlineMail className="icon" />
					</motion.a>
				</div>

				<motion.p
					ref={ref}
					style={{ padding: "20px 0px" }}
					initial="hidden"
					animate={controls}
					transition={{ duration: 1 }}
					variants={creditsVariant}
				>
					Made with 💖 in{" "}
					<a href="https://reactjs.org/" rel="noreferrer" target="_blank">
						React
					</a>{" "}
					<span>
						<FaReact style={{ color: "#61DBFB" }} />
					</span>
					,{" "}
					<a href="https://framer.com/motion" rel="noreferrer" target="_blank">
						Framer Motion
					</a>{" "}
					<span>
						<SiFramer />
					</span>
				</motion.p>
			</div>
		</>
	);
}
