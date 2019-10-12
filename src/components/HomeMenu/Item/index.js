import React from "react";
import styles from "./style.module.scss";

function HomeMenuItem(props) {
  const { title } = props;
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}></div>
      <span className={styles.title}>{title}</span>
    </div>
  );
}

export default HomeMenuItem;
