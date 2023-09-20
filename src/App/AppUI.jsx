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
        filterCharacters
    } = React.useContext(Context);


    return (
        <>
            <div className='App'>
                <InputSearch
                />
                {(error) && <h3>Error charging the data</h3>}
                {(loading) && <h3>Loading...</h3>}
                {!(loading) &&
                    <section className='CardContainer'>
                        {charactersSearched.map(character => {
                            <Card
                                name={character.name}
                                status={character.status}
                                specie={character.specie}
                                origin={character.origin}
                                location={character.location}
                                image={character.image}
                            ></Card>
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
