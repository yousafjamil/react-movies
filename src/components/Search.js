import React, { useContext } from 'react'
import { AppContext } from './Context'

const Search = () => {
    // const [name,setName]=React.useState('')
    const {query,setQuery}=useContext(AppContext)
  return (
    <div className='container mt-5'>
        <div className='row'>
            <div className='col-lg-10'>

            <form onSubmit={(e)=>e.preventDefault()}>
            <input  value={query} onChange={(e)=>setQuery(e.target.value)} className='form-control'  placeholder='Search Movies'/>
            </form>
            </div>
        </div>
       
    </div>
  )
}

export default Search