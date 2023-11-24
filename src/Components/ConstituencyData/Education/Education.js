import React from 'react'
import LineChartBasic from '../../ChartsGraphs/LineChartBasic'
const Education = () => {
    return (
        <div style={{ width: '100%', height: '90vh' }}>
            <div class="seven">
                <h1 style={{ fontFamily: 'Roboto', letterSpacing: 0, marginTop: '0.7rem' }}><strong>EDUCATION REPORT</strong></h1>
            </div>
            
                <div style={{ display: 'flex', width: '100%' }}>
                    <LineChartBasic />
                </div>
                



        </div>
    )
}

export default Education