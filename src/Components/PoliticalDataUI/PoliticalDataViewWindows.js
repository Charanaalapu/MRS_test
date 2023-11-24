import React from 'react'
import './PoliticalDataViewWindows.css'
import ChartsGraphs from '../ChartsGraphs/ChartsGraphs'
import ElectionData from './ElectionData'
import DropDownWidget from '../ChartsGraphs/DropDownWidget'
import constituencyNames from '../../Constants/Constituency-names'
const PoliticalDataViewWindows = () => {

  const resultType = "Alliance";
  const resultType2 = "Party"
  
  return (
    <div className='political-data-window'>
        <div style={{display:'flex', gap:'1.5rem'}} className='past-election-results'>
            <div style={{display:'flex', flexDirection:'column', width:'500px', border:'2px solid black', borderRadius:'8px'}}>
              <h3 style={{backgroundColor:'GrayText', borderRadius:'7px', paddingLeft:'4px',paddingRight:'4px', fontSize:'large', color:'white'}}>2019 General Election Results</h3>
              <ChartsGraphs data={resultType}  />
            </div>
            <div style={{display:'flex', flexDirection:'column', width:'500px', border:'2px solid black', borderRadius:'8px'}}>
              <h3 style={{backgroundColor:'GrayText', borderRadius:'7px', paddingLeft:'4px',paddingRight:'4px', fontSize:'large', color:'white'}}>2019 General Election Results</h3>
              <ChartsGraphs data={resultType2}  />
            </div>
            <div style={{display:'flex', flexDirection:'column', alignItems:'center',width:'500px', gap:'0.8rem',border:'2px solid black',borderRadius:'8px'}} >
              <h3 style={{backgroundColor:'GrayText',width:'100%', borderRadius:'7px', paddingLeft:'4px',paddingRight:'4px', fontSize:'large',color:'white'}}>Search Election Data By Year</h3>
            <DropDownWidget names={constituencyNames} />
            </div>
        </div>
    </div>
  )
}

export default PoliticalDataViewWindows