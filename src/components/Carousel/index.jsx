import './styles.css'

const Carousel = ({ characters }) => {
    return (
        <div className='Carousel'>
            {characters.map(character => (
                <img src={character.image} alt={`Image of ${character.name}`} key={character.id} />
            ))}
        </div>
    )
}

export { Carousel }
