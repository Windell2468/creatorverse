import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../client'


function ViewCreator() {

    const { id } = useParams()
    const [creator, setCreator] = useState(null)

    useEffect(() => {

        const getCreator = async () => {

            const { data, error } = await supabase
                .from('creators')
                .select()
                .eq('id', id)
                .single()

            if (error) {
                console.log(error)
            } else {
                setCreator(data)
            }
        }

        getCreator()

    }, [id])

    if (!creator) {
        return <h2>Loading...</h2>
    }

    return (
        <div>

            <h1>{creator.name}</h1>

            <img
                src={creator.imageURL}
                alt={creator.name}
                width="400"
            />

            <p>{creator.description}</p>

            <a href={creator.url} target="_blank">
                Visit Creator Page
            </a>

            <br />

            <Link to={`/edit/${creator.id}`}>
                <button>Edit Creator</button>
            </Link>

        </div>
    )
}

export default ViewCreator