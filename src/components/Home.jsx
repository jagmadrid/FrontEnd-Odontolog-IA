import React, { useState } from 'react'
import NavBar from './NavBar'
import odontologiaLogo from '../images/icono-diente.svg';

const Home = () => {
    var chat = {
        pregunta: 'Elige una de las siguientes opciones:',
        tipo: 'tipo_button',
        label_servidor:[ {
            label: 'boton 1',
            value: '1'
        },
        {
            label: 'boton 2',
            value: '2'
        },
    ]
        
    };

    const [formValues, setFormValues] = useState([chat])
    let addFormFields = (valor) => {
        console.log(valor)
        if (valor === '2'){
            chat.tipo = 'tipo_select'
            setFormValues([...formValues, chat])

        }
    }
    return (
        <div>
            <NavBar />
            <form className="flex">
                {formValues.map((element, index) => (
                    <div key={index}>
                    <div className='flex items-center mx-10 my-5'>
                        <div className='flex-none'>
                            <img src={odontologiaLogo} className='w-8' alt='logo'/>
                        </div>
                        <div className='flex-auto w-10 p-4 ml-4 bg-gray-200'>
                            <p className=''>¡Hola!, Soy Odontolog{"{IA}"}, le ayudaré a ...</p>
                            <p className=''>{element.pregunta}</p>
                        </div>

                    </div>
                    {element.label_servidor.map((item, index2) => (
                    <div key={index2}>
                    <div className='flex flex-row-reverse items-center mx-10'>       
                        <div className="pl-3 md:w-1/2">
                            <button
                                type='button'
                                className='block w-64 py-2 font-semibold text-primary bg-secondary md:bg-terciary hover:bg-[#15B4BC] md:hover:bg-secondary'
                                onClick={() => addFormFields(item.value)}
                                >
                                {item.label}
                                {element.tipo}
                                
                            </button>
                        </div>            
                
                    </div>
                    </div>
                    ))}
                    </div>
                ))}
            </form>
        </div>
    )
}

export default Home