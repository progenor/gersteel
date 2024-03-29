import useTranslation from "next-translate/useTranslation";
import styy from "../../../styles/generalPage.module.scss";
import Image from "next/image";

const Rccp = () => {
  const { t } = useTranslation("product5");
  return (
    <div className={styy.main_container}>
      <div className={styy.container}>
        <h1>{t("common:roundCorrugatedCavityPipes")}</h1>
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Image
            alt="round"
            src="/assets/images/products/rccp.jpg"
            width="750"
            height="1100"
          />
        </div>
      </div>
    </div>
  );
};

export default Rccp;
