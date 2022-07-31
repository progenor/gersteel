import styy from '../../../styles/generalPage.module.scss';

import Image from 'next/image';

import useTranslation from 'next-translate/useTranslation';

const PCwires = () => {
  let { t, lang } = useTranslation();
  return (
    <div className={styy.main_container}>
      <div className={styy.container}>
        <h1>PC Wire</h1>
        <div className={styy.image}>
          <Image
            src="/assets/images/products/gray.jpg"
            alt="7 wires"
            width={700}
            height={150}
          />
        </div>
        <div>
          <div className={styy.table1}>
            <h3>Standard wires (pr EN 10138)</h3>
            <div className={styy.table}>
              <table>
                <thead>
                  <tr>
                    <th>Nominal ø</th>
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
                    <th>4,0</th>
                    <td>12,6</td>
                    <td>98,4</td>
                    <td>1770</td>
                    <td>22,3</td>
                    <td>19,6</td>
                    <td>3,5</td>
                    <td>205</td>
                  </tr>
                  <tr>
                    <th>5,0</th>
                    <td>19,6</td>
                    <td>153,1</td>
                    <td>1770</td>
                    <td>34,7</td>
                    <td>30,5</td>
                    <td>3,5</td>
                    <td>205</td>
                  </tr>
                  <tr>
                    <th>5,0</th>
                    <td>19,6</td>
                    <td>153,1</td>
                    <td>1860</td>
                    <td>36,5</td>
                    <td>32,5</td>
                    <td>3,5</td>
                    <td>205</td>
                  </tr>
                  <tr>
                    <th>6,0</th>
                    <td>28,3</td>
                    <td>221,0</td>
                    <td>1670</td>
                    <td>47,3</td>
                    <td>41,6</td>
                    <td>3,5</td>
                    <td>205</td>
                  </tr>
                  <tr>
                    <th>6,0</th>
                    <td>28,3</td>
                    <td>221,0</td>
                    <td>1770</td>
                    <td>50,1</td>
                    <td>44,1</td>
                    <td>3,5</td>
                    <td>205</td>
                  </tr>
                  <tr>
                    <th>6,9</th>
                    <td>37,4</td>
                    <td>292,1</td>
                    <td>1670</td>
                    <td>62,5</td>
                    <td>55,0</td>
                    <td>3,5</td>
                    <td>205</td>
                  </tr>
                  <tr>
                    <th>7,0</th>
                    <td>38,5</td>
                    <td>300,7</td>
                    <td>1570</td>
                    <td>60,4</td>
                    <td>53,2</td>
                    <td>3,5</td>
                    <td>205</td>
                  </tr>
                  <tr>
                    <th>7,0</th>
                    <td>38,5</td>
                    <td>300,7</td>
                    <td>1670</td>
                    <td>64,3</td>
                    <td>56,6</td>
                    <td>3,5</td>
                    <td>205</td>
                  </tr>
                  <tr>
                    <th>7,0</th>
                    <td>38,5</td>
                    <td>300,7</td>
                    <td>1770</td>
                    <td>68,1</td>
                    <td>59,9</td>
                    <td>3,5</td>
                    <td>205</td>
                  </tr>
                  <tr>
                    <th>7,5</th>
                    <td>44,2</td>
                    <td>345,2</td>
                    <td>1670</td>
                    <td>73,8</td>
                    <td>64,9</td>
                    <td>3,5</td>
                    <td>205</td>
                  </tr>
                  <tr>
                    <th>8,0</th>
                    <td>50,3</td>
                    <td>392,8</td>
                    <td>1570</td>
                    <td>79,0</td>
                    <td>69,5</td>
                    <td>3,5</td>
                    <td>205</td>
                  </tr>
                  <tr>
                    <th>8,0</th>
                    <td>50,3</td>
                    <td>392,8</td>
                    <td>1670</td>
                    <td>84,0</td>
                    <td>73,9</td>
                    <td>3,5</td>
                    <td>205</td>
                  </tr>
                  <tr>
                    <th>8,8</th>
                    <td>60,8</td>
                    <td>474,8</td>
                    <td>1570</td>
                    <td>95,5</td>
                    <td>83,1</td>
                    <td>3,5</td>
                    <td>205</td>
                  </tr>
                  <tr>
                    <th>9,4</th>
                    <td>69,4</td>
                    <td>542,0</td>
                    <td>1570</td>
                    <td>109,0</td>
                    <td>94,8</td>
                    <td>3,5</td>
                    <td>205</td>
                  </tr>
                  <tr>
                    <th>10,0</th>
                    <td>78,5</td>
                    <td>613,1</td>
                    <td>1570</td>
                    <td>123,0</td>
                    <td>107,0</td>
                    <td>3,5</td>
                    <td>205</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>All wires can be supplied with smoth or indented surface</p>
            <h3>Packaging</h3>
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
                      Weight <br /> mm
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Coils</th>
                    <td>1500÷1900</td>
                    <td>1900÷2350</td>
                    <td>0,500÷2,400</td>
                  </tr>
                  <tr>
                    <th>Bars</th>
                    <td colSpan={2}>up to 6 meters</td>
                    <td>0,500÷2,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3>Wire for high pressure pipes</h3>
            <div className={styy.table}>
              <table>
                <thead>
                  <tr>
                    <th>Nominal ø</th>
                    <th>CrossSectional area</th>
                    <th>Mass per metre</th>
                    <th>Tensile strenght Class A</th>
                    <th>Tensile strenght Class B</th>
                  </tr>
                  <tr>
                    <th>mm</th>
                    <th>
                      mm<sup>2</sup>
                    </th>
                    <th>g/m</th>
                    <th>MPa</th>
                    <th>MPa</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>4,00</th>
                    <td>12,6</td>
                    <td>98,4</td>
                    <td></td>
                    <td>1770</td>
                  </tr>
                  <tr>
                    <th>4,88</th>
                    <td>18,7</td>
                    <td>147,0</td>
                    <td>1530</td>
                    <td>1740</td>
                  </tr>
                  <tr>
                    <th>5,00</th>
                    <td>19,6</td>
                    <td>153,1</td>
                    <td></td>
                    <td>1770</td>
                  </tr>
                  <tr>
                    <th>6,00</th>
                    <td>28,3</td>
                    <td>221,0</td>
                    <td></td>
                    <td>1670</td>
                  </tr>
                  <tr>
                    <th>6,35</th>
                    <td>31,6</td>
                    <td>248,0</td>
                    <td>1450</td>
                    <td>1650</td>
                  </tr>
                  <tr>
                    <th>7,00</th>
                    <td>38,5</td>
                    <td>300,7</td>
                    <td></td>
                    <td>1620</td>
                  </tr>
                  <tr>
                    <th>7,92</th>
                    <td>49,2</td>
                    <td>387,0</td>
                    <td>1390</td>
                    <td>1520</td>
                  </tr>
                  <tr>
                    <th>7,92</th>
                    <td>49,2</td>
                    <td>387,0</td>
                    <td>1390</td>
                    <td>1520</td>
                  </tr>
                  <tr>
                    <th>8,00</th>
                    <td>50,3</td>
                    <td>392,8</td>
                    <td></td>
                    <td>1520</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3>Packaging</h3>
            <div className={styy.table}>
              <table>
                <thead>
                  <tr>
                    <th>Internal ø</th>
                    <th>External ø</th>
                    <th>Width</th>
                    <th>Weight</th>
                  </tr>
                  <tr>
                    <th>mm</th>
                    <th>mm</th>
                    <th>mm</th>
                    <th>t</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>580</th>
                    <td>800÷1000</td>
                    <td>750</td>
                    <td>0,800÷2,400</td>
                  </tr>
                  <tr>
                    <th>750</th>
                    <td>900÷1300</td>
                    <td>600÷750</td>
                    <td>0,800÷2,400</td>
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

export default PCwires;
