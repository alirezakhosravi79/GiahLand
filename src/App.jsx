import { Routes, Route } from "react-router"
import Home from "./pages/Home"

function App() {

  return (
    <div className="bg-orginal mx-24">
      <Routes>
        <Route path="/" element={ <Home />}/>
      </Routes>
    </div>
  )
}

export default App
