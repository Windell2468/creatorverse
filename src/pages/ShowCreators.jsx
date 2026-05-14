import { useEffect, useState } from 'react'
import { supabase } from '../client'
import Card from '../components/Card'
import { Link } from 'react-router-dom'

function ShowCreators() {
  const [creators, setCreators] = useState([])

  useEffect(() => {
    const fetchCreators = async () => {
      const { data, error } = await supabase
        .from('creators')
        .select()

      if (error) {
        console.log(error)
      } else {
        setCreators(data)
      }
    }

    fetchCreators()
  }, [])

  return (
    <div>
      <h1>Creatorverse</h1>
      <Link to="/new">
  <button>Add Creator</button>
</Link>

      {creators.length === 0 ? (
        <h2>No creators yet.</h2>
      ) : (
        creators.map((creator) => (
          <Card
          key={creator.id}
          id={creator.id}
          name={creator.name}
          url={creator.url}
          description={creator.description}
          imageURL={creator.imageURL}
          />
        ))
      )}
    </div>
  )
}

export default ShowCreators