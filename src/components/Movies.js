import React, { useContext } from 'react'
import { AppContext } from './Context'
import { NavLink } from 'react-router-dom'
const Movies = () => {
  const { movies } = useContext(AppContext)
  console.log(movies)
  return (
    <div className='container'>
      <div className='row'>

        {
          movies.map((item, index) => {
            const   {imdbID,Poster,Title}=item
            return <>
              
              <div className='col-lg-3'>
<NavLink to={`singlemovie/${imdbID}`}>
                <div className="card mb-2" >
                  <img className="card-img-top img-fluid" style={{ height: "250px" }} src={Poster} alt="Card image cap " />
                  <div className="card-body">
                    <h5 className="card-title">{Title.substring(0, 20)}...</h5>
                    {/* <p className="card-text">{item.Year}</p> */}
                  </div>
                </div>
                </NavLink>
              </div>
            </>
          })
        }
      </div>
    </div>
  )
}

export default Movies