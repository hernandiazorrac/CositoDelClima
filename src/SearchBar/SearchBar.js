import { useState } from 'react';
import './SearchBar.css'

const api = {
  key: "93afee0008cb9b8ff8daf84106c6978c",
  base: "https://api.openweathermap.org/data/2.5/"
}

const SearchBar = () => {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const url = `${api.base}weather?q=${query}&unit=metric&APPID=${api.key}`;

  const search = e => {
      if(e.key === "Enter"){
      fetch(url)
          .then(res => res.json())
          .then(result => {
            setWeather(result);
            setQuery('');
            console.log(result);
          })
      }
  }  

return(
  <>
    <div className="searchBox">
      <input 
        type="text"
        className="searchBar"
        placeholder="Buscar ciudad..."
        onChange={evt => setQuery(evt.target.value)}
        value={query}
        onKeyPress={search}
        />
    </div>
    <h5>{weather.name}, {weather.sys.country}</h5>
  </>
)
}

export default SearchBar;