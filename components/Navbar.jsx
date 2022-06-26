import { useState } from "react";

import sty from "../styles/navbar.module.scss";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdLanguage } from "react-icons/md";

import NavMobile from "./NavMobile";
import NavNormal from "./NavNormal";

import Link from "next/link";

const Navbar = () => {
  const [isactiveLan, setIsactiveLan] = useState(false);

  const handleHamburgerMenu = () => {
    if (isactive) setIsactive(false);
    else setIsactive(true);
  };

  const handleLan = () => {
    if (isactiveLan) setIsactiveLan(false);
    else setIsactiveLan(true);
  };

  const chLan = () => {
    if (isactiveLan) setIsactiveLan(false);
    else setIsactiveLan(true);
  };

  return (
    <div className={sty.all}>
      <nav className={sty.nav1}>
        <Link href="/">
          <img src="/assets/images/logo_gersteel2.png" alt="" />
        </Link>

        <div>
          <NavNormal />
          <NavMobile />
          {isactiveLan ? (
            <>
              <MdLanguage
                size={30}
                color="white"
                className={sty.language}
                onClick={handleLan}
              />
              <div className={sty.backDropp} onClick={handleLan}>
                <div className={sty.menu_lan}>
                  <h1>Chose a language!</h1>
                  <a onClick={chLan}>Hungarian</a>
                  <a onClick={chLan}>Roman</a>
                  <a onClick={chLan}>English</a>
                </div>
              </div>
            </>
          ) : (
            <MdLanguage
              size={30}
              color="white"
              className={sty.language}
              onClick={handleLan}
            />
          )}
        </div>
      </nav>

      {/* nav2 */}

      {/* <nav className={sty.nav2}>
        <div className={sty.products_ham} onClick={handleHamburgerMenu}>
          {!isactive ? (
            <>
              <GiHamburgerMenu size={18} />
            </>
          ) : (
            <>
              <GrClose size={18} />
              <a className={sty.prod}>Products</a>
              <div className={sty.prod_links}></div>
            </>
          )}

          {!isactive ? <a className={sty.prod}>Products</a> : ""}
        </div>
      </nav> */}
    </div>
  );
};

export default Navbar;
