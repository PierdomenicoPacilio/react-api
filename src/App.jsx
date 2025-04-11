import axios from "axios"
import { useState } from "react"
import Card from "./components/Cards"

function App() {

  const maleActorsApi = 'https://www.freetestapi.com/api/v1/actors'
  const femaleActorsApi = 'https://www.freetestapi.com/api/v1/actresses'

  const [femaleActorsData, setFemaleActorsData] = useState([])
  const [maleActorsData, setMaleActorsData] = useState([])
  const [AllActorsData, setAllActorsData] = useState([])

  const getFemaleActors = () => {
    axios.get(femaleActorsApi)
      .then(element => {
        console.log(element.data)
        setFemaleActorsData(element.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const getMaleActors = () => {
    axios.get(maleActorsApi)
      .then(element => {
        console.log(element.data)
        setMaleActorsData(element.data)
      })
      .catch(error => {
        console.log(error)
      })
  }


  // SCHIACCIARE DUE VOLTE IL BOTTONE PER FAR APPARIRE LA LISTA, MALEDETTA ASINCRONICITÁ
  const getAllActors = () => {
    getFemaleActors()
    getMaleActors()
    const sortedActorsData = [...femaleActorsData, ...maleActorsData].sort((a, b) =>
      a.name.localeCompare(b.name)
    )
    setAllActorsData(sortedActorsData)
  }


  return (
    <>
      <h1>Cast Fetching</h1>
      {/* <button onClick={getFemaleActors}>genera attrici</button>
      <button onClick={getMaleActors}>genera attori</button>
      <ul>
        {femaleActorsData.map(actor =>
          <Card key={actor.id}
            name={actor.name}
            birth={actor.birth_year}
            nazionality={actor.nazionality}
            img={actor.image}
            bio={actor.biography}
            awards={actor.awards} />)}
      </ul>
      <ul>
        {maleActorsData.map(actor =>
          <Card key={actor.id}
            name={actor.name}
            birth={actor.birth_year}
            nazionality={actor.nazionality}
            img={actor.image}
            bio={actor.biography}
            awards={actor.awards} />)}
      </ul> */}
      <button onClick={getAllActors}>genera tutti gli attori</button>
      <ul>
        {AllActorsData.map((actor, index) =>
          <Card key={index}
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
