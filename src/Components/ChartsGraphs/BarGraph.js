import React, { useEffect, useState } from 'react'

const BarGraph = () => {
    const [candidates,setCandidates]=useState();

    const fetchCandidates = async () => {
        try {
            await fetch(`http://127.0.0.1:8000/seats-by-gender`)
                .then((project_response) => {
                    console.log(project_response)
                    return project_response.json();
                }).then((data) => {
                    // console.log(data)
                    setCandidates(data);
                })
        } catch (error) {
            alert("Error Encountered, Try Again")
        }
    }
useEffect(()=>{
fetchCandidates();

},[])
console.log(candidates)
  return (
    <div>BarGraph</div>
  )
}

export default BarGraph