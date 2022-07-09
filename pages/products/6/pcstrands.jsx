import styy from "../../../styles/generalPage.module.scss";
import sty from "./pcstrands.module.scss";

import useTranslation from "next-translate/useTranslation";

const PcStrands = () => {
  let { t, lang } = useTranslation();
  return (
    <div className={styy.main_container}>
      <div className={sty.container}></div>
    </div>
  );
};

export default PcStrands;
