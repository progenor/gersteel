import sty from "../styles/footer.module.scss";

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
          <h3>Where can you find us:</h3>
          <a href="https://www.google.com/maps/place/Strada+Frunzei+10,+T%C3%A2rgu+Mure%C8%99+547525/@46.538634,24.5410713,15z/data=!4m13!1m7!3m6!1s0x474bb7ce9f7b278b:0xbf084ffd3fe15941!2sStrada+Frunzei+10,+T%C3%A2rgu+Mure%C8%99+547525!3b1!8m2!3d46.538634!4d24.549826!3m4!1s0x474bb7ce9f7b278b:0xbf084ffd3fe15941!8m2!3d46.538634!4d24.549826">
            <img src="/assets/images/romania_map_location.png" alt="" />
          </a>
        </div>

        <div className={sty.line}></div>

        <div className={sty.information}>
          <h3>Information</h3>
          <a href="#about">About us</a>
          <a href="#contact">Contact</a>
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
