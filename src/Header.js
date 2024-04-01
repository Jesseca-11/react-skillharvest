import React from 'react';



function Header() {
    return (
        <div className='header'>
            <div className="container ">
                <nav className="navbar navbar-expand-md ">
                    <div className="container-fluid">
                        <a href="#" className="navbar-brand text-light fw-bolder ">ARSHA</a>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navi"
                            aria-controls="navi" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse justify-content-end align-center " id="navi">
                            <ul className="navbar-nav mb-2 ps-1" id="nave">
                                <li className="nav-item"><a href="#" class="nav-link active text-info"
                                    aria-current="page">Home</a></li>
                                <li className="nav-item"><a href="#about" class="nav-link text-light">About</a></li>
                                <li className="nav-item"><a href="#services" class="nav-link text-light">Services</a></li>
                                <li className="nav-item"><a href="#pricing" class="nav-link text-light">Pricing</a></li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-light" href="#" role="button"
                                        data-bs-toggle="dropdown" aria-expended="false">Products
                                    </a>

                                    <ul className="dropdown-menu dropdown-menu-light ps-3">
                                        <li><a href="#" class="dropdown-item"></a>Front-end Development</li>
                                        <li><a href="#" class="dropdown-item"></a>Back-end Development</li>
                                        <li><a href="#" class="dropdown-item"></a>Product Design</li>
                                        <li><a href="#" class="dropdown-item"></a>UI/UX Design</li>
                                        <li><a href="#" class="dropdown-item"></a>Digital Marketing</li>
                                    </ul>
                                </li>
                                <li className="nav-item"><a href="#contact" class="nav-link text-light">Contacts</a></li>
                                <button className="btn btn-outline text-light border-info ps-4 pe-4 get" type="submit" data-bs-toggle="modal" data-bs-target="#started" >Get
                                    Started</button>
                            </ul>
                        </div>


                    </div>

                </nav>
            </div>
            
        </div>


        


    )
}

export default Header
