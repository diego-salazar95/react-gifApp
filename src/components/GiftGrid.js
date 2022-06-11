import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import {GiftGridItems} from './GiftGridItems'

export function GiftGrid( {category} ) {

    const {data:images, loading} = useFetchGifs(category);

  return (
    <div className='card-grid' >

        {loading && <p> Cargando... </p>}

            {
                images.map( img => (
                    <GiftGridItems
                        key={img.id}
                        { ...img }
                    />
                ))
            }
    </div>
  )
}