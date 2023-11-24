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
import PartyWiseDataGraphSection from './PartyWiseDataGraphSection'
import EconomicDataDashboard from './EconomicDataDashboard'
import Header from '../Header'
import DemographyDashboard from './DemographyDashboard'
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import National_schema from './National Schemes/National_schema'
import SchoolIcon from '@mui/icons-material/School';
import Education from './Education/Education'
const DashboardPartyWise = () => {

  const [selectedTab, setSelectedTab] = useState(null);
  const [hoveredTab, setHoveredTab] = useState(null);

  const [toggleViews, setToggleViews] = useState('alliance');

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
    setHoveredTab(null);
    setToggleViews(tabName)
  };

  const { state } = useLocation();

  const { indexConst = '', yearOfElection = '' } = state || {};
  const [partyWiseData, setPartyWIseData] = useState([]);
  const [partyVote, setPartyVote] = useState([]);

  const data = [
    { Party: 'BJP', Seats: 72, VotesPercentage: '65%' },
    { Party: 'Congress', Seats: 22, VotesPercentage: '28%' }
  ];


  useEffect(() => {

    const token = localStorage.getItem('token');

    const callPartyWiseData = async () => {

      await fetch(`http://127.0.0.1:8000/ywcw?y=${yearOfElection}&cn=${indexConst}`,
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
          setPartyWIseData(data)

        })
    }
    const callPartyVote = async () => {

      await fetch(`http://127.0.0.1:8000/ywpwvs?y=${yearOfElection}&cn=${indexConst}`
      ,
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

    callPartyWiseData()
    callPartyVote()
  }, [indexConst, yearOfElection])



  return (
    <>
      <Header />
      <div className='dashboard-main'>

        <div className='sidebar_dashboard'>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.7rem' }}>
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

          <div
            className={`sidebar_tabs ${selectedTab === 'schemes' ? 'selected' : ''}`}
            style={{
              color: selectedTab === 'schemes' ? 'blue' : 'inherit',
              backgroundColor: selectedTab === 'schemes' ? '#add8e6' : hoveredTab === 'schemes' ? '#d3d3d3' : 'inherit',
            }}
            onClick={() => handleTabClick('schemes')}
            onMouseEnter={() => setHoveredTab('schemes')}
            onMouseLeave={() => setHoveredTab(null)}
          >
            <EmojiPeopleIcon />
            <span style={{ color: selectedTab === 'schemes' ? '#1877f2' : 'inherit' }}>National Schemes</span>
          </div>

          <div
            className={`sidebar_tabs ${selectedTab === 'education' ? 'selected' : ''}`}
            style={{
              color: selectedTab === 'education' ? '#1877f2' : 'inherit',
              backgroundColor: selectedTab === 'education' ? '#add8e6' : hoveredTab === 'education' ? '#d3d3d3' : 'inherit',
            }}
            onClick={() => handleTabClick('education')}
            onMouseEnter={() => setHoveredTab('education')}
            onMouseLeave={() => setHoveredTab(null)}
          >
            <SchoolIcon />
            <span style={{ color: selectedTab === 'education' ? '#1877f2' : 'inherit' }}>Education</span>
          </div>

        </div>
        <div className='graph_section'>
          {toggleViews === "alliance" ? <PartyWiseDataGraphSection /> : null}
          {toggleViews === "economic" ? <EconomicDataDashboard /> : null}
          {toggleViews === "demography" ? <DemographyDashboard /> : null}
          {toggleViews === "schemes" ? <National_schema /> : null}
          {toggleViews === "education" ? <Education /> : null}
        </div>
      </div>
    </>
  )
}

export default DashboardPartyWise