import React, { useState } from 'react';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputValue =  (e) => {
        setInputValue( e.target.value );
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
       
        if(inputValue.trim().length > 2) {
            setCategories( [inputValue] );
            setInputValue('')
        }
    }

    return (
        <div className='menu-container input-group mb-3'>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" className='form-control' placeholder="Buscar" aria-label="Buscar"
                    value={ inputValue }
                    onChange={ handleInputValue }
                />
        </form>
        </div>
    )
}


// AIzaSyDSbnN7NVrp9LZ_cVVxVdXbXjGS7Id6W1U
// https://tenor.googleapis.com/v2/search?key=&q=