import React, { useContext, useRef } from 'react';
import { SongsContext } from '../../App';
import PlayingControl from '../PlayingControl/PlayingControl';
import Footer from '../Footer/Footer';

const Sidebar = () => {
    const { currentSong, filterSongByAuthor, findSongs, handleTypeForm } = useContext(SongsContext);
    const btnMenu = useRef();
    const btnClose = useRef();
    const navMobileMenu = useRef();

    const handleShowMenu = () => {
        console.log(navMobileMenu.current);
        navMobileMenu.current.classList.add('nav-mobile-menu');
    }
    const handleHideMenu = () => {
        console.log(navMobileMenu.current);
        navMobileMenu.current.classList.remove('nav-mobile-menu');
    }

    return (
        <div className='bg-inside mb:w-full mb:mb-4 lg:w-1/4 lg:mr-2 lg:mb-0 p-4 rounded-md'>
            <div className='flex items-center justify-between c-main text-xl'>
                <div className='flex items-center'>
                    <i className="fa-brands fa-spotify text-xl"></i>
                    <h1 className='ml-4 font-bold'>K-Spotify</h1>
                </div>
                <div>
                    <div className='mb:hidden md:flex lg:hidden justify-between'>
                        <div className='flex bg-white rounded-3xl p-1'>
                            <input
                                onChange={(e) => findSongs(e.target.value.trim().toLowerCase())}
                                className='py-1 text-gray-800 pl-2 rounded-md w-50 outline-none text-sm ml-2' placeholder='Search name of song!'
                            />
                            <button className='bg-main-btn px-3 py-1 rounded-3xl font-semibold text-sm'>
                                <i className="fa-solid fa-magnifying-glass text-white"></i>
                            </button>
                        </div>
                        <div className=''>
                            <button className='text-gray-300 text-sm px-3 py-1 rounded-2xl font-semibold'
                                onClick={() => handleTypeForm('register')}
                            >Sign up</button>
                            <button
                                className='bg-white text-black text-sm px-3 py-1 rounded-2xl font-semibold'
                                onClick={() => handleTypeForm('login')}
                            >Sign in</button>
                        </div>
                    </div>
                    <div className='mb:block md:hidden text-white btn-menu cursor-pointer'
                        ref={btnMenu}
                        onClick={() => handleShowMenu()}>
                        <i class="fa-solid fa-bars"></i>
                    </div>
                    <div className='mb:hidden fixed top-0 left-0 p-2 bg-white w-full z-10 py-24 animation-menu' 
                        ref={navMobileMenu}>
                        <div className='mb:block md:hidden text-black btn-menu fixed top-6 right-8 text-md cursor-pointer'
                            onClick={() => handleHideMenu()}
                            ref={btnClose}>
                            <i class="fa-solid fa-close"></i>
                        </div>
                        <div className='flex bg-white rounded-3xl p-1 border-main'>
                            <input
                                onChange={(e) => findSongs(e.target.value.trim().toLowerCase())}
                                className='py-1 text-gray-800 pl-2 rounded-md w-full outline-none text-sm ml-2' placeholder='Search name of song!'
                            />
                            <button className='bg-main-btn px-3 py-1 rounded-3xl font-semibold text-sm'>
                                <i class="fa-solid fa-magnifying-glass text-white"></i>
                            </button>
                        </div>
                        <div className='flex flex-col mt-8'>
                            <button className=' bg-main-btn text-white text-sm px-3 py-1 rounded-2xl font-semibold'
                                onClick={() => handleTypeForm('register')}
                            >Sign up</button>
                            <button
                                className='bg-main text-white text-sm px-3 py-1 rounded-2xl font-semibold ml-0 mt-2'
                                onClick={() => handleTypeForm('login')}
                            >Sign in</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-10 flex flex-col items-center'>
                <img className='rotate-poster song-poster-size rounded-full object-cover object-center' src={currentSong.links.images[1].url} alt='song-poster' />
                <h2
                    className='mt-4 font-bold c-main'>{currentSong.name}</h2>
                <div className='mt-4 flex items-end justify-between'>
                    <img className='play-btn-size rounded-full object-cover object-center' src={currentSong.links.images[0].url} alt='avatar' />
                    <button
                        onClick={() => filterSongByAuthor(currentSong.author)} s
                        className='ml-4 mt-2'>{currentSong.author}</button>
                </div>
            </div>
            <PlayingControl currentSong={currentSong} />
            <Footer type='pc' />
        </div>
    );
};

export default Sidebar;