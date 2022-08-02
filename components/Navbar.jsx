/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { IoArrowUpCircle } from 'react-icons/io5';

import NavMobile from './NavMobile';
import NavNormal from './NavNormal';

import sty from '../styles/navbar.module.scss';

const Navbar = () => {
  let router = useRouter();

  const [isactiveLan, setIsactiveLan] = useState(false);
  const [isActive, setisActive] = useState(false);

  const handleHamburgerMenu = () => {
    if (isActive) setisActive(false);
    else setisActive(true);
  };

  const handleLan = () => {
    if (isactiveLan) setIsactiveLan(false);
    else setIsactiveLan(true);
  };

  return (
    <div className={sty.all}>
      <nav className={sty.nav1}>
        <Link href="/">
          <img
            src="/assets/images/logo_gersteel.png"
            alt=""
            className={sty.logo}
          />
        </Link>

        <div className={sty.beBlack}>
          <div className={sty.angle}></div>
          <NavNormal />
          <NavMobile />
          {isactiveLan ? (
            <>
              <img
                src={`/assets/svgs/${router.locale}.svg`}
                onClick={handleLan}
                className={sty.outside_flag}
                alt=""
              />
              <div className={sty.backDropp} onClick={handleLan}>
                <div className={sty.menu_lan}>
                  <div className=" flex">
                    <img src="/assets/svgs/ro.svg" alt="romaninan flag" />
                    <Link href={router.asPath} locale="ro">
                      <a>Romana</a>
                    </Link>
                  </div>
                  <div>
                    <img src="/assets/svgs/hu.svg" alt="hungarian" />
                    <Link href={router.asPath} locale="hu">
                      <a>Magyar</a>
                    </Link>
                  </div>

                  <div>
                    <img src="/assets/svgs/en.svg" alt="uk flag" />
                    <Link href={router.asPath} locale="en">
                      <a>English</a>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <img
              src={`/assets/svgs/${router.locale}.svg`}
              onClick={handleLan}
              className={sty.outside_flag}
              alt=""
            />
          )}
        </div>
      </nav>
      <div className={sty.upArrowCont}>
        <IoArrowUpCircle
          className={sty.upArrow}
          size={55}
          onClick={() => {
            scrollTo(0, 0);
          }}
        />
      </div>
    </div>
  );
};

export default Navbar;
