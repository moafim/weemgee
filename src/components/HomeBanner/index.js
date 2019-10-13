import React from "react";
import Banner from "./item";

import styles from "./style.module.scss";

function HomeBanner() {
  return (
    <div className={styles.container}>
      <div className={styles.bannerContainer}>
        <Banner
          height="277px"
          ctaHeight="82px"
          title="Living Room"
          stat="+2450 Products"
          gradient="right, #0ba36060, #3cba9260"
        />
        <Banner
          height="277px"
          ctaHeight="82px"
          title="Bedroom"
          stat="+2450 Products"
          gradient="left, #13547a60, #80d0c760"
        />
      </div>
      <div className={styles.bannerContainer}>
        <Banner
          height="220px"
          ctaHeight="58px"
          title="Furniture"
          stat="+2450 Products"
          gradient="bottom, #0c348360, #6b8cce60"
        />
        <Banner
          height="220px"
          ctaHeight="58px"
          title="Lightening"
          stat="+2450 Products"
          gradient="bottom, #d0969360, #c71d6f60"
        />
        <Banner
          height="220px"
          ctaHeight="58px"
          title="Kitchen"
          stat="+2450 Products"
          gradient="left, #3d4e8160, #5753c960, #6e7ff360"
        />
      </div>
    </div>
  );
}

export default HomeBanner;
