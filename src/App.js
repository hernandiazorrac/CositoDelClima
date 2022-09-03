import './App.css';
import LocationAndDate from './LocationAndDate/LocationAndDate';
import './SearchBar/SearchBar'
import SearchBar from './SearchBar/SearchBar';
import WeatherObject from './WeatherObject/WeatherObject';

function App() {

  return (
    <div className="App">
      <main>
        <SearchBar />
        <LocationAndDate />
        <WeatherObject />
      </main>
    </div>
  );
}

export default App;
