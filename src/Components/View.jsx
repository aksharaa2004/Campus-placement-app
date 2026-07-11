import axios from 'axios'
import React, { useEffect, useState } from 'react'

const View = () => {
    const [data,changedata]=useState([])

    const fetchdata=()=>{
        axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/placement.json").then(
            (response)=>{
                changedata(response.data)
            }
        ).catch()

    }
    useEffect(
        ()=>{fetchdata()},[]
    )
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        {data.map(
                            (value,index)=>
                            {
                                return(
                                      <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                            <div class="card">
                                {/* <img src={value.image} height={400} alt="..."/> */}
                                <div class="card-body">
                                    <h5 class="card-title">{value.regNo}</h5>
                                    <p class="card-text">{value.fullName}</p>
                                    <p class="card-text">{value.branch}</p>
                                    <p class="card-text">{value.sslcMark}</p>
                                    <p class="card-text">{value.plusTwoMark}</p>
                                    <p class="card-text">{value.ugMark}</p>
                                    <p class="card-text">{value.pgDegree}</p>
                                   
                                    
                                    {/* <a href="#" class="btn btn-primary">Add</a> */}
                                </div>
                                </div>
                        </div>
                                )
                            }
                        )}
                        
                    </div>
                </div>
            </div>
        </div>    
    </div>
  )
}

export default View