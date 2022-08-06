import { useState } from "react";
import Link from "next/link";

import sty from "../styles/navbar.module.scss";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import NavProdItems from "./NavProdItems";

import useTranslation from "next-translate/useTranslation";

const NavNormal = () => {
  const { t, lang } = useTranslation();
  const [isactive, setIsactive] = useState(false);

  return (
    <>
      <div className={sty.link_container}>
        <div>
          <a
            onClick={() => {
              setIsactive(!isactive);
            }}
            style={{ textTransform: "uppercase" }}
          >
            {t("common:products")}
            {/* <MdOutlineKeyboardArrowDown color="white" size={20} style={{}} /> */}
            <IoMdArrowDropdown color="white" size={20} />
          </a>
        </div>
        {isactive ? <NavProdItems /> : ""}
        <Link href="/About">{t("common:about")}</Link>
        <Link href="/Contact">{t("common:contact")}</Link>
      </div>
    </>
  );
};

export default NavNormal;
