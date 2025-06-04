import React from "react";
import "./pills.styles.css";

export default function Pills(props) {
    const { tags } = props;
    return (
        <div className="pills">
            {tags.map(({ name, color, textColor }) => (
                <p style={{ backgroundColor: color, color: textColor }}>{name}</p>
            ))}
        </div>
    );
}
