import React, { useState, useEffect } from 'react';
import './HomePage2.css';
import { Link } from 'react-router-dom';
import PoliticalDataViewWindows from '../PoliticalDataUI/PoliticalDataViewWindows';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import DropDownWidget from '../ChartsGraphs/DropDownWidget'
import years from '../../Constants/GeneralElectionYears'
import { GoogleBarChart } from '../ChartsGraphs/GoogleBarChart';

const HomePage2 = () => {
  const [isCaptionVisible, setIsCaptionVisible] = useState(true);
  const [isNavFixed, setIsNavFixed] = useState(false);

  const data2 = [
    { Party: 'BJP', Seats: 72, VotesPercentage: '65%' },
    { Party: 'Congress', Seats: 22, VotesPercentage: '28%' }
  ];
    
  const data = [
    {
      constituency: "Constituency 1",
      parties: [
        { Party: 'BJP', Seats: 72, VotesPercentage: '65%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },

        // Add more parties as needed
      ]
    },
    {
      constituency: "Constituency 2",
      parties: [
        { Party: 'Party A', Seats: 50, VotesPercentage: '60%' },
        { Party: 'Party B', Seats: 30, VotesPercentage: '35%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },

        // Add more parties as needed
      ]
    },
    {
      constituency: "Constituency 2",
      parties: [
        { Party: 'Party A', Seats: 50, VotesPercentage: '60%' },
        { Party: 'Party B', Seats: 30, VotesPercentage: '35%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },

        // Add more parties as needed
      ]
    },
    {
      constituency: "Constituency 2",
      parties: [
        { Party: 'Party A', Seats: 50, VotesPercentage: '60%' },
        { Party: 'Party B', Seats: 30, VotesPercentage: '35%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },

        // Add more parties as needed
      ]
    },
    {
      constituency: "Constituency 2",
      parties: [
        { Party: 'Party A', Seats: 50, VotesPercentage: '60%' },
        { Party: 'Party B', Seats: 30, VotesPercentage: '35%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },

        // Add more parties as needed
      ]
    },
    {
      constituency: "Constituency 2",
      parties: [
        { Party: 'Party A', Seats: 50, VotesPercentage: '60%' },
        { Party: 'Party B', Seats: 30, VotesPercentage: '35%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },

        // Add more parties as needed
      ]
    },
    {
      constituency: "Constituency 2",
      parties: [
        { Party: 'Party A', Seats: 50, VotesPercentage: '60%' },
        { Party: 'Party B', Seats: 30, VotesPercentage: '35%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },

        // Add more parties as needed
      ]
    },
    {
      constituency: "Constituency 2",
      parties: [
        { Party: 'Party A', Seats: 50, VotesPercentage: '60%' },
        { Party: 'Party B', Seats: 30, VotesPercentage: '35%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },
        { Party: 'Congress', Seats: 22, VotesPercentage: '28%' },

        // Add more parties as needed
      ]
    },
    // Add more constituencies as needed
  ];



  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position to hide/show caption-search-div
      if (window.scrollY >= 0.5 * window.innerHeight) {
        setIsCaptionVisible(false);
      } else {
        setIsCaptionVisible(true);
      }

      // Check the scroll position to fix/unfix nav-links
      if (window.scrollY >= 0.5 * window.innerHeight) {
        setIsNavFixed(true);
      } else {
        setIsNavFixed(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='homepage2-container'>
      <div
        className='caption-search-div'
        style={{
          display: isCaptionVisible ? 'flex' : 'none',
          justifyContent: 'space-between',
          padding: '7px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h2 style={{ fontFamily: 'Roboto', color: 'white', fontStyle: 'italic', fontWeight: 'bold',marginTop:'4rem' }}>Mauritius</h2>
          <div style={{ display: 'flex', alignItems: 'center', marginRight: '2rem',alignItems:'flex-end' }}>
            <input style={{ width: '20rem', backgroundColor: 'white', borderRadius: '8px', position: 'relative' }} type='text' placeholder='search'></input>
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
      <div style={{ paddingTop: '0.8rem', paddingLeft: '1rem' }}>
        <h2 style={{ color: 'rgb(19, 137, 149)', fontSize: '1.6rem' }}>GE 2019 <span style={{ color: 'goldenrod' }}>Summary</span></h2>
        <PoliticalDataViewWindows />
      </div>
      <div className='cards-constituency-data'>
        <h2 style={{ color: 'rgb(19, 137, 149)', fontSize: '1.6rem' }}>Recent <span style={{ color: 'goldenrod' }}>General Elections Results 2019</span></h2>
        <div className='card-container' style={{ display: 'flex', gap: '1rem', overflowX: 'scroll', paddingBottom: '0.7rem' }}>

          {data.map((constituency, index) => (
            <div className='cards-constituency' key={index}>
              <p>{constituency.constituency}</p>
              <table className="custom-table">
                <div style={{ overflowY: 'scroll', height: '200px' }}>
                  <thead>
                    <tr>
                      <th>Party</th>
                      <th>Seats</th>
                      <th>Votes %</th>
                    </tr>
                  </thead>
                  <tbody >
                    {constituency.parties.map((party, partyIndex) => (
                      <tr key={partyIndex}>
                        <td>{party.Party}</td>
                        <td>{party.Seats}</td>
                        <td>{party.VotesPercentage}</td>
                      </tr>
                    ))}
                  </tbody>
                  <div className='view-results'>View All Results</div>
                </div>
              </table>
            </div>
          ))}

        </div>
      </div>

      <div className='state-summary'>
        <h2 style={{ color: 'rgb(19, 137, 149)', fontSize: '1.6rem' }}>Constituency <span style={{ color: 'goldenrod' }}>Summary</span></h2>
        <div style={{ display: 'flex', flex: 1 }}>
          <div style={{ flex: 0.3, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ border: '2px solid black', borderRadius: '7px', padding: '0.7rem', display:'flex', alignItems:'center', justifyContent:'center' }}>
              <DropDownWidget names={years} />
            </div>
            <div style={{ border: '2px solid black', padding: '0.3rem', borderRadius: '6px' }}>
              <h3 style={{ fontSize: '16px' }}>Constituency :<span style={{ color: 'blueviolet' }}>Rodriguez</span></h3>
              <h3 style={{ fontSize: '16px' }}>Total Seats :<span style={{ color: 'violet' }}>8</span></h3>
            </div>
            <div>
              <table style={{ borderRadius: '6px', border: '2px solid black' }} className="custom-table">
                <div>
                  <thead>
                    <tr>
                      <th>Party</th>
                      <th>Seats</th>
                      <th>Votes %</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data2.map((item, index) => (
                      <tr key={index}>
                        <td>{item.Party}</td>
                        <td>{item.Seats}</td>
                        <td>{item.VotesPercentage}</td>
                      </tr>
                    ))}
                  </tbody>
                  <div className='view-results'>View All Results</div>
                </div>
              </table>
            </div>
          </div>
          <div style={{ flex: 0.7, display: 'flex', gap: '1rem', paddingLeft: '1rem' }}>
            <div style={{ border: '2px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0.8rem' }}>
              <GoogleBarChart />
            </div>

          </div>
        </div>
      </div>
    </div>

  );
};

export default HomePage2;
