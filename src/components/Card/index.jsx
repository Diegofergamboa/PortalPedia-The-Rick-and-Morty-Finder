import './styles.css'

const Card = () => {
    return (
        <div className="Card">
            <img src='https://rickandmortyapi.com/api/character/avatar/2.jpeg' />
            <h3>Name character</h3>
            <div>
                <p>Status</p>
                <p>Species</p>
            </div>
            <p>Origin</p>
            <p>Location</p>
        </div>
    )
}

export { Card }
