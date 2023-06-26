import React from 'react';

const Footer = (props) => {
    return (
        <div className={`${props.type === 'mobile' ? 'mb:flex lg:hidden' : 'mb:hidden lg:flex'}  mt-24 w-full justify-between`}>
            <div className='flex'>
                <a className='text-gray-400' href=''><i className="fa-brands fa-facebook"></i></a>
                <a className='ml-3 text-gray-400' href=''><i className="fa-brands fa-github"></i></a>
                <a className='ml-3 text-gray-400' href=''><i className="fa-brands fa-square-instagram"></i></a>
            </div>
            <p className='text-sm text-gray-400'>@Copyright by <a href=''>Kcodeguy</a></p>
        </div>
    );
};

export default Footer;