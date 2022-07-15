import React ,{useEffect,useState}from 'react'
const AppContext=React.createContext();


const url='here put  api  url'

const AppProvider=({children})=>{
        
    const [movies,setMovies]=useState([])
    const [Error,setError]=useState({msg:''})
    const [load,setLoad]=useState(false)
    const [query,setQuery]=useState('love')
    const  getMovies= async(url)=>{
        try {
            const  resp=await fetch(url);
            const result=await resp.json();
            // console.log(result)
            if(result.Response==='True'){
                setLoad(false)
                setMovies(result.Search)
                
            }
           
           } catch (error) {
          throw error
               }
        }

       useEffect(()=>{
        getMovies(`${url}&s=${query}`)
            },[query])
        


    return <AppContext.Provider  value={{movies,query,setQuery}}>{children}</AppContext.Provider>
};

export {AppContext,AppProvider}