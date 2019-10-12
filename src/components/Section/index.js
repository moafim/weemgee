import React from "react";
import styles from "./style.module.scss";

function Section(props) {
  const { title, link } = props;
  return (
    <div className={styles.container}>
      <span className={styles.title}>{title}</span>
      {link && (
        <span className={styles.link}>
          {link.length > 0 ? link : "Show More"}
        </span>
      )}
    </div>
  );
}

export default Section;
