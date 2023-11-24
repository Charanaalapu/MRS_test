// import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import names from '../constituencyNames';
import names from '../../Constants/constituencyNames'
import './Const_maps.css';
import Header from '../Header';
import { useNavigate } from 'react-router-dom';


const Const_maps = () => {
  const navigate = useNavigate()

  const images = [];

  function importAll(r) {
    return r.keys().sort((a, b) => {
      const regex = /(\d+)/; // Regular expression to extract numbers
      const matchA = a.match(regex); // Try to match the regex in filename A
      const matchB = b.match(regex); // Try to match the regex in filename B
  
      if (matchA && matchB) {
        const numA = parseInt(matchA[0], 10); // Extract and parse number from filename A
        const numB = parseInt(matchB[0], 10); // Extract and parse number from filename B
        return numA - numB; // Compare and sort by the numeric value
      }
  
      // If no match found, return 0 to maintain the original order
      return 0;
    }).forEach((key) => images.push(r(key)));
  }

// Assuming your images are in the folder '../folder_path/'
// Adjust the path and regex as needed to match your file names
const req = require.context('./Map_data/map_images/', false, /\.(png|jpe?g|svg)$/);
importAll(req);

// 'images' array now contains all imported image paths
// console.log(images)




  // const images=[im1,im2,im3,im4,im5,im6,im7,im8,im9,im10,im11,im12,im13,im14,im15,im16,im17,im18,im19,im20,im21 ]

  
    const [img_src,setImg_src]=useState(images[21]);

    const tdHoverhandler = (e) => {
      const tdindex=e.target.parentNode.rowIndex;
      console.log(tdindex);
      setImg_src(images[tdindex-1])
    };


    // const [data,setData]=useState();

    // useEffect(()=>{
    //     axios.get("url").then((response) => {
    //         setData(response.data);
    // });

    // },[])
    // function handleNavigation(index){
    //   const constno = index+1;
      
    // }

  return (
    <>
    <Header />
    <div className='left_div'>
      <h2 style={{textAlign:'center', fontFamily:'Roboto'}}>Constituencies</h2>
      <p style={{fontFamily:'Roboto', fontWeight:'450', textAlign:'center'}}><strong>There are presently 21 constituencies: The island of Mauritius comprises of 20 constituencies and Rodrigues forms the 21 constituency.</strong><br/>These Constituencies are listed below: </p>
      <div className='table_map_div'>
        <table  >
        <tr>
          <th>Const No.</th>
          <th>Constituency Name </th>
          </tr>{
        names.map((names,index)=>(
            <tr>
              <td style={{paddingLeft:"10px"}}>{index+1}</td>
            <td onClick={()=>{
              navigate('/party-wise-dashboard', {
                state: { indexConst : index, yearOfElection : 2019 },
              });
            }} className='td_items' key={names} width='500px' onMouseOver={tdHoverhandler} style={{paddingLeft:"10px"}}>{names}</td>
            </tr>
        ))
      }
      </table>
      <div id="map_div">
      <img  src={img_src} alt={"map_images"} style={{ height: '400px', width: '400px' }} />

      </div>
      </div>
    </div>
    <div className='right_div'>

    </div>
    </>
  )
}

export default Const_maps
