import Link from "next/link";

import { IoMdArrowDropdown } from "react-icons/io";
import sty from "../styles/navitems.module.scss";

function NavProdItems() {
  const size = 15;

  return (
    <ul className={sty.big_ul}>
      <li className={sty.big_li}>
        Prestressing steal, spring wires
        <IoMdArrowDropdown color="white" size={size} className={sty.icon} />
        <ul className={sty.small_ul}>
          <li className={sty.small_li}>
            <Link href="/products/1/pcstands">PC strands</Link>
          </li>
          <li className={sty.small_li}>
            <Link href="/products/1/pcwires">PC wires</Link>
          </li>
          <li className={sty.small_li}>
            <Link href="/products/1/springwires">Spring wires</Link>
          </li>
        </ul>
      </li>
      <li className={sty.big_li}>
        <Link href="/products/2/pfoil">Protective foil</Link>
      </li>
      <li className={sty.big_li}>
        <Link href="/products/3/concspacers">Concrete spacers</Link>
      </li>
      <li className={sty.big_li}>
        <Link href="/products/4/plasspacers">Plastic spacers</Link>
      </li>
      <li className={sty.big_li}>
        Corrugated pipes/ducts
        <IoMdArrowDropdown
          color="white"
          size={size}
          rotate="90"
          className={sty.icon}
        />
        <ul className={sty.small_ul}>
          <li className={sty.small_li}>
            <Link href="products/5/rccp">Round corrugated cavity pipes</Link>
          </li>
          <li className={sty.small_li}>
            <Link href="products/5/rcp">Rectengular cavity pipes</Link>
          </li>
          <li className={sty.small_li}>
            <Link href="products/5/rlw">Round longitudinally welded</Link>
          </li>
          <li className={sty.small_li}>
            <Link href="products/5/vft">Void forming tubes</Link>
          </li>
          <li className={sty.small_li}>
            <Link href="products/5/shs">Shuttering systemms</Link>
          </li>
        </ul>
      </li>
      <li className={sty.big_li}>
        PVC sheats, leveling plastic spacers
        <IoMdArrowDropdown
          color="white"
          size={size}
          rotate="90"
          className={sty.icon}
        />
        <ul className={sty.small_ul}>
          <li className={sty.small_li}>
            <Link href="/products/6/pvcsheats">PVC sheats</Link>
          </li>
          <li className={sty.small_li}>
            <Link href="/products/6/lps">Leveling plastic spacers</Link>
          </li>
        </ul>
      </li>
      <li className={sty.big_li}>
        <Link href="products/7/grindingballs">Steel grinding balls</Link>
      </li>
      <li className={sty.big_li}>
        <Link href="products/8/pt">Post-tensioning(materials & services)</Link>
      </li>
    </ul>
  );
}

export default NavProdItems;