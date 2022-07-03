import { useState } from "react";
import Link from "next/link";
import sty from "../styles/home.module.scss";

function HomeComp() {
  return (
    <div className={sty.home_cont} id="home">
      <BoxContainer
        title="Prestressing steal spring wires"
        img="/assets/images/gray.jpg"
        multiple={true}
      >
        <li style={{ marginLeft: "20px" }}>
          <Link href="/products/1/pcstrands">PC strands</Link>
        </li>
        <li style={{ marginLeft: "0" }}>
          <Link href="/products/1/pcwires">PC wires</Link>
        </li>
        <li style={{ marginLeft: "-22px" }}>
          <Link href="/products/1/springwires">Spring wires</Link>
        </li>
      </BoxContainer>
      <BoxContainer
        title="Protective foil"
        img="/assets/images/gray.jpg"
        go="/2/pfoil"
      />
      <BoxContainer
        title="Concrete spacers"
        img="/assets/images/gray.jpg"
        go="/3/concspacers"
      />
      <BoxContainer
        title="Plastic spacers"
        img="/assets/images/gray.jpg"
        go="/4/plasspacers"
      />
      <BoxContainer
        title="Corrugated pipes/ducts"
        img="/assets/images/gray.jpg"
        multiple={true}
      >
        <li style={{ marginLeft: "20px" }}>
          <Link href="/products/5/rccp">Round corrugated cavity pipes</Link>
        </li>
        <li style={{ marginLeft: "0" }}>
          <Link href="/products/5/rcp">Rectengular cavity pipes</Link>
        </li>
        <li style={{ marginLeft: "-22px" }}>
          <Link href="/products/5/rlw">Round longitudinally welded</Link>
        </li>
        <li style={{ marginLeft: "-30px" }}>
          <Link href="/products/5/vft">Void forming tubes</Link>
        </li>
        <li style={{ marginLeft: "-35px" }}>
          <Link href="/products/5/shs">Shuttering systemms</Link>
        </li>
      </BoxContainer>
      <BoxContainer
        title="PVC sheats, leveling plastic spacers"
        img="/assets/images/gray.jpg"
        multiple={true}
      >
        <li style={{ marginLeft: "-50px" }}>
          <Link href="/products/6/pvcsheats">PVC sheats</Link>
        </li>
        <li style={{ marginLeft: "-62px" }}>
          <Link href="/products/6/lps">Leveling plastic spacers</Link>
        </li>
      </BoxContainer>
      <BoxContainer
        title="Steal grinding balls"
        img="/assets/images/gray.jpg"
        go="/7/grindingballs"
      />
      <BoxContainer
        title="Post-tensioning"
        img="/assets/images/gray.jpg"
        go="/8/pt"
      />
    </div>
  );
}

function BoxContainer({ children, title, img, multiple, go }) {
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
            <p>Categories</p>
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
          <p style={{ top: "20vh" }}>
            <Link href={`/products${go}`}>Read more</Link>
          </p>
        </div>
      )}
    </>
  );
}

export default HomeComp;
