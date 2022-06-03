import {React} from 'react'
import { Menu, Transition } from '@headlessui/react'
import perfil from '../images/foto-perfil-jagm.jpg';
import { UserIcon } from '@heroicons/react/outline'
import { LogoutIcon } from '@heroicons/react/outline'
import AuthService from "../services/auth.service.jsx"

const AvatarDropdownMenu = () => {
    
    
    const currentUser = AuthService.getCurrentUser();
    const logOut = () => {
        AuthService.logout();
      };

    return (
        <Menu>
            <Menu.Button className="flex bg-white rounded-full ring-2 ring-secondary">
                <img src={perfil} className="w-10 h-10 p-1 rounded-full" alt="lo" />
            </Menu.Button>
            <Transition
             enter="transition duration-100 ease-out"
             enterFrom="transform scale-95 opacity-0"
             enterTo="transform scale-100 opacity-100"
             leave="transition duration-75 ease-out"
             leaveFrom="transform scale-100 opacity-100"
             leaveTo="transform scale-95 opacity-0"
            
            >
            <Menu.Items className="absolute right-0 py-1 mt-2 origin-top-right bg-white rounded-sm shadow-lg focus:outline-none">
                <Menu.Item>
                    {({ active }) => (
                        <a
                            className={`group flex items-center text-sm px-4 py-2 ${active ? 'bg-secondary text-white' : 'text-gray-700'}`}
                            href="#"
                        >
                            <UserIcon className={`mr-3 w-5 h-5 ${active ? 'bg-secondary text-white' : 'text-gray-700'}`} aria-hidden="true"/>
                            {currentUser.username ? currentUser.username : "Usuario!"}
                        </a>
                    )}
                </Menu.Item>
                <Menu.Item>
                    {({ active }) => (
                        <a
                            className={`group flex items-center text-sm px-4 py-2 cursor-pointer ${active ? 'bg-secondary text-white' : 'text-gray-700'}`}
                            onClick={logOut}
                            href="/login"
                        >
                            <LogoutIcon className={`mr-3 w-5 h-5 ${active ? 'bg-secondary text-white' : 'text-gray-700'}`} aria-hidden="true"/>
                            Salir
                        </a>
                    )}
                </Menu.Item>

            </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default AvatarDropdownMenu