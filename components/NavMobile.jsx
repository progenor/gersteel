import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose, MdLanguage } from "react-icons/md";

import sty from "../styles/navbar.module.scss";

const NavMobile = () => {
  const [isActive, setisActive] = useState(false);

  return (
    <div className={sty.mob_link_container}>
      {isActive ? (
        <>
          <div className={sty.menu_container}>
            <MdOutlineClose
              onClick={() => {
                setisActive(false);
              }}
              size={40}
              color="white"
              className={sty.menu_close}
            />
            <div>
              <a href="#about">ABOUT US</a>
              <a href="#contact">CONTACT</a>
            </div>
          </div>
        </>
      ) : (
        <>
          <GiHamburgerMenu
            onClick={() => {
              setisActive(true);
            }}
            size={30}
            color="white"
          />
        </>
      )}
      {/* TODO: Add the links */}
    </div>
  );
};

export default NavMobile;
