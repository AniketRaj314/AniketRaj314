import React from "react";
import "./background.styles.css";

function Background({ imagePath }) {
    return (
        <>
            <div className="background"></div>
            <div className="lightning flash" style={{ backgroundImage: `url(${imagePath})` }}></div>
        </>
    );
}

export default Background;
