import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { supabase } from '../client'

function EditCreator() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [creator, setCreator] = useState({
    name: '',
    url: '',
    description: '',
    imageURL: ''
  })

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

  const handleChange = (event) => {
    const { name, value } = event.target

    setCreator((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const updateCreator = async (event) => {
    event.preventDefault()

    const { error } = await supabase
      .from('creators')
      .update({
        name: creator.name,
        url: creator.url,
        description: creator.description,
        imageURL: creator.imageURL
      })
      .eq('id', id)

    if (error) {
      console.log(error)
    } else {
      navigate(`/view/${id}`)
    }
  }
    const deleteCreator = async () => {

  const { error } = await supabase
    .from('creators')
    .delete()
    .eq('id', id)

  if (error) {
    console.log(error)
  } else {
    navigate('/')
  }
}
  

  return (
    <div>
      <h1>Edit Creator</h1>

      <form onSubmit={updateCreator}>
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

        <button type="submit">Update Creator</button>
        
        <button onClick={deleteCreator}>
            Delete Creator
        </button>
        
      </form>
    </div>
  )
}

export default EditCreator