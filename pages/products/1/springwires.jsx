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
          <h1>{t("common:spring_wire")}</h1>
          <Image
            src="/assets/images/products/gray.jpg"
            alt="spring wire"
            width={250}
            height={250}
          />
          <p>{t("product1:spring_description")}</p>
        </div>
      </div>
    </div>
  );
};

export default SpringWires;
