import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.service";
import logo from '../images/logo-verde-png.png';
import odontologiaLogo from '../images/Odontolog(IA)-logo.svg';

const required = (value) => {
    if (!value) {
        return (
            <div>
                <p className="mt-2 text-sm font-medium text-red-600 dark:text-red-500">Ese campo es requerido</p>
            </div>
        );
    }
};

const Login = () => {
    let navigate = useNavigate();
    const form = useRef();
    const checkBtn = useRef();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [datos, setDatos] = useState({
        username: '',
        password: ''
    })
    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        }
        )
    }


    const handleLogin = (e) => {
        e.preventDefault();
        setMessage("");
        setLoading(true);
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) {
            AuthService.login(datos.username, datos.password).then(
                () => {
                    navigate("/home");
                    window.location.reload();
                },
                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    setLoading(false);
                    setMessage(resMessage);
                }
            );
        } else {
            setLoading(false);
        }
    };  

    return (

        <div className='flex h-screen'>

            <div className='flex items-center justify-center px-3 bg-gradient-to-b from-[#001646] to-primary md:from-transparent md:to-transparent basis-full md:basis-1/3'>

                <Form onSubmit={handleLogin} ref={form}>

                    <div className='flex flex-col items-center justify-center gap-2'>
                        <div className='hidden md:flex'>
                            <img src={logo} className='w-48 h-auto lg:-mt-32' alt='Logo Universidad Católica de Murcia' />
                        </div>
                        <div className='flex md:hidden'>
                            <img src={odontologiaLogo} className='w-auto h-64' alt='Logo Universidad Católica de Murcia' />
                        </div>
                        <div>
                            <p className='mt-4 text-lg font-normal text-white md:text-gray-600 md:mb-7'>¡Bienvenido a&nbsp;<span className='font-bold uppercase'> Odontolog {'{ IA }'}</span>!</p>
                        </div>
                        <div className='flex md:hidden'>
                            <p className='text-sm text-white mb-7'>Intelegencia Artificial aplicada a la odontología</p>
                        </div>
                        <div>
                            <Input
                                className='w-64 px-2 py-2 bg-gray-100 border-b-2 border-gray-400 focus:border-secondary md:focus:border-yellow-500 focus:outline-none'
                                type='email'
                                name='username'
                                value={datos.username}
                                onChange={handleInputChange}
                                validations={[required]}
                                placeholder='correo UCAM' />
                        </div>
                        <div>
                            <Input
                                className='w-64 px-2 py-2 bg-gray-100 border-b-2 border-gray-400 focus:border-secondary md:focus:border-yellow-500 focus:outline-none'
                                type='password'
                                name='password'
                                value={datos.password}
                                onChange={handleInputChange}
                                validations={[required]}
                                placeholder='contraseña' />
                        </div>
                        <div>
                            <button
                                type='submit' className='block w-64 py-2 mt-4 mb-2 font-semibold text-white bg-secondary md:bg-primary hover:bg-[#15B4BC] md:hover:bg-secondary' disabled={loading}>                                
                                Login
                            </button>
                            <span className='text-sm text-white cursor-pointer md:text-black hover:text-secondary'>¿Olvidaste la contraseña?</span>
                        </div>
                        {message && (
                            <div>
                                <div>
                                    {message}
                                </div>
                            </div>
                        )}
                        <CheckButton style={{ display: "none" }} ref={checkBtn} />
                    </div>
                </Form>
            </div>
            <div className='bg-gradient-to-tr from-secondary via-primary to-[#001646] items-center hidden p-2 text-center gap-x-2 basis-2/3 md:flex md:visible'>
                <div className='basis-1/2'>
                    <h1 className='font-sans text-3xl font-bold text-white lg:text-4xl xl:text-5xl'>ODONTOLOG <span className='text-4xl lg:text-5xl xl:text-6xl'>{'{ IA }'}</span></h1>
                    <h2 className='mt-1 text-white text-md lg:text-lg xl:text-xl'>Inteligencia Artificial aplicada a la odontología</h2>
                </div>
                <div className='flex justify-center basis-1/2'>
                    <img src={odontologiaLogo} className='h-auto w-72 lg:w-96' alt='Logo Odontolog{IA}' />
                </div>
            </div>
        </div>
    )
}

export default Login