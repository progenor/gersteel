import sty from '../styles/footer.module.scss';
import Link from 'next/link';
import Image from 'next/image';

import useTranslation from 'next-translate/useTranslation';

const Footer = () => {
  let { t, lang } = useTranslation();
  const img_size = 50;
  return (
    <footer className={sty.ftr}>
      {/* TODO: COMPLETE THIS SHIT YOU DUMB FUCK */}
      <div className={sty.main}>
        <div className={sty.logo_stuff}>
          <img src="/assets/images/logo_gersteel2.png" alt="" />

          <a href="">
            Romania, Targu Mures <br /> Str. Frunzei nr.10, 540164
          </a>
          <a href="tel:+40742090664">tel: +40 742 090 664</a>
          <a href="fax:+40265266267">fax: +40 265 266 267</a>
          <a href="mail:gersteelsrl@yahoo.com">E-mail: gersteelsrl@yahoo.com</a>
        </div>

        <div className={sty.line}></div>

        <div className={sty.map}>
          <h3>Certificates</h3>
          <div className={sty.certificates}>
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
            />
            <Image
              src="/assets/images/gray.jpg"
              alt="certificates"
              width={img_size}
              height={img_size}
            />
          </div>
        </div>

        <div className={sty.line}></div>

        <div className={sty.information}>
          <h3>Information</h3>
          <div className={sty.info_cont}>
            <img src="/assets/images/logo_G.png" alt="" />
            <div>
              <a href="#home">Home</a>
              <Link href="/About">About us</Link>
              <Link href="/Contact">Contact</Link>
            </div>
          </div>
        </div>
      </div>

      <div className={sty.createdby}>
        <p>
          Created by:{' '}
          <span>
            <a href="https://lorgenor.tech/"> lorgenor </a>
          </span>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
