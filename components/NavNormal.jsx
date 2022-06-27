import sty from "../styles/navbar.module.scss";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

const NavNormal = () => {
  return (
    <>
      <div className={sty.link_container}>
        <div>
          <a href="">
            PRODUCTS
            {/* <MdOutlineKeyboardArrowDown color="white" size={20} style={{}} /> */}
            <IoMdArrowDropdown color="white" size={20} />
          </a>
        </div>

        <a href="#about">ABOUT US</a>
        <a href="#contact">CONTACT</a>
      </div>
    </>
  );
};

export default NavNormal;
