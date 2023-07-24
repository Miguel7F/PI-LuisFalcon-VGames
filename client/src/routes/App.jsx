import { Routes, Route, useLocation } from 'react-router-dom'
import Landing from '../components/Landing'
import NavBar from '../components/NavBar'
import Detail from '../components/Detail'
import CreateGameForm from '../components/CreateGameForm'
import AboutUs from '../components/AboutUs'
import Home from '../components/Home'

function App() {
    const location = useLocation()
    return (
        <>
            {location.pathname !== '/' && <NavBar/>}
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/home' element={<Home />} />
                <Route path='/detail/:id' element={<Detail />} />
                <Route path='/createGameForm' element={<CreateGameForm />} />
                <Route path='/about' element={<AboutUs />} />
            </Routes>
        </>
    )
}

export default App