import React from 'react'
import './Dashboard.css';
import Bargraph from './Bargraph';
import MultipleSelect from './MultipleSelect';
import YearSelect from './YearSelect';
import SearchIcon from '@mui/icons-material/Search';
import Table1 from '../Tables/Table1'
import DropDownWidget from '../ChartsGraphs/DropDownWidget'
import SmallTable from '../Tables/SmallTable'
const Dashboard = () => {
  return (
    <div className='dash-main'>
      {/* <div className='heading'>
        <h4>Delhi Lok Sabha / Parliamantary Alliances - 2019 </h4>
      </div> */}
      <div style={{ marginTop: '2rem' }} class="seven">
        <h1>2019 Alliance Wise Data</h1>
      </div>
      <div>
        <h3 style={{ color: "rgb(72, 137, 149)" ,paddingLeft:'0.8rem'}}>GE: <span style={{ color: 'goldenrod' }}>Rodriguez</span> 2019</h3>
      </div>
      <div className='boxes'>
        <div style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'space-around' }} className='first-row'>
          {/* <div id='left1'>
            sample data
          </div> */}
          <div style={{display:'flex',flexDirection:'column', flex: 0.33, gap:'1rem' }} id='left2'>
          <div className='data-card'>
            <div>
            <p><strong>Overview</strong></p>
            </div>
            <div>
            <p><strong>Electors:</strong> 2,05,06,994</p>
          <p><strong>Votes Polled:</strong> 1,79,86,066</p>
          <p><strong>Turnout:</strong> 87.7%</p>
          <p><strong>Total Seats:</strong>6</p>
            </div>
          </div>
            {/* <table class="table">
              <thead >
                <tr>
                  <th>Alliance</th>
                  <th>Seats</th>
                  <th>Votes %</th>
                  <th>Contested Voteshare</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
              </tbody>
            </table> */}
            <div className='small-table'>
            <SmallTable />
            </div>
          </div>
          <div className='bar-graph-alliance' style={{ flex: 0.33 }}>
          <p style={{textAlign:'center', marginTop:'0.3rem'}}><strong>Search Election Data By Year or Constituency Name</strong></p>
            <Bargraph />
          </div>
          <div style={{border:'1px solid black'}} className='search-election-data'>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <p><strong>Search Election Data By Year or Constituency Name</strong></p>
              <DropDownWidget />
            </div>
          </div>
          {/* <div className='right_div'>
        <MultipleSelect/>
        <YearSelect/>
        <button id='search_icon' style={{display:'flex', alignItems:'center', backgroundColor:'black',color:'white', borderRadius:'6px'}} onClick={()=> {}}><SearchIcon />View Data</button>
        </div> */}
        </div>
      </div>
      <div id='lower_table'>
        {/* <table class="table table-sm">
  <thead >
    <tr>
      <th>Allience</th>
      <th>Party</th>
      <th>Contested </th>
      <th>Won</th>
      <th>Votes %</th>
      <th>Contested VoteShare</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="3" style={{"textAlign":"center","verticalAlign":"middle","backgroundColor":"rgb(196, 116, 81)"}}>NDA</td>
      <td>Bharatiya Janta Party</td>
      <td>10</td>
      <td>9</td>
      <td>36.4</td>
      <td>52.4</td>
    </tr>
    <tr>
      <td >Bodoland Peoples Front</td>
      <td>1</td>
      <td>0</td>
      <td>2.5</td>
      <td>30.5</td>
    </tr>
    <tr>
      <td>Asom Gana Parisad</td>
      <td>3</td>
      <td>0</td>
      <td>8.3</td>
      <td>32.7</td>
    </tr>
    <tr>
      <td rowspan="3" style={{"textAlign":"center","verticalAlign":"middle","backgroundColor":"rgb(149, 185, 199)"}}>UPA</td>      <td>Indian National Congress</td>
      <td>14</td>
      <td>3</td>
      <td>36.5</td>
      <td>35.3</td>
    </tr>
    <tr>
      <td>Nationalist Congress Party</td>
      <td>2</td>
      <td>0</td>
      <td>0.1</td>
      <td>0.5</td>
    </tr>
    <tr>
      <td>Communist Party Of India</td>
      <td>2</td>
      <td>0</td>
      <td>0.2</td>
      <td>1.3</td>
    </tr>
    
  </tbody>
</table> */}
  <h3 style={{ color: "rgb(72, 137, 149)" }}>GE: <span style={{ color: 'goldenrod' }}>Rodriguez 2019</span> Alliance Wise Distribution Table</h3>
  <Table1 />
  </div>
  </div>

  )
}

export default Dashboard
