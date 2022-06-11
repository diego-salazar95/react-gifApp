import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

export const App = () =>{

    const [categories, setCategories] = useState(['Buenos dias'])

    return (
        <>
            <h1> Tus gifs favoritos </h1>
            <AddCategory setCategories = { setCategories }/>
            <hr />
            <ol>
                {
                    categories.map( category => ( 
                        <GiftGrid 
                        key={ category }
                        category={category} /> 
                    ))
                }
            </ol>
        </>
    )
}