import React,{useContext} from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { AppContext } from './Context';

const Singlemovie = () => {
    const {id}=useParams();
    const { movies } = useContext(AppContext)
    const  movie=movies.find((item)=>item.imdbID ===id )
   
  return (
    <div className=''>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-lg-6 offset-lg-3'>

          <div className="card mb-2 mt-4" >
                  <img className=" img-fluid"   src={movie.Poster} alt="Card image cap " />
                  <div className="card-body">
                    <h5 className="card-title">Title {movie.Title}</h5>
                    <h5 className="card-title">Released Year {movie.Year}</h5>
                    <NavLink  to='/'  className={'btn btn-danger'} >Go back</NavLink>
                    
                  </div>
                </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Singlemovie