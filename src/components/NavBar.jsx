import React, { Fragment } from 'react'
import odontologiaLogo from '../images/icono-diente.svg';
import AvatarDropdownMenu from './AvatarDropdownMenu';
const NavBar = () => {
    
    return (
        <Fragment>
            <nav className="bg-primary border-terciary border-b-2 px-2 sm:px-4 py-2.5">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <a href="/home" className="flex items-center">
                        <img src={odontologiaLogo} className="mr-3 h-9 sm:h-12" alt="Odontolog{IA}" />
                        <span className="self-center text-xl font-semibold text-white whitespace-nowrap dark:text-white">Odontolog{"{IA}"}</span>
                    </a>
                    <div>
                        <AvatarDropdownMenu/>
                    </div>
                </div>
            </nav>

        </Fragment>
    )
}

export default NavBar