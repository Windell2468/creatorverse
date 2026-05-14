import { useRoutes } from 'react-router-dom'

import ShowCreators from './pages/ShowCreators'
import ViewCreator from './pages/ViewCreator'
import EditCreator from './pages/EditCreator'
import AddCreator from './pages/AddCreator'

import './App.css'

function App() {

  const element = useRoutes([
    {
      path: "/",
      element: <ShowCreators />
    },
    {
      path: "/new",
      element: <AddCreator />
    },
    {
      path: "/edit/:id",
      element: <EditCreator />
    },
    {
      path: "/view/:id",
      element: <ViewCreator />
    }
  ])

  return (
    <div className="App">
      {element}
    </div>
  )
}

export default App