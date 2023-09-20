import React from 'react'
import { Card } from '../components/Card'
import { Carousel } from '../components/Carousel'
import { InputSearch } from '../components/InputSearch'
import { Context } from '../context'

function AppUI() {
    const {
        randomCharacters,
        loading,
        error,
        characterSearched
    } = React.useContext(Context)
    console.log(characterSearched)
    return (
        <>
            <div className='App'>
                <InputSearch
                />
                {(error) && <h3>Error charging the data</h3>}
                {(loading) && <h3>Loading...</h3>}
                {!(loading) &&
                    <section className='CardContainer'>
                        {characterSearched.map((character) => {
                            return (<Card
                                key={character.id}
                                name={character.name}
                                origin={character.origin.name}
                                status={character.status}
                                specie={character.species}
                                location={character.location.name}
                                image={character.image}
                            ></Card>)
                        })}
                    </section>
                }
                {/* Random Characters */}
                {!(loading) &&
                    <Carousel
                        characters={randomCharacters}
                    />
                }
            </div >
        </>
    )
}

export { AppUI }