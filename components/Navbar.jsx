import sty from "../styles/navbar.module.scss";
import { GrLanguage } from "react-icons/gr";

import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
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

  return (
    <>
      <nav className={sty.nav1}>
        <Link href="/products">
          <a>Products</a>
        </Link>
        <Link href="/">
          <img src="/assets/images/logo_gersteel.png" alt="" />
        </Link>
        <div className={sty.link_container}>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
          <GrLanguage size={38} />
        </div>
      </nav>
      <nav className={sty.nav2}>
        <Link href="/products/steel">
          <a>Steel</a>
        </Link>
        <Link href="/products/concrete">
          <a>Concrete</a>
        </Link>
        <Link href="/products/pipes">
          <a>Pipe</a>
        </Link>
        <Link href="/products/plastic">
          <a>Plastic</a>
        </Link>
        <Link href="/products/grinding-balls">
          <a>Grinding Balls</a>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
