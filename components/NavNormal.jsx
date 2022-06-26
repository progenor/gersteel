import sty from "../styles/navbar.module.scss";

const NavNormal = () => {
  return (
    <>
      <div className={sty.link_container}>
        <a href="#about">ABOUT US</a>
        <a href="#contact">CONTACT</a>
      </div>
    </>
  );
};

export default NavNormal;
