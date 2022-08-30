import sty from "../styles/footer.module.scss";
import Link from "next/link";
import Image from "next/image";

import useTranslation from "next-translate/useTranslation";

const Footer = () => {
  const { t, lang } = useTranslation("footer");
  const img_size = 50;
  return (
    <footer className={sty.ftr}>
      {/* TODO: COMPLETE THIS SHIT YOU DUMB FUCK */}
      <div className={sty.main}>
        <div className={sty.logo_stuff}>
          <img src="/assets/images/logo_gersteel2.png" alt="" />

          <a href="">
            România, Târgu-Mureș <br /> Str. Frunzei nr.10, 540164
          </a>
          <a href="tel:+40742090664">Tel: +40 742 090 664</a>
          <a href="fax:+40265266267">Fax: +40 265 266 267</a>
          <a href="mailto:gersteelsrl@yahoo.com">
            E-mail: gersteelsrl@yahoo.com
          </a>
        </div>

        <div className={sty.line}></div>

        <div className={sty.map}>
          <h3>{t("certificates")}</h3>
          <div className={sty.certificates}>
            {/* <Image
              src="/assets/images/gray.jpg"
              alt="certificates"
              width={img_size}
              height={img_size}
            />
            <Image
              src="/assets/images/gray.jpg"
              alt="certificates"
              width={img_size}
              height={img_size}
            />
            <Image
              src="/assets/images/gray.jpg"
              alt="certificates"
              width={img_size}
              height={img_size}
            />
            <Image
              src="/assets/images/gray.jpg"
              alt="certificates"
              width={img_size}
              height={img_size}
            />
            <Image
              src="/assets/images/gray.jpg"
              alt="certificates"
              width={img_size}
              height={img_size}
            />
            <Image
              src="/assets/images/gray.jpg"
              alt="certificates"
              width={img_size}
              height={img_size}
            /> */}
            <Image
              alt="image"
              src="/assets/images/confidas_logo.png"
              width={180}
              height={45}
              className={sty.certificate}
            />
          </div>
        </div>

        <div className={sty.line}></div>

        <div className={sty.information}>
          <h3>{t("info")}</h3>
          <div className={sty.info_cont}>
            <img src="/assets/images/logo_G.png" alt="" />
            <div>
              <a href="#home">{t("common:home")}</a>
              <Link href="/About">{t("common:about")}</Link>
              <Link href="/Contact">{t("common:contact")}</Link>
            </div>
          </div>
        </div>
      </div>

      <div className={sty.createdby}>
        <p>
          {t("common:createdby")}
          <span>
            <a href="https://lorgenor.tech/"> lorgenor </a>
          </span>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
