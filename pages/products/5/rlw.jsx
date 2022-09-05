import styy from "../../../styles/generalPage.module.scss";

import Image from "next/image";

import useTranslation from "next-translate/useTranslation";
const Rlw = () => {
  const { t } = useTranslation("product5");

  return (
    <div className={styy.main_container}>
      <div className={styy.container}>
        <div>
          <h1>{t("common:roundLongitudinallyWelded")}</h1>
          <h2>{t("type711")}</h2>
          <div style={{ display: "flex", gap: "2rem" }}>
            <Image
              alt="round"
              src="/assets/images/products/rlw.jpg"
              width="450"
              height="400"
            />
            <Image
              alt="round"
              src="/assets/images/products/rlw1.jpg"
              width="800"
              height="400"
            />
          </div>
        </div>
        <div>
          <h3>{t("round")}</h3>
          <p>{t("rlw_round_desc")}</p>
          <h3>{t("design")}</h3>
          <p>{t("rlw_design_desc1")}</p>

          <h3>{t("material")}</h3>
          <p>{t("rlw_material_desc")}</p>
          <h3>{t("delivery")}</h3>
          <p>{t("rlw_delivery_desc1")}</p>
          <p>{t("rlw_delivery_desc2")}</p>
          <p>{t("rlw_delivery_desc3")}</p>
        </div>
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
  );
};

export default Rlw;
