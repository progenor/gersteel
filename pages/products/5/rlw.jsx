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
              width="1300"
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
                  <th>30</th>
                  <td>30</td>
                  <td>35</td>
                  <td>± 0,8</td>
                  <td>2,5</td>
                  <td>0,20</td>
                </tr>
                <tr>
                  <th>40</th>
                  <td>40</td>
                  <td>46</td>
                  <td>± 0,8</td>
                  <td>3,0</td>
                  <td>0,20</td>
                </tr>
                <tr>
                  <th>50</th>
                  <td>50</td>
                  <td>56</td>
                  <td>± 0,8</td>
                  <td>3,0</td>
                  <td>0,34</td>
                </tr>
                <tr>
                  <th>60</th>
                  <td>60</td>
                  <td>67</td>
                  <td>± 0,8</td>
                  <td>3,5</td>
                  <td>0,46</td>
                </tr>
                <tr>
                  <th>65</th>
                  <td>65</td>
                  <td>72</td>
                  <td>± 0,8</td>
                  <td>3,5</td>
                  <td>0,56</td>
                </tr>
                <tr>
                  <th>70</th>
                  <td>70</td>
                  <td>77</td>
                  <td>± 0,8</td>
                  <td>3,5</td>
                  <td>0,57</td>
                </tr>
                <tr>
                  <th>80</th>
                  <td>80</td>
                  <td>87</td>
                  <td>± 0,8</td>
                  <td>3,5</td>
                  <td>0,77</td>
                </tr>
                <tr>
                  <th>90</th>
                  <td>90</td>
                  <td>97</td>
                  <td>± 0,8</td>
                  <td>3,5</td>
                  <td>0,95</td>
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
