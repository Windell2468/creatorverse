
import { Link } from 'react-router-dom'

function Card(props) {
    return (
        <div className="card">

            <img
                src={props.imageURL}
                alt={props.name}
                width="200"
            />

            <h2>{props.name}</h2>

            <p>{props.description}</p>

            <a href={props.url} target="_blank">
                Visit Channel
            </a>

            <br />

            <Link to={`/view/${props.id}`}>
                <button>View</button>
            </Link>

            <Link to={`/edit/${props.id}`}>
                <button>Edit</button>
            </Link>

        </div>
    )
}

export default Card