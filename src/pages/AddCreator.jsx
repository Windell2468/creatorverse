import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../client'

function AddCreator() {

    const navigate = useNavigate()

    const [creator, setCreator] = useState({
        name: '',
        url: '',
        description: '',
        imageURL: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target

        setCreator((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const addCreator = async (event) => {
        event.preventDefault()

        const { error } = await supabase
            .from('creators')
            .insert({
                name: creator.name,
                url: creator.url,
                description: creator.description,
                imageURL: creator.imageURL
            })

        if (error) {
            console.log(error)
        } else {
            navigate('/')
        }
    }

    return (
        <div>
            <h1>Add Creator</h1>

            <form onSubmit={addCreator}>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={creator.name}
                    onChange={handleChange}
                />

                <label>URL:</label>
                <input
                    type="text"
                    name="url"
                    value={creator.url}
                    onChange={handleChange}
                />

                <label>Description:</label>
                <textarea
                    name="description"
                    value={creator.description}
                    onChange={handleChange}
                />

                <label>Image URL:</label>
                <input
                    type="text"
                    name="imageURL"
                    value={creator.imageURL}
                    onChange={handleChange}
                />

                <button type="submit">Add Creator</button>
            </form>
        </div>
    )
}

export default AddCreator