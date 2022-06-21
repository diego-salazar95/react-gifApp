import React from 'react'

export const GiftGridItems = ( { id, title, url } ) => {

    return (
    <div className='card animate__bounceIn'>
        <img src={ url } alt={ id } /> <br/>
        <div className='corazon_image'></div>
        <div className='whatsapp'></div>
    </div>
  )
}
