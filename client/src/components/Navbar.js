
import React from 'react';
import logo from './logo2.jpg';


function Navbar() {
    const user = JSON.parse(localStorage.getItem('currentUser'))

    function logout(){
        localStorage.removeItem('currentUser')
        window.location.href='/login'
    }
    
    return (

        <div>
        <nav className="navbar navbar-expand-lg">
            <img src={logo} alt='logo img' style={{ width: '50px', height: 'auto', margin: '10px', borderRadius: '10px' }} />
            <a className="navbar-brand" href="#">Homely Heavens PG</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <a className="util" href='/about'>About Us</a>
                <a className="util" href='/contact'>Contact</a>
                <ul className="navbar-nav ms-auto" style={{ marginRight: '90px' }}> {/* Use ms-auto to align items to the right */}
                    {user ? (
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-person-circle"></i>    {user.name}
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/profile">Profile</a></li>
                                
                                <li><a className="dropdown-item" href="#" onClick={logout}>Log out</a></li>
                            </ul>
                        </div>
                    ) : (
                        <>
                            <li className="nav-item">
                                <a className="nav-link reg" href="/register">
                                    Register
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link reg" href="/login">
                                    Login
                                </a>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    </div>
    
    )
}
export default Navbar;