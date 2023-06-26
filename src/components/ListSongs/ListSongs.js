import React, { useContext } from 'react';
import { SongsContext } from '../../App';

const ListSongs = () => {
    const { dataSong, handlePlaySong, filterSongByAuthor } = useContext(SongsContext);
    const renderSongs = () => {
        return (
            dataSong.map((song, index) => (
                <div 
                    key={index} 
                    className='px-4 py-5 card-song relative h-max bg-card rounded-md cursor-pointer transaleteY-hover transition-btn'
                    onClick={() => handlePlaySong(song.id)}    
                >
                    <img className='rounded-md w-full object-cover object-center' alt='Poster' src={song.links.images[1].url} />
                    <div className='mt-4'>
                        <p className='font-semibold text-sm max-line-1'>{song.name}</p>
                        <div className='mt-4 w-full flex justify-between items-end'>
                            <img className='play-btn-size rounded-full object-cover object-center' src={song.links.images[0].url} alt='avatar' />
                            <p className='mt-2 text-sm' onClick={() => filterSongByAuthor(song.author)}>{song.author}</p>
                        </div>
                        <button className='btn-play-song hidden absolute animation-btn transition-btn right-3 top-1/2 play-btn-size bg-main-btn text-black rounded-full grid place-items-center'>
                            <i className="fa-solid fa-play"></i>
                        </button>
                    </div>
                </div>
            ))
        );
    }
    return (
        <div className='h-list-songs w-full bg-inside rounded-md mt-4 px-8 py-4 grid mb:grid-cols-1 mb:gap-1 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4 overflow-y-scroll'>
            {
               dataSong.length !== 0 ? renderSongs() : <p className="text-white fs-sm">No song is found!</p>
            }
        </div>
    );
};

export default ListSongs;