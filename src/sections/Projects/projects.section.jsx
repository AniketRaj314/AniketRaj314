import React, { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { IoIosCloseCircle } from "react-icons/io";

import { ProjectData } from "../../data";
import "./projects.styles.css";
import SectionTitle from "../../components/SectionTitle/sectiontitle.component";
import Pills from "../../components/Pills/pills.component";
import IconByUrl from "../../components/IconByUrl/iconbyurl.component";

export default function Projects() {
    const [selectedId, setSelectedId] = useState(null);
    const [displayProjects, setDisplayProjects] = useState(true);
    return (
        <div className="project-section">
            <SectionTitle toggleDisplay={() => setDisplayProjects(!displayProjects)}>
                Projects and Initiatives
            </SectionTitle>
            <AnimatePresence>
                {displayProjects && (
                    <motion.div
                        className="projects"
                        initial={{ y: -16 }}
                        animate={{ y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                    >
                        <LayoutGroup>
                            <div className="row">
                                {ProjectData.map((item, index) => (
                                    <ProjectMiniView
                                        {...item}
                                        setIdOnClick={() => setSelectedId(index + 1)}
                                        index={index}
                                        className={`section`}
                                    />
                                ))}
                            </div>
                            <AnimatePresence>
                                {selectedId && (
                                    <div className="modal" onClick={() => setSelectedId(null)}>
                                        <motion.div className="modal-content" layoutId={selectedId}>
                                            <div className="modal-content-header">
                                                <h2>{ProjectData[selectedId - 1].project_name}</h2>
                                                <IoIosCloseCircle className="icon icon--black" />
                                            </div>
                                            <hr />

                                            <p>{ProjectData[selectedId - 1].description}</p>

                                            <div className="modal-content-footer">
                                                <div className="modal-content-tags">
                                                    <h2 style={{ fontSize: "110%", margin: "0" }}>Tags</h2>
                                                    <Pills tags={ProjectData[selectedId - 1].tags} />
                                                </div>

                                                <div className="modal-content-links">
                                                    <h2 style={{ fontSize: "110%", margin: "0" }}>Links</h2>
                                                    {ProjectData[selectedId - 1].links.map((url) => (
                                                        <IconByUrl
                                                            url={url}
                                                            className="icon"
                                                            style={{ color: "black" }}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                )}
                            </AnimatePresence>
                        </LayoutGroup>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function ProjectMiniView(props) {
    const { project_name, description, index, setIdOnClick, tags, ...otherProps } = props;
    return (
        <motion.div
            layoutId={index + 1}
            onClick={setIdOnClick}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            {...otherProps}
        >
            <h2>{project_name}</h2>
            <hr />
            <p>{description}</p>
            <Pills tags={tags} />
        </motion.div>
    );
}
