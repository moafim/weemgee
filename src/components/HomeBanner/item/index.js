import React from "react";

import styles from "./style.module.scss";

function Banner(props) {
  const { title, stat, gradient, height, ctaHeight } = props;
  return (
    <div
      className={styles.container}
      style={{
        "--height": height || "10px",
        "--ctaHeight": ctaHeight || "10px",
        "--gradient": gradient || "red"
      }}
    >
      <div className={styles.imageContainer}></div>
      <div className={styles.cta}>
        <span className={styles.title}>{title}</span>
        <span className={styles.stat}>{stat}</span>
      </div>
    </div>
  );
}

export default Banner;
