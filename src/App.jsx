import Board from "./components/Board"
import NewPostIt from "./components/newPostit"
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
        <button onClick={() => {setShowForm(true)}} aria-label="New note">
          +
        </button>
      </header>
      <main>
        <Board reRenderOn={showForm}/>
      </main>
    </>
  )
}

export default App
