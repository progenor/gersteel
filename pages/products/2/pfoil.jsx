import styy from "../../../styles/generalPage.module.scss";
import sty from "./pfoil.module.scss";

import Image from "next/image";

import useTranslation from "next-translate/useTranslation";

const Pfoil = () => {
  const { t } = useTranslation("products_small");
  return (
    <div className={styy.main_container}>
      <div className={styy.container}>
        <div className={sty.cont}>
          <h1>{t("common:pfoils")}</h1>
          <p>{t("products_small:pfoil_desc1")}</p>
          <p>{t("products_small:pfoil_desc2")}</p>
          <h2>{t("products_small:pfoil_applications")}</h2>
          <div className={sty.app_container}>
            <ImgBox
              img="/pfoil1.png"
              title={t("pfoilSandwichPanel")}
              text={t("products_small:pfoil_sandwich_panel")}
            />
            <ImgBox
              img="/pfoil3.jpg"
              title={t("prepainted")}
              text={t("products_small:pfoil_sandwich_panel")}
            />
            <ImgBox
              img="/pfoil2.jpg"
              title={t("steel")}
              text={t("products_small:pfoil_sandwich_panel")}
            />
            <ImgBox
              img="/pfoil4.jpg"
              title={t("aluminium")}
              text={t("products_small:pfoil_sandwich_panel")}
            />
            <ImgBox
              img="/pfoil5.webp"
              title={t("wood")}
              text={t("products_small:pfoil_sandwich_panel")}
            />
            <ImgBox
              img="/pfoil6.jpg"
              title={t("carpet")}
              text={t("products_small:pfoil_sandwich_panel")}
            />
            <ImgBox
              img="/pfoil7.jpg"
              title={t("plastics")}
              text={t("products_small:pfoil_sandwich_panel")}
            />
            <ImgBox
              img="/pfoil8.jpg"
              title={t("glass")}
              text={t("products_small:pfoil_sandwich_panel")}
            />
            <ImgBox
              img="/pfoil_car.jpeg"
              title={t("automotive")}
              text={t("products_small:pfoil_sandwich_panel")}
            />
            <ImgBox
              img="/pfoil10.png"
              title={t("common:others")}
              text={t("products_small:pfoil_sandwich_panel")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ImgBox = ({ img, title, text }) => {
  return (
    <div className={sty.card}>
      <div className={sty.card_cont}>
        <div className={sty.front_cont}>
          <Image
            src={`/assets/images/products${img}`}
            layout="fill"
            className={sty.IMG}
            alt={title}
          />
        </div>
        <div className={sty.back_cont}>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Pfoil;
