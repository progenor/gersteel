import { useState } from 'react';
import Link from 'next/link';
import sty from '../styles/home.module.scss';

import { BsFillArrowRightCircleFill } from 'react-icons';

import useTranslation from 'next-translate/useTranslation';

function HomeComp() {
  let { t, lang } = useTranslation();
  return (
    <div className={sty.home_cont} id="home">
      <BoxContainer
        title="Prestressing steel spring wires"
        img="/assets/images/strand.png"
        multiple={true}
      >
        <li>
          <br />
        </li>
        <li style={{ marginLeft: '-80%' }}>
          <Link href="/products/1/pcstrands">PC strands</Link>
        </li>
        <li style={{ marginLeft: '-28px' }}>
          <Link href="/products/1/pcwires">PC wires</Link>
        </li>
        <li style={{ marginLeft: '-10px' }}>
          <Link href="/products/1/springwires">Spring wires</Link>
        </li>
      </BoxContainer>
      <BoxContainer
        title="Corrugated pipes/ducts"
        img="/assets/images/cavity_pipe.png"
        multiple={true}
      >
        <li style={{ marginLeft: '-120px' }}>
          <Link href="/products/5/rccp">Round corrugated cavity pipes</Link>
        </li>
        <li style={{ marginLeft: '-84px' }}>
          <Link href="/products/5/rlw">Round longitudinally welded</Link>
        </li>
        <li style={{ marginLeft: '-48px' }}>
          <Link href="/products/5/rcp">Rectengular cavity pipes</Link>
        </li>
        <li style={{ marginLeft: '-17px' }}>
          <Link href="/products/5/shs">Shuttering systemms</Link>
        </li>
        <li style={{ marginLeft: '12px' }}>
          <Link href="/products/5/vft">Void forming tubes</Link>
        </li>
      </BoxContainer>

      <BoxContainer
        title="Concrete/Plastic spacers"
        img="/assets/images/conc_plas_spacer.png"
        go="/3/concspacers"
      />
      <BoxContainer
        title="PVC sheets, leveling plastic spacers"
        img="/assets/images/strand.png"
        multiple={true}
      >
        <li>
          <br />
        </li>
        <li>
          <br />
        </li>
        <li style={{ marginLeft: '-60px' }}>
          <Link href="/products/6/pvcsheets">PVC sheats</Link>
        </li>
        <li style={{ marginLeft: '-20px' }}>
          <Link href="/products/6/lps">Leveling plastic spacers</Link>
        </li>
      </BoxContainer>
      <BoxContainer
        title="Protective foil"
        img="/assets/images/pfoil.png"
        go="/2/pfoil"
      />

      <BoxContainer
        title="Steal grinding balls"
        img="/assets/images/balls.png"
        go="/7/grindingballs"
      />
      <BoxContainer
        title="Post-tensioning"
        img="/assets/images/strand.png"
        go="/8/pt"
      />
      <BoxContainer
        title="Others"
        img="/assets/images/strand.png"
        go="/4/others"
      />
    </div>
  );
}

function BoxContainer({ children, title, img, multiple, go }) {
  let { t, lang } = useTranslation();
  const [isOpen, setisOpen] = useState(false);
  return (
    <>
      {multiple ? (
        <>
          <div
            className={sty.box_container}
            onClick={() => {
              setisOpen(!isOpen);
            }}
            id="home"
          >
            <h1>{title}</h1>
            <img src={img} alt="" />
            <ul>{children}</ul>
          </div>
        </>
      ) : (
        <div
          className={sty.box_container}
          id="home"
          onClick={() => {
            setisOpen(!isOpen);
          }}
        >
          <h1>{title}</h1>
          <img src={img} alt="" />
          <p style={{ top: '18vh' }} className={sty.readMore}>
            <Link href={`/products${go}`}>Read more</Link>
          </p>
        </div>
      )}
    </>
  );
}

export default HomeComp;
