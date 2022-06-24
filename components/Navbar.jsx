import { useState } from "react";

import sty from "../styles/navbar.module.scss";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdLanguage } from "react-icons/md";

import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = ({ ShowModal, setShowModal }) => {
  //creating animation variants for the products
  const pr_variant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

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
        <div className={sty.link_container}>
          <a href="#about">ABOUT US</a>
          <a href="#contact">CONTACT</a>
          <MdLanguage
            size={35}
            style={{ color: "white", marginLeft: "4rem" }}
            onClick={() => {
              if (ShowModal) setShowModal(false);
              else setShowModal(true);
            }}
          />
          {/* FIXME: WHITE */}
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
              <div className={sty.prod_links}>
                <ul>
                  <li>
                    <Link href="/products/steel">
                      <a>Steel</a>
                    </Link>
                  </li>
                  <ul>
                    <li>egy</li>
                    <li>egy</li>
                    <li>egy</li>
                    <li>egy</li>
                  </ul>
                  <li>
                    <Link href="/products/concrete">
                      <a>Concrete</a>
                    </Link>
                    <ul>
                      <li>ketto</li>
                      <li>ketto</li>
                      <li>ketto</li>
                      <li>ketto</li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/products/pipes">
                      <a>Pipe</a>
                    </Link>
                    <ul>
                      <li>harom</li>
                      <li>harom</li>
                      <li>harom</li>
                      <li>harom</li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/products/plastic">
                      <a>Plastic</a>
                    </Link>
                    <ul>
                      <li>negy</li>
                      <li>negy</li>
                      <li>negy</li>
                      <li>negy</li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/products/grinding-balls">
                      <a>Grinding Balls</a>
                    </Link>
                    <ul>
                      <li>ot</li>
                      <li>ot</li>
                      <li>ot</li>
                      <li>ot</li>
                      <li>ot</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </>
          )}

          {!isactive ? <a className={sty.prod}>Products</a> : ""}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
