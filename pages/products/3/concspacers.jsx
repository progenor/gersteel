import Link from "next/link";
import styy from "../../../styles/generalPage.module.scss";
import sty from "./concspacers.module.scss";

import ConcSpacers from "../../../components/ConcSpacers";
import PlasSpacers from "../../../components/PlasSpacers";
import useTranslation from "next-translate/useTranslation";

const PcStrands = () => {
  const { t } = useTranslation("product3");
  return (
    <div className={styy.main_container}>
      <div className={styy.container}>
        <h1>{t("common:concretePlasticSpacers")}</h1>
        <div className={styy.types}>
          <h2>{t("common:types")}</h2>
          <ul>
            <li>
              <strong>
                <a href="#concrete">{t("concspacer")}</a>
              </strong>
              <ul>
                <li>
                  <a href="#btds">{t("btds")} </a>
                </li>
                <li>
                  <a href="#btdhs"> {t("btdhs")}</a>
                </li>
                <li>
                  <a href="#mirawb">{t("wb")}</a>
                </li>
                <li>
                  <a href="#butterK">{t("butterK")}</a>
                </li>
                <li>
                  <a href="#butterkd">{t("butterkd")}</a>
                </li>
                <li>
                  <a href="#concu">{t("concu")}</a>
                </li>
                <li>
                  <a href="#concud">{t("concud")}</a>
                </li>
                <li>
                  <a href="#snakets">{t("snakets")}</a>
                </li>
                <li>
                  <a href="#snakes">{t("snakeS")}</a>
                </li>
                <li>
                  <a href="#snakesn">{t("snakesn")}</a>
                </li>
                <li>
                  <a href="#conctube">{t("concTube")}</a>
                </li>
                <li>
                  <a href="#concplug">{t("concPlug")}</a>
                </li>
              </ul>
            </li>
            <li>
              <strong>
                <a href="#plastic">{t("plasspacer")}</a>
              </strong>
              <ul>
                <li>
                  <a href="#wsko">{t("wh")} KO</a>
                </li>
                <li>
                  <a href="#wskom">{t("wh")} KO MAXI</a>
                </li>
                <li>
                  <a href="#dts">DUAL Track Spacer - length 2,0 m</a>
                </li>
                <li>
                  <a href="#ts">Track Spacer DL – length 2,0 m</a>
                </li>
                <li>
                  <a href="#tsdlv">
                    Track spacer with closed sides DLV – length 2,0m
                  </a>
                </li>
                <li>
                  <a href="#cepd">Chamfer edge profiles D – length 2,5 m</a>
                </li>
                <li>
                  <a href="#cepdfv">
                    Chamfer edge profiles with nailing flange DFV full - length
                    2,5 m
                  </a>
                </li>
                <li>
                  <a href="#cepdfh">
                    Chamfer edge profiles with nailing flange DFH hollow –length
                    2,5 m
                  </a>
                </li>
                <li>
                  <a href="#sppp">Sealing profile PP</a>
                </li>
                <li>
                  <a href="#rsdk">Ring spacer diskus DK</a>
                </li>
                <li>
                  <a href="#rde">Rhombus DE</a>
                </li>
                <li>
                  <a href="#prc">{t("prc")}</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className={sty.main}>
          <ConcSpacers />
          <PlasSpacers />
        </div>
      </div>
    </div>
  );
};

export default PcStrands;
