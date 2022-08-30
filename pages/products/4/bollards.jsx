import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import styy from "../../../styles/generalPage.module.scss";

const Bollards = () => {
  const { t } = useTranslation("product4");
  const size = 200;
  return (
    <div className={styy.main_container}>
      <div className={styy.container}>
        <h1>{t("common:bollards")}</h1>
        <div className={styy.types}>
          <h2>{t("common:types")}</h2>
          <ul>
            <li>
              <a href="#spgwn">{t("spgwn")}</a>
            </li>
            <li>
              <a href="#spgwn1">{t("spgwn1")}</a>
            </li>
            <li>
              <a href="#spgwn2">{t("spgwn2")}</a>
            </li>
            <li>
              <a href="#spgwn3">{t("spgwn3")}</a>
            </li>
            <li>
              <a href="#spgwn4">{t("spgwn4")}</a>
            </li>
          </ul>
        </div>
        <div className={styy.table1}>
          <h2 id="spgwn">{t("spgwn")}</h2>
          <Image
            alt="img"
            src="/assets/images/products/spgwn.png"
            width={size}
            height={size}
          />
          <br />
          <Image
            alt="img"
            src="/assets/images/products/spgwn_d.png"
            width={720}
            height={550}
          />
        </div>
        <div className={styy.table1}>
          <h2 id="spgwn1">{t("spgwn1")}</h2>
          <Image
            alt="img"
            src="/assets/images/products/spgwn1.png"
            width={size}
            height={size}
          />
          <br />
          <Image
            alt="img"
            src="/assets/images/products/spgwn1_d.png"
            width={750}
            height={600}
          />
        </div>
        <div className={styy.table1}>
          <h2 id="spgwn2">{t("spgwn2")}</h2>
          <Image
            alt="img"
            src="/assets/images/products/spgwn2.png"
            width={size}
            height={size}
          />
          <br />
          <Image
            alt="img"
            src="/assets/images/products/spgwn2_d.png"
            width={800}
            height={600}
          />
        </div>
        <div className={styy.table1}>
          <h2 id="spgwn3">{t("spgwn3")}</h2>
          <Image
            alt="img"
            src="/assets/images/products/spgwn3.png"
            width={size}
            height={size}
          />
          <br />
          <Image
            alt="img"
            src="/assets/images/products/spgwn3_d.png"
            width={800}
            height={450}
          />
        </div>
        <div className={styy.table1}>
          <h2 id="spgwn4">{t("spgwn4")}</h2>
          <Image
            alt="img"
            src="/assets/images/products/spgwn4.png"
            width={size}
            height={size}
          />
          <br />
          <Image
            alt="img"
            src="/assets/images/products/spgwn4_d.png"
            width={800}
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default Bollards;
