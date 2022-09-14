import sty from "../styles/about.module.scss";
import React, { useEffect } from "react";
import Head from "next/head";

import useTranslation from "next-translate/useTranslation";

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Gersteel | {t("common:about")}</title>
        <link rel="icon" href="/logo_G.ico" />
      </Head>
      <div className={sty.main_container}>
        <div className={sty.about_main} id="about">
          <h1>{t("common:about")}</h1>
          <div className={sty.about_container}>
            <p>{t("about:description")}</p>
          </div>
          <img src="/assets/svgs/about_us.svg" alt="" />
        </div>
      </div>
    </>
  );
};

export default About;
