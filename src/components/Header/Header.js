import React, { useContext } from 'react';
import { SongsContext } from '../../App';

const Header = ({ listUniquesTypeOfSongs }) => {
    const { findSongs, filterSongs, handleTypeForm } = useContext(SongsContext);
    return (
        <header className='w-full bg-inside rounded-md p-4'>
            <div className='mb:hidden lg:flex w-full justify-between'>
                <div className='flex bg-white rounded-3xl p-1'>
                    <input
                        onChange={(e) => findSongs(e.target.value.trim().toLowerCase())}
                        className='py-1 text-gray-800 pl-2 rounded-md w-50 outline-none text-sm' placeholder='Search name of song!'
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
            <div className='w-full mt-2 flex'>
                <div className=''>
                    {
                        listUniquesTypeOfSongs.map((type, index) => (
                            <button
                                onClick={() => filterSongs(type)}
                                key={index}
                                className='mb:mt-2 bg-white text-black px-3 py-1 rounded-2xl font-semibold text-sm'
                            >{type}</button>
                        ))
                    }
                    <button
                        className='bg-main-btn text-sm text-white px-3 py-1 rounded-2xl font-semibold'
                        onClick={() => findSongs('')}
                    >See all</button>
                </div>
            </div>
        </header>
    );
};

export default Header;