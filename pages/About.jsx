import sty from "../styles/about.module.scss";
import React, { useEffect } from "react";

import useTranslation from "next-translate/useTranslation";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className={sty.main_container}>
      <div className={sty.about_main} id="about">
        <h1>{t("common:about")}</h1>
        <div className={sty.about_container}>
          <p>{t("about:description")}</p>
        </div>
        <img src="/assets/svgs/about_us.svg" alt="" />
      </div>
    </div>
  );
};

export default About;
