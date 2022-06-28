import { useState } from "react";

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
            onClick={() => {
              setIsactive(!isactive);
            }}
          >
            PRODUCTS
            {/* <MdOutlineKeyboardArrowDown color="white" size={20} style={{}} /> */}
            <IoMdArrowDropdown color="white" size={20} />
          </a>
        </div>
        {isactive ? <NavProdItems /> : ""}
        <a href="#about">ABOUT US</a>
        <a href="#contact">CONTACT</a>
      </div>
    </>
  );
};

export default NavNormal;
