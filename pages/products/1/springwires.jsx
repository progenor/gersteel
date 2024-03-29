import styy from "../../../styles/generalPage.module.scss";
import sty from "./springwires.module.scss";

import Image from "next/image";

import useTranslation from "next-translate/useTranslation";
const SpringWires = () => {
  const { t } = useTranslation();
  return (
    <div className={styy.main_container}>
      <div className={styy.container}>
        <div className={sty.cont}>
          <h1>{t("common:springWires")}</h1>
          <Image
            src="/assets/images/products/spring_wire_in.jpg"
            alt="spring wire"
            width={250}
            height={250}
          />
          <p>{t("product1:spring_description1")}</p>
          <p>{t("product1:spring_description2")}</p>
        </div>
      </div>
    </div>
  );
};

export default SpringWires;
