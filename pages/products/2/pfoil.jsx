import styy from "../../../styles/generalPage.module.scss";
import sty from "./pfoil.module.scss";

import Image from "next/image";

import useTranslation from "next-translate/useTranslation";

const Pfoil = () => {
  const { t } = useTranslation();
  return (
    <div className={styy.main_container}>
      <div className={styy.container}>
        <div className={sty.cont}>
          <h1>{t("common:pfoil")}</h1>
          <p>{t("products_small:pfoil_desc1")}</p>
          <p>{t("products_small:pfoil_desc2")}</p>
          <h2>{t("products_small:pfoil_applications")}</h2>
          <div className={sty.app_container}>
            <ImgBox
              img="/gray.jpg"
              title="Sandwich panel"
              text={t("products_small:pfoil_sandwich_panel")}
            />
            <ImgBox
              img="/gray.jpg"
              title="Pre-painted metal sheet"
              text={t("products_small:pfoil_sandwich_panel")}
            />
            <ImgBox
              img="/gray.jpg"
              title="Stainless steel"
              text={t("products_small:pfoil_sandwich_panel")}
            />
            <ImgBox
              img="/gray.jpg"
              title="Aluminum"
              text={t("products_small:pfoil_sandwich_panel")}
            />
            <ImgBox
              img="/gray.jpg"
              title="Laminates, furniture (wood products)"
              text={t("products_small:pfoil_sandwich_panel")}
            />
            <ImgBox
              img="/gray.jpg"
              title="Carpet"
              text={t("products_small:pfoil_sandwich_panel")}
            />
            <ImgBox
              img="/gray.jpg"
              title="Plastics"
              text={t("products_small:pfoil_sandwich_panel")}
            />
            <ImgBox
              img="/gray.jpg"
              title="Glass"
              text={t("products_small:pfoil_sandwich_panel")}
            />
            <ImgBox
              img="/gray.jpg"
              title="Automotive"
              text={t("products_small:pfoil_sandwich_panel")}
            />
            <ImgBox
              img="/gray.jpg"
              title="phoque Other"
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
