import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import styy from "../../../styles/generalPage.module.scss";
import sty from "./pvcsheets.module.scss";

const PvcSheets = () => {
  const { t, lang } = useTranslation();

  const en = "/assets/images/products/pvc_sheat_en.png";
  const ro = "/assets/images/products/pvc_sheat_ro.png";

  return (
    <div className={styy.main_container}>
      <div className={styy.container}>
        <div className={sty.cont}>
          <h1>PVC Sheets</h1>

          <div>
            <Image
              alt="pvc"
              src={lang == "ro" ? ro : en}
              width={500}
              height={700}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PvcSheets;
