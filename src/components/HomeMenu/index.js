import React from "react";
import HomeMenuItem from "./Item";
import styles from "./style.module.scss";

function HomeMenu() {
  return (
    <div className={styles.container}>
      <HomeMenuItem title="foods & drinks" />
      <HomeMenuItem title="arts & crafts" />
      <HomeMenuItem title="fashion" />
      <HomeMenuItem title="accessories" />
      <HomeMenuItem title="others" />
    </div>
  );
}

export default HomeMenu;
