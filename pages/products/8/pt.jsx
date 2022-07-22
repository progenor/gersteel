import styy from '../../../styles/generalPage.module.scss';
import sty from './pt.module.scss';

import Image from 'next/image';

const PcStrands = () => {
  return (
    <div className={styy.main_container}>
      <div className={styy.container}>
        <div className={sty.cont}>
          <h1>Post tensioning</h1>
          <div className={sty.img_cont}>
            <div>
              <Image
                src="/assets/images/pt1.png"
                layout="responsive"
                width={370}
                height={200}
                alt="post tensioning"
                className={sty.img}
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              reprehenderit consequatur ipsum officiis magni velit, facilis
              voluptate necessitatibus esse quisquam dolore, pariatur saepe
              molestias laudantium fuga, ut animi. Placeat, iste?
            </p>
            <div>
              <Image
                src="/assets/images/pt2.png"
                layout="responsive"
                width={370}
                height={200}
                alt="post tensioning"
                className={sty.img}
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
              error accusamus maxime vitae quam eius temporibus consequuntur
              maiores sequi, quos saepe explicabo sit recusandae? Fuga quam
              facilis voluptas aperiam quibusdam?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PcStrands;
