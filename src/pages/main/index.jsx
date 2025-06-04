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
