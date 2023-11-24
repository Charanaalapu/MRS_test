import React, { useEffect } from 'react'
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
import YearVoteDataTable from '../Tables/YearVoteDataTable'
import Table2 from '../Tables/Table2'
import AllVoteDataTable from '../Tables/AllVoteDataTable'
import Header from '../Header'
const DashboardPartyWise = () => {

  const [selectedTab, setSelectedTab] = useState(null);
  const [hoveredTab, setHoveredTab] = useState(null);

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
    setHoveredTab(null); // Reset hovered state when a tab is clicked
  };

  const { state } = useLocation();

  const { indexConst = '', yearOfElection = '' } = state || {};
  const [partyYearWiseData, setPartyyearWiseData] = useState([]);
  const [partyVote, setPartyVote] = useState([]);
  const [electoralData,setElectoralData]=useState([]);
  const [totalElectoralData,setTotalElectoralData]=useState([]);

  const data = [
    { Party: 'BJP', Seats: 72, VotesPercentage: '65%' },
    { Party: 'Congress', Seats: 22, VotesPercentage: '28%' }
  ];


  
  // console.log(partyVote)
  useEffect(() => {

    const token = localStorage.getItem('token');

    const callTotalElectoralData = async () => {
      try {
        const project_response = await fetch(`http://127.0.0.1:8000/ywdft?y=${yearOfElection}&a=true`
        ,
      {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      }
    });
        if (!project_response.ok) {
          throw new Error(`Failed to fetch party wise data: ${project_response.status}`);
        }
  
        const data = await project_response.json();
        setTotalElectoralData(data);
        
        
      } catch (error) {
        console.error("Error fetching party wise data:", error);
      }
    };

    const callPartyVote = async () => {

      await fetch(`http://127.0.0.1:8000/ywt?y=${yearOfElection}`,
      {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      }
    })
        .then((project_response) => {
          return project_response.json();
        }).then((data) => {
          setPartyVote(data)
        })
    }
    const callYearWiseTableData = async () => {

      await fetch(`http://127.0.0.1:8000/ywcww?y=${yearOfElection}`,
      {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      }
    })
        .then((project_response) => {
          return project_response.json();
        }).then((data) => {
          setPartyyearWiseData(data)
          // alert("Data Fetched")
        })
    }

    const callElectoralData = async () => {

      await fetch(`http://127.0.0.1:8000/ywdft?y=${yearOfElection}`,
      {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      }
    }
    )
        .then((project_response) => {
          return project_response.json();
        }).then((data) => {
          setElectoralData(data)
          // alert("Data Fetched")
        })
    }
    
    callTotalElectoralData()
    callPartyVote()
    callYearWiseTableData()
    callElectoralData()
    
  }, [yearOfElection])

  console.log(totalElectoralData)
  const dummyData = [
    {
      id: 1,
      pcName: 'Constituency A',
      no: 101,
      type: 'Type A',
      state: 'State 1',
      winningCandidate: 'Candidate A',
      party: 'Party X',
      electors: 50000,
      votes: 35000,
      turnout: '70%',
      margin: 5000,
      marginPercent: '14.29%',
    },
    {
      id: 2,
      pcName: 'Constituency B',
      no: 102,
      type: 'Type B',
      state: 'State 2',
      winningCandidate: 'Candidate B',
      party: 'Party Y',
      electors: 60000,
      votes: 42000,
      turnout: '70%',
      margin: 6000,
      marginPercent: '14.29%',
    },
    {
      id: 3,
      pcName: 'Constituency C',
      no: 103,
      type: 'Type A',
      state: 'State 3',
      winningCandidate: 'Candidate C',
      party: 'Party Z',
      electors: 55000,
      votes: 38000,
      turnout: '69%',
      margin: 5000,
      marginPercent: '13.16%',
    },
    {
      id: 4,
      pcName: 'Constituency D',
      no: 104,
      type: 'Type B',
      state: 'State 4',
      winningCandidate: 'Candidate D',
      party: 'Party W',
      electors: 48000,
      votes: 31000,
      turnout: '64%',
      margin: 6000,
      marginPercent: '19.35%',
    },
    {
      id: 4,
      pcName: 'Constituency D',
      no: 104,
      type: 'Type B',
      state: 'State 4',
      winningCandidate: 'Candidate D',
      party: 'Party W',
      electors: 48000,
      votes: 31000,
      turnout: '64%',
      margin: 6000,
      marginPercent: '19.35%',
    },
  ];
 
  
  
  return (
    <>
    <Header />
    <div className='dashboard-main'>
      
      <div className='sidebar_dashboard'>
        <div style={{ display: 'flex', alignItems: 'center',  justifyContent: 'center', gap:'0.7rem' }}>
          <img style={{ paddingTop: '0.8rem' }} height="50px" width="100px" src={rms_logo} alt='mrs_logo'></img>
          {/* <AccountCircleOutlinedIcon />
          <div><strong> Nathan Swift</strong></div> */}
        </div>
        <hr></hr>
        <div
          className={`sidebar_tabs ${selectedTab === 'alliance' ? 'selected' : ''}`}
          style={{
            color: selectedTab === 'alliance' ? '#1877f2' : 'inherit',
            backgroundColor: selectedTab === 'alliance' ? '#add8e6' : hoveredTab === 'alliance' ? '#d3d3d3' : 'inherit',
          }}
          onClick={() => handleTabClick('alliance')}
          onMouseEnter={() => setHoveredTab('alliance')}
          onMouseLeave={() => setHoveredTab(null)}
        >
          <BallotTwoToneIcon />
          <span style={{ color: selectedTab === 'alliance' ? '#1877f2' : 'inherit' }}>Alliance/Party Wise Election Data</span>
        </div>
        <div
          className={`sidebar_tabs ${selectedTab === 'economic' ? 'selected' : ''}`}
          style={{
            color: selectedTab === 'economic' ? 'blue' : 'inherit',
            backgroundColor: selectedTab === 'economic' ? '#add8e6' : hoveredTab === 'economic' ? '#d3d3d3' : 'inherit',
          }}
          onClick={() => handleTabClick('economic')}
          onMouseEnter={() => setHoveredTab('economic')}
          onMouseLeave={() => setHoveredTab(null)}
        >
          <CurrencyRupeeTwoToneIcon />
          <span style={{ color: selectedTab === 'economic' ? '#1877f2' : 'inherit' }}>Economic Data</span>
        </div>
        <div
          className={`sidebar_tabs ${selectedTab === 'demography' ? 'selected' : ''}`}
          style={{
            color: selectedTab === 'demography' ? '#1877f2' : 'inherit',
            backgroundColor: selectedTab === 'demography' ? '#add8e6' : hoveredTab === 'demography' ? '#d3d3d3' : 'inherit',
          }}
          onClick={() => handleTabClick('demography')}
          onMouseEnter={() => setHoveredTab('demography')}
          onMouseLeave={() => setHoveredTab(null)}
        >
          <PeopleAltTwoToneIcon />
          <span style={{ color: selectedTab === 'demography' ? '#1877f2' : 'inherit' }}>Demography</span>
        </div>
        <div
          className={`sidebar_tabs ${selectedTab === 'agriculture' ? 'selected' : ''}`}
          style={{
            color: selectedTab === 'agriculture' ? '#1877f2' : 'inherit',
            backgroundColor: selectedTab === 'agriculture' ? '#add8e6' : hoveredTab === 'agriculture' ? '#d3d3d3' : 'inherit',
          }}
          onClick={() => handleTabClick('agriculture')}
          onMouseEnter={() => setHoveredTab('agriculture')}
          onMouseLeave={() => setHoveredTab(null)}
        >
          <AgricultureOutlinedIcon />
          <span style={{ color: selectedTab === 'agriculture' ? '#1877f2' : 'inherit' }}>Agriculture</span>
        </div>
      </div>
      <div className='graph_section'>
        <div class="seven">
          <h1><strong>{yearOfElection} GENERAL ELECTION RESULTS </strong></h1>
          <h2 style={{textAlign:'center'}}><strong>{constituencyNames[indexConst-1]}</strong></h2>
        </div>
        <div style={{display:'flex', justifyContent:'center', marginLeft:'1.8rem'}}>
        <SelectModule />
        </div>


        <div className='dashboard-main-section'>
          <div className='first-column'>
            <div style={{border:'2px solid black'}} className='data-card'>
              <div>
                <p><strong>Overview</strong></p>
              </div>
            { totalElectoralData.length>0 ? (
              <div>
                <p><strong>Electors:</strong> {totalElectoralData[0].totalElectors}</p>
                <p><strong>Votes Polled:</strong> {totalElectoralData[0].totalVoters}</p>
                <p><strong>Turnout:</strong> {totalElectoralData[0].totalVoterTurnout.toFixed(2)}%</p>
                <p><strong>Turnout:</strong> {totalElectoralData[0].totalValidVotes}</p>
                <p><strong>Total Valid Vote %:</strong> {totalElectoralData[0].totalValidVotesPercentage.toFixed(2)}%</p>
              </div> ): (<h2>No Data Available</h2>)
            }
            </div>

            <div className='small-table'>
              <div style={{ display: 'flex', flexDirection: 'column',backgroundColor:'white', alignItems: 'center', justifyContent: 'center', paddingTop: '0.5rem', borderRadius:'8px',border:'2px solid black' }}>
                <p style={{ textAlign: 'center' }}><strong>Party Wise Votes</strong></p>
                <YearVoteDataTable data={partyVote} />
              </div>
            </div>
            {/* <div className='search-election-data'>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div >
                  <p><strong>Search Election Data By Year or Constituency Name</strong></p>

                </div>
                <DropDownWidget />
              </div>
            </div> */}
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
              {/* <SmallTable partyType={"Alliance"} /> */}
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
        <div className='table-view'>
          <h2 style={{ color: 'rgb(19, 137, 149)', fontSize: '1.6rem', paddingLeft: '1rem' }}>All Constituency Vote Distribution for Year <span style={{ color: 'goldenrod' }}>{yearOfElection}</span></h2>
       
          <AllVoteDataTable data={electoralData} />
        </div>
        <div style={{marginTop:'2rem'}}  className='table-view'>
          <h2 style={{ color: 'rgb(19, 137, 149)', fontSize: '1.6rem', paddingLeft: '1rem' }}>GE Results Distribution Table For Winners of Year <span style={{ color: 'goldenrod' }}>{yearOfElection}</span></h2>
       
          <Table2 data={partyYearWiseData} />
        </div>
      </div>
    </div>
    </>
  )
}

export default DashboardPartyWise