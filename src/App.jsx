import Board from "./components/Board"
import NewPostIt from "./components/newPostit"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"

function App() {
  const [showForm, setShowForm] = useState(false)
  return (
    <>
    <NewPostIt visible={showForm}/>
      <header>
        <h1>Post It</h1>
        <button onClick={() => {setShowForm(true)}}>
          <FontAwesomeIcon icon={faPlus} size='2x'/>
        </button>
      </header>
      <main>
        <Board/>
      </main>
    </>
  )
}

export default App
