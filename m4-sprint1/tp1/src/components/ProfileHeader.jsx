// nombre + frase (recibe props)

import React from 'react'

export const ProfileHeader = ({nombre, frase}) => {
    return(
        <header>
            <h1 className="font-display mt-[2%] text-3xl sm:text-4xl font-bold text-gray-900 mb-3">{nombre}</h1>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{frase}</p>
        </header>

    )
    
}
