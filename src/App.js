
import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';

import Home from './Home';
import MovieDetail from './MovieDetail';

 

const App = () => {
  return (
 < BrowserRouter>
<div>
  
  <Routes>
    <Route path="/" exact element={<Home/>} />
    <Route path="/detail/:idMovie" element={<MovieDetail />} />
  </Routes>

</div>
</BrowserRouter>
  );
}

export default App;


//////////////////////////////////////////
