import styy from "../../../styles/generalPage.module.scss";

import useTranslation from "next-translate/useTranslation";
const PcStrands = () => {
  const { t } = useTranslation("product5");

  return (
    <div className={styy.main_container}>
      <div className={styy.container}>
        <h1 className="underline">{t("common:rccp_title")}</h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <iframe src="/assets/pdf/rccp.pdf" height="700" width="50%"></iframe>
        </div>
      </div>
    </div>
  );
};

export default PcStrands;
