import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Project from './pages/Project'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path ='/signin' element={<Signin />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/project' element={<Project />}/> 
     

    </Routes>
    </BrowserRouter>
  )
}
