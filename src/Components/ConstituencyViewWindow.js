import React from 'react'
import './ConstituencyViewWindow.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import '../Components/HomePage/HomePage2.css'
import constituencynames from '../Constants/Constituency-names'
const ConstituencyViewWindow = () => {
  const [isNavFixed, setIsNavFixed] = useState(false);
  const [toggleTabs, setToggleTabs] = useState("Demography");
  return (
    <>
      <div className='homepage2-container'>
        <div
          className='caption-search-div'
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '7px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h2 style={{ fontFamily: 'Roboto', color: 'white', fontStyle: 'italic', fontWeight: 'bold' }}>Mauritius</h2>
            <div style={{ display: 'flex', alignItems: 'center', marginRight: '2rem' }}>

              <input style={{ width: '20rem', borderRadius: '8px', position: 'relative', backgroundColor:'white' }} type='text' placeholder='search'></input>
              <SearchRoundedIcon className='search-button' />
            </div>
          </div>

          <ul
          className={`nav-links ${isNavFixed ? 'fixed-nav' : ''}`}
        >
          <li><Link className='link-tab' to="/">Home</Link></li>
          <li><Link className='link-tab' to="/constituencies">Constituency</Link></li>
          <li><Link className='link-tab' to="/services">Statistics</Link></li>
          <li><Link className='link-tab' to="/contact">Other Sites</Link></li>
          <li><Link className='link-tab' to="/contact">Help</Link></li>
          <li><Link className='link-tab' to="/contact">About</Link></li>
        </ul>
        </div>
        </div>
        <div style={{display:'flex', flex:1}} className='constituency-main-container'>
          <div style={{flex:0.25}}>
          <div style={{display:'flex', flexDirection:'column'}} className='constitution-names'>
            <div style={{fontFamily:'Roboto',border:'1.5px solid white', fontSize:'20px', textAlign:'center', backgroundColor:'black', color:'white'}}>Constituencies</div>
           <ul style={{ listStyle: 'none',backgroundColor:'aliceblue',width:'100%', display:'flex', justifyContent:'flex-start', flexDirection:'column',height:'80vh', gap:'1rem', overflowY:'scroll'}}>
            {
                constituencynames.map((data, index)=>(
                    <li className='constituency-links'><Link className='constituency-links-tab' to="/">{data}</Link></li>
                ))
            }
            </ul>

          </div>
          </div>
          <div style={{flex:0.7}}>
            <div className='const-tab-container'>
              <button onClick={() => setToggleTabs("Demography")}>Demography</button>
              <button onClick={() => setToggleTabs("history")}>Historical Data</button>
              <button onClick={() => setToggleTabs("social")}>Representatives Social Links</button>
              <button onClick={() => setToggleTabs("statistics")}>Statistics</button>
            </div>
            {toggleTabs === "Demography" && <div>Demography</div>}
            {toggleTabs === "history" && <div>History</div>}
            {toggleTabs === "social" && <div>Social</div>}
            {toggleTabs === "statistics" && <div>Statistics</div>}
          </div>
        </div>
      </>
      )
}

      export default ConstituencyViewWindow