import sty from '../styles/spacers.module.scss';
import styy from '../styles/generalPage.module.scss';

import Image from 'next/image';

const PlasSpacers = () => {
  const IMG = ({ img1, img2 }) => {
    const size = 80;
    return (
      <>
        <div className={sty.images}>
          <Image
            alt="image"
            src={`/assets/images/${img1}`}
            width={size}
            height={size}
          />
          <Image
            alt="image"
            src={`/assets/images/${img2}`}
            width={size}
            height={size}
          />
        </div>
      </>
    );
  };

  return (
    <div className={sty.main} id="plastic">
      <h1>Plastic Spacers</h1>
      <div className={styy.table1}>
        <h2 id="wsko">Wheel Spacer KO</h2>
        <IMG img1="gray.jpg" img2="gray.jpg" />
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
        <h2 id="wskom">Wheel Spacer KO MAXI</h2>
        <IMG img1="gray.jpg" img2="gray.jpg" />
      </div>
      <div className={styy.table1}>
        <h2 id="dts">DUAL Track Spacer - length 2,0 m</h2>
        <IMG img1="gray.jpg" img2="gray.jpg" />
      </div>
      <div className={styy.table1}>
        <h2 id="ts">Track Spacer DL – length 2,0 m</h2>
        <IMG img1="gray.jpg" img2="gray.jpg" />
      </div>
      <div className={styy.table1}>
        <h2 id="tsdlv">Track spacer with closed sides DLV – length 2,0m</h2>

        <IMG img1="gray.jpg" img2="gray.jpg" />
      </div>
      <div className={styy.table1}>
        <h2 id="cepd">Chamfer edge profiles D – length 2,5 m</h2>
        <IMG img1="gray.jpg" img2="gray.jpg" />
      </div>
      <div className={styy.table1}>
        <h2 id="cepdfv">
          Chamfer edge profiles with nailing flange DFV full - length 2,5 m
        </h2>
        <IMG img1="gray.jpg" img2="gray.jpg" />
      </div>
      <div className={styy.table1}>
        <h2 id="cepdfh">
          Chamfer edge profiles with nailing flange DFH hollow –length 2,5 m
        </h2>
        <IMG img1="gray.jpg" img2="gray.jpg" />
      </div>
      <div className={styy.table1}>
        <h2 id="sppp">Sealing profile PP</h2>
        <IMG img1="gray.jpg" img2="gray.jpg" />
      </div>
      <div className={styy.table1}>
        <h2 id="rsdk">Ring spacer diskus DK</h2>
        <IMG img1="gray.jpg" img2="gray.jpg" />
      </div>
      <div className={styy.table1}>
        <h2 id="rde">Rhombus DE</h2>
        <IMG img1="gray.jpg" img2="gray.jpg" />
      </div>
    </div>
  );
};

export default PlasSpacers;

/*

// table sample

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


*/

// image sample
// <IMG img1="gray.jpg" img2="gray.jpg" />
