import styy from "../../../styles/generalPage.module.scss";
import sty from "./pt.module.scss";

import Image from "next/image";

import useTranslation from "next-translate/useTranslation";

const PcStrands = () => {
  const { t } = useTranslation();
  return (
    <div className={styy.main_container}>
      <div className={styy.container}>
        <div className={sty.cont}>
          <h1>{t("common:postTensioning")}</h1>
          <div className={sty.img_cont}>
            <div>
              <Image
                src="/assets/images/products/pt1.png"
                layout="responsive"
                width={370}
                height={200}
                alt="post tensioning"
                className={sty.img}
              />
            </div>
            <p>{t("products_small:post_tensioning_desc")}</p>
            <div>
              <Image
                src="/assets/images/products/pt2.png"
                layout="responsive"
                width={370}
                height={200}
                alt="post tensioning"
                className={sty.img}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PcStrands;
