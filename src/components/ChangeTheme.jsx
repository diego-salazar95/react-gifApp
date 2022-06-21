import React from 'react'
import { useState } from 'react'

export const ChangeTheme = () => {

    const [changeTheme, setChangeTheme] = useState(false);

    const CambiarThema = () => {
        setChangeTheme( !changeTheme );
    }


    document.getElementsByTagName("html")[0].setAttribute("data-theme", changeTheme);

  return (
    <input type="button" className='theme' onClick={ CambiarThema } />
  )
}
