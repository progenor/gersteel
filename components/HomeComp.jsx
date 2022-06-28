import { useState } from "react";
import sty from "../styles/home.module.scss";

function HomeComp() {
  return (
    <div className={sty.home_cont} id="home">
      <BoxContainer
        title="Prestressing steal spring wires"
        smallText="wtf is going on"
        img="/assets/images/bartos.png"
        multiple={true}
      />
      <BoxContainer
        title="Protective foil"
        smallText="wtf is going on"
        img="/assets/images/bartos.png"
      />
      <BoxContainer
        title="Concrete spacers"
        smallText="wtf is going on"
        img="/assets/images/bartos.png"
      />
      <BoxContainer
        title="Plastic spacers"
        smallText="wtf is going on"
        img="/assets/images/bartos.png"
      />
      <BoxContainer
        title="Corrugated pipes/ducts"
        smallText="wtf is going on"
        img="/assets/images/bartos.png"
        multiple={true}
      />
      <BoxContainer
        title="PVC sheats, leveling plastic spacers"
        smallText="wtf is going on"
        img="/assets/images/bartos.png"
        multiple={true}
      />
      <BoxContainer
        title="Steal grinding balls"
        smallText="wtf is going on"
        img="/assets/images/bartos.png"
      />
      <BoxContainer
        title="Post-tensioning"
        smallText="wtf is going on"
        img="/assets/images/bartos.png"
      />
    </div>
  );
}

function BoxContainer({ smallText, title, img, multiple }) {
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
            {isOpen ? (
              <>
                <div className={sty.black}>
                  <h1>{title}</h1>
                </div>
              </>
            ) : (
              <>
                <h1>{title}</h1>
                <img src={img} alt="" />
                <p>{smallText}</p>
              </>
            )}
          </div>
        </>
      ) : (
        <div
          className={sty.box_container}
          id="home"
          onClick={() => {
            setisOpen(!isOpen);
            console.log("clicked");
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
