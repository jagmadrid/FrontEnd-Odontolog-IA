import React, { useState } from 'react'
import NavBar from './NavBar'
import odontologiaLogo from '../images/icono-diente.svg';

const Home = () => {

    return (
        <div>
            <NavBar />
            <div className='flex items-center mx-10 my-5'>
                <div className='flex-none'>
                    <img src={odontologiaLogo} className='w-8' alt='logo' />
                </div>
                <div className='flex-auto w-10 p-4 ml-4 bg-gray-200'>
                    <p className=''>¡Hola!, Soy Odontolog{"{IA}"}, le ayudaré a ...</p>
                    <p className=''>Elige una de las siguientes opciones:</p>
                </div>

            </div>
            <div className='flex flex-row-reverse items-center mx-10'>

                <form className="flex">
                    <div className="pl-3 md:w-1/2">
                        <button
                            type='button'
                            className='block w-64 py-2 font-semibold text-primary bg-secondary md:bg-terciary hover:bg-[#15B4BC] md:hover:bg-secondary'>
                            Elección 1
                        </button>
                    </div>

                    <div className="pl-3 md:w-1/2">
                        <button
                            type='button'
                            className='block w-64 py-2 font-semibold text-white bg-secondary md:bg-primary hover:bg-[#15B4BC] md:hover:bg-secondary'>
                            Elección 2
                        </button>
                    </div>
                </form>
            </div>   
        </div>
    )
}

export default Home