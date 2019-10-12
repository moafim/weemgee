import React from "react";

import CircleButton from "../Button/Circle";

import styles from "./style.module.scss";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>logo</div>
      <div className={styles.menuContainer}>
        <div className={styles.searchConteiner}>
          <input className={styles.inputSearch} placeholder="Search Here..." />
        </div>
        <div className={styles.linkContainer}>
          <span className={styles.link}>Sell Here</span>
          <span className={styles.link}>Timeline</span>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.basketContainer}>
          <CircleButton />
        </div>
        <div className={styles.profileContainer}>
          <CircleButton />
        </div>
      </div>
    </div>
  );
}

export default Header;
