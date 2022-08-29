import sty from "../styles/spacers.module.scss";
import styy from "../styles/generalPage.module.scss";

import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { useState } from "react";
import ImageBlowUp from "./ImageBlowUp";

const ConcSpacers = () => {
  const { t } = useTranslation("product3");
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
    <div className={sty.main} id="concrete">
      <h1>{t("concspacer")}</h1>
      <div className={styy.table1}>
        <h2 id="btds">{t("btds")}</h2>
        <IMG img1="btds1.jpg" img2="btds2.jpg" />
        <div className={styy.table}>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Height (mm)</th>
                <th>Pack size - bag (pcs)</th>
                <th>Bag (kg)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>BTD S - 20 </th>
                <td>20</td>
                <td>980</td>
                <td>28</td>
              </tr>
              <tr>
                <th>BTD S - 25</th>
                <td>25</td>
                <td>700</td>
                <td>25</td>
              </tr>
              <tr>
                <th>BTD S - 30</th>
                <td>30</td>
                <td>420</td>
                <td>23</td>
              </tr>
              <tr>
                <th>BTD S - 35</th>
                <td>35</td>
                <td>420</td>
                <td>26</td>
              </tr>
              <tr>
                <th>BTD S - 40</th>
                <td>40</td>
                <td>360</td>
                <td>27</td>
              </tr>
              <tr>
                <th>BTD S - 45</th>
                <td>45</td>
                <td>240</td>
                <td>22</td>
              </tr>
              <tr>
                <th>BTD S - 50</th>
                <td>50</td>
                <td>240</td>
                <td>29</td>
              </tr>
              <tr>
                <th>BTD S - 55</th>
                <td>55</td>
                <td>240</td>
                <td>29</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={styy.table1}>
        <h2 id="btdhs">{t("btdhs")}</h2>
        <IMG img1="btdhs1.jpg" img2="btdhs2.jpg" />
        <div className={styy.table}>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Height (mm)</th>
                <th>Pack size - bag (pcs)</th>
                <th>Bag (kg)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>BTD HS - 15 </th>
                <td>15</td>
                <td>1200</td>
                <td>24</td>
              </tr>
              <tr>
                <th>BTD HS - 20</th>
                <td>20</td>
                <td>960</td>
                <td>28</td>
              </tr>
              <tr>
                <th>BTD HS - 25</th>
                <td>25</td>
                <td>700</td>
                <td>25</td>
              </tr>
              <tr>
                <th>BTD HS - 30</th>
                <td>30</td>
                <td>420</td>
                <td>23</td>
              </tr>
              <tr>
                <th>BTD HS - 35</th>
                <td>35</td>
                <td>420</td>
                <td>26</td>
              </tr>
              <tr>
                <th>BTD HS - 40</th>
                <td>40</td>
                <td>360</td>
                <td>27</td>
              </tr>
              <tr>
                <th>BTD HS - 45</th>
                <td>45</td>
                <td>240</td>
                <td>22</td>
              </tr>
              <tr>
                <th>BTD HS - 50</th>
                <td>50</td>
                <td>240</td>
                <td>29</td>
              </tr>
              <tr>
                <th>BTD HS - 55</th>
                <td>55</td>
                <td>240</td>
                <td>29</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={styy.table1}>
        <h2 id="mirawb">{t("wb")}</h2>
        <IMG img1="mirawb1.jpg" />
        <div className={styy.table}>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Height (mm)</th>
                <th>Lenght(cm)</th>
                <th>Pallet(pcs)</th>
                <th>Pallet(kg)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>WB 20</th>
                <td>20</td>
                <td>65</td>
                <td>2500</td>
                <td>950</td>
              </tr>
              <tr>
                <th>WB 25</th>
                <td>25</td>
                <td>65</td>
                <td>1500</td>
                <td>900</td>
              </tr>
              <tr>
                <th>WB 30</th>
                <td>30</td>
                <td>65</td>
                <td>1300</td>
                <td>910</td>
              </tr>
              <tr>
                <th>WB 35</th>
                <td>35</td>
                <td>65</td>
                <td>1200</td>
                <td>960</td>
              </tr>
              <tr>
                <th>WB 40</th>
                <td>40</td>
                <td>65</td>
                <td>1000</td>
                <td>1000</td>
              </tr>
              <tr>
                <th>WB 50</th>
                <td>50</td>
                <td>65</td>
                <td>700</td>
                <td>980</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={styy.table1}>
        <h2 id="butterK">{t("butterK")}</h2>
        <IMG img1="butterk1.jpg" />
        <div className={styy.table}>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Height (mm)</th>
                <th>Pack size - bag (pcs)</th>
                <th>Pallet(pcs)</th>
                <th>Pallet(kg)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>KD 20/25/30</th>
                <td>20-25-30</td>
                <td>500</td>
                <td>25 000</td>
                <td>1 000</td>
              </tr>
              <tr>
                <th>KD 35/40/50</th>
                <td>35-40-50</td>
                <td>250</td>
                <td>10 000</td>
                <td>950</td>
              </tr>
              <tr>
                <th>KD 45/55/60</th>
                <td>45-55-60</td>
                <td>125</td>
                <td>5 000</td>
                <td>850</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={styy.table1}>
        <h2 id="butterkd">{t("butterkd")}</h2>
        <IMG img1="butterkd1.jpg" />
        <div className={styy.table}>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Height (mm)</th>
                <th>Pack size - bag (pcs)</th>
                <th>Pallet(pcs)</th>
                <th>Pallet(kg)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>KD 20/25/30</th>
                <td>20-25-30</td>
                <td>500</td>
                <td>25 000</td>
                <td>1 050</td>
              </tr>
              <tr>
                <th>KD 35/40/50</th>
                <td>35-40-50</td>
                <td>250</td>
                <td>10 000</td>
                <td>950</td>
              </tr>
              <tr>
                <th>KD 45/55/60</th>
                <td>45-55-60</td>
                <td>125</td>
                <td>5 000</td>
                <td>850</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={styy.table1}>
        <h2 id="concu">{t("concu")}</h2>
        <IMG img1="concu1.jpg" />
        <div className={styy.table}>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Height (mm)</th>
                <th>Pack size - bag (pcs)</th>
                <th>Pallet(pcs)</th>
                <th>Pallet(kg)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>U 15</th>
                <td>15</td>
                <td>1 000</td>
                <td>50 000</td>
                <td>750</td>
              </tr>
              <tr>
                <th>U 20</th>
                <td>20</td>
                <td>1 000</td>
                <td>50 000</td>
                <td>1 000</td>
              </tr>
              <tr>
                <th>U 25</th>
                <td>25</td>
                <td>500</td>
                <td>20 000</td>
                <td>650</td>
              </tr>
              <tr>
                <th>U 30</th>
                <td>30</td>
                <td>500</td>
                <td>20 000</td>
                <td>900</td>
              </tr>
              <tr>
                <th>U 35</th>
                <td>35</td>
                <td>500</td>
                <td>20 000</td>
                <td>900</td>
              </tr>
              <tr>
                <th>U 40</th>
                <td>40</td>
                <td>400</td>
                <td>16 000</td>
                <td>1 200</td>
              </tr>
              <tr>
                <th>U 50</th>
                <td>50</td>
                <td>250</td>
                <td>10 000</td>
                <td>1 350</td>
              </tr>
              <tr>
                <th>U 60</th>
                <td>60</td>
                <td>250</td>
                <td>8 000</td>
                <td>1 350</td>
              </tr>
              <tr>
                <th>U 75</th>
                <td>75</td>
                <td>125</td>
                <td>5 000</td>
                <td>1 000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={styy.table1}>
        <h2 id="concud">{t("concud")}</h2>
        <IMG img1="concud1.jpg" />
        <div className={styy.table}>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Height (mm)</th>
                <th>Pack size - bag (pcs)</th>
                <th>Pallet(pcs)</th>
                <th>Pallet(kg)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>U 15</th>
                <td>15</td>
                <td>1 000</td>
                <td>50 000</td>
                <td>750</td>
              </tr>
              <tr>
                <th>U 20</th>
                <td>20</td>
                <td>1 000</td>
                <td>50 000</td>
                <td>1 000</td>
              </tr>
              <tr>
                <th>U 25</th>
                <td>25</td>
                <td>500</td>
                <td>20 000</td>
                <td>650</td>
              </tr>
              <tr>
                <th>U 30</th>
                <td>30</td>
                <td>500</td>
                <td>20 000</td>
                <td>900</td>
              </tr>
              <tr>
                <th>U 35</th>
                <td>35</td>
                <td>500</td>
                <td>20 000</td>
                <td>900</td>
              </tr>
              <tr>
                <th>U 40</th>
                <td>40</td>
                <td>400</td>
                <td>16 000</td>
                <td>1 200</td>
              </tr>
              <tr>
                <th>U 50</th>
                <td>50</td>
                <td>250</td>
                <td>10 000</td>
                <td>1 350</td>
              </tr>
              <tr>
                <th>U 60</th>
                <td>60</td>
                <td>250</td>
                <td>8 000</td>
                <td>1 350</td>
              </tr>
              <tr>
                <th>U 75</th>
                <td>75</td>
                <td>125</td>
                <td>5 000</td>
                <td>1 000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={styy.table1}>
        <h2 id="snakets">{t("snakets")}</h2>
        <IMG img1="snakets1.jpg" />
        <div className={styy.table}>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Height (mm)</th>
                <th>Lenght (cm)</th>
                <th>Pallet(pcs)</th>
                <th>Pallet(kg)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>TS 100 25</th>
                <td>25</td>
                <td>100</td>
                <td>1 000</td>
                <td>750</td>
              </tr>
              <tr>
                <th>TS 100 30</th>
                <td>30</td>
                <td>100</td>
                <td>900</td>
                <td>800</td>
              </tr>
              <tr>
                <th>TS 100 35</th>
                <td>35</td>
                <td>100</td>
                <td>750</td>
                <td>750</td>
              </tr>
              <tr>
                <th>TS 100 40</th>
                <td>40</td>
                <td>100</td>
                <td>600</td>
                <td>750</td>
              </tr>
              <tr>
                <th>TS 100 45</th>
                <td>45</td>
                <td>100</td>
                <td>500</td>
                <td>750</td>
              </tr>
              <tr>
                <th>TS 100 50</th>
                <td>50</td>
                <td>100</td>
                <td>400</td>
                <td>750</td>
              </tr>
              <tr>
                <th>TS 100 60</th>
                <td>60</td>
                <td>100</td>
                <td>350</td>
                <td>700</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={styy.table1}>
        <h2 id="snakes">{t("snakes")}</h2>
        <IMG img1="snakes1.jpg" />
        <div className={styy.table}>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Height (mm)</th>
                <th>Lenght (cm)</th>
                <th>Pallet(pcs)</th>
                <th>Pallet(kg)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>S 80 20</th>
                <td>20</td>
                <td>80</td>
                <td>1 500</td>
                <td>750</td>
              </tr>
              <tr>
                <th>S 80 25</th>
                <td>25</td>
                <td>80</td>
                <td>1 400</td>
                <td>850</td>
              </tr>
              <tr>
                <th>S 80 30</th>
                <td>30</td>
                <td>80</td>
                <td>1 250</td>
                <td>900</td>
              </tr>
              <tr>
                <th>S 80 35</th>
                <td>35</td>
                <td>80</td>
                <td>1 100</td>
                <td>900</td>
              </tr>
              <tr>
                <th>S 80 40</th>
                <td>40</td>
                <td>80</td>
                <td>800</td>
                <td>800</td>
              </tr>
              <tr>
                <th>S 80 45</th>
                <td>45</td>
                <td>80</td>
                <td>700</td>
                <td>950</td>
              </tr>
              <tr>
                <th>S 80 50</th>
                <td>50</td>
                <td>80</td>
                <td>600</td>
                <td>1050</td>
              </tr>
              <tr>
                <th>S 80 60</th>
                <td>60</td>
                <td>80</td>
                <td>500</td>
                <td>900</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styy.table}>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Height (mm)</th>
                <th>Lenght (cm)</th>
                <th>Pallet(pcs)</th>
                <th>Pallet(kg)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>S 100 20</th>
                <td>20</td>
                <td>100</td>
                <td>1 100</td>
                <td>700</td>
              </tr>
              <tr>
                <th>S 100 25</th>
                <td>25</td>
                <td>100</td>
                <td>1 100</td>
                <td>700</td>
              </tr>
              <tr>
                <th>S 100 30</th>
                <td>30</td>
                <td>100</td>
                <td>900</td>
                <td>800</td>
              </tr>
              <tr>
                <th>S 100 35</th>
                <td>35</td>
                <td>100</td>
                <td>750</td>
                <td>850</td>
              </tr>
              <tr>
                <th>S 100 40</th>
                <td>40</td>
                <td>100</td>
                <td>600</td>
                <td>700</td>
              </tr>
              <tr>
                <th>S 100 45</th>
                <td>45</td>
                <td>100</td>
                <td>500</td>
                <td>800</td>
              </tr>
              <tr>
                <th>S 100 50</th>
                <td>50</td>
                <td>100</td>
                <td>400</td>
                <td>900</td>
              </tr>
              <tr>
                <th>S 100 60</th>
                <td>60</td>
                <td>100</td>
                <td>350</td>
                <td>900</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={styy.table1}>
        <h2 id="snakesn">{t("snakesn")}</h2>
        <IMG img1="snakesn1.jpg" />
        <div className={styy.table}>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Height (mm)</th>
                <th>Lenght (cm)</th>
                <th>Pallet(pcs)</th>
                <th>Pallet(kg)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>SN 80 20</th>
                <td>20</td>
                <td>80</td>
                <td>1 500</td>
                <td>750</td>
              </tr>
              <tr>
                <th>SN 80 25</th>
                <td>25</td>
                <td>80</td>
                <td>1 400</td>
                <td>850</td>
              </tr>
              <tr>
                <th>SN 80 30</th>
                <td>30</td>
                <td>80</td>
                <td>1 250</td>
                <td>900</td>
              </tr>
              <tr>
                <th>SN 80 35</th>
                <td>35</td>
                <td>80</td>
                <td>1 100</td>
                <td>900</td>
              </tr>
              <tr>
                <th>SN 80 40</th>
                <td>40</td>
                <td>80</td>
                <td>800</td>
                <td>800</td>
              </tr>
              <tr>
                <th>SN 80 45</th>
                <td>45</td>
                <td>80</td>
                <td>700</td>
                <td>950</td>
              </tr>
              <tr>
                <th>SN 80 50</th>
                <td>50</td>
                <td>80</td>
                <td>600</td>
                <td>1050</td>
              </tr>
              <tr>
                <th>SN 80 60</th>
                <td>60</td>
                <td>80</td>
                <td>500</td>
                <td>900</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styy.table}>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Height (mm)</th>
                <th>Lenght (cm)</th>
                <th>Pallet(pcs)</th>
                <th>Pallet(kg)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>SN 100 20</th>
                <td>20</td>
                <td>100</td>
                <td>1 100</td>
                <td>700</td>
              </tr>
              <tr>
                <th>SN 100 25</th>
                <td>25</td>
                <td>100</td>
                <td>1 100</td>
                <td>700</td>
              </tr>
              <tr>
                <th>SN 100 30</th>
                <td>30</td>
                <td>100</td>
                <td>900</td>
                <td>800</td>
              </tr>
              <tr>
                <th>SN 100 35</th>
                <td>35</td>
                <td>100</td>
                <td>750</td>
                <td>850</td>
              </tr>
              <tr>
                <th>SN 100 40</th>
                <td>40</td>
                <td>100</td>
                <td>600</td>
                <td>700</td>
              </tr>
              <tr>
                <th>SN 100 45</th>
                <td>45</td>
                <td>100</td>
                <td>500</td>
                <td>800</td>
              </tr>
              <tr>
                <th>SN 100 50</th>
                <td>50</td>
                <td>100</td>
                <td>400</td>
                <td>900</td>
              </tr>
              <tr>
                <th>SN 100 60</th>
                <td>60</td>
                <td>100</td>
                <td>350</td>
                <td>900</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={styy.table1}>
        <h2 id="conctube">{t("concTube")}</h2>
        <IMG img1="conctube1.jpg" />
        <div className={styy.table}>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Inside dia (mm)</th>
                <th>Outside dia (mm)</th>
                <th>Lenght (m)</th>
                <th>Pallet (pcs)</th>
                <th>Pallet (kg)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Con. tube 22/40</th>
                <td>22</td>
                <td>40</td>
                <td>1,25</td>
                <td>500</td>
                <td>1200</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={styy.table1}>
        <h2 id="concplug">{t("concPlug")}</h2>
        <IMG img1="concplug1.jpg" img2="concplug2.jpg" img3="concplug3.jpg" />
        <div className={styy.table}>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Diameter (mm)</th>
                <th>Lenght (mm)</th>
                <th>Pac size - bag (pcs)</th>
                <th>Pallet (pcs)</th>
                <th>Pallet (kg)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Con. plug Z22/20</th>
                <td>22</td>
                <td>20</td>
                <td>1 000</td>
                <td>60 000</td>
                <td>1 200</td>
              </tr>
              <tr>
                <th>Con. plug Z22/40</th>
                <td>22</td>
                <td>40</td>
                <td>500</td>
                <td>40 000</td>
                <td>1 120</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ConcSpacers;
