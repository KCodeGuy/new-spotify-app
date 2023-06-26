import { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import ListSongs from './components/ListSongs/ListSongs';
import Sidebar from './components/Sidebar/Sidebar';
import GlobalStyle from './styles';
import DataSong from './data/songs.json';
import FormBase from './components/Form/FormBase';
import Footer from './components/Footer/Footer';

export const SongsContext = createContext();
let temDataSong = DataSong;

const listTypeOfSongs = temDataSong.map(data => data.type);
const listUniquesTypeOfSongs = listTypeOfSongs.filter((item, index, a) => a.indexOf(item) === index);

function App() {
  const [dataSong, setDataSong] = useState(temDataSong);
  const [currentSong, setCurrentSong] = useState(temDataSong[0]);
  const [typeForm, setTypeForm] = useState('');

  const handleTypeForm = (type) => {
    setTypeForm(type);
  }

  const handlePlaySong = (index) => {
    const song = dataSong.find(s => s.id === index);
    setCurrentSong(song);
  }

  const findSongs = (keyWord) => {
    let resultSong;
    if (keyWord) {
      resultSong = dataSong.filter(song => song.name.toLowerCase().includes(keyWord))
      setDataSong(resultSong);
    } else {
      setDataSong(temDataSong);
    }
  }

  const filterSongs = (type) => {
    if (type) {
      const resultSong = temDataSong.filter(song => song.type === type);
      setDataSong(resultSong);
    }
  }

  const filterSongByAuthor = (author) => {
    if (author) {
      const resultSong = temDataSong.filter(song => song.author === author);
      setDataSong(resultSong);
    }
  }

  return (
    <GlobalStyle>
      <SongsContext.Provider value={{ dataSong, currentSong, handlePlaySong, findSongs, filterSongs, filterSongByAuthor, handleTypeForm, typeForm }}>
        <div className='mb:flex-wrap lg:flex-nowrap w-full flex bg-main text-white px-4 py-2 overflow-hidden'>
          <div onClick={() => setTypeForm('')} className={`fixed top-0 left-0 right-0 bottom-0 bg-slate-950 opacity-50 z-10 ${typeForm ? 'block' : 'hidden'}`}></div>
          <FormBase type={typeForm} />
          <Sidebar />
          <div className='mb:w-full lg:w-3/4 overflow-hidden'>
            <Header listUniquesTypeOfSongs={listUniquesTypeOfSongs} />
            <ListSongs />
          </div>
          <Footer type='mobile' />
        </div>
      </SongsContext.Provider>
    </GlobalStyle>
  );
}

export default App;
