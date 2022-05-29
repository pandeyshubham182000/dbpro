import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            {/********************************** Navbar Component *******************************************/}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-2 ml-2 mb-5 p-2" style={{ borderRadius: "30px", boxShadow: "2px 2px 20px black" }}>
                <div className="container-fluid">
                    <Link to='/'><span className="navbar-brand"><b>AdmitKard</b></span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <span className="nav-link active" aria-current="page">Welcome To AdmitKard Services</span>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <Link to='/about'><button className="btn btn-outline-light">View Records</button></Link>
                            
                        </form>
                    </div>
                </div>
            </nav>
            {/****************************************************************************************************/}
            
            
        </div>
    )
}

export default Navbar