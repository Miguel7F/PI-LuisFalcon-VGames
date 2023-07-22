import { Routes, Route, useLocation } from 'react-router-dom'
import Landing from './components/Landing'
import SearchBar from './components/SearchBar'
import NavBar from './components/NavBar'
import Detail from './components/Detail'
import Formulario from './components/Formulario'
import './app.css'

function App() {
    const location = useLocation()
    return (
        <>
            {location.pathname !== '/' && <NavBar/>}
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/home' element={<SearchBar />} />
                <Route path='/detail' element={<Detail />} />
                <Route path='/form' element={<Formulario />} />
            </Routes>
        </>
    )
}

export default App