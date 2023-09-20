import './styles.css'

const Card = ({
    name,
    status,
    specie,
    origin,
    location,
    image
}) => {
    return (
        <div className="Card">
            <img src={image} />
            <h3>{name}</h3>
            <div>
                <span>{status}</span> - <span>{specie}</span>
            </div>
            <p>{origin}</p>
            <p>{location}</p>
        </div>
    )
}

export { Card }
