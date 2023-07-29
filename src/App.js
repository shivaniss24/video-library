
import './App.css';
import { Explore } from './components/Explore';
import { Home } from './components/Home';
import { Playlist } from './components/Playlist';
import { Watchlater } from './components/Watchlater';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/playlist" elementt={<Playlist />} />
        <Route path="/watchlater" element={<Watchlater />} />

      </Routes>

    </div>
  );
}

export default App;
