import './App.css'
import Listar from './components/listar/Listar'
import Subir from './components/subir/Subir'
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <div className='container'>
        <div className='up-buttons'>
          <Link to='/'>
            <button>Listar</button>
          </Link>
          <span>|</span>
          <Link to='/subir'>
            <button>Subir</button>
          </Link>
        </div>
        <Routes>
          <Route path='/' element={<Listar />} />
          <Route path='/subir' element={<Subir />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
