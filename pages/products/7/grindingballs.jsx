import Image from "next/image";
import styy from "../../../styles/generalPage.module.scss";
import sty from "./grindingballs.module.scss";

import useTranslation from "next-translate/useTranslation";

const PcStrands = () => {
  const img_size = 200;

  const { t } = useTranslation();

  return (
    <div className={styy.main_container}>
      <div className={styy.container}>
        <div className={sty.cont}>
          <h1>{t("common:steelGrindingBalls")}</h1>
          <div className={sty.img_cont}>
            <Image
              src="/assets/images/products/gb1.webp"
              alt="grinding balls"
              width={img_size}
              height={img_size}
            />
            <Image
              src="/assets/images/products/gb2.webp"
              alt="grinding balls"
              width={img_size}
              height={img_size}
            />
          </div>
          <p>{t("products_small:grinding_balls_desc1")}</p>
          <p>{t("products_small:grinding_balls_desc2")}</p>
        </div>
      </div>
    </div>
  );
};

export default PcStrands;
