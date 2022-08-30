import Image from "next/image";
import sty from "../styles/generalPage.module.scss";

const ImageBlowUp = ({ img = null, imgF = null }) => {
  return (
    <div className={sty.image_blow_up}>
      {img && <img alt="image" src={`/assets/images/products/${img}`} />}
      {imgF && <img alt="image" src={imgF} />}
    </div>
  );
};

export default ImageBlowUp;
