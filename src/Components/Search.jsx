import React from 'react'
import NavBar from './NavBar'

const Search = () => {
  return (
    <div>
        <NavBar/>
                <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-12 col-md-10 col-lg-8">
        <div className="card shadow p-4">
          <h2 className="text-center text-success mb-4">Search</h2>
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12">
                            <label htmlFor="" className="form-label">Registration Number:</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12">
                            <button className="btn btn-success">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Search