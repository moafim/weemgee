import React from "react";
import Banner from "./item";

import styles from "./style.module.scss";

function HomeBanner() {
  return (
    <div className={styles.container}>
      <div>
        <Banner />
        <Banner />
      </div>
      <div>
        <Banner />
        <Banner />
        <Banner />
      </div>
    </div>
  );
}

export default HomeBanner;
