import React from "react";
import { InternshipData } from "../../data";
import AnimatedCard from "../../components/AnimatedCard/animatedcard.component";
import "./internships.styles.css";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../../components/SectionTitle/sectiontitle.component";

class Internships extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            internshipGroups: null,
            rotation: 0,
            displayInternships: true,
        };
    }

    componentDidMount() {
        let internshipArray = [];
        const { rowSize } = this.props;
        console.log("rowSize:", rowSize);
        console.log("InternshipData before:", InternshipData);

        const dataCopy = [...InternshipData];
        while (dataCopy.length > 0) {
            internshipArray.push(dataCopy.splice(0, rowSize));
        }

        console.log("internshipArray:", internshipArray);
        console.log("InternshipData after:", InternshipData);

        this.setState({ internshipGroups: internshipArray });
    }

    render() {
        const { internshipGroups, displayInternships } = this.state;
        return (  
            internshipGroups && (
                <div className="internship-section">
                    <SectionTitle toggleDisplay={() => this.setState({ displayInternships: !displayInternships })}>
                        Internships
                    </SectionTitle>
                    <AnimatePresence>
                        {displayInternships &&
                            internshipGroups.map((internshipGroup, parentIndex) => (
                                <motion.div
                                    className="internship-row"
                                    key={`row-${parentIndex}`}
                                    initial={{ y: -20 }}
                                    animate={{ y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                >
                                    {internshipGroup.map((internship) => (
                                        <AnimatedCard key={`internship-${internship.name}`} {...internship} />
                                    ))}
                                </motion.div>
                            ))}
                    </AnimatePresence>
                </div>
            )
        );
    }
}

export default Internships;
