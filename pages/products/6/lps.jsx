import styy from "../../../styles/generalPage.module.scss";
import sty from "./pvcsheets.module.scss";

import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import ImageBlowUp from "../../../components/ImageBlowUp";
import { useState } from "react";

const PcStrands = () => {
  const { t } = useTranslation();
  const IMG = ({ img1 = null, img2 = null, img3 = null }) => {
    const size = 80;

    const [isClicked, setisClicked] = useState(false);
    const [clickedImg, setclickedImg] = useState(null);

    const clickHandler = (img) => {
      setisClicked(!isClicked);
      setclickedImg(img);
    };

    return (
      <>
        <div
          className={sty.images}
          onClick={() => {
            if (isClicked) setisClicked(false);
          }}
        >
          <Image
            alt="image"
            src={`/assets/images/products/${img1}`}
            width={size}
            height={size}
            onClick={() => {
              clickHandler(img1);
            }}
          />
          {img2 && (
            <Image
              alt="image"
              src={`/assets/images/products/${img2}`}
              width={size}
              height={size}
              onClick={() => {
                clickHandler(img2);
              }}
            />
          )}
          {img3 && (
            <Image
              alt="image"
              src={`/assets/images/products/${img3}`}
              width={size}
              height={size}
              onClick={() => {
                clickHandler(img3);
              }}
            />
          )}
          {isClicked && <ImageBlowUp img={clickedImg} />}
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
                  <th>Dimensions(mm)</th>
                  <th>Bag(pcs)</th>
                  <th>Pallet(pcs)</th>
                  <th>Bag(kg)</th>
                  <th>Pallet(kg)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>UP 70 x 70 x 2</th>
                  <td>2</td>
                  <td>70 x 70</td>
                  <td>1000</td>
                  <td>40 000</td>
                  <td>9,6</td>
                  <td>384</td>
                </tr>

                <tr>
                  <th>UP 70 x 70 x 3</th>
                  <td>3</td>
                  <td>70 x 70</td>
                  <td>1000</td>
                  <td>40 000</td>
                  <td>14,4</td>
                  <td>576</td>
                </tr>

                <tr>
                  <th>UP 70 x 70 x 4</th>
                  <td>4</td>
                  <td>70 x 70</td>
                  <td>500</td>
                  <td>20 000</td>
                  <td>9,6</td>
                  <td>384</td>
                </tr>
                <tr>
                  <th>UP 70 x 70 x 5</th>
                  <td>5</td>
                  <td>70 x 70</td>
                  <td>500</td>
                  <td>20 000</td>
                  <td>12,0</td>
                  <td>480</td>
                </tr>
                <tr>
                  <th>UP 70 x 70 x 6</th>
                  <td>6</td>
                  <td>70 x 70</td>
                  <td>500</td>
                  <td>20 000</td>
                  <td>14,4</td>
                  <td>576</td>
                </tr>

                <tr>
                  <th>UP 70 x 70 x 7</th>
                  <td>7</td>
                  <td>70 x 70</td>
                  <td>500</td>
                  <td>20 000</td>
                  <td>16,8</td>
                  <td>672</td>
                </tr>

                <tr>
                  <th>UP 70 x 70 x 8</th>
                  <td>8</td>
                  <td>70 x 70</td>
                  <td>250</td>
                  <td>10 000</td>
                  <td>9,6</td>
                  <td>384</td>
                </tr>
                <tr>
                  <th>UP 70 x 70 x 9</th>
                  <td>9</td>
                  <td>70 x 70</td>
                  <td>250</td>
                  <td>10 000</td>
                  <td>10,8</td>
                  <td>432</td>
                </tr>

                <tr>
                  <th>UP 70 x 70 x 10</th>
                  <td>10</td>
                  <td>70 x 70</td>
                  <td>250</td>
                  <td>10 000</td>
                  <td>12,0</td>
                  <td>480</td>
                </tr>
                <tr>
                  <th>UP 70 x 70 x 12</th>
                  <td>12</td>
                  <td>70 x 70</td>
                  <td>200</td>
                  <td>8 000</td>
                  <td>11,5</td>
                  <td>460</td>
                </tr>
                <tr>
                  <th>UP 70 x 70 x 15</th>
                  <td>15</td>
                  <td>70 x 70</td>
                  <td>200</td>
                  <td>8 000</td>
                  <td>14,4</td>
                  <td>576</td>
                </tr>
                <tr>
                  <th>UP 70 x 70 x 20</th>
                  <td>20</td>
                  <td>70 x 70</td>
                  <td>150</td>
                  <td>6 000</td>
                  <td>14,4</td>
                  <td>576</td>
                </tr>
                <tr>
                  <th>UP 70 x 70 x 25</th>
                  <td>25</td>
                  <td>70 x 70</td>
                  <td>100</td>
                  <td>3 000</td>
                  <td>12,0</td>
                  <td>360</td>
                </tr>

                <tr>
                  <th>UP 70 x 70 x 30</th>
                  <td>30</td>
                  <td>70 x 70</td>
                  <td>100</td>
                  <td>3 000</td>
                  <td>14,4</td>
                  <td>432</td>
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
                  <th>Dimensions(mm)</th>
                  <th>Bag(pcs)</th>
                  <th>Pallet(pcs)</th>
                  <th>Bag(kg)</th>
                  <th>Pallet(kg)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>UPV 2</th>
                  <td>2</td>
                  <td>70 x 70 / slot width 22</td>
                  <td>250</td>
                  <td>40 000</td>
                  <td>1,9</td>
                  <td>190</td>
                </tr>

                <tr>
                  <th>UPV 3</th>
                  <td>3</td>
                  <td>70 x 70 / slot width 22</td>
                  <td>250</td>
                  <td>40 000</td>
                  <td>2,9</td>
                  <td>290</td>
                </tr>

                <tr>
                  <th>UPV 4</th>
                  <td>4</td>
                  <td>70 x 70 / slot width 22</td>
                  <td>125</td>
                  <td>20 000</td>
                  <td>1,9</td>
                  <td>304</td>
                </tr>
                <tr>
                  <th>UPV 5</th>
                  <td>5</td>
                  <td>70 x 70 / slot width 22</td>
                  <td>125</td>
                  <td>20 000</td>
                  <td>2,4</td>
                  <td>384</td>
                </tr>

                <tr>
                  <th>UPV 6</th>
                  <td>6</td>
                  <td>70 x 70 / slot width 22</td>
                  <td>125</td>
                  <td>20 000</td>
                  <td>2,9</td>
                  <td>232</td>
                </tr>

                <tr>
                  <th>UPV 7</th>
                  <td>7</td>
                  <td>70 x 70 / slot width 22</td>
                  <td>125</td>
                  <td>20 000</td>
                  <td>3,4</td>
                  <td>272</td>
                </tr>

                <tr>
                  <th>UPV 8</th>
                  <td>8</td>
                  <td>70 x 70 / slot width 22</td>
                  <td>125</td>
                  <td>10 000</td>
                  <td>3,9</td>
                  <td>234</td>
                </tr>
                <tr>
                  <th>UPV 9</th>
                  <td>9</td>
                  <td>70 x 70 / slot width 22</td>
                  <td>125</td>
                  <td>10 000</td>
                  <td>4,4</td>
                  <td>264</td>
                </tr>

                <tr>
                  <th>UPV 10</th>
                  <td>10</td>
                  <td>70 x 70 / slot width 22</td>
                  <td>125</td>
                  <td>10 000</td>
                  <td>4,8</td>
                  <td>288</td>
                </tr>

                <tr>
                  <th>UPV 12</th>
                  <td>12</td>
                  <td>70 x 70 / slot width 22</td>
                  <td>50</td>
                  <td>8 000</td>
                  <td>2,3</td>
                  <td>230</td>
                </tr>
                <tr>
                  <th>UPV 15</th>
                  <td>15</td>
                  <td>70 x 70 / slot width 22</td>
                  <td>50</td>
                  <td>8 000</td>
                  <td>2,9</td>
                  <td>290</td>
                </tr>

                <tr>
                  <th>UPV 20</th>
                  <td>20</td>
                  <td>70 x 70 / slot width 22</td>
                  <td>50</td>
                  <td>6 000</td>
                  <td>3,8</td>
                  <td>304</td>
                </tr>

                <tr>
                  <th>UPV 25</th>
                  <td>25</td>
                  <td>70 x 70 / slot width 22</td>
                  <td>50</td>
                  <td>3 000</td>
                  <td>4,8</td>
                  <td>192</td>
                </tr>

                <tr>
                  <th>UPV 30</th>
                  <td>30</td>
                  <td>70 x 70 / slot width 22</td>
                  <td>50</td>
                  <td>3 000</td>
                  <td>5,8</td>
                  <td>232</td>
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
                  <th>Concrete cover(mm)</th>
                  <th>Dimensions (mm) / Color</th>
                  <th>Bag(pcs)</th>
                  <th>Pallet(pcs)</th>
                  <th>Bag(kg)</th>
                  <th>Pallet(kg)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>UPD 2</th>
                  <td>2</td>
                  <td>50 x 70 / blue</td>
                  <td>500</td>
                  <td>30 000</td>
                  <td>2,0</td>
                  <td>120</td>
                </tr>

                <tr>
                  <th>UPD 3</th>
                  <td>3</td>
                  <td>50 x 70 / red</td>
                  <td>500</td>
                  <td>25 000</td>
                  <td>3,0</td>
                  <td>150</td>
                </tr>
                <tr>
                  <th>UPD 5</th>
                  <td>5</td>
                  <td>50 x 70 / black</td>
                  <td>500</td>
                  <td>25 000</td>
                  <td>5,0</td>
                  <td>200</td>
                </tr>
                <tr>
                  <th>UPD 10</th>
                  <td>10</td>
                  <td>50 x 70 / black</td>
                  <td>500</td>
                  <td>20 000</td>
                  <td>10,0</td>
                  <td>400</td>
                </tr>
                <tr>
                  <th>UPD 20</th>
                  <td>20</td>
                  <td>50 x 70 / black</td>
                  <td>250</td>
                  <td>10 000</td>
                  <td>10,0</td>
                  <td>400</td>
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
                  <th>Dimensions (mm)</th>
                  <th>Pack size - box (pcs)</th>
                  <th>Pallet (pcs)</th>
                  <th>Box (kg)</th>
                  <th>Pallet (kg)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>UPP</th>
                  <td>170 x 63</td>
                  <td>250</td>
                  <td>10 000</td>
                  <td>13,0</td>
                  <td>520</td>
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
                  <th>Dimensions (mm)</th>
                  <th>Box (pcs)</th>
                  <th>Pallet (pcs)</th>
                  <th>Box (kg)</th>
                  <th>Pallet (kg)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>PK 70 30 10</th>
                  <td>70 x 30 x 10</td>
                  <td>500</td>
                  <td>32 000</td>
                  <td>3,0</td>
                  <td>192</td>
                </tr>

                <tr>
                  <th>PK 85 44 17</th>
                  <td>85 x 44 x 17</td>
                  <td>200</td>
                  <td>12 800</td>
                  <td>2,8</td>
                  <td>179</td>
                </tr>

                <tr>
                  <th>PK 135 44 25</th>
                  <td>135 x 44 x 25</td>
                  <td>250</td>
                  <td>4 500</td>
                  <td>7,8</td>
                  <td>140</td>
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
                  <th>Tube diameter (mm)</th>
                  <th>Pack size - bag (pcs))</th>
                  <th>Pack (pcs)</th>
                  <th>Bag (kg)</th>
                  <th>Pack (kg)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>GZ 20</th>
                  <td>20</td>
                  <td>500</td>
                  <td>2500</td>
                  <td>1,5</td>
                  <td>8</td>
                </tr>

                <tr>
                  <th>GZ 22</th>
                  <td>22</td>
                  <td>500</td>
                  <td>2500</td>
                  <td>1,8</td>
                  <td>9</td>
                </tr>

                <tr>
                  <th>GZ 26</th>
                  <td>26</td>
                  <td>250</td>
                  <td>1000</td>
                  <td>1,3</td>
                  <td>5</td>
                </tr>
                <tr>
                  <th>GZ 32</th>
                  <td>32</td>
                  <td>125</td>
                  <td>500</td>
                  <td>2,5</td>
                  <td>10</td>
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
                  <th>Bar size dia (mm)</th>
                  <th>Pack size - pack (pcs)</th>
                  <th>Pallet (pcs)</th>
                  <th>Pack (kg) </th>
                  <th>Pallet (kg)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>OKR 06 16</th>
                  <td>6 - 16</td>
                  <td>500</td>
                  <td>25 000</td>
                  <td>5,5</td>
                  <td>275</td>
                </tr>
                <tr>
                  <th>OKR 16 32</th>
                  <td>16 - 32</td>
                  <td>250</td>
                  <td>12 500</td>
                  <td>5,5</td>
                  <td>275</td>
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
