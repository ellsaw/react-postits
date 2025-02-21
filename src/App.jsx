import Board from "./components/Board"
import NewPostIt from "./components/newPostit"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react"

function App() {
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    const prev = localStorage.getItem('notes')
    if(!prev) localStorage.setItem('notes', JSON.stringify([]));
  }, [])

  return (
    <>
    <NewPostIt visible={showForm} setVisible={setShowForm}/>
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
