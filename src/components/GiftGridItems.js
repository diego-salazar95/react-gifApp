import React from 'react'

export const GiftGridItems = ( { id, title, url } ) => {

    return (
    <div className='card animate__bounceIn'>
        <img src={ url } alt={ id } />
        <p> {title} </p>
    </div>
  )
}
