import React from "react";
import "./Main.css";
import backgroundImage from "./MainBG.png";
import mrs_logo from "./mrs_logo.png";
import nav_links_bg from "./navI_links_bg.png";
import Translete_img from "./Transalate.png";
import Profile_img from "./Profile.png";
import heading_bg from "./Heading_bg.png";
import left_center_bg from "./left_center_card_bg.png";
import right_card_bg from "./right_card_bg.png";
import downarrow from "./down_arrow.png";
import bottombar from "./bottom_bar.png";
import PieChart1 from "./Piechart1";
import MultipleSelect from "./MultipleSelect";
import YearSelect from "./YearSelect";
import SearchIcon from "@mui/icons-material/Search";
import Maps_data from '../Map_data/Maps_data'
import { useNavigate } from "react-router-dom";
import DropDownWidget from '../../ChartsGraphs/DropDownWidget'

const Main_divStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};
const cards_style = {
  backgroundImage: `url(${left_center_bg})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};
const right_card_style = {
  backgroundImage: `url(${right_card_bg})`,
  backgroundSize: "350px",
  // backgroundSize: '90%',

  backgroundRepeat: "no-repeat",
};
const Heading_divStyle = {
  backgroundImage: `url(${heading_bg})`,
  backgroundSize: "100%",
  // backgroundSize: 'cover',
  backgroundRepeat: "no-repeat",
};
const bottom_bar_style = {
  backgroundImage: `url(${bottombar})`,
  backgroundSize: "100% 40px",
  backgroundRepeat: "no-repeat",
};
const div_bar_style = {
  backgroundImage: `url(${bottombar})`,
  backgroundSize: "75% 30px",
  backgroundRepeat: "no-repeat",
};

const Main = () => {
  const navigate = useNavigate()
  return (
    <>
    <div style={{backgroundColor:'#fcf9f0'}} className="Main_body">
    <div style={Main_divStyle} className="Main_div">
      <div className="navrbar_div">
        <div className="logo_mrs">
          <img src={mrs_logo} alt="mrs_logo"  className="mrs_logo" />
        </div>
        <div>
          <nav class="navbar navbar-expand-lg navbar_links">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div style={{}} class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul style={{paddingLeft:'0.8rem', display:'flex', alignItems:'center'}} class="navbar-nav mr-auto nav_ul">
                <li>Home</li>
                <li onClick={()=> navigate('/constituency-list')}>Constituency</li>
                <li onClick={()=> navigate('/party-wise-dashboard')}>Statistics</li>
                <li>Help</li>
                <li>About us</li>
                <li>
                  <img
                    src={Translete_img}
                    style={{ height: "30px" }}
                    alt="Translate_img"
                  />
                </li>
                <li>
                  <img
                    src={Profile_img}
                    style={{ height: "30px" }}
                    alt="Translate_img"
                  />
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div className="heading_div">
        <div style={Heading_divStyle} className="heading_bg">
          <h1 className="antoniobold">Mauritius Election Data and Results </h1>
        </div>
      </div>
      <div className="cards_div">
        <div style={cards_style} className="left_card">
          <div className="left1">
            <h5 className="para">2019 National Assembly Election Results</h5>
          </div>
          <hr style={{border:"1.5px solid #8B5E3C",marginLeft:"10px",marginRight:"10px"}}/>
          <div className="left2">
            <p className="Montserrat_bold">PARTY WISE</p>
            <p>
              <img className="downarrow" src={downarrow} alt="downarrow" />{" "}
            </p>
          </div>
          <div className="left3">
            <PieChart1 />
            <div style={div_bar_style} className="div_bottom_bar">
              <h6 className="bottom_bar_Montserrat_bold">
                View Detailed Results
              </h6>
            </div>
          </div>
        </div>
        <div style={cards_style} className="center_card">
          <div className="left1">
            <h5 className="para">2019 National Assembly Election Results</h5>
          </div>
          <hr style={{border:"1.5px solid #8B5E3C",marginLeft:"10px",marginRight:"10px"}}/>
          <div className="left2">
            <p className="Montserrat_bold">ALLIANCE WISE</p>
            <p>
              <img className="downarrow" src={downarrow} alt="downarrow" />{" "}
            </p>
          </div>
          <div className="left3">
            <PieChart1 />
            <div style={div_bar_style} className="div_bottom_bar">
              <h6 className="bottom_bar_Montserrat_bold">
                View Detailed Results
              </h6>
            </div>
          </div>
        </div>
        <div className="right_card">
          <div style={right_card_style} className="top">
            <div className="left1">
              <h5 className="para">Search Mauritius Election Data</h5>
            </div>
            <hr style={{border:"1.5px solid #905222",marginLeft:"10px",marginRight:"10px"}}/>
            <div className="SelectMenu_div">
              {/* <MultipleSelect /> */}
              <DropDownWidget />
            </div>
          </div>
          <div style={bottom_bar_style} className="bottom_bar">
            <h6>Click here for Advanced Search</h6>
          </div>
        </div>
      </div>
    </div>
    {/* <Maps_data /> */}
    </div>
    <div>
    <Maps_data />
    </div>
    </>

  );
};

export default Main;
