import React, { useContext } from 'react';
import { SongsContext } from '../../App';

const FormBase = () => {
    const { typeForm } = useContext(SongsContext);

    let formInfo = {
        header: 'Login',
        description: 'Login to sing all song!',
        formGroup: [
            'Email', 'Password'
        ],
        button: 'Login'
    }
        
    if (typeForm === 'register') {
        formInfo = {
            header: 'Register',
            description: 'Register account to sing all song!',
            formGroup: [
                'Email', 'Password', 'Password confirm'
            ],
            button: 'Sign up'
        }
    }

    const renderConfirmPassword = () => {
        return (
            <div className='mt-4'>
            <p className='text-sm font-bold'>{formInfo.formGroup[2]}</p>
            <input
                type='password'
                className='text-sm w-full py-2 pl-2 border-1 mt-1 rounded-md outline-none'
                name='password'
                placeholder='aA@123abc' />
             </div>
        );
    }

    return (
        <div className={`fixed top-2/4 lef-2/4 w-full flex justify-center z-50 -translate-y-1/2 ${typeForm ? 'block' : 'hidden'}`}>
            <form className='w-80 bg-white rounded-md text-black px-5 py-4 animation-show-form'>
                <h2 className='text-lg font-bold mt-2 w-full text-center c-main'>
                    {formInfo.header}
                </h2>
                <p className='text-sm mt-2 w-full text-center'>{formInfo.description}</p>
                <div className='mt-4'>
                    <div className=''>
                        <p className='text-sm font-bold'>{formInfo.formGroup[0]}</p>
                        <input type='email'
                            className='text-sm w-full py-2 pl-2 border-1 mt-1 rounded-md outline-none'
                            name='email'
                            placeholder='joiny@gmail.com' />
                    </div>
                    <div className='mt-4'>
                        <p className='text-sm font-bold'>{formInfo.formGroup[1]}</p>
                        <input
                            type='password'
                            className='text-sm w-full py-2 pl-2 border-1 mt-1 rounded-md outline-none'
                            name='password'
                            placeholder='aA@123abc' />
                    </div>
                    {
                       typeForm === 'register' ? renderConfirmPassword() : ''
                    }
                </div>
                <div className='mt-4 w-full text-center'>
                    <a className={`text-sm underline ${typeForm === 'register' ? 'hidden' : 'block'}`} href='https://accounts.spotify.com/vi/login?continue=https%3A%2F%2Fopen.spotify.com%2F'>Forgot password?</a>
                    <button className='w-full bg-main-btn font-bold text-white mt-3 py-2 rounded-3xl'>{formInfo.button}</button>
                </div>
            </form>
        </div>
    );
};

export default FormBase;