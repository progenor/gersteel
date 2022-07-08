import sty from "../styles/footer.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={sty.ftr}>
      {/* TODO: COMPLETE THIS SHIT YOU DUMB FUCK */}
      <div className={sty.main}>
        <div className={sty.logo_stuff}>
          <img src="/assets/images/logo_gersteel2.png" alt="" />

          <a href="">
            Romania, Targu Mures <br /> Str. Frunzei nr.10
          </a>
          <a href="tel:">tel: +6518513541</a>
          <a href="fax:">fax: 123452356</a>
          <a href="mail:">E-mail: sdfjsdfjhsadfsadf </a>
        </div>

        <div className={sty.line}></div>

        <div className={sty.map}>
          <h3>Certificates</h3>
        </div>

        <div className={sty.line}></div>

        <div className={sty.information}>
          <h3>Information</h3>
          <a href="#home">Home</a>
          <Link href="/About">About us</Link>
          <Link href="/Contact">Contact</Link>

          <img src="/assets/images/logo_G.png" alt="" />
        </div>
      </div>

      <div className={sty.createdby}>
        <p>
          Created by:{" "}
          <span>
            <a href="https://lorgenor.tech/"> lorgenor </a>
          </span>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
