import React, { useState } from 'react';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputValue =  (e) => {
        setInputValue( e.target.value );
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
       
        if(inputValue.trim().length > 2) {
            setCategories( cats => [inputValue, ...cats] );
            setInputValue('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputValue }
            />
        </form>
    )
}

// AIzaSyDSbnN7NVrp9LZ_cVVxVdXbXjGS7Id6W1U
// https://tenor.googleapis.com/v2/search?key=&q=