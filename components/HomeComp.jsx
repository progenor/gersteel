import sty from "../styles/home.module.scss";

function HomeComp() {
  return (
    <div className={sty.home_cont} id="home">
      <BoxContainer title="Steel" smallText="wtf is going on" />
      <BoxContainer title="Steel" smallText="wtf is going on" />
      <BoxContainer title="Steel" smallText="wtf is going on" />
      <BoxContainer title="Steel" smallText="wtf is going on" />
      <BoxContainer title="Steel" smallText="wtf is going on" />
      <BoxContainer title="Steel" smallText="wtf is going on" />
      <BoxContainer title="Steel" smallText="wtf is going on" />
      <BoxContainer title="Steel" smallText="wtf is going on" />
    </div>
  );
}

function BoxContainer({ smallText, title, img }) {
  return (
    <div className={sty.box_container}>
      <h1>{title}</h1>
      <img src={img} alt="" />
      <p>{smallText}</p>
    </div>
  );
}

export default HomeComp;
