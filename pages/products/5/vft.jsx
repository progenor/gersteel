import styy from "../../../styles/generalPage.module.scss";

import Image from "next/image";

import useTranslation from "next-translate/useTranslation";
const Vft = () => {
  const { t } = useTranslation("product5");

  return (
    <div className={styy.main_container}>
      <div className={styy.container}>
        <div>
          <h1>{t("common:voidFormingTubess")}</h1>
          <h2>{t("applications") + ":"}</h2>
          <h3>{t("economical")}</h3>
          <p>{t("economical_desc")}</p>
          <h3>{t("advantage") + ":"}</h3>
          <ul>
            <li>{t("vft_a_1")}</li>
            <li>{t("vft_a_2")}</li>
            <li>{t("vft_a_3")}</li>
            <li>{t("vft_a_4")}</li>
          </ul>
          <Image
            alt="round"
            src="/assets/images/products/vft.jpg"
            width="450"
            height="400"
          />
          <div className={styy.types}>
            <h2>{t("common:types")}</h2>
            <ul>
              <li>
                <a href="#vft1">{t("vft_pt")}</a>
              </li>
              <li>
                <a href="#vft2">{t("vft_bs")}</a>
              </li>
            </ul>
          </div>
        </div>
        <div id="vft1">
          <h2>{t("vft_pt")}</h2>
          <p>{t("vft_pt_desc")}</p>
          <Image
            alt="round"
            src="/assets/images/products/vft1.jpg"
            width="450"
            height="400"
          />
          <br />
          <Image
            alt="round"
            src="/assets/images/products/vft2.jpg"
            width="650"
            height="400"
          />
          <h3>{t("material")}</h3>
          <p>{t("pt_material_desc1")}</p>
          <p>{t("pt_material_desc2")}</p>
          <h3>{t("delivery")}</h3>
          <p>{t("pt_delivery_desc1")}</p>
          <p>{t("pt_delivery_desc2")}</p>
          <p>{t("pt_delivery_desc3")}</p>
          <div className={styy.table1}>
            <div className={styy.table}>
              <table>
                <thead>
                  <tr>
                    <th>DN</th>
                    <th colSpan={3}>Inside-/ Outside dimensions</th>
                    <th>Profil height</th>
                    <th>Weight</th>
                  </tr>

                  <tr>
                    <th>d1 in mm</th>
                    <th>d3</th>
                    <th>d2</th>
                    <th>Tolerances</th>
                    <th>hp</th>
                    <th>kg/m </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>400</th>
                    <td>384</td>
                    <td>405</td>
                    <td>± 2,5</td>
                    <td>8,0</td>
                    <td>4,56</td>
                  </tr>
                  <tr>
                    <th>450</th>
                    <td>434</td>
                    <td>455</td>
                    <td>± 2,5</td>
                    <td>8,0</td>
                    <td>5,59</td>
                  </tr>
                  <tr>
                    <th>500</th>
                    <td>484</td>
                    <td>505</td>
                    <td>± 2,5</td>
                    <td>8,0</td>
                    <td>6,22</td>
                  </tr>
                  <tr>
                    <th>550</th>
                    <td>534</td>
                    <td>555</td>
                    <td>± 2,5</td>
                    <td>8,0</td>
                    <td>6,95</td>
                  </tr>
                  <tr>
                    <th>600</th>
                    <td>584</td>
                    <td>605</td>
                    <td>± 2,5</td>
                    <td>8,0</td>
                    <td>7,48</td>
                  </tr>
                  <tr>
                    <th>650</th>
                    <td>634</td>
                    <td>655</td>
                    <td>± 2,5</td>
                    <td>8,0</td>
                    <td>8,12</td>
                  </tr>
                  <tr>
                    <th>700</th>
                    <td>685</td>
                    <td>706</td>
                    <td>± 2,5</td>
                    <td>8,0</td>
                    <td>10,99</td>
                  </tr>
                  <tr>
                    <th>750</th>
                    <td>735</td>
                    <td>756</td>
                    <td>± 2,5</td>
                    <td>8,0</td>
                    <td>11,78</td>
                  </tr>
                  <tr>
                    <th>800</th>
                    <td>785</td>
                    <td>806</td>
                    <td>± 2,5</td>
                    <td>8,0</td>
                    <td>12,58</td>
                  </tr>
                  <tr>
                    <th>850</th>
                    <td>835</td>
                    <td>856</td>
                    <td>± 2,5</td>
                    <td>8,0</td>
                    <td>13,37</td>
                  </tr>
                  <tr>
                    <th>900</th>
                    <td>885</td>
                    <td>906</td>
                    <td>± 2,5</td>
                    <td>8,0</td>
                    <td>14,17</td>
                  </tr>
                  <tr>
                    <th>950</th>
                    <td>935</td>
                    <td>956</td>
                    <td>± 2,5</td>
                    <td>8,0</td>
                    <td>19,10</td>
                  </tr>
                  <tr>
                    <th>1000</th>
                    <td>985</td>
                    <td>1006</td>
                    <td>± 2,5</td>
                    <td>8,0</td>
                    <td>20,10</td>
                  </tr>
                  <tr>
                    <th>1050</th>
                    <td>1035</td>
                    <td>1056</td>
                    <td>± 3,5</td>
                    <td>8,0</td>
                    <td>22,30</td>
                  </tr>
                  <tr>
                    <th>1100</th>
                    <td>1086</td>
                    <td>1108</td>
                    <td>± 3,5</td>
                    <td>8,0</td>
                    <td>24,36</td>
                  </tr>
                  <tr>
                    <th>1150</th>
                    <td>1134</td>
                    <td>1158</td>
                    <td>± 3,5</td>
                    <td>8,0</td>
                    <td>25,48</td>
                  </tr>
                  <tr>
                    <th>1200</th>
                    <td>1186</td>
                    <td>1208</td>
                    <td>± 3,5</td>
                    <td>8,0</td>
                    <td>26,59</td>
                  </tr>
                  <tr>
                    <th>1250</th>
                    <td>1234</td>
                    <td>1258</td>
                    <td>± 3,5</td>
                    <td>8,0</td>
                    <td>27,71</td>
                  </tr>
                  <tr>
                    <th>1350</th>
                    <td>1334</td>
                    <td>1358</td>
                    <td>± 4,0</td>
                    <td>8,0</td>
                    <td>30,00</td>
                  </tr>
                  <tr>
                    <th>1500</th>
                    <td>1486</td>
                    <td>1508</td>
                    <td>± 4,0</td>
                    <td>8,0</td>
                    <td>34,10</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div id="vft2">
          <h2>{t("vft_bs")}</h2>
          <p>{t("vft_bs_desc")}</p>
          <Image
            alt="round"
            src="/assets/images/products/vft3.jpg"
            width="450"
            height="400"
          />
          <br />
          <h3>{t("advantage") + ":"}</h3>
          <ul>
            <li>{t("vft_bs_a_1")}</li>
            <li>{t("vft_bs_a_2")}</li>
            <li>{t("vft_bs_a_3")}</li>
            <li>{t("vft_bs_a_4")}</li>
          </ul>
          <h3>{t("material")}</h3>
          <p>{t("bs_material_desc1")}</p>
          <p>{t("bs_material_desc2")}</p>
          <p>{t("bs_material_desc3")}</p>
          <h3>{t("delivery")}</h3>
          <p>{t("bs_delivery_desc1")}</p>
          <div className={styy.table1}>
            <div className={styy.table}>
              <table>
                <thead>
                  <tr>
                    <th>DN</th>
                    <th colSpan={3}>Inside-/ Outside dimensions</th>
                    <th>Profil height</th>
                    <th>Weight</th>
                  </tr>
                  <tr>
                    <th></th>
                    <th>d1</th>
                    <th>d2</th>
                    <th>Tolerances</th>
                    <th>hp</th>
                    <th>kg/m ± 10%</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>200</th>
                    <td>200</td>
                    <td>208</td>
                    <td>± 1,0</td>
                    <td>3,8</td>
                    <td>1,70</td>
                  </tr>
                  <tr>
                    <th>250</th>
                    <td>250</td>
                    <td>260</td>
                    <td>± 2,0</td>
                    <td>4,8</td>
                    <td>2,24</td>
                  </tr>
                  <tr>
                    <th>290</th>
                    <td>290</td>
                    <td>300</td>
                    <td>± 2,0</td>
                    <td>4,8</td>
                    <td>2,50</td>
                  </tr>
                  <tr>
                    <th>300</th>
                    <td>300</td>
                    <td>310</td>
                    <td>± 2,0</td>
                    <td>4,8</td>
                    <td>2,68</td>
                  </tr>
                  <tr>
                    <th>310</th>
                    <td>310</td>
                    <td>320</td>
                    <td>± 2,0</td>
                    <td>4,8</td>
                    <td>2,80</td>
                  </tr>
                  <tr>
                    <th>350</th>
                    <td>350</td>
                    <td>360</td>
                    <td>± 2,0</td>
                    <td>4,8</td>
                    <td>3,11</td>
                  </tr>
                  <tr>
                    <th>400</th>
                    <td>400</td>
                    <td>410</td>
                    <td>± 2,0</td>
                    <td>4,8</td>
                    <td>3,55</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vft;
