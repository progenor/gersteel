import { useState } from "react";
import Link from "next/link";

import sty from "../styles/navbar.module.scss";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import NavProdItems from "./NavProdItems";

const NavNormal = () => {
  const [isactive, setIsactive] = useState(false);

  return (
    <>
      <div className={sty.link_container}>
        <div>
          <a
            onMouseEnter={() => {
              setIsactive(true);
            }}
          >
            PRODUCTS
            {/* <MdOutlineKeyboardArrowDown color="white" size={20} style={{}} /> */}
            <IoMdArrowDropdown color="white" size={20} />
          </a>
        </div>
        {isactive ? (
          <span
            onMouseLeave={() => {
              setIsactive(!isactive);
            }}
          >
            <NavProdItems />
          </span>
        ) : (
          ""
        )}
        <Link href="/About">ABOUT US</Link>
        <Link href="/Contact">CONTACT</Link>
      </div>
    </>
  );
};

export default NavNormal;
