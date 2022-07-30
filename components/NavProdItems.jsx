import Link from 'next/link';

import { IoMdArrowDropdown } from 'react-icons/io';
import sty from '../styles/navitems.module.scss';
import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';

function NavProdItems() {
  let { t, lang } = useTranslation();
  const size = 15;

  const [please_go_fuck_yourself, setplease_go_fuck_yourself] = useState(false);

  return (
    <ul className={sty.big_ul}>
      <li className={sty.big_li}>
        <span>Prestressing steal, spring wires</span>
        <IoMdArrowDropdown color="white" size={size} className={sty.icon} />
        <ul className={sty.small_ul}>
          <li className={sty.small_li}>
            <Link href="/products/1/pcstrands">PC strands</Link>
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
        <span>Corrugated pipes/ducts</span>
        <IoMdArrowDropdown
          color="white"
          size={size}
          rotate="90"
          className={sty.icon}
        />
        <ul className={sty.small_ul}>
          <li className={sty.small_li}>
            <Link href="/products/5/rccp">Round corrugated cavity pipes</Link>
          </li>
          <li className={sty.small_li}>
            <Link href="/products/5/rcp">Rectengular cavity pipes</Link>
          </li>
          <li className={sty.small_li}>
            <Link href="/products/5/rlw">Round longitudinally welded</Link>
          </li>
          <li className={sty.small_li}>
            <Link href="/products/5/vft">Void forming tubes</Link>
          </li>
          <li className={sty.small_li}>
            <Link href="/products/5/shs">Shuttering systemms</Link>
          </li>
        </ul>
      </li>

      <li className={sty.big_li}>
        <Link href="/products/3/concspacers">Concrete/plastic spacers</Link>
      </li>

      <li className={sty.big_li}>
        <Link href="/products/2/pfoil">Protective foil</Link>
      </li>
      <li className={sty.big_li}>
        <span>PVC sheets, leveling plastic spacers</span>
        <IoMdArrowDropdown
          color="white"
          size={size}
          rotate="90"
          className={sty.icon}
        />
        <ul className={sty.small_ul}>
          <li className={sty.small_li}>
            <Link href="/products/6/pvcsheets">PVC sheets</Link>
          </li>
          <li className={sty.small_li}>
            <Link href="/products/6/lps">Leveling plastic spacers</Link>
          </li>
        </ul>
      </li>
      <li className={sty.big_li}>
        <Link href="/products/7/grindingballs">Steel grinding balls</Link>
      </li>
      <li className={sty.big_li}>
        <Link href="/products/8/pt">Post-tensioning</Link>
      </li>
      <li
        className={(sty.big_li, sty.disabled)}
        onMouseEnter={() => {
          setplease_go_fuck_yourself(!please_go_fuck_yourself);
        }}
        onMouseLeave={() => {
          setplease_go_fuck_yourself(!please_go_fuck_yourself);
        }}
      >
        {please_go_fuck_yourself ? (
          <>
            <Link href="/products/4/others">
              <span style={{ color: 'grey' }}>Coming soon...</span>
            </Link>
          </>
        ) : (
          <>
            <Link href="/products/4/others">Others</Link>
          </>
        )}
      </li>
    </ul>
  );
}

export default NavProdItems;
