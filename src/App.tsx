import './App.css';
import DetailSong from './components/DetailSong';
import ListSong from './components/ListSong';
import Navbar from './components/Navbar';
import Songs  from './Context';


function App() {
  return (
    <>
      <Songs.Provider>
        <Navbar/>
          <div className="grid grid-cols-3 h-screen-navbar-player">
            <DetailSong/>
            <ListSong/>
        </div>
      </Songs.Provider>
    </>
  );
}

export default App;
