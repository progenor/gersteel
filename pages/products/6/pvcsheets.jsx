import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { useState } from "react";
import ImageBlowUp from "../../../components/ImageBlowUp";
import styy from "../../../styles/generalPage.module.scss";
import sty from "./pvcsheets.module.scss";

const PvcSheets = () => {
  const { t, lang } = useTranslation();

  const en = "/assets/images/products/pvc_sheat_en.png";
  const ro = "/assets/images/products/pvc_sheat_ro.png";

  const [isClicked, setisClicked] = useState(false);
  const [clickedImg, setclickedImg] = useState(null);

  const clickHandler = (img) => {
    setisClicked(!isClicked);
    setclickedImg(img);
  };
  return (
    <div className={styy.main_container}>
      <div className={styy.container}>
        <div className={sty.cont}>
          <h1>{t("common:pvcSheats")}</h1>

          <div
            onClick={() => {
              if (isClicked) {
                setisClicked(false);
              }
            }}
          >
            <Image
              alt="pvc"
              src={lang == "ro" ? ro : en}
              width={900}
              height={1100}
              onClick={() => {
                if (lang == "ro") {
                  clickHandler(ro);
                } else {
                  clickHandler(en);
                }
              }}
            />
            {isClicked && <ImageBlowUp imgF={clickedImg} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PvcSheets;
