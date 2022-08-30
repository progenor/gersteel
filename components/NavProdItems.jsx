import Link from "next/link";

import { IoMdArrowDropdown } from "react-icons/io";
import sty from "../styles/navitems.module.scss";
import { useState } from "react";
import useTranslation from "next-translate/useTranslation";

function NavProdItems() {
  const { t, lang } = useTranslation("common");
  const size = 15;

  const [please_go_fuck_yourself, setplease_go_fuck_yourself] = useState(false);

  return (
    <ul className={sty.big_ul}>
      <li className={sty.big_li}>
        <span>{t("prestestingSteelSpringWires")}</span>
        <IoMdArrowDropdown color="white" size={size} className={sty.icon} />
        <ul className={sty.small_ul}>
          <li className={sty.small_li}>
            <Link href="/products/1/pcstrands">{t("pcStrands")}</Link>
          </li>
          <li className={sty.small_li}>
            <Link href="/products/1/pcwires">{t("pcWires")}</Link>
          </li>
          <li className={sty.small_li}>
            <Link href="/products/1/springwires">{t("springWires")}</Link>
          </li>
        </ul>
      </li>
      <li className={sty.big_li}>
        <span>{t("corrugatedPipesAndDucts")}</span>
        <IoMdArrowDropdown
          color="white"
          size={size}
          rotate="90"
          className={sty.icon}
        />
        <ul className={sty.small_ul}>
          <li className={sty.small_li}>
            <Link href="/products/5/rccp">
              {t("roundCorrugatedCavityPipes")}
            </Link>
          </li>
          <li className={sty.small_li}>
            <Link href="/products/5/rcp">{t("rectengualrCavityPipes")}</Link>
          </li>
          <li className={sty.small_li}>
            <Link href="/products/5/rlw">{t("roundLongitudinallyWelded")}</Link>
          </li>
          <li className={sty.small_li}>
            <Link href="/products/5/vft">{t("voidFormingTubess")}</Link>
          </li>
          <li className={sty.small_li}>
            <Link href="/products/5/shs">{t("shutteringSystems")}</Link>
          </li>
        </ul>
      </li>

      <li className={sty.big_li}>
        <Link href="/products/3/concspacers">
          {t("concretePlasticSpacers")}
        </Link>
      </li>
      <li className={sty.big_li}>
        <Link href="/products/7/grindingballs">{t("steelGrindingBalls")}</Link>
      </li>

      <li className={sty.big_li}>
        <span>{t("pvcSheatsAndLeveling")}</span>
        <IoMdArrowDropdown
          color="white"
          size={size}
          rotate="90"
          className={sty.icon}
        />
        <ul className={sty.small_ul}>
          <li className={sty.small_li}>
            <Link href="/products/6/pvcsheets">{t("pvcSheats")}</Link>
          </li>
          <li className={sty.small_li}>
            <Link href="/products/6/lps">{t("levelingPlasticSpacers")}</Link>
          </li>
          <li className={sty.small_li}>
            <Link href="/products/6/lpss">
              {t("levelingPlasticSpacers") + " 2"}
            </Link>
          </li>
        </ul>
      </li>
      <li className={sty.big_li}>
        <Link href="/products/2/pfoil">{t("pfoils")}</Link>
      </li>
      <li className={sty.big_li}>
        <Link href="/products/8/pt">{t("postTensioning")}</Link>
      </li>
      <li className={sty.big_li}>
        <Link href="/products/4/bollards">{t("bollards")}</Link>
      </li>
    </ul>
  );
}

export default NavProdItems;
