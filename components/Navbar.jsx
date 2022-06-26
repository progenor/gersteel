import { useState } from "react";

import sty from "../styles/navbar.module.scss";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdLanguage } from "react-icons/md";

import NavMobile from "./NavMobile";
import NavNormal from "./NavNormal";

import Link from "next/link";

const Navbar = () => {
  const [isactive, setIsactive] = useState(false);

  const handleHamburgerMenu = () => {
    if (isactive) setIsactive(false);
    else setIsactive(true);
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
          <MdLanguage size={30} color="white" className={sty.language} />
        </div>
      </nav>

      {/* nav2 */}

      <nav className={sty.nav2}>
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
      </nav>
    </div>
  );
};

export default Navbar;
