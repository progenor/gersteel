import Image from "next/image";
import styy from "../../../styles/generalPage.module.scss";
import sty from "./pvcsheets.module.scss";

import useTranslation from "next-translate/useTranslation";

const Lpss = () => {
  const { t } = useTranslation("product6");

  const size = 150;
  return (
    <div className={styy.main_container}>
      <div className={styy.container}>
        <h1>{t("common:levelingPlasticSpacers")}</h1>
        <div className={styy.types}>
          <h2>{t("common:types")}</h2>
          <ul>
            <li>
              <a href="#m">M </a>
            </li>
            <li>
              <a href="#mc">MC</a>
            </li>
            <li>
              <a href="#mr">MR</a>
            </li>
            <li>
              <a href="#mq">MQ</a>
            </li>
            <li>
              <a href="#me">ME</a>
            </li>
          </ul>
        </div>
        <div className={styy.table1}>
          <h2 id="m">M</h2>
          <Image
            alt="image"
            src="/assets/images/products/lpss_m.png"
            width={size}
            height={size}
          />
          <br />
          <Image
            alt="image"
            src="/assets/images/products/lpss_m_d.png"
            width={840}
            height={600}
          />
        </div>
        <div className={styy.table1}>
          <h2 id="mc">MC</h2>
          <Image
            alt="image"
            src="/assets/images/products/lpss_mc.png"
            width={size}
            height={size}
          />
          <br />
          <Image
            alt="image"
            src="/assets/images/products/lpss_mc_d.png"
            width={830}
            height={560}
          />
        </div>
        <div className={styy.table1}>
          <h2 id="mr">MR</h2>
          <Image
            alt="image"
            src="/assets/images/products/lpss_mr.png"
            width={size}
            height={size}
          />
          <br />
          <Image
            alt="image"
            src="/assets/images/products/lpss_mr_d.png"
            width={860}
            height={650}
          />
        </div>
        <div className={styy.table1}>
          <h2 id="mq">MQ</h2>
          <Image
            alt="image"
            src="/assets/images/products/lpss_mq.png"
            width={size}
            height={size}
          />
          <br />
          <Image
            alt="image"
            src="/assets/images/products/lpss_mq_d.png"
            width={860}
            height={620}
          />
        </div>
        <div className={styy.table1}>
          <h2 id="me">ME</h2>
          <Image
            alt="image"
            src="/assets/images/products/lpss_me.png"
            width={size}
            height={size}
          />
          <br />
          <Image
            alt="image"
            src="/assets/images/products/lpss_me_d.png"
            width={860}
            height={540}
          />
        </div>
      </div>
    </div>
  );
};

export default Lpss;
