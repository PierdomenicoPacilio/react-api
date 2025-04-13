import axios from "axios"
import { useEffect, useState } from "react"
import Card from "./components/Cards"

function App() {

  const maleActorsApi = 'https://www.freetestapi.com/api/v1/actors'
  const femaleActorsApi = 'https://www.freetestapi.com/api/v1/actresses'

  const [allActors, setAllActors] = useState([])
  const [selectedActor, setSelectedActor] = useState('')
  const [filteredActors, setFilteredActors] = useState([])


  useEffect(() => {
    // PROMISE.ALL CHIAMA LE DUE API CONTEMPORANEAMENTE
    Promise.all([axios.get(femaleActorsApi), axios.get(maleActorsApi)])
      // PRENDE LE DUE RISPOSTE CONTEMPORANEAMENTE
      .then(([femaleResponse, maleResponse]) => {
        // LE METTE IN UN ARRAY E LO MOSTRA IN PAGINA IN ORDINE ALFABETICO
        const allActorsData = [...femaleResponse.data, ...maleResponse.data];
        setAllActors(allActorsData.sort((a, b) => a.name.localeCompare(b.name)))
      })
      .catch(error => {
        console.log(error)
      })
  }, [])


  // FILTRO
  useEffect(() => {
    let filtered = allActors.filter(actor =>
      actor.name.toLowerCase().includes(selectedActor.toLowerCase())
    )
    setFilteredActors(filtered)
  }, [selectedActor, allActors])

  return (
    <>
      <div>
        <h1>Cast Fetching</h1>
        <input
          type="text"
          placeholder="Cerca attore o attrice..."
          value={selectedActor}
          onChange={(e) => setSelectedActor(e.target.value)}
        />
      </div>

      <ul>
        {filteredActors.map((actor, index) => (
          <Card
            key={index}
            name={actor.name}
            birth={actor.birth_year}
            nazionality={actor.nazionality}
            img={actor.image}
            bio={actor.biography}
            awards={actor.awards}
          />
        ))}
      </ul>
      {filteredActors.length === 0 && <div className="no-actors-message">Nessun attore trovato! 😢 </div>}
    </>
  )
}

export default App
