import Image from 'next/image';
import styy from '../../../styles/generalPage.module.scss';
import sty from './grindingballs.module.scss';

const PcStrands = () => {
  return (
    <div className={styy.main_container}>
      <div className={styy.container}>
        <div className={sty.cont}>
          <h1>Grinding balls</h1>
          <div className={sty.img_cont}>
            <Image
              src="/assets/images/gb1.webp"
              alt="grinding balls"
              layout="responsive"
              width={250}
              height={250}
            />
            <Image
              src="/assets/images/gb2.webp"
              alt="grinding balls"
              layout="responsive"
              width={250}
              height={250}
            />
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
            tempore rem consequatur reiciendis velit modi, accusantium nobis
            numquam magnam neque sequi natus impedit inventore repudiandae saepe
            fugiat odit dolore alias. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Cum inventore, dolor iste nisi aut fugit quibusdam
            porro reprehenderit eius possimus in, accusantium aperiam
            praesentium cupiditate culpa, neque voluptatem amet ratione. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Beatae ab
            provident laboriosam. Voluptates ipsa blanditiis assumenda magni ea
            id suscipit vitae ullam? Quibusdam dolores accusantium repellat
            possimus labore placeat aspernatur!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PcStrands;
