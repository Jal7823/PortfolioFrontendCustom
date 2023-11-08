import TopNabvar from './components/TopNabvar';
import About from './pages/About';
import Contact from './pages/Contact';
import Index from './pages/Index'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Portfolio from './pages/Portfolio';
import DetailsProjects from './pages/DetailsProjects';


function App() {
  return (

    <Router>
      <TopNabvar/>
      <Routes >
        <Route path='/' element={<Index/>} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/details/:id' element={<DetailsProjects />} />
      </Routes>

    </Router>
  )
}

export default App