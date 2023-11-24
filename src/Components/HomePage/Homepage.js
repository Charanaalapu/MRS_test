import React from 'react'
import names from '../../Constants/Constituency-names'
import ChartsGraphs from '../ChartsGraphs/ChartsGraphs'
import BarGraph from '../ChartsGraphs/BarGraph'
import ConstituencyViewWindow from '../ConstituencyViewWindow'
import './Homepage.css'
const Homepage = () => {

    console.log(names)

    const handleNav = (index) => {

    }
    return (
        <div>
            <div className=''>

                <div className='constituency-list'>
                    {
                        names.map((data, index) => (
                            <div onClick={handleNav} key={index}>{data}</div>
                        ))
                    }
                </div>
                <div className='menu-bar'>
                    <div>Home</div>
                    <div>Constituencies</div>
                    <div>Statistics</div>
                    <div>Other Sites</div>
                    <div>Help</div>
                    <div>About</div>
                </div>
                <div className='view-window'>
                    <ConstituencyViewWindow />
                </div>
            </div>

        </div>
    )
}

export default Homepage