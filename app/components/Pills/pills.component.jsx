import React from "react";
import styles from "./pills.styles.module.css";

export default function Pills(props) {
    const { tags } = props;
    return (
        <div className={styles.pills}>
            {tags.map(({ name, color, textColor }) => (
                <p style={{ backgroundColor: color, color: textColor }}>{name}</p>
            ))}
        </div>
    );
}
