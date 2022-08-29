import { useState } from "react";
import Link from "next/link";
import sty from "../styles/home.module.scss";

import { BsFillArrowRightCircleFill } from "react-icons";

import useTranslation from "next-translate/useTranslation";

function HomeComp() {
  const { t, lang } = useTranslation("common");
  return (
    <div className={sty.home_cont} id="home">
      <BoxContainer
        title={t("prestestingSteelSpringWires")}
        img="/assets/images/wires.png"
        multiple={true}
      >
        <li>
          <br />
        </li>
        <li style={{ marginLeft: "-80%" }}>
          <Link href="/products/1/pcstrands">{t("pcStrands")}</Link>
        </li>
        <li style={{ marginLeft: "-28px" }}>
          <Link href="/products/1/pcwires">{t("pcWires")}</Link>
        </li>
        <li style={{ marginLeft: "-10px" }}>
          <Link href="/products/1/springwires">{t("springWires")}</Link>
        </li>
      </BoxContainer>
      <BoxContainer
        title={t("corrugatedPipesAndDucts")}
        img="/assets/images/corrugated_pipe.png"
        multiple={true}
      >
        <li style={{ marginLeft: "-120px" }}>
          <Link href="/products/5/rccp">{t("roundCorrugatedCavityPipes")}</Link>
        </li>
        <li style={{ marginLeft: "-84px" }}>
          <Link href="/products/5/rlw">{t("roundLongitudinallyWelded")}</Link>
        </li>
        <li style={{ marginLeft: "-48px" }}>
          <Link href="/products/5/rcp">{t("rectengualrCavityPipes")}</Link>
        </li>
        <li style={{ marginLeft: "-17px" }}>
          {" "}
          <Link href="/products/5/shs">{t("shutteringSystems")}</Link>
        </li>
        <li style={{ marginLeft: "12px" }}>
          <Link href="/products/5/vft">{t("voidFormingTubess")}</Link>
        </li>
      </BoxContainer>

      <BoxContainer
        title={t("concretePlasticSpacers")}
        img="/assets/images/conc_plas_spacer.png"
        go="/3/concspacers"
      />
      <BoxContainer
        title={t("pvcSheatsAndLeveling")}
        img="/assets/images/pvcSheat.png"
        multiple={true}
      >
        <li>
          <br />
        </li>

        <li style={{ marginLeft: "-60px" }}>
          <Link href="/products/6/pvcsheets">{t("pvcSheats")}</Link>
        </li>
        <li style={{ marginLeft: "-20px" }}>
          <Link href="/products/6/lps">{t("levelingPlasticSpacers")}</Link>
        </li>
        <li style={{ marginLeft: "10px" }}>
          <Link href="/products/6/lpss">
            {t("levelingPlasticSpacers") + " 2"}
          </Link>
        </li>
      </BoxContainer>
      <BoxContainer
        title={t("steelGrindingBalls")}
        img="/assets/images/balls.png"
        go="/7/grindingballs"
      />
      <BoxContainer
        title={t("pfoils")}
        img="/assets/images/pfoil.png"
        go="/2/pfoil"
      />

      <BoxContainer
        title={t("postTensioning")}
        img="/assets/images/pt.png"
        go="/8/pt"
      />
      <BoxContainer
        title={t("others")}
        img="/assets/images/logo_G_grey.png"
        comingsoon={true}
      />
    </div>
  );
}

function BoxContainer({ children, title, img, multiple, go, comingsoon }) {
  const { t, lang } = useTranslation();
  const [isOpen, setisOpen] = useState(false);
  return (
    <>
      {multiple ? (
        <>
          <div
            className={sty.box_container}
            onClick={() => {
              setisOpen(!isOpen);
            }}
            id="home"
          >
            <h1>{title}</h1>
            <img src={img} alt="" />
            <ul>{children}</ul>
          </div>
        </>
      ) : (
        <div
          className={sty.box_container}
          id="home"
          onClick={() => {
            setisOpen(!isOpen);
          }}
        >
          <h1>{title}</h1>
          <img src={img} alt="" />
          {comingsoon ? (
            <>
              <p style={{ top: "18vh" }} className={sty.readMore}>
                <Link href="">{t("coming_soon")}</Link>
              </p>
            </>
          ) : (
            <>
              <p style={{ top: "18vh" }} className={sty.readMore}>
                <Link href={`/products${go}`}>{t("common:read_more")}</Link>
              </p>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default HomeComp;
