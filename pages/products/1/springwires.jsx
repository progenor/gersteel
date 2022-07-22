import styy from '../../../styles/generalPage.module.scss';
import sty from './springwires.module.scss';

import useTranslation from 'next-translate/useTranslation';
const SpringWires = () => {
  let { t, lang } = useTranslation();
  return (
    <div className={styy.main_container}>
      <div className={styy.container}>
        <div className={sty.cont}>
          <h1>Spring wires</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
            similique sed in non cumque veritatis quidem blanditiis, natus
            nostrum ea qui fuga repellat corrupti, saepe numquam quis quam.
            Quisquam, adipisci? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptas possimus ratione magnam consequuntur
            quidem id distinctio praesentium, eveniet reprehenderit. A unde odit
            beatae facilis molestiae ut eum soluta fuga nobis? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Sapiente odit vero officiis
            blanditiis sed doloribus, reiciendis et! Ratione quos numquam
            quibusdam deserunt a, et neque molestiae quasi, assumenda nulla nam?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
            facilis cum incidunt vitae molestiae eius, necessitatibus deserunt
            harum saepe suscipit eligendi distinctio! Temporibus, sit rem. Odit
            voluptas debitis dolore quas?
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpringWires;
