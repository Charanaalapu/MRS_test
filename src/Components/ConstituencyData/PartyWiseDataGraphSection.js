import React from 'react'
import './DashboardPartyWise.css'
// import './GeneralAssemblyElectionDataPage.css'
import DropDownWidget from '../../Components/ChartsGraphs/DropDownWidget'
import constituencies from '../../Constants/Constituency-names'
import BarGraphChart from '../ChartsGraphs/BarGraphChart'
import { PieChartBasic } from '../ChartsGraphs/PieChartBasic'
import Table1 from '../Tables/Table1'
import SmallTable from '../Tables/SmallTable'
import PieActiveArc from '../ChartsGraphs/PieActiveArc'
import BarDiagramMaterialUI from '../ChartsGraphs/BarDiagramMaterialUI'
import HorizontalBars from '../ChartsGraphs/HorizontalBars'
import PieArcLabel from '../ChartsGraphs/PieArcLabel'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import ConstituencyPartyWiseTable from '../Tables/ConstituencyPartyWiseTable'
import rms_logo from '../../Assets/mrs_logo.png'
import BallotTwoToneIcon from '@mui/icons-material/BallotTwoTone';
import CurrencyRupeeTwoToneIcon from '@mui/icons-material/CurrencyRupeeTwoTone';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SelectModule from './SelectModule'
import AgricultureOutlinedIcon from '@mui/icons-material/AgricultureOutlined';
import DonutChart from '../ChartsGraphs/DonutChart'
import constituencyNames from '../../Constants/Constituency-names'
import { useEffect } from 'react'

const PartyWiseDataGraphSection = () => {

    const [selectedTab, setSelectedTab] = useState(null);
  const [hoveredTab, setHoveredTab] = useState(null);

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
    setHoveredTab(null); // Reset hovered state when a tab is clicked
  };

  const { state } = useLocation();

  const { indexConst = '', yearOfElection = '' } = state || {};
  const [partyWiseData, setPartyWIseData] = useState([]);
  const [partyVote, setPartyVote] = useState([]);
  const [electoralData,setElectoralData]=useState([]);
  
 const propExcelFileName = {
   ConstituencyName : constituencyNames[indexConst],
   year : yearOfElection
 }

useEffect(() => {

  const token = localStorage.getItem('token');

  const callElectoralData = async () => {
    try {
      const project_response = await fetch(`http://127.0.0.1:8000/ywdft?y=${yearOfElection}&cn=${indexConst}`,
      {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      }
    }
    );
      if (!project_response.ok) {
        throw new Error(`Failed to fetch electoral data: ${project_response.status}`);
      }
        console.log(project_response)
      const data = await project_response.json();
      setElectoralData(data);
      console.log(data); // Log the data after setting the state
      // alert("Data Fetched");
    } catch (error) {
      console.error("Error fetching electoral data:", error);
    }
   
  };

  const callPartyWiseData = async () => {
    try {
      const project_response = await fetch(`http://127.0.0.1:8000/ywcw?y=${yearOfElection}&cn=${indexConst}`
      ,
      {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      }
    }
    );
      if (!project_response.ok) {
        throw new Error(`Failed to fetch party wise data: ${project_response.status}`);
      }

      const data = await project_response.json();
      setPartyWIseData(data);
      
    } catch (error) {
      console.error("Error fetching party wise data:", error);
    }
  };

  const callPartyVote = async () => {
    try {
      const project_response = await fetch(`http://127.0.0.1:8000/ywpwvs?y=${yearOfElection}&cn=${indexConst}`,
      {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      }
    }
    );
      if (!project_response.ok) {
        throw new Error(`Failed to fetch party vote data: ${project_response.status}`);
      }

      const data = await project_response.json();
      setPartyVote(data);
      
    } catch (error) {
      console.error("Error fetching party vote data:", error);
    }
  };

  

  callElectoralData();
  callPartyWiseData();
  callPartyVote();
  
}, [indexConst, yearOfElection]);

  
  return (
    <>
        <div class="seven">
          <h1><strong>{yearOfElection} GENERAL ELECTION RESULTS </strong></h1>
          <h2 style={{textAlign:'center'}}><strong>{constituencyNames[indexConst-1]}</strong></h2>
        </div>
        <div style={{display:'flex', justifyContent:'center', marginLeft:'1.8rem'}}>
        <SelectModule />
        </div>


        <div className='dashboard-main-section'>
          <div className='first-column'>
            <div style={{border:'2px solid black', minWidth:'400px'}} className='data-card'>
              <div>
                <p><strong>Overview</strong></p>
              </div>
              { electoralData.length>0 &&
              <div>
                <p><strong>Electors:</strong>  <span style={{color:'grey'}}>{electoralData[0].Electors}</span> </p>
                <p><strong>Votes Polled:</strong> <span style={{color:'grey'}}> {electoralData[0].Voters}</span></p>
                <p><strong>Valid Votes %:</strong><span style={{color:'grey'}}>  {electoralData[0]['Valid votes (% of total votes)']}%</span></p>
                <p><strong>Voter Turnout:</strong> <span style={{color:'grey'}}> {electoralData[0]['Voter turnout(%)']}</span></p>
                <p><strong>Valid Votes </strong><span style={{color:'grey'}}>  {electoralData[0]['Valid votes']}</span></p>
                <p><strong>Constituency No. </strong> <span style={{color:'grey'}}> {electoralData[0]['Constituency No']}</span></p>
              </div>
             }
            </div>

            <div className='small-table'>
              <div style={{ display: 'flex', flexDirection: 'column',backgroundColor:'white', alignItems: 'center', justifyContent: 'center', paddingTop: '0.5rem', borderRadius:'8px',border:'2px solid black' }}>
                <p style={{ textAlign: 'center' }}><strong>Party Wise Votes</strong></p>
                <SmallTable data={partyVote} />
              </div>
            </div>
            
          </div>

          <div class="eight">
            <h1>Party Wise Graphical Representation</h1>
          </div>
          <div className='second-column'>
            <div className='bar-graph' style={{backgroundColor:'white', border:'2px solid black', borderRadius:'8px', padding:'0.25rem'}}>
              <p style={{ textAlign: 'center', backgroundColor:'white'}}><strong>Party Wise Vote Share</strong></p>
              <BarDiagramMaterialUI data={partyVote} />
            </div>
            <div className='pie-chart' style={{backgroundColor:'white',border:'2px solid black', borderRadius:'8px', padding:'0.25rem', minWidth:'450px'}}>
              <p style={{ textAlign: 'center'}}><strong>Party Wise Vote %</strong></p>
              {/* <PieActiveArc data = {partyVote}/> */}<DonutChart data={partyVote} />

            </div>
          </div>
          <div class="eight">
            <h1>Alliance Wise Representation</h1>
          </div>
          <div className='third-column'>
            <div className='small-table' style={{ backgroundColor:'white', border:'2px solid black' }}>
              <p style={{ textAlign: 'center'  }}><strong>Alliance Wise Vote Share</strong></p>
              <SmallTable partyType={"Alliance"} />
            </div>
            <div style={{ flex: 0.33 }}>
              <div className='horizonal-bar' style={{ display: 'flex', flexDirection: 'column',backgroundColor:'white',border:'2px solid black', padding:'0.25rem' }}>
                <p style={{ textAlign: 'center' }}><strong>Seats Won Alliance Wise</strong></p>
                <HorizontalBars />
              </div>
            </div>
            <div className='alliance-chart' style={{backgroundColor:'white', border:'2px solid black', borderRadius:'8px', padding:'0.25rem'}}>
              <p><strong>Showing Alliance Vote Share</strong></p>
              <PieArcLabel />
            </div>
          </div>
        </div>
        <div style={{paddingBottom:'1rem'}} className='table-view'>
          <h2 style={{ color: 'rgb(19, 137, 149)', fontSize: '1.6rem', paddingLeft: '1rem' }}>GE Results Distribution Table <span style={{ color: 'goldenrod' }}>{constituencyNames[indexConst]} {yearOfElection}</span></h2>
          <ConstituencyPartyWiseTable data={partyWiseData} filename={propExcelFileName} />
          {/* <Table1 /> */}
        </div>
      </>
  )
}

export default PartyWiseDataGraphSection