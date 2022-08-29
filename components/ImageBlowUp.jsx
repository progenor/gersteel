import Image from "next/image";
import sty from "../styles/generalPage.module.scss";

const ImageBlowUp = ({ img = "gray.jpg" }) => {
  return (
    <div className={sty.image_blow_up}>
      <img alt="image" src={`/assets/images/products/${img}`} />
    </div>
  );
};

export default ImageBlowUp;
