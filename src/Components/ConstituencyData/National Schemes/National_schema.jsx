import React from 'react'
import Schema_data from './National_schema_data'
import './National_schema.css';
import '../DashboardPartyWise.css';
const National_schema = () => {
    return (
        <div className='Schema_container' style={{display:'flex',flexDirection:'column',}}>
            <div style={{display:'flex', backgroundColor:'antiquewhite',marginBottom:'1rem', borderRadius:'8px', border:'1px solid black'}}>
            {/* <div style={{fontFamily:'Roboto', fontFamily:'Roboto', fontSize:'2rem'}}>Se </div> */}
            <select style={{fontFamily:'Roboto', fontFamily:'Roboto', fontSize:'1.5rem', }} className="language-dropdown">
            <option value="en">Past Schemes</option>
              <option value="en">Upcomming Schemes</option>
              <option value="es">Sanctioned Schemes</option>
              <option value="fr">Controversial Schemes</option>
            </select>
            </div>
          <h2 style={{fontFamily:'Roboto'}}><strong> National Public Schemes </strong></h2>
        
        <div id='Schema_table'>
            <table border='2px' class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>Sr No.</th>
                        <th>Name of the Scheme</th>
                        <th>Agenda of the Scheme</th>
                        <th>Launch Date </th>
                    </tr>
                </thead>
                <tbody id="Schema_tabel_body">{
                    Schema_data.map((items, index) => (
                        <tr key={index}>
                            <td style={{textAlign:"center"}}>{items['Sr No.']}</td>
                            <td style={{paddingLeft:"10px"}}>{items['Name of the Scheme']}</td>
                            <td style={{paddingLeft:"10px"}}>{items['Agenda of the Scheme']}</td>
                            <td style={{textAlign:"center"}}>{items['Launch Date ']}</td>

                        </tr>


                    ))
                }
                </tbody>
            </table>

        </div>
        </div>
    )
}

export default National_schema
