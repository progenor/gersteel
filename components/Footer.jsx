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
          <a href="mail:">E-mail: sdfjsdfjhsadfsadf</a>
        </div>

        <div className={sty.line}></div>

        <div className={sty.map}>
          <h3>Where can you find us:</h3>
          <img src="/assets/images/romania_map_location.png" alt="" />
        </div>

        <div className={sty.line}></div>

        <div className={sty.information}>
          <h3>Information</h3>
          <a href="#about">About us</a>
          <a href="#contact">Contact</a>
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
