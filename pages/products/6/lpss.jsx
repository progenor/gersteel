import Image from "next/image";
import styy from "../../../styles/generalPage.module.scss";
import sty from "./pvcsheets.module.scss";

import useTranslation from "next-translate/useTranslation";

const Lpss = () => {
  const { t } = useTranslation("product6");

  const size = 80;
  return (
    <div className={styy.main_container}>
      <div className={styy.container}>
        <h1>{t("common:levelingPlasticSpacers")}</h1>
        <div className={styy.types}>
          <h2>{t("common:types")}</h2>
          <ul>
            <li>
              <a href="#m">M </a>
            </li>
            <li>
              <a href="#mc">MC</a>
            </li>
            <li>
              <a href="#mr">MR</a>
            </li>
            <li>
              <a href="#mq">MQ</a>
            </li>
            <li>
              <a href="#me">ME</a>
            </li>
          </ul>
        </div>
        <div className={styy.table1}>
          <h2 id="m">M</h2>
          <Image
            alt="image"
            src="/assets/images/products/lpss_m.png"
            width={size}
            height={size}
          />
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
              </tbody>
            </table>
          </div>
        </div>
        <div className={styy.table1}>
          <h2 id="mc">MC</h2>
          <Image
            alt="image"
            src="/assets/images/products/lpss_mc.png"
            width={size}
            height={size}
          />
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
              </tbody>
            </table>
          </div>
        </div>
        <div className={styy.table1}>
          <h2 id="mr">MR</h2>
          <Image
            alt="image"
            src="/assets/images/products/lpss_mr.png"
            width={size}
            height={size}
          />
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
              </tbody>
            </table>
          </div>
        </div>
        <div className={styy.table1}>
          <h2 id="mq">MQ</h2>
          <Image
            alt="image"
            src="/assets/images/products/lpss_mq.png"
            width={size}
            height={size}
          />
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
              </tbody>
            </table>
          </div>
        </div>
        <div className={styy.table1}>
          <h2 id="me">ME</h2>
          <Image
            alt="image"
            src="/assets/images/products/lpss_me.png"
            width={size}
            height={size}
          />
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lpss;
