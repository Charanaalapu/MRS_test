import React from 'react'
import ColumnChart from '../ChartsGraphs/ColumnChart'
import './EconomicDataDashboard.css';
import AnnualChangeGraph from '../ChartsGraphs/AnnualChangeGraph'
import StackedBarChart from '../ChartsGraphs/StackedBarChart';
import FDICharts from '../ChartsGraphs/FDICharts';
import TimeSeriesChart from '../ChartsGraphs/TimeSeriesChart'
import TimeSeriesImportChart from '../ChartsGraphs/TimeSeriesImportChart'
import TourismChart from '../ChartsGraphs/TourismChart'
import GDPKeyIndicatorsTable from '../Tables/GDPKeyIndicatorsTable'


const EconomicDataDashboard = () => {
 
  return (
    <><div>
      <div class="seven">
        <h1 style={{fontFamily:'Roboto', letterSpacing:0, marginTop:'0.7rem'}}><strong>MAURITIUS ECONOMIC REPORT </strong></h1>
      </div>
      <div style={{paddingLeft:'1rem', paddingRight:'1rem', display:'flex', flexDirection:'column', gap:'1rem', overflowY:'scroll'}} className="economy-dashboard-main">
        <div style={{flex:1}} className='first-row'>
          <div id='FDI' style={{display:'flex', flex:0.5, alignItems:'center', flexDirection:'column', border:'2px solid black', borderRadius:'8px', backgroundColor:'white'}}>
          <p style={{textAlign:'center', alignItems:'center', marginBottom:'0.8rem', marginTop:'0.8rem'}}><strong>GDP & Per Capita Income Graph</strong></p>
          <ColumnChart style={{flex:0.5}} />
          </div>
          <div id='FDI' style={{display:'flex',alignItems:'center', flex:0.5, flexDirection:'column', border:'2px solid black', borderRadius:'8px', backgroundColor:'white'}}>
          <p style={{textAlign:'center', alignItems:'center', marginBottom:'0.8rem', marginTop:'0.8rem'}}><strong>GDP & Annual Growth Change Y.O.Y</strong></p>
          <AnnualChangeGraph />
          </div>
        </div>
        <div class="eight">
  <h1><strong>Foreign Investments</strong></h1>
</div>
        <div style={{flex:1, display:'flex', gap:'2rem'}} className='second-row'>
          <div id='FDI' style={{display:'flex', flex:0.5, alignItems:'center', flexDirection:'column', border:'2px solid black', borderRadius:'8px', backgroundColor:'white'}}>
          <p style={{textAlign:'center', alignItems:'center', marginBottom:'0.8rem', marginTop:'0.8rem'}}><strong>FDI Inflow & Outflow </strong></p>
          <StackedBarChart style={{flex:0.5}} />
          </div>
          <div id='FDI' style={{display:'flex', flex:0.5, alignItems:'center', flexDirection:'column', border:'2px solid black', borderRadius:'8px', backgroundColor:'white'}}>
          <p style={{textAlign:'center', alignItems:'center', marginBottom:'0.8rem', marginTop:'0.8rem'}}><strong>Mauritius Foreign Direct Investment - Historical Data</strong></p>
          <FDICharts style={{flex:0.5}} />
          </div>
        </div>
        <div class="eight">
  <h1><strong>IMPORT EXPORT</strong></h1>
</div>
        <div style={{flex:1, display:'flex', gap:'2rem'}} className='third-row'>
          
          <div id='FDI' style={{display:'flex', flex:0.5, alignItems:'center', flexDirection:'column', border:'2px solid black', borderRadius:'8px', backgroundColor:'white'}}>
          <p style={{textAlign:'center', alignItems:'center', marginBottom:'0.8rem', marginTop:'0.8rem'}}><strong>Mauritius Export 1976-21 </strong></p>
          <TimeSeriesChart style={{flex:0.5}} />
          </div>
          <div id='FDI' style={{display:'flex', flex:0.5, alignItems:'center', flexDirection:'column', border:'2px solid black', borderRadius:'8px', backgroundColor:'white'}}>
          <p style={{textAlign:'center', alignItems:'center', marginBottom:'0.8rem', marginTop:'0.8rem'}}><strong>Mauritius Import 1976-21 </strong></p>
          <TimeSeriesImportChart style={{flex:0.5}} />
          </div>
        </div>
        <div class="eight">
  <h1><strong>Tourism</strong></h1>
</div>
        <div style={{flex:1, display:'flex', gap:'2rem'}} className='fourth-row'>
          <div id='FDI' style={{display:'flex', flex:1, alignItems:'center', flexDirection:'column', border:'2px solid black', borderRadius:'8px', backgroundColor:'white'}}>
          <p style={{textAlign:'center', alignItems:'center',justifyContent:'center', marginBottom:'0.8rem', marginTop:'0.8rem'}}><strong>Mauritius Tourism Statistics </strong></p>
          <TourismChart  />
          </div>
        </div>
        <div class="eight">
  <h1 ><strong >KEY INDICATORS OF GDP</strong></h1>
</div>
        <GDPKeyIndicatorsTable />
      </div>
    </div>
    </>
  )
}

export default EconomicDataDashboard