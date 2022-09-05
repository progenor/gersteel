import styy from "../../../styles/generalPage.module.scss";

import Image from "next/image";

import useTranslation from "next-translate/useTranslation";
const Rcp = () => {
  const { t } = useTranslation("product5");

  return (
    <div className={styy.main_container}>
      <div className={styy.container}>
        <div>
          <h1>{t("common:rectengualrCavityPipes")}</h1>
          <h2>{t("type7531")}</h2>
          <div style={{ display: "flex", gap: "2rem" }}>
            <Image
              alt="round"
              src="/assets/images/products/rcp.jpg"
              width="400"
              height="400"
            />
            <Image
              alt="round"
              src="/assets/images/products/rcp1.jpg"
              width="800"
              height="400"
            />
          </div>
        </div>
        <div>
          <h3>{t("rectengular")}</h3>
          <p>{t("rectengular_desc")}</p>
          <h3>{t("design") + ":"}</h3>
          <p>{t("rcp_design_desc1")}</p>
          <h3>{t("material") + ":"}</h3>
          <p>{t("rcp_material_desc")}</p>
          <h3>{t("delivery")}</h3>
          <p>{t("rcp_delivery_desc1")}</p>
        </div>
        <div className={styy.table1}>
          <div className={styy.table}>
            <table>
              <thead>
                <tr>
                  <th>DN</th>
                  <th colSpan={3}>Inside-/ Outside dimensions</th>
                  <th>R</th>
                  <th>Profil height</th>
                  <th>Weight</th>
                </tr>
                <tr>
                  <th></th>
                  <th>A/B</th>
                  <th>a/b</th>
                  <th>Tolerances</th>
                  <th>-</th>
                  <th>hp</th>
                  <th>kg/m ± 10%</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>32 x 32</th>
                  <td>32 x 32</td>
                  <td>40 x 40</td>
                  <td>± 0,7</td>
                  <td>7</td>
                  <td>3,5</td>
                  <td>0,26</td>
                </tr>
                <tr>
                  <th>41 x 41</th>
                  <td>41 x 41</td>
                  <td>49 x 49</td>
                  <td>± 0,7</td>
                  <td>7</td>
                  <td>3,5</td>
                  <td>0,50</td>
                </tr>
                <tr>
                  <th>50 x 50</th>
                  <td>49 x 49</td>
                  <td>57 x 57</td>
                  <td>± 0,7</td>
                  <td>7</td>
                  <td>3,5</td>
                  <td>0,55</td>
                </tr>
                <tr>
                  <th>60 x 60</th>
                  <td>60 x 60</td>
                  <td>68 x 68</td>
                  <td>± 0,7</td>
                  <td>7</td>
                  <td>3,5</td>
                  <td>0,76</td>
                </tr>
                <tr>
                  <th>57 x 28</th>
                  <td>57 x 28</td>
                  <td>65 x 36</td>
                  <td>± 0,7</td>
                  <td>7</td>
                  <td>3,5</td>
                  <td>0,54</td>
                </tr>
                <tr>
                  <th>70 x 70</th>
                  <td>70 x 70</td>
                  <td>78 x 78</td>
                  <td>± 0,7</td>
                  <td>7</td>
                  <td>3,5</td>
                  <td>0,88</td>
                </tr>
                <tr>
                  <th>70 x 50</th>
                  <td>70 x 50</td>
                  <td>78 x 58</td>
                  <td>± 0,7</td>
                  <td>7</td>
                  <td>3,5</td>
                  <td>0,74</td>
                </tr>
                <tr>
                  <th>70 x 35</th>
                  <td>70 x 35</td>
                  <td>78 x 43</td>
                  <td>± 0,7</td>
                  <td>7</td>
                  <td>3,5</td>
                  <td>0,66</td>
                </tr>
                <tr>
                  <th>80 x 80</th>
                  <td>80 x 80</td>
                  <td>88 x 88</td>
                  <td>± 0,7</td>
                  <td>7</td>
                  <td>3,5</td>
                  <td>1,01</td>
                </tr>
                <tr>
                  <th>77 x 42</th>
                  <td>77 x 42</td>
                  <td>85 x 50</td>
                  <td>± 0,7</td>
                  <td>7</td>
                  <td>3,5</td>
                  <td>0,86</td>
                </tr>
                <tr>
                  <th>90 x 60</th>
                  <td>90 x 60</td>
                  <td>98 x 68</td>
                  <td>± 0,7</td>
                  <td>7</td>
                  <td>3,5</td>
                  <td>1,02</td>
                </tr>
                <tr>
                  <th>100 x 100</th>
                  <td>100 x 100</td>
                  <td>108 x 108</td>
                  <td>± 1,0</td>
                  <td>8</td>
                  <td>3,5</td>
                  <td>1,15</td>
                </tr>
                <tr>
                  <th>100 x 63</th>
                  <td>100 x 63</td>
                  <td>108 x 71</td>
                  <td>± 1,0</td>
                  <td>8</td>
                  <td>3,5</td>
                  <td>1,11</td>
                </tr>
                <tr>
                  <th>102 x 52</th>
                  <td>102 x 52</td>
                  <td>110 x 60</td>
                  <td>± 1,0</td>
                  <td>8</td>
                  <td>3,5</td>
                  <td>0,98</td>
                </tr>
                <tr>
                  <th>130 x 130</th>
                  <td>130 x 130</td>
                  <td>138 x 138</td>
                  <td>± 1,0</td>
                  <td>8</td>
                  <td>3,5</td>
                  <td>1,65</td>
                </tr>
                <tr>
                  <th>130 x 60</th>
                  <td>130 x 60</td>
                  <td>138 x 68</td>
                  <td>± 1,0</td>
                  <td>8</td>
                  <td>3,5</td>
                  <td>1,53</td>
                </tr>
                <tr>
                  <th>138 x 138</th>
                  <td>138 x 138</td>
                  <td>146 x 146</td>
                  <td>± 1,0</td>
                  <td>8</td>
                  <td>3,5</td>
                  <td>1,70</td>
                </tr>
                <tr>
                  <th>140 x 80</th>
                  <td>140 x 80</td>
                  <td>148 x 88</td>
                  <td>± 1,0</td>
                  <td>8</td>
                  <td>3,5</td>
                  <td>1,38</td>
                </tr>
                <tr>
                  <th>160 x 100</th>
                  <td>160 x 100</td>
                  <td>168 x 108</td>
                  <td>± 1,0</td>
                  <td>8</td>
                  <td>3,5</td>
                  <td>1,65</td>
                </tr>
                <tr>
                  <th>160 x 80</th>
                  <td>160 x 80</td>
                  <td>168 x 88</td>
                  <td>± 1,0</td>
                  <td>8</td>
                  <td>3,5</td>
                  <td>1,51</td>
                </tr>
                <tr>
                  <th>200 x 200</th>
                  <td>200 x 200</td>
                  <td>208 x 208</td>
                  <td>± 1,0</td>
                  <td>8</td>
                  <td>3,5</td>
                  <td>2,35</td>
                </tr>
                <tr>
                  <th>200 x 150</th>
                  <td>200 x 150</td>
                  <td>208 x 158</td>
                  <td>± 1,0</td>
                  <td>8</td>
                  <td>3,5</td>
                  <td>1,85</td>
                </tr>
                <tr>
                  <th>200 x 100</th>
                  <td>200 x 100</td>
                  <td>208 x 108</td>
                  <td>± 1,0</td>
                  <td>8</td>
                  <td>3,5</td>
                  <td>1,60</td>
                </tr>
                <tr>
                  <th>230 x 76</th>
                  <td>230 x 76</td>
                  <td>238 x 84</td>
                  <td>± 1,0</td>
                  <td>8</td>
                  <td>3,5</td>
                  <td>1,94</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rcp;
