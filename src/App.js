
import './App.css';
import Explore from './components/Explore';
import Home from './components/Home';
import Playlist from './components/Playlist';
import SideNav from './components/SideNav';
import Watchlater from './components/Watchlater';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div className='row'>
        <div className='col s4'>
          <SideNav />
        </div>
        <div className='col s8'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/playlist" elementt={<Playlist />} />
            <Route path="/watchlater" element={<Watchlater />} />

          </Routes>
        </div>
      </div>
    </div >
  );
}

export default App;
