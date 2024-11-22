import Home from './components/Home'
import About from './components/About'
import Blog from './components/Blog'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import BlogDetails from './components/BlogDetails'
import Counter from './components/Counter'
import Form from './components/Form'
import AddBlog from './components/AddBlog'

function App() {
  return (
    <Router>
    <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogDetails />} />
      <Route path="/Counter" element={<Counter />} />
      <Route path="/Form" element={<Form />} />
      <Route path="/AddBlog" element={<AddBlog/>} />

      

      

      </Routes>
       
    </div>
  </Router>
  )
}
export default App



