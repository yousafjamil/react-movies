import './App.css';

import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom'
import Singlemovie from './components/Singlemovie';
import Movies from './components/Movies';
import Home from './components/Home';



function App() {
 
  return (
    <div className="App">
    
     <Navbar />
     <Routes>
     
       <Route path='/' exact element={<Home />     } />
       <Route path='/singlemovie/:id' exact element={  <Singlemovie />     } />
       <Route path='/movies' exact element={ <Movies />    } />
     
      

     </Routes>
  
  
    </div>
  );
}

export default App;
