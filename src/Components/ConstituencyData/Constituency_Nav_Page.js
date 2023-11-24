import React from 'react'
import { Link } from 'react-router-dom'
import constList from '../../Constants/Constituency-names'
const Constituency_Nav_Page = () => {
  return (
    <div className='constituency-page-main'>
            <div>
                <h3>Constituencies</h3>
            </div>
            <div style={{flex:1, display:'flex'}} className='list-container-main'>
                <div style={{flex:0.25, borderRadius:'8px' }} className='list-area'>
                <ul style={{ listStyle: 'none', backgroundColor: 'white', width: '100%', overflowY: 'scroll',height:'90vh', display: 'flex', justifyContent: 'flex-start', flexDirection: 'column', gap: '1rem', borderRadius:'8px', border:'2px solid black', marginLeft:'0.8rem'}}>
  {constList.map((data, index) => (
    <li key={index} className='constituency-links' style={{}}>
      <Link className='constituency-links-tab' to="/">{data}</Link>
    </li>
  ))}
</ul>
                </div>
                <div style={{flex:0.7}} className='map-area'>
                    <img></img>
                </div>
            </div>
    </div>
  )
}

export default Constituency_Nav_Page