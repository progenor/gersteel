import { useState } from "react";
import Link from "next/link";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose, MdLanguage } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

import sty from "../styles/navbar.module.scss";
import styy from "../styles/navMobile.module.scss";

import useTranslation from "next-translate/useTranslation";

const NavMobile = () => {
  const { t, lang } = useTranslation();
  const [isActive, setisActive] = useState(false);
  const [isOpen1, setisOpen1] = useState(false);
  const [isOpen2, setisOpen2] = useState(false);
  const [isOpen3, setisOpen3] = useState(false);

  const ProdItemsMobile = () => {
    const size = 15;
    return (
      <div className={styy.main}>
        <h2>Products:</h2>
        <ul className={styy.big_ul}>
          <div className={styy.line}></div>
          <li
            className={styy.big_li}
            onClick={() => {
              setisOpen1(!isOpen1);
            }}
          >
            {isOpen1 ? (
              <>
                Prestressing steal, spring <br /> wires
                <IoMdArrowDropdown
                  color="white"
                  size={size}
                  className={styy.icon}
                />
                <ul className={styy.small_ul}>
                  <li
                    className={styy.small_li}
                    onClick={() => {
                      setisActive(!isActive);
                    }}
                  >
                    <Link href="/products/1/pcstrands">PC strands</Link>
                  </li>
                  <li
                    className={styy.small_li}
                    onClick={() => {
                      setisActive(!isActive);
                    }}
                  >
                    <Link href="/products/1/pcwires">PC wires</Link>
                  </li>
                  <li
                    className={styy.small_li}
                    onClick={() => {
                      setisActive(!isActive);
                    }}
                  >
                    <Link href="/products/1/springwires">Spring wires</Link>
                  </li>
                </ul>
              </>
            ) : (
              <>
                Prestressing steal, spring <br /> wires
                <IoMdArrowDropdown
                  color="white"
                  size={size}
                  className={styy.icon}
                />
              </>
            )}
          </li>
          <div className={styy.line}></div>
          <li
            className={styy.big_li}
            onClick={() => {
              setisOpen2(!isOpen2);
            }}
          >
            {isOpen2 ? (
              <>
                Corrugated pipes/ducts
                <IoMdArrowDropdown
                  color="white"
                  size={size}
                  rotate="90"
                  className={styy.icon}
                />
                <ul className={styy.small_ul}>
                  <li
                    className={styy.small_li}
                    onClick={() => {
                      setisActive(!isActive);
                    }}
                  >
                    <Link href="products/5/rccp">
                      Round corrugated cavity pipes
                    </Link>
                  </li>
                  <li
                    className={styy.small_li}
                    onClick={() => {
                      setisActive(!isActive);
                    }}
                  >
                    <Link href="products/5/rcp">Rectengular cavity pipes</Link>
                  </li>
                  <li
                    className={styy.small_li}
                    onClick={() => {
                      setisActive(!isActive);
                    }}
                  >
                    <Link href="products/5/rlw">
                      Round longitudinally welded
                    </Link>
                  </li>
                  <li
                    className={styy.small_li}
                    onClick={() => {
                      setisActive(!isActive);
                    }}
                  >
                    <Link href="products/5/vft">Void forming tubes</Link>
                  </li>
                  <li
                    className={styy.small_li}
                    onClick={() => {
                      setisActive(!isActive);
                    }}
                  >
                    <Link href="products/5/shs">Shuttering systemms</Link>
                  </li>
                </ul>
              </>
            ) : (
              <>
                Corrugated pipes/ducts
                <IoMdArrowDropdown
                  color="white"
                  size={size}
                  rotate="90"
                  className={styy.icon}
                />
              </>
            )}
          </li>
          <div className={styy.line}></div>
          <li
            className={styy.big_li}
            onClick={() => {
              setisActive(!isActive);
            }}
          >
            <Link href="/products/3/concspacers">Concrete/plastic spacers</Link>
          </li>
          <div className={styy.line}></div>
          <li
            className={styy.big_li}
            onClick={() => {
              setisActive(!isActive);
            }}
          >
            <Link href="/products/2/pfoil">Protective foil</Link>
          </li>
          <div className={styy.line}></div>
          <li
            className={styy.big_li}
            onClick={() => {
              setisOpen3(!isOpen3);
            }}
          >
            {isOpen3 ? (
              <>
                PVC sheets, leveling plastic <br /> spacers
                <IoMdArrowDropdown
                  color="white"
                  size={size}
                  rotate="90"
                  className={styy.icon}
                />
                <ul className={styy.small_ul}>
                  <li
                    className={styy.small_li}
                    onClick={() => {
                      setisActive(!isActive);
                    }}
                  >
                    <Link href="/products/6/pvcsheets">PVC sheets</Link>
                  </li>
                  <li
                    className={styy.small_li}
                    onClick={() => {
                      setisActive(!isActive);
                    }}
                  >
                    <Link href="/products/6/lps">Leveling plastic spacers</Link>
                  </li>
                </ul>
              </>
            ) : (
              <>
                PVC sheets, leveling plastic <br /> spacers
                <IoMdArrowDropdown
                  color="white"
                  size={size}
                  rotate="90"
                  className={styy.icon}
                />
              </>
            )}
          </li>
          <div className={styy.line}></div>
          <li
            className={styy.big_li}
            onClick={() => {
              setisActive(!isActive);
            }}
          >
            <Link href="products/7/grindingballs">Steel grinding balls</Link>
          </li>
          <div className={styy.line}></div>
          <li
            className={styy.big_li}
            onClick={() => {
              setisActive(!isActive);
            }}
          >
            <Link href="products/8/pt">Post-tensioning</Link>
          </li>
          <div className={styy.line}></div>
        </ul>
      </div>
    );
  };

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
              <div
                onClick={() => {
                  setisActive(!isActive);
                }}
              >
                <Link href="/About">About us</Link>
                <Link href="/Contact">Contact</Link>
              </div>

              <div>
                <ProdItemsMobile />
              </div>
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
            className={sty.hamMenu}
          />
        </>
      )}
    </div>
  );
};

export default NavMobile;
