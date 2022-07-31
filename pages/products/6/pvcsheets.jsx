import Image from 'next/image';
import styy from '../../../styles/generalPage.module.scss';
import sty from './pvcsheets.module.scss';

const PvcSheets = () => {
  return (
    <div className={styy.main_container}>
      <div className={styy.container}>
        <div className={sty.cont}>
          <h1>PVC Sheets</h1>
          <Image
            alt="pvc sheet"
            src="/assets/images/products/gray.jpg"
            width={250}
            height={250}
          />
          <h3>Types:</h3>
          <p>Class 12 / Class 15</p>
        </div>
      </div>
    </div>
  );
};

export default PvcSheets;
