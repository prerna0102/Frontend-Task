import Gallery from './components/Gallery';
import './App.css';
import { useState } from 'react';
import Home from './components/Home';
import SearchBar from './components/SearchBar';

// require('dotenv').config();
// console.log(process.env);

// const clientId = process.env.CLIENT_ID;
const clientId = 'OOxWBzSVtfXsJ3hqP4ysN40iiO6GelDRkPAcEnCXY6Y';
let query = '';

function App() {

  const[searched,setSearched] = useState(false);
  const[images,setImages] = useState([]);

  async function fetchAPI(query){
    if(query==='') return;
    const url = 'https://api.unsplash.com/search/photos/?client_id='+clientId+'&query='+query;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    setImages(data.results);
  }

  function onClickHandler(query){
    if(query==='') return;
    setSearched(true);
    console.log(query);
    fetchAPI(query);
  }


  return (
    <div className='App'>
      {!searched && <Home value={query} onClickHandler={onClickHandler}/>}
      {searched && 
      <div className='flex'>
          <SearchBar value={query} onClickHandler={onClickHandler}/>
          <Gallery images={images}/>
       </div>}
    </div>
  );
}

export default App;
