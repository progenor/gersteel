import sty from '../styles/spacers.module.scss';
import styy from '../styles/generalPage.module.scss';

import Image from 'next/image';

const PlasSpacers = () => {
  const IMG = ({ img1 = null, img2 = null, img3 = null }) => {
    const size = 80;
    return (
      <>
        <div className={sty.images}>
          <Image
            alt="image"
            src={`/assets/images/products/${img1}`}
            width={size}
            height={size}
          />
          {img2 && (
            <Image
              alt="image"
              src={`/assets/images/products/${img2}`}
              width={size}
              height={size}
            />
          )}
          {img3 && (
            <Image
              alt="image"
              src={`/assets/images/products/${img3}`}
              width={size}
              height={size}
            />
          )}
        </div>
      </>
    );
  };

  return (
    <div className={sty.main} id="plastic">
      <h1>Plastic Spacers</h1>
      <div className={styy.table1}>
        <h2 id="wsko">Wheel Spacer KO</h2>
        <IMG img1="wspacerko1.jpg" img2="wspacerko2.jpg" />
        <div className={styy.table}>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Height (mm)</th>
                <th>To suit bar dia (mm)</th>
                <th>Pack sie bag (pcs)</th>
                <th>Pack sie pack (pcs)</th>
                <th>Pallets (pcs)</th>
                <th>Bag (kg)</th>
                <th>Pack (kg)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>KO 12/15 </th>
                <td>15</td>
                <td>6-12</td>
                <td>1000</td>
                <td>5000</td>
                <td>100 000</td>
                <td>3,4</td>
                <td>17</td>
              </tr>

              <tr>
                <th>KO 12/20 </th>
                <td>20</td>
                <td>6-12</td>
                <td>500</td>
                <td>5000</td>
                <td>100 000</td>
                <td>1,7</td>
                <td>17</td>
              </tr>

              <tr>
                <th>KO 12/25 </th>
                <td>25</td>
                <td>6-12</td>
                <td>500</td>
                <td>4000</td>
                <td>48 000</td>
                <td>2,8</td>
                <td>22,4</td>
              </tr>
              <tr>
                <th>KO 12/30</th>
                <td>30</td>
                <td>6-12</td>
                <td>500</td>
                <td>2500</td>
                <td>35 000</td>
                <td>3,9</td>
                <td>15,6</td>
              </tr>

              <tr>
                <th>KO 12/35 </th>
                <td>35</td>
                <td>6-12</td>
                <td>200</td>
                <td>1000</td>
                <td>20 000</td>
                <td>2,2</td>
                <td>11</td>
              </tr>

              <tr>
                <th>KO 12/40 </th>
                <td>40</td>
                <td>6-12</td>
                <td>125</td>
                <td>1000</td>
                <td>20 000</td>
                <td>2,0</td>
                <td>16</td>
              </tr>

              <tr>
                <th>KO 12/50 </th>
                <td>50</td>
                <td>6-14</td>
                <td>100</td>
                <td>500</td>
                <td>10 000</td>
                <td>2,2</td>
                <td>11</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={styy.table1}>
        <h2 id="wskom">Wheel Spacer KO MAXI</h2>
        <IMG img1="wspacerko1.jpg" img2="wspacerko2.jpg" />
        <div className={styy.table}>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Height (mm)</th>
                <th>To suit bar dia (mm)</th>
                <th>Pack sie bag (pcs)</th>
                <th>Pack sie pack (pcs)</th>
                <th>Pallets (pcs)</th>
                <th>Bag (kg)</th>
                <th>Pack (kg)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>KO MAXI 20 / 25</th>
                <td>25</td>
                <td>8-20</td>
                <td>250</td>
                <td>1000</td>
                <td>30 000</td>
                <td>2,0</td>
                <td>8</td>
              </tr>

              <tr>
                <th>KO MAXI 20 / 30 </th>
                <td>30</td>
                <td>8-20</td>
                <td>125</td>
                <td>1000</td>
                <td>20 000</td>
                <td>1,4</td>
                <td>11</td>
              </tr>

              <tr>
                <th>KO MAXI 20 / 35 </th>
                <td>35</td>
                <td>8-20</td>
                <td>125</td>
                <td>1000</td>
                <td>20 000</td>
                <td>2,8</td>
                <td>22,4</td>
              </tr>
              <tr>
                <th>KO MAXI 20 / 40 </th>
                <td>40</td>
                <td>8-20</td>
                <td>125</td>
                <td>500</td>
                <td>10 000</td>
                <td>3,8</td>
                <td>15,2</td>
              </tr>
              <tr>
                <th>KO MAXI 20 / 50 </th>
                <td>50</td>
                <td>8-20</td>
                <td>50</td>
                <td>500</td>
                <td>8 000</td>
                <td>2,0</td>
                <td>10</td>
              </tr>

              <tr>
                <th>KO MAXI 20 / 55 </th>
                <td>55</td>
                <td>8-20</td>
                <td>50</td>
                <td>400</td>
                <td>6 400</td>
                <td>1,5</td>
                <td>12,8</td>
              </tr>

              <tr>
                <th>KO MAXI 20 / 60</th>
                <td>60</td>
                <td>8-20</td>
                <td>50</td>
                <td>400</td>
                <td>4 800</td>
                <td>1,7</td>
                <td>13,6</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={styy.table1}>
        <h2 id="dts">DUAL Track Spacer - length 2,0 m</h2>
        <IMG img1="dts1.jpg" img2="dts2.jpg" />
        <div className={styy.table}>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Height (mm)</th>
                <th>Pack size - bundle (m)</th>
                <th>Pack size - pallet (m)</th>
                <th>Bundle (kg) </th>
                <th>Pallet (kg)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>DUAL 20</th>
                <td>20</td>
                <td>100</td>
                <td>4800</td>
                <td>9,8</td>
                <td>470</td>
              </tr>

              <tr>
                <th>DUAL 25</th>
                <td>25</td>
                <td>100</td>
                <td>4200</td>
                <td>10,6</td>
                <td>446</td>
              </tr>

              <tr>
                <th>DUAL 30</th>
                <td>30</td>
                <td>100</td>
                <td>3600</td>
                <td>11,5</td>
                <td>414</td>
              </tr>
              <tr>
                <th>DUAL 35</th>
                <td>35</td>
                <td>60</td>
                <td>2520 (2940)</td>
                <td>8,9</td>
                <td>374</td>
              </tr>
              <tr>
                <th>DUAL 40</th>
                <td>40</td>
                <td>60</td>
                <td>2520</td>
                <td>10,2</td>
                <td>429</td>
              </tr>

              <tr>
                <th>DUAL 50</th>
                <td>50</td>
                <td>60</td>
                <td>1440</td>
                <td>12,5</td>
                <td>300</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={styy.table1}>
        <h2 id="ts">Track Spacer DL – length 2,0 m</h2>
        <IMG img1="tsdl1.jpg" img2="tsdl2.jpg" />
        <div className={styy.table}>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Height (mm)</th>
                <th>Pack size - bundle (m)</th>
                <th>Pack size - pallet (m)</th>
                <th>Bundle (kg) </th>
                <th>Pallet (kg)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>DL 15</th>
                <td>20</td>
                <td>100</td>
                <td>4800</td>
                <td>9,8</td>
                <td>470</td>
              </tr>

              <tr>
                <th>DL 20</th>
                <td>25</td>
                <td>100</td>
                <td>4200</td>
                <td>10,6</td>
                <td>446</td>
              </tr>

              <tr>
                <th>DUAL 30</th>
                <td>30</td>
                <td>100</td>
                <td>3600</td>
                <td>11,5</td>
                <td>414</td>
              </tr>
              <tr>
                <th>DUAL 35</th>
                <td>35</td>
                <td>60</td>
                <td>2520 (2940)</td>
                <td>8,9</td>
                <td>374</td>
              </tr>
              <tr>
                <th>DUAL 40</th>
                <td>40</td>
                <td>60</td>
                <td>2520</td>
                <td>10,2</td>
                <td>429</td>
              </tr>

              <tr>
                <th>DUAL 50</th>
                <td>50</td>
                <td>60</td>
                <td>1440</td>
                <td>12,5</td>
                <td>300</td>
              </tr>
              <tr>
                <th>DUAL 50</th>
                <td>50</td>
                <td>60</td>
                <td>1440</td>
                <td>12,5</td>
                <td>300</td>
              </tr>
              <tr>
                <th>DUAL 50</th>
                <td>50</td>
                <td>60</td>
                <td>1440</td>
                <td>12,5</td>
                <td>300</td>
              </tr>
              <tr>
                <th>DUAL 50</th>
                <td>50</td>
                <td>60</td>
                <td>1440</td>
                <td>12,5</td>
                <td>300</td>
              </tr>
              <tr>
                <th>DUAL 50</th>
                <td>50</td>
                <td>60</td>
                <td>1440</td>
                <td>12,5</td>
                <td>300</td>
              </tr>
              <tr>
                <th>DUAL 50</th>
                <td>50</td>
                <td>60</td>
                <td>1440</td>
                <td>12,5</td>
                <td>300</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={styy.table1}>
        <h2 id="tsdlv">Track spacer with closed sides DLV – length 2,0m</h2>

        <IMG img1="tsdlv1.jpg" img2="tsdl2.jpg" />
      </div>
      <div className={styy.table1}>
        <h2 id="cepd">Chamfer edge profiles D – length 2,5 m</h2>
        <IMG img1="cepd1.jpg" img2="cepd2.jpg" />
      </div>
      <div className={styy.table1}>
        <h2 id="cepdfv">
          Chamfer edge profiles with nailing flange DFV full - length 2,5 m
        </h2>
        <IMG img1="cepdfv1.jpg" img2="cepdfv2.jpg" />
      </div>
      <div className={styy.table1}>
        <h2 id="cepdfh">
          Chamfer edge profiles with nailing flange DFH hollow –length 2,5 m
        </h2>
        <IMG img1="cepdfh1.jpg" img2="cepdfh2.jpg" img3="cepdfh3.jpg" />
      </div>
      <div className={styy.table1}>
        <h2 id="sppp">Sealing profile PP</h2>
        <IMG img1="sppp1.jpg" />
      </div>
      <div className={styy.table1}>
        <h2 id="rsdk">Ring spacer diskus DK</h2>
        <IMG img1="rsdk1.jpg" />
      </div>
      <div className={styy.table1}>
        <h2 id="rde">Rhombus DE</h2>
        <IMG img1="rde1.jpg" img2="rde2.jpg" />
      </div>
    </div>
  );
};

export default PlasSpacers;

/*

// table sample

<div className={styy.table}>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Height (mm)</th>
                <th>Pack size - bag (pcs)</th>
                <th>Bag (kg)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>BTD S - 20 </th>
                <td>20</td>
                <td>980</td>
                <td>28</td>
              </tr>
              <tr>
                <th>BTD S - 25</th>
                <td>25</td>
                <td>700</td>
                <td>25</td>
              </tr>
              <tr>
                <th>BTD S - 30</th>
                <td>30</td>
                <td>420</td>
                <td>23</td>
              </tr>
              <tr>
                <th>BTD S - 35</th>
                <td>35</td>
                <td>420</td>
                <td>26</td>
              </tr>
              <tr>
                <th>BTD S - 40</th>
                <td>40</td>
                <td>360</td>
                <td>27</td>
              </tr>
              <tr>
                <th>BTD S - 45</th>
                <td>45</td>
                <td>240</td>
                <td>22</td>
              </tr>
              <tr>
                <th>BTD S - 50</th>
                <td>50</td>
                <td>240</td>
                <td>29</td>
              </tr>
              <tr>
                <th>BTD S - 55</th>
                <td>55</td>
                <td>240</td>
                <td>29</td>
              </tr>
            </tbody>
          </table>
        </div>


*/

// image sample
// <IMG img1="gray.jpg" img2="gray.jpg" />
