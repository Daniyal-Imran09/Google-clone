import Home from './pages/Home.js'
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Searchpage from './components/Searchpage.js';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/search" element = {<Searchpage/>}>
          
          </Route>
          <Route path = "/" element = {<Home/>}>
          
          </Route>
        </Routes>
      </Router>
   
  
    </div>
  );
}

export default App;
