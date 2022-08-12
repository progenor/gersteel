import Image from "next/image";
import styy from "../../../styles/generalPage.module.scss";
import sty from "./pvcsheets.module.scss";

const PvcSheets = () => {
  return (
    <div className={styy.main_container}>
      <div className={styy.container}>
        <div className={sty.cont}>
          <h1>PVC Sheets</h1>

          <div>
            <iframe
              src="/assets/images/products/pvc_sheath.pdf"
              height="700"
              width="50%"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PvcSheets;
