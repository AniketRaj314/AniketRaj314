'use client';

import React from "react";

import Background from "../../components/background/background.component";
import ScrollProgress from "../../components/ScrollProgress/scrollprogress.component";
import Footer from "../../components/Footer/footer.component";

import Internships from "../../sections/Internships/internships.section";
import Intro from "../../sections/Intro/intro.section";
import Skills from "../../sections/Skills/skills.section";
import Projects from "../../sections/Projects/projects.section";

import "./main.styles.css";

class Main extends React.Component {
    render() {
        return (
            <div className="flexbox">
                <div className="site-update-banner" role="status" aria-live="polite">
                    <p>
                        This website is deprecated. The latest version is live here:{" "}
                        <a
                            href="https://aniketraj.me"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="site-update-banner__link"
                        >
                            aniketraj.me
                        </a>
                    </p>
                </div>
                <div className="container">
                    <Background imagePath={"/images/background.jpg"} />
                    <Intro />
                    <Skills />
                    <Internships rowSize={3} />
                    <Projects />
                    <ScrollProgress />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Main;
