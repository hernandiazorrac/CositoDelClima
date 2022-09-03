import './App.css';
import './SearchBar/SearchBar'
import SearchBar from './SearchBar/SearchBar';

const api = {
  key: "93afee0008cb9b8ff8daf84106c6978c",
  base: "https://api.openweathermap.org/data/3.0"
}

function App() {
  return (
    <div className="App">
      <main>
        <SearchBar />
      </main>
    </div>
  );
}

export default App;
