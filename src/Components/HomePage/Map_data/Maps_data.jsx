import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Maps_data.css';
import table_bg from './table_bg.png';
import map_div_bg_img from './map_div_bg.png';
import im1 from './map_images/1.png';
import im2 from './map_images/2.png';
import im3 from './map_images/3.png';
import im4 from './map_images/4.png';
import im5 from './map_images/5.png';
import im6 from './map_images/6.png';
import im7 from './map_images/7.png';
import im8 from './map_images/8.png';
import im9 from './map_images/9.png';
import im10 from './map_images/10.png';
import im11 from './map_images/11.png';
import im12 from './map_images/12.png';
import im13 from './map_images/13.png';
import im14 from './map_images/14.png';
import im15 from './map_images/15.png';
import im16 from './map_images/16.png';
import im17 from './map_images/17.png';
import im18 from './map_images/18.png';
import im19 from './map_images/19.png';
import im20 from './map_images/20.png';
import im21 from './map_images/21.png';
import { useNavigate } from 'react-router-dom';
const Maps_data = () => {
    const navigate =useNavigate()
    const names = [
        "Grand River North West and Port Louis West",
        "Port Louis South and Port Louis Central",
        "Port Louis Maritime and Port Louis East",
        "Port Louis North and Montagne Longue",
        "Pamplemousses and Triolet",
        "Grand Baie and Poudre d’Or",
        "Piton and Rivière du Rempart",
        "Quartier Militaire and Moka",
        "Flacq and Bon Accueil",
        "Montagne Blanche and Grand River South East",
        "Vieux Grand Port and Rose Belle",
        "Mahebourg and Plaine Magnien",
        "Rivière des Anguilles and Souillac",
        "Savanne and Black River",
        "La Caverne and Phoenix",
        "Vacoas and Floreal",
        "Curepipe and Midlands",
        "Belle Rose and Quatre Bornes",
        "Stanley and Rose Hill",
        "Beau Bassin and Petite Rivière",
        "Rodrigues",
    ];
    
    const images=[im1,im2,im3,im4,im5,im6,im7,im8,im9,im10,im11,im12,im13,im14,im15,im16,im17,im18,im19,im20,im21 ]

    const map_div_bg = {
        backgroundImage: `url(${map_div_bg_img})`,
        backgroundSize: '100% 450px',
        backgroundRepeat: "no-repeat",
      };
    const table_bg_img = {
        backgroundImage: `url(${table_bg})`,
        backgroundSize: '100% 165px',
        backgroundRepeat: "no-repeat",
        // backgroundAttachment: 'fixed',
      };

    //======= API call ==========
    const [data,setData]=useState([]);
    useEffect(() => {
        const token = localStorage.getItem('token');
      
        axios.get("http://127.0.0.1:8000/ywcwatvs?y=1983", {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
         
          if (error.response && error.response.status === 401) {
           
            navigate('/');
          } else {
            
            console.error("Error:", error);
          }
        });
      }, []);
    
    //======Sorting Api Data=======
    // const [sortedData, setSortedData] = useState([]);

    // useEffect(() => {
    //     // Sort the data based on "Constituency No" when the component mounts
    //     const sorted = [...data].sort((a, b) => parseInt(a['Constituency No']) - parseInt(b['Constituency No']));
    //     setSortedData(sorted);
    // }, [data]);
    // console.log(sortedData)

    return (
        <div className='maps_data_body'>
            <h2 className='antoniobold'>Recent National Assembly Election Results 2019</h2>
            <div className='Maps_wise_div'>
                {data && data.map((item, index) => (
                    <div style={map_div_bg} className='Maps_cards' key={index}>
                        <div id='const_names_div'>{index+1}.{names[index]}</div>
                        <div className='img_div'>
                            <img key={index} src={images[index]} alt={"map_images"} style={{ height: '200px', width: '200px' }} />
                        </div>
                        <div style={table_bg_img} className='table_container'>
                            <tr className='header1'>
                                <th id='th1' scope="col">Party</th>
                                <th id='th2' scope="col">Votes</th>
                                <th id='th3' scope="col">Votes (%)</th>
                            </tr>
                            <table className="table table-sm">
                                <tbody className='tbody'>
                                    {item.Alliance.map((allianceItem, allianceIndex) => (
                                        <tr key={allianceIndex}>
                                            <td style={{ width: '10px', marginLeft: "10px" }}>{allianceItem.Alliance}</td>
                                            <td >{allianceItem.totalVotes}</td>
                                            <td>{allianceItem.totalPercentage.toFixed(2)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Maps_data
