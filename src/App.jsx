import axios from "axios"
import { useState } from "react"
import Card from "./components/Cards"

function App() {

  const maleActorsApi = 'https://www.freetestapi.com/api/v1/actors'
  const femaleActorsApi = 'https://www.freetestapi.com/api/v1/actresses'

  const [actorsData, setActorsData] = useState([])

  const getActors = () => {
    axios.get(`${femaleActorsApi}`)
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
        {actorsData.map(actor =>
          <Card key={actor.id}
            name={actor.name}
            birth={actor.birth_year}
            nazionality={actor.nazionality}
            img={actor.image}
            bio={actor.biography}
            awards={actor.awards} />)}
      </ul>
    </>
  )
}

export default App
