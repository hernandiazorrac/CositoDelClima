import './App.css';
import LocalDate from './LocalDate/LocalDate';
import './SearchBar/SearchBar'
import SearchBar from './SearchBar/SearchBar';
import WeatherObject from './WeatherObject/WeatherObject';

function App() {

  return (
    <div className="App">
      <main>
        <SearchBar />
        <LocalDate />
        <WeatherObject />
      </main>
    </div>
  );
}

export default App;
