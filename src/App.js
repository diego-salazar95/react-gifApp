import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';
import { TopMenu } from './components/TopMenu';

export const App = () =>{

    const [categories, setCategories] = useState(['Buenos dias'])

    return (
        <div className='general-container'>
            <TopMenu />
            <AddCategory setCategories = { setCategories }/>
                    {
                        categories.map( category => ( 
                            <GiftGrid 
                            key={ category }
                            category={category} /> 
                        ))
                    }
        </div>
    )
}