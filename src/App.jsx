import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Services from './components/services'
import Project from './pages/Projects'
import Contact from './pages/contact'


function App() {
  return (
  <BrowserRouter>
  <Routes>
 <Route path='/' element={<Home/>}/>
 <Route path='/about' element={<About/>}/>
 <Route path='/service' element={<Services/>}/>
 <Route path='/project' element={<Project/>}/>
 <Route path='/contact' element={<Contact/>}/>
  </Routes> 
  </BrowserRouter>
  )
}

export default App
