import React from "react";
import { FiGlobe } from "react-icons/fi";
import { AiFillGithub, AiOutlineInstagram, AiOutlineTwitter, AiOutlineGoogle, AiFillYoutube } from "react-icons/ai";
import styles from "./iconbyurl.styles.module.css";

function getDomain(url) {
    const urlObject = new URL(url);
    const urlArray = urlObject.hostname.split(".");
    return urlArray[urlArray.length === 3 ? 1 : 0];
}

export default function IconByUrl(props) {
    const { url, ...otherProps } = props;

    const iconDictionary = {
        github: <AiFillGithub {...otherProps} />,
        instagram: <AiOutlineInstagram {...otherProps} />,
        twitter: <AiOutlineTwitter {...otherProps} />,
        google: <AiOutlineGoogle {...otherProps} />,
        youtube: <AiFillYoutube {...otherProps} />,
    };

    const domain = getDomain(url);

    return (
        <a href={url} rel="noreferrer" className={styles.urlIcon} target="_blank">
            {iconDictionary[domain] ?? <FiGlobe {...otherProps} />}
        </a>
    );
}
