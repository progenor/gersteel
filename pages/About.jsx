import sty from '../styles/about.module.scss';
import React, { useEffect } from 'react';

import useTranslation from 'next-translate/useTranslation';

const About = () => {
  let { t, lang } = useTranslation('about');

  return (
    <div className={sty.main_container}>
      <div className={sty.about_main} id="about">
        <h1>{t('common:title')}</h1>
        <div className={sty.about_container}>
          <p>{t('description')}</p>
        </div>
        <img src="/assets/svgs/about_us.svg" alt="" />
      </div>
    </div>
  );
};

export default About;
