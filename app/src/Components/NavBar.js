// import { useState } from "react";
import { NavLink } from "react-router-dom";


function NavBar() {

    // const [showMenu, setShowMenu] = useState(false)

    return (
        <>
            <nav id="navbarid" className=" navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    {/* eslint-disable-next-line */}
                    <a className="navbar-brand" href="#"></a>
                    <div className="nav justify-content-center navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                            <NavLink to="/blog" className="nav-link">Blog</NavLink>
                            <NavLink to="/projects" className="nav-link">Projects</NavLink>
                            <NavLink to="/contact" className="nav-link">Contact</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )

}


export default NavBar;