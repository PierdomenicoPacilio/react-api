import axios from "axios"
import { useEffect, useState } from "react"

function App() {

  const maleActorsApi = 'https://freetestapi.com/api/v1/actors'
  const femaleActorsApi = 'https://freetestapi.com/api/v1/actresses'

  const [actorsData, setActorsData] = useState([])

  const getActors = () => {
    axios.get(`https://thingproxy.freeboard.io/fetch/${femaleActorsApi}`)
      .then(element => {
        console.log(element.data)
        setActorsData(element.data)
      })
      .catch(error => {
        console.log(error)
      })
  }


  return (
    <>
      <h1>Cast Fetching</h1>
      <button onClick={getActors}>genera attori</button>
      <ul>
        {actorsData.map(actor => <li key={actor.id}>{actor.name}</li>)}
      </ul>
    </>
  )
}

export default App
