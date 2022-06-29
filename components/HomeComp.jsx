import { useState } from "react";
import Link from "next/link";
import sty from "../styles/home.module.scss";

function HomeComp() {
  return (
    <div className={sty.home_cont} id="home">
      <BoxContainer
        title="Prestressing steal spring wires"
        smallText="Categories"
        img="/assets/images/gray.jpg"
        multiple={true}
      >
        <li style={{ marginLeft: "20px" }}>
          <Link href="/">PC strands</Link>
        </li>
        <li style={{ marginLeft: "0" }}>
          <Link href="/">PC wires</Link>
        </li>
        <li style={{ marginLeft: "-22px" }}>
          <Link href="/">Spring wires</Link>
        </li>
      </BoxContainer>
      <BoxContainer
        title="Protective foil"
        smallText="Read more"
        img="/assets/images/gray.jpg"
      />
      <BoxContainer
        title="Concrete spacers"
        smallText="wtf is going on"
        img="/assets/images/gray.jpg"
      />
      <BoxContainer
        title="Plastic spacers"
        smallText="wtf is going on"
        img="/assets/images/gray.jpg"
      />
      <BoxContainer
        title="Corrugated pipes/ducts"
        smallText="wtf is going on"
        img="/assets/images/gray.jpg"
        multiple={true}
      />
      <BoxContainer
        title="PVC sheats, leveling plastic spacers"
        smallText="wtf is going on"
        img="/assets/images/gray.jpg"
        multiple={true}
      />
      <BoxContainer
        title="Steal grinding balls"
        smallText="wtf is going on"
        img="/assets/images/gray.jpg"
      />
      <BoxContainer
        title="Post-tensioning"
        smallText="wtf is going on"
        img="/assets/images/gray.jpg"
      />
    </div>
  );
}

function BoxContainer({ children, smallText, title, img, multiple }) {
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
            <p>{smallText}</p>
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
          <p>{smallText}</p>
        </div>
      )}
    </>
  );
}

export default HomeComp;
