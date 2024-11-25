import { Link } from "react-router-dom"
import './Navbar.css'
function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/counter">Counter</Link>
            <Link to="/form">Form</Link>
            <Link to="/AddBlog">AddBlog</Link>
            <Link to="/BlogList">BlogList</Link>
            <Link to="/WizardForm">WizardForm</Link>
            <Link to="/My">My</Link>

           

        </nav>
    );
}
export default Navbar;

