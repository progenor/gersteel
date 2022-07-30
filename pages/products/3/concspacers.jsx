import Link from 'next/link';
import styy from '../../../styles/generalPage.module.scss';
import sty from './concspacers.module.scss';

import ConcSpacers from '../../../components/ConcSpacers';
import PlasSpacers from '../../../components/PlasSpacers';

const PcStrands = () => {
  return (
    <div className={styy.main_container}>
      <div className={styy.container}>
        <div className={styy.types}>
          <h2>Types: </h2>
          <ul>
            <li>
              <a href="#concrete">Concrete Spacers</a>
              <ul>
                <li>
                  <a href="#btds">Betodis BTD S – with double plastic clips</a>
                </li>
                <li>
                  <a href="#btdhs">
                    Betodis BTD HS – with double plastic clips
                  </a>
                </li>
                <li>
                  <a href="#mirawb">Concrete stick WB</a>
                </li>
                <li>
                  <a href="#butterK">
                    Concrete ,,butterfly,, spacer without wire - K
                  </a>
                </li>
                <li>
                  <a href="#butterkd">
                    Concrete ,,butterfly,, spacer including wire - KD
                  </a>
                </li>
                <li>
                  <a href="#concu">Concrete ,,U,, spacer without wire</a>
                </li>
                <li>
                  <a href="#concud">Concrete ,,UD,, spacer including wire</a>
                </li>
                <li>
                  <a href="#snakets">Concrete T-Section - snakeTS</a>
                </li>
                <li>
                  <a href="#snakes">Concrete snake S</a>
                </li>
                <li>
                  <a href="#snakesn">Concrete snake with ripples SN</a>
                </li>
                <li>
                  <a href="#conctube">Concrete tube 22/40</a>
                </li>
                <li>
                  <a href="#concplug">Concrete plug</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#plastic">Plastic Spacers</a>
              <ul>
                <li>
                  <a href="#wsko">Wheel Spacer KO</a>
                </li>
                <li>
                  <a href="#wskom">Wheel Spacer KO MAXI</a>
                </li>
                <li>
                  <a href="#dts">DUAL Track Spacer - length 2,0 m</a>
                </li>
                <li>
                  <a href="#ts">Track Spacer DL – length 2,0 m</a>
                </li>
                <li>
                  <a href="#tsdlv">
                    Track spacer with closed sides DLV – length 2,0m
                  </a>
                </li>
                <li>
                  <a href="#cepd">Chamfer edge profiles D – length 2,5 m</a>
                </li>
                <li>
                  <a href="#cepdfv">
                    Chamfer edge profiles with nailing flange DFV full - length
                    2,5 m
                  </a>
                </li>
                <li>
                  <a href="#cepdfh">
                    Chamfer edge profiles with nailing flange DFH hollow –length
                    2,5 m
                  </a>
                </li>
                <li>
                  <a href="#sppp">Sealing profile PP</a>
                </li>
                <li>
                  <a href="#rsdk">Ring spacer diskus DK</a>
                </li>
                <li>
                  <a href="#rde">Rhombus DE</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className={sty.main}>
          <ConcSpacers />
          <PlasSpacers />
        </div>
      </div>
    </div>
  );
};

export default PcStrands;
