import styy from "../../../styles/generalPage.module.scss";
import sty from "./pcstrands.module.scss";

const PcStrands = () => {
  return (
    <div className={styy.main_container}>
      <div className={styy.container}>
        <div className={sty.cont}>
          <h1>PC Strands</h1>
          <div className={sty.types}>
            <h2>Types:</h2>
            <ul>
              <li>
                <a href="#strand7">7 Strand</a>
              </li>
              <li>
                <a href="#strand3">3 Strand</a>
              </li>
            </ul>
          </div>
          <div className={sty.st1}>
            <h2 id="strand7">7 Strands</h2>
            <h3>Standard Strands (pr EN 10138)</h3>
            <table>
              <thead>
                <tr className={sty.st1main}>
                  <th colSpan={2}>Nominal ø</th>
                  <th>CrossSectional area</th>
                  <th>Mass per metre</th>
                  <th>Tensile strenght</th>
                  <th>Characteristic value of maximum force</th>
                  <th>Characteristic value of 0,1% proof force</th>
                  <th>Elongation at maximim force Agt</th>
                  <th>Modulus of elasticity</th>
                </tr>
                <tr className={sty.st1main}>
                  <th>in</th>
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
                  <th>3/8</th>
                  <td>9,3</td>
                  <td>52,0</td>
                  <td>406,1</td>
                  <td>1860</td>
                  <td>96,7</td>
                  <td>85,1</td>
                  <td>3,5</td>
                  <td>195</td>
                </tr>
                <tr>
                  <th>1/2</th>
                  <td>12,5</td>
                  <td>93,0</td>
                  <td>726,3</td>
                  <td>1860</td>
                  <td>173,0</td>
                  <td>152,0</td>
                  <td>3,5</td>
                  <td>195</td>
                </tr>
                <tr>
                  <th>1/2S</th>
                  <td>12,9</td>
                  <td>100,0</td>
                  <td>781,0</td>
                  <td>1860</td>
                  <td>186,0</td>
                  <td>164,0</td>
                  <td>3,5</td>
                  <td>195</td>
                </tr>
                <tr>
                  <th>6/10</th>
                  <td>15,2</td>
                  <td>139,0</td>
                  <td>1086,0</td>
                  <td>1860</td>
                  <td>259,0</td>
                  <td>228,0</td>
                  <td>3,5</td>
                  <td>195</td>
                </tr>
                <tr>
                  <th>6/10S</th>
                  <td>15,7</td>
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
          <div>
            <h2 id="strand3">3 Strands</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PcStrands;
