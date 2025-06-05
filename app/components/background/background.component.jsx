import React from "react";
import styles from "./background.styles.module.css";

function Background({ imagePath }) {
    return (
        <>
            <div className={styles.background}></div>
            <div className={`${styles.lightning} ${styles.flash}`} style={{ backgroundImage: `url(${imagePath})` }}></div>
        </>
    );
}

export default Background;
