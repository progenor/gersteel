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
            width="450"
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
                    <th colSpan={2}>Nominal ø</th>
                    <th>CrossSectional area</th>
                    <th>Mass per metre</th>
                    <th>Tensile strenght</th>
                    <th>Characteristic value of maximum force</th>
                    <th>Characteristic value of 0,1% proof force</th>
                    <th>Elongation at maximim force Agt</th>
                    <th>Modulus of elasticity EP</th>
                  </tr>
                  <tr>
                    <th>mm</th>
                    <th>in</th>
                    <th>
                      mm<sup>2</sup>
                    </th>
                    <th>g/m</th>
                    <th>MPa</th>
                    <th>kN</th>
                    <th>kN</th>
                    <th>%</th>
                    <th>
                      kN/mm<sup>2</sup>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>15,2</th>
                    <td>6/10</td>
                    <td>165,0</td>
                    <td>1289,0</td>
                    <td>1820 G</td>
                    <td>300,0</td>
                    <td>264,0</td>
                    <td>3,5</td>
                    <td>195</td>
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
                    <th colSpan={2}>Nominal ø</th>
                    <th>CrossSectional area</th>
                    <th>Mass per metre</th>
                    <th>Tensile strenght</th>
                    <th>Characteristic value of maximum force</th>
                    <th>Characteristic value of 0,1% proof force</th>
                    <th>Elongation at maximim force Agt</th>
                    <th>Modulus of elasticity EP</th>
                  </tr>
                  <tr>
                    <th>mm</th>
                    <th>in</th>
                    <th>
                      mm<sup>2</sup>
                    </th>
                    <th>g/m</th>
                    <th>MPa</th>
                    <th>kN</th>
                    <th>kN</th>
                    <th>%</th>
                    <th>
                      kN/mm<sup>2</sup>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>15,2</th>
                    <td>6/10</td>
                    <td>165,0</td>
                    <td>1289,0</td>
                    <td>1820 G</td>
                    <td>300,0</td>
                    <td>264,0</td>
                    <td>3,5</td>
                    <td>195</td>
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
