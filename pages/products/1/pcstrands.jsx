import styy from "../../../styles/generalPage.module.scss";

import Image from "next/image";

import useTranslation from "next-translate/useTranslation";

const PcStrands = () => {
  const { t, lang } = useTranslation("product1");
  return (
    <div className={styy.main_container}>
      <div className={styy.container}>
        <div>
          <h1>{t("common:pcStrands")}</h1>
          <div className={styy.types}>
            <h2>{t("common:types")}</h2>
            <ul>
              <li>
                <a href="#strand7">{t("7st")}</a>
              </li>
              <li>
                <a href="#strand3">{t("2-3")}</a>
              </li>
            </ul>
          </div>
          <div className={styy.image}>
            <Image
              src="/assets/images/products/pc-strand_in.png"
              alt="7 wires"
              width={700}
              height={150}
            />
          </div>
          <div className={styy.table1}>
            <h2 id="strand7">{t("7st")}</h2>
            <h3>{t("pc_strands_text1")}</h3>

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
                    <th>in </th>
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
                {/* FIXME: CHECK */}
                <tbody>
                  <tr>
                    <th>9,3</th>
                    <td>3/8</td>
                    <td>52,0</td>
                    <td>406,1</td>
                    <td>1860</td>
                    <td>96,7</td>
                    <td>85,1</td>
                    <td>3,5</td>
                    <td>195</td>
                  </tr>
                  <tr>
                    <th>12,5</th>
                    <td>1/2</td>
                    <td>93,0</td>
                    <td>726,3</td>
                    <td>1860</td>
                    <td>173,0</td>
                    <td>152,0</td>
                    <td>3,5</td>
                    <td>195</td>
                  </tr>
                  <tr>
                    <th>12,9</th>
                    <td>1/2 S</td>
                    <td>100,0</td>
                    <td>781,0</td>
                    <td>1860</td>
                    <td>186,0</td>
                    <td>164,0</td>
                    <td>3,5</td>
                    <td>195</td>
                  </tr>
                  <tr>
                    <th>15,2</th>
                    <td>6/10</td>
                    <td>139,0</td>
                    <td>1086,0</td>
                    <td>1860</td>
                    <td>259,0</td>
                    <td>228,0</td>
                    <td>3,5</td>
                    <td>195</td>
                  </tr>
                  <tr>
                    <th>15,7</th>
                    <td>6/10S</td>
                    <td>150,0</td>
                    <td>1172,0</td>
                    <td>1860</td>
                    <td>279,0</td>
                    <td>246,0</td>
                    <td>3,5</td>
                    <td>195</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3>{t("specialStrands")}</h3>
            <h4>{t("compacted")}</h4>
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
            <h4>{t("zinc_coated")}</h4>
            <p>{t("allStrands")}</p>
            <h4>{t("PECoated")}</h4>
            <div className={styy.table}>
              <table>
                <thead>
                  <tr>
                    <th colSpan={2} rowSpan={2}>
                      Nominal ø
                    </th>
                    <th rowSpan={2}>CrossSectional area</th>
                    <th rowSpan={2}>Tensile strenght</th>
                    <th rowSpan={2}>Nominal sheathed ø</th>
                    <th colSpan={3}>Weight</th>
                    <th rowSpan={2}>Mass per metre A+B+C</th>
                  </tr>
                  <tr>
                    <th>Steel</th>
                    <th>Sheath</th>
                    <th>Wax or grease</th>
                  </tr>
                  <tr>
                    <th rowSpan={2}>mm</th>
                    <th rowSpan={2}>in</th>
                    <th rowSpan={2}>
                      mm<sup>2</sup>
                    </th>
                    <th rowSpan={2}>MPa</th>
                    <th rowSpan={2}>mm</th>
                    <th colSpan={3}>g/m</th>
                    <th rowSpan={2}>g/m</th>
                  </tr>
                  <tr>
                    <th>A</th>
                    <th>B</th>
                    <th>C</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>12,5</th>
                    <td>1/2</td>
                    <td>93,0</td>
                    <td>1860</td>
                    <td>16,7</td>
                    <td>726</td>
                    <td>52</td>
                    <td>35</td>
                    <td>813</td>
                  </tr>
                  <tr>
                    <th>12,9</th>
                    <td>1/2 S </td>
                    <td>100,0</td>
                    <td>1860</td>
                    <td>17,1</td>
                    <td>781</td>
                    <td>54</td>
                    <td>38</td>
                    <td>873</td>
                  </tr>
                  <tr>
                    <th>15,2</th>
                    <td>6/10</td>
                    <td>139,0</td>
                    <td>1770,0</td>
                    <td>19,5</td>
                    <td>1086</td>
                    <td>62</td>
                    <td>40</td>
                    <td>1188</td>
                  </tr>
                  <tr>
                    <th>15,2</th>
                    <td>6/10</td>
                    <td>139,0</td>
                    <td>1860,0</td>
                    <td>19,5</td>
                    <td>1086</td>
                    <td>62</td>
                    <td>40</td>
                    <td>1188</td>
                  </tr>
                  <tr>
                    <th>15,7</th>
                    <td>6/10 S</td>
                    <td>150,0</td>
                    <td>1770,0</td>
                    <td>20,0</td>
                    <td>1172</td>
                    <td>64</td>
                    <td>40</td>
                    <td>1279</td>
                  </tr>
                  <tr>
                    <th>15,7</th>
                    <td>6/10S</td>
                    <td>150,0</td>
                    <td>1860,0</td>
                    <td>20,0</td>
                    <td>1172</td>
                    <td>64</td>
                    <td>43</td>
                    <td>1279</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3>{t("common:packaging")}</h3>
            <div className={styy.table}>
              <table>
                <thead>
                  <tr>
                    <th>Weight</th>
                    <th>Internal ø</th>
                    <th>Width</th>
                    <th>External ø</th>
                  </tr>
                  <tr>
                    <th>t</th>
                    <th>mm</th>
                    <th>mm</th>
                    <th>mm</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>2</th>
                    <td>900</td>
                    <td>500</td>
                    <td>1330</td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td>900</td>
                    <td>500</td>
                    <td>1450</td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td>900</td>
                    <td>750</td>
                    <td>1200</td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td>900</td>
                    <td>750</td>
                    <td>1350</td>
                  </tr>
                  <tr>
                    <th>4</th>
                    <td>900</td>
                    <td>750</td>
                    <td>1450</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className={styy.table1}>
            <h2 id="strand3">{t("2-3")}</h2>
            <h3>{t("pc_strands_text1")}</h3>
            <div className={styy.table}>
              <table>
                <thead>
                  <tr>
                    <th colSpan={2}>Construction nominal ø</th>
                    <th>CrossSectional area</th>
                    <th>Mass per metre</th>
                    <th>Tensile strenght</th>
                    <th>Characteristic value of maximum force</th>
                    <th>Characteristic value of 0,1% proof force</th>
                    <th>Elongation at maximim force Agt</th>
                    <th>Modulus of elasticity EP</th>
                  </tr>
                  <tr>
                    <th>N &deg; x wire ø</th>
                    <th>mm</th>
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
                    <th>2x2,25</th>
                    <td>4,5</td>
                    <td>7,95</td>
                    <td>62,1</td>
                    <td>1860</td>
                    <td>14,8</td>
                    <td>13,0</td>
                    <td>3,5</td>
                    <td>195</td>
                  </tr>
                  <tr>
                    <th>3x2,25</th>
                    <td>4,85</td>
                    <td>11,9</td>
                    <td>92,9</td>
                    <td>1860</td>
                    <td>22,1</td>
                    <td>19,4</td>
                    <td>3,5</td>
                    <td>195</td>
                  </tr>
                  <tr>
                    <th>3x3,00</th>
                    <td>6,5</td>
                    <td>21,2</td>
                    <td>165,6</td>
                    <td>1860</td>
                    <td>43,5</td>
                    <td>38,3</td>
                    <td>3,5</td>
                    <td>195</td>
                  </tr>
                  <tr>
                    <th>3x3,15</th>
                    <td>6,9</td>
                    <td>23,4</td>
                    <td>182,8</td>
                    <td>1860</td>
                    <td>43,5</td>
                    <td>38,3</td>
                    <td>3,5</td>
                    <td>195</td>
                  </tr>
                  <tr>
                    <th>3x3,50</th>
                    <td>7,5</td>
                    <td>29,0</td>
                    <td>226,5</td>
                    <td>1860</td>
                    <td>53,9</td>
                    <td>47,4</td>
                    <td>3,5</td>
                    <td>195</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>{t("allStrands2")}</p>
            <h3>{t("common:packaging")}</h3>
            <div className={styy.table}>
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>
                      Internal ø <br /> mm
                    </th>
                    <th>
                      External ø <br /> mm
                    </th>
                    <th>
                      Width <br /> mm
                    </th>
                    <th>
                      Weight <br /> mm
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Large coils</th>
                    <td>750/900</td>
                    <td>1100÷1450</td>
                    <td>550/650/750</td>
                    <td>0,800÷3,500</td>
                  </tr>
                  <tr>
                    <th>Standard coils</th>
                    <td>300</td>
                    <td>700</td>
                    <td>190÷220</td>
                    <td>0,150÷0,220</td>
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

export default PcStrands;
