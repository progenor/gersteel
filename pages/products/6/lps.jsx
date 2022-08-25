import styy from "../../../styles/generalPage.module.scss";
import sty from "./pvcsheets.module.scss";

import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

const PcStrands = () => {
  const { t } = useTranslation();
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
    <div className={styy.main_container}>
      <div className={styy.container}>
        <h1>{t("common:levelingPlasticSpacers")}</h1>
        <div className={styy.types}>
          <h2>{t("common:types")}</h2>
          <ul>
            <li>
              <a href="#psp">Plain Shim pads UP 70 x 70 mm</a>
            </li>
            <li>
              <a href="#hsp">Horseshoe shim pads UPV</a>
            </li>
            <li>
              <a href="#hp">Hole Pads UPD</a>
            </li>
            <li>
              <a href="#pp">Panel pads UPP</a>
            </li>
            <li>
              <a href="#pw">Plastic wedges PK</a>
            </li>
            <li>
              <a href="#rs">Rubber stoppers GZ</a>
            </li>
            <li>
              <a href="#pc">Protection caps OKR</a>
            </li>
          </ul>
        </div>
        <div className={styy.table1}>
          <h2 id="psp">Plain Shim pads UP 70 x 70 mm</h2>
          <IMG img1="psp1.jpg" img2="psp2.jpg" />
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
                </tr>

                <tr>
                  <th>KO 12/20 </th>
                  <td>20</td>
                  <td>6-12</td>
                  <td>500</td>
                  <td>5000</td>
                  <td>100 000</td>
                  <td>1,7</td>
                </tr>

                <tr>
                  <th>KO 12/25 </th>
                  <td>25</td>
                  <td>6-12</td>
                  <td>500</td>
                  <td>4000</td>
                  <td>48 000</td>
                  <td>2,8</td>
                </tr>
                <tr>
                  <th>KO 12/30</th>
                  <td>30</td>
                  <td>6-12</td>
                  <td>500</td>
                  <td>2500</td>
                  <td>35 000</td>
                  <td>3,9</td>
                </tr>

                <tr>
                  <th>KO 12/35 </th>
                  <td>35</td>
                  <td>6-12</td>
                  <td>200</td>
                  <td>1000</td>
                  <td>20 000</td>
                  <td>2,2</td>
                </tr>

                <tr>
                  <th>KO 12/40 </th>
                  <td>40</td>
                  <td>6-12</td>
                  <td>125</td>
                  <td>1000</td>
                  <td>20 000</td>
                  <td>2,0</td>
                </tr>

                <tr>
                  <th>KO 12/50 </th>
                  <td>50</td>
                  <td>6-14</td>
                  <td>100</td>
                  <td>500</td>
                  <td>10 000</td>
                  <td>2,2</td>
                </tr>
                <tr>
                  <th>KO 12/15 </th>
                  <td>15</td>
                  <td>6-12</td>
                  <td>1000</td>
                  <td>5000</td>
                  <td>100 000</td>
                  <td>3,4</td>
                </tr>

                <tr>
                  <th>KO 12/20 </th>
                  <td>20</td>
                  <td>6-12</td>
                  <td>500</td>
                  <td>5000</td>
                  <td>100 000</td>
                  <td>1,7</td>
                </tr>

                <tr>
                  <th>KO 12/25 </th>
                  <td>25</td>
                  <td>6-12</td>
                  <td>500</td>
                  <td>4000</td>
                  <td>48 000</td>
                  <td>2,8</td>
                </tr>
                <tr>
                  <th>KO 12/30</th>
                  <td>30</td>
                  <td>6-12</td>
                  <td>500</td>
                  <td>2500</td>
                  <td>35 000</td>
                  <td>3,9</td>
                </tr>

                <tr>
                  <th>KO 12/35 </th>
                  <td>35</td>
                  <td>6-12</td>
                  <td>200</td>
                  <td>1000</td>
                  <td>20 000</td>
                  <td>2,2</td>
                </tr>

                <tr>
                  <th>KO 12/40 </th>
                  <td>40</td>
                  <td>6-12</td>
                  <td>125</td>
                  <td>1000</td>
                  <td>20 000</td>
                  <td>2,0</td>
                </tr>

                <tr>
                  <th>KO 12/50 </th>
                  <td>50</td>
                  <td>6-14</td>
                  <td>100</td>
                  <td>500</td>
                  <td>10 000</td>
                  <td>2,2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={styy.table1}>
          <h2 id="hsp">Horseshoe shim pads UPV</h2>
          <IMG img1="hsp1.jpg" img2="wspacerko2.jpg" />
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
                </tr>

                <tr>
                  <th>KO 12/20 </th>
                  <td>20</td>
                  <td>6-12</td>
                  <td>500</td>
                  <td>5000</td>
                  <td>100 000</td>
                  <td>1,7</td>
                </tr>

                <tr>
                  <th>KO 12/25 </th>
                  <td>25</td>
                  <td>6-12</td>
                  <td>500</td>
                  <td>4000</td>
                  <td>48 000</td>
                  <td>2,8</td>
                </tr>
                <tr>
                  <th>KO 12/30</th>
                  <td>30</td>
                  <td>6-12</td>
                  <td>500</td>
                  <td>2500</td>
                  <td>35 000</td>
                  <td>3,9</td>
                </tr>

                <tr>
                  <th>KO 12/35 </th>
                  <td>35</td>
                  <td>6-12</td>
                  <td>200</td>
                  <td>1000</td>
                  <td>20 000</td>
                  <td>2,2</td>
                </tr>

                <tr>
                  <th>KO 12/40 </th>
                  <td>40</td>
                  <td>6-12</td>
                  <td>125</td>
                  <td>1000</td>
                  <td>20 000</td>
                  <td>2,0</td>
                </tr>

                <tr>
                  <th>KO 12/50 </th>
                  <td>50</td>
                  <td>6-14</td>
                  <td>100</td>
                  <td>500</td>
                  <td>10 000</td>
                  <td>2,2</td>
                </tr>
                <tr>
                  <th>KO 12/15 </th>
                  <td>15</td>
                  <td>6-12</td>
                  <td>1000</td>
                  <td>5000</td>
                  <td>100 000</td>
                  <td>3,4</td>
                </tr>

                <tr>
                  <th>KO 12/20 </th>
                  <td>20</td>
                  <td>6-12</td>
                  <td>500</td>
                  <td>5000</td>
                  <td>100 000</td>
                  <td>1,7</td>
                </tr>

                <tr>
                  <th>KO 12/25 </th>
                  <td>25</td>
                  <td>6-12</td>
                  <td>500</td>
                  <td>4000</td>
                  <td>48 000</td>
                  <td>2,8</td>
                </tr>
                <tr>
                  <th>KO 12/30</th>
                  <td>30</td>
                  <td>6-12</td>
                  <td>500</td>
                  <td>2500</td>
                  <td>35 000</td>
                  <td>3,9</td>
                </tr>

                <tr>
                  <th>KO 12/35 </th>
                  <td>35</td>
                  <td>6-12</td>
                  <td>200</td>
                  <td>1000</td>
                  <td>20 000</td>
                  <td>2,2</td>
                </tr>

                <tr>
                  <th>KO 12/40 </th>
                  <td>40</td>
                  <td>6-12</td>
                  <td>125</td>
                  <td>1000</td>
                  <td>20 000</td>
                  <td>2,0</td>
                </tr>

                <tr>
                  <th>KO 12/50 </th>
                  <td>50</td>
                  <td>6-14</td>
                  <td>100</td>
                  <td>500</td>
                  <td>10 000</td>
                  <td>2,2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={styy.table1}>
          <h2 id="hp">Hole Pads UPD</h2>
          <IMG img1="hp1.jpg" />
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
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>KO 12/20 </th>
                  <td>20</td>
                  <td>6-12</td>
                  <td>500</td>
                  <td>5000</td>
                  <td>100 000</td>
                  <td>1,7</td>
                </tr>

                <tr>
                  <th>KO 12/25 </th>
                  <td>25</td>
                  <td>6-12</td>
                  <td>500</td>
                  <td>4000</td>
                  <td>48 000</td>
                  <td>2,8</td>
                </tr>
                <tr>
                  <th>KO 12/30</th>
                  <td>30</td>
                  <td>6-12</td>
                  <td>500</td>
                  <td>2500</td>
                  <td>35 000</td>
                  <td>3,9</td>
                </tr>

                <tr>
                  <th>KO 12/35 </th>
                  <td>35</td>
                  <td>6-12</td>
                  <td>200</td>
                  <td>1000</td>
                  <td>20 000</td>
                  <td>2,2</td>
                </tr>

                <tr>
                  <th>KO 12/40 </th>
                  <td>40</td>
                  <td>6-12</td>
                  <td>125</td>
                  <td>1000</td>
                  <td>20 000</td>
                  <td>2,0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={styy.table1}>
          <h2 id="pp">Panel pads UPP</h2>
          <IMG img1="pp1.jpg" img2="pp2.jpg" img3="pp3.jpg" />
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
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={styy.table1}>
          <h2 id="pw">Plastic wedges PK</h2>
          <IMG img1="pw1.jpg" />
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
                </tr>

                <tr>
                  <th>KO 12/20 </th>
                  <td>20</td>
                  <td>6-12</td>
                  <td>500</td>
                  <td>5000</td>
                  <td>100 000</td>
                </tr>

                <tr>
                  <th>KO 12/25 </th>
                  <td>25</td>
                  <td>6-12</td>
                  <td>500</td>
                  <td>4000</td>
                  <td>48 000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className={styy.table1}>
          <h2 id="rs">Rubber stoppers GZ</h2>
          <IMG img1="rs1.jpg" />
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
                </tr>

                <tr>
                  <th>KO 12/20 </th>
                  <td>20</td>
                  <td>6-12</td>
                  <td>500</td>
                  <td>5000</td>
                  <td>100 000</td>
                </tr>

                <tr>
                  <th>KO 12/25 </th>
                  <td>25</td>
                  <td>6-12</td>
                  <td>500</td>
                  <td>4000</td>
                  <td>48 000</td>
                </tr>
                <tr>
                  <th>KO 12/30</th>
                  <td>30</td>
                  <td>6-12</td>
                  <td>500</td>
                  <td>2500</td>
                  <td>35 000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={styy.table1}>
          <h2 id="pc">Protection caps OKR</h2>
          <IMG img1="pc1.jpg" img2="pc2.jpg" />
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
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>KO 12/25 </th>
                  <td>25</td>
                  <td>6-12</td>
                  <td>500</td>
                  <td>4000</td>
                  <td>48 000</td>
                </tr>
                <tr>
                  <th>KO 12/30</th>
                  <td>30</td>
                  <td>6-12</td>
                  <td>500</td>
                  <td>2500</td>
                  <td>35 000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PcStrands;
