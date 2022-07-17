import React, { useState, useEffect } from 'react';
import data from '../../utils/data';
import ActionAreaCard from "../../utils/mediacard";
import AboutShortDetail from '../about/AboutShortDetail';
import axios from "axios";
 
const Home = () => {

    const [info, setInfo] = useState(null);
    const [nfts, setcurrData] = useState([]);

    function getNFT() {
      var config = {
        method: "get",
        url: "https://openapi.debank.com/v1/user/nft_list?id=0x003B0b080e092793d8e1A393656907F1f55e077E&chain_id=eth&is_all=true",
        headers: {},
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          setcurrData(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    useEffect(() => {
      setInfo(data.info);
      getNFT(); 
    }, []);
 
    return (
      <div className="row justify-content-center">
        {info !== null && (
          <>
            {/* <div className="col-12 col-md-4">
                        <img src={info.image_url} alt="" />
                    </div> */}
            <div className="col-8 col-md-8">
              <AboutShortDetail info={info} />
              <div style={{ display: "flex", flexDirection: "row" }}>
                {nfts.map((item, index) => {
                  console.log("this is the item", item);
                  return (
                    <div>
                      <ActionAreaCard props={item} />
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
    );
}

export default Home;