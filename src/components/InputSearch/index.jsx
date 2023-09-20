import './styles.css'
import React from 'react'
import { Context } from '../../context'


const InputSearch = () => {
    const { filterCharacters } = React.useContext(Context)
    return (
        <input
            className='InputSearch'
            placeholder="Search your character"
            onChange={(event) => filterCharacters(event.target.value)}
        />
    )
}

export { InputSearch }
