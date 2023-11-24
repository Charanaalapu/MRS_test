import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import names from './constituencyNames';
import { Link } from 'react-router-dom';
import Population_Graph from './Demography/Population_Graph';
import Population_Yearwise_Graph from './Demography/Population_Yearwise_Graph';

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    const [toggleTabs, setToggleTabs] = useState(" ");

    return (
        <>
            <div style={{marginLeft:'0.1rem',marginTop:'0.01rem', width:'100%'}} className="container">
                <div style={{ width: isOpen ? "350px" : "40px", height:'2.5rem', borderRadius: "10px" }} className="sidebar">
                    <div className="top_section">
                        <h1 style={{ display: isOpen ? "block" : "none", height:'1rem', fontFamily:'Roboto', fontSize:'large', textAlign:'center', fontWeight:'bold' }} className="logo">Constituencies</h1>
                        <div style={{ marginLeft: isOpen ? "70px" : "-3px" }} className="bars">
                            <FaBars onClick={toggle} /> 
                        </div>
                    </div>
                    <ul style={{ height: isOpen ? "100vh" : "0px", listStyle: 'none', backgroundColor: 'antiquewhite', width: '100%', display: 'flex', justifyContent: 'flex-start', flexDirection: 'column', gap: '1rem', overflowY: 'scroll' }}>

                        {
                            names.map((data, index) => (
                                <li className='constituency-links' style={{ display: isOpen ? "block" : "none" }}><Link className='constituency-links-tab' to="/">{data}</Link></li>
                            ))
                        }
                    </ul>
                </div>
                {/* <main>{children}</main> */}
                <div className='const-tab-container' style={{width:'100%'}}>
                    <div className='toggle_buttons'>

                        <button className='tgl_btns' value="Demography" onClick={(e) => setToggleTabs(e.target.value)}>Demography</button>
                        <button className='tgl_btns' value="Economy" onClick={(e) => setToggleTabs(e.target.value)}>Economy</button>
                        <button className='tgl_btns' value="Agriculture" onClick={(e) => setToggleTabs(e.target.value)}>Agriculture</button>
                        <button className='tgl_btns' value="Recent Updates" onClick={(e) => setToggleTabs(e.target.value)}>Recent Updates</button>
                        <button className='tgl_btns' value="Social Media Updates" onClick={(e) => setToggleTabs(e.target.value)}>Social Media Updates</button>
                    </div>
                    {toggleTabs === " " && <div className='metadata'><h3>Map</h3></div>}
                    {toggleTabs === "Demography" && <div className='main_conatiner' >
                        <div className='meta_heading'><h2>Demographic Data</h2>
                        </div>
                        <div className='metadata2'>
                            <div>
                            <Population_Graph /> 
                            </div>
                        <div><Population_Yearwise_Graph />
                        </div>
                        </div>
                    </div>
                    }
                    {toggleTabs === "Economy" && <div className='metadata'><h3>Economy</h3></div>}
                    {toggleTabs === "Agriculture" && <div className='metadata'><h3>Agriculture</h3></div>}
                    {toggleTabs === "Recent Updates" && <div className='metadata'><h3>Recent Updates</h3></div>}
                    {toggleTabs === "Social Media Updates" && <div className='metadata'><h3>Social Media Updates</h3></div>}
                </div>
            </div>
            {/* </div> */}
        </>
    );
};

export default Sidebar;