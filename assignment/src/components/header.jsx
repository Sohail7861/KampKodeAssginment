import React from 'react'
import './header.css'
import Img from '../components/headerpix.jpg'
import { HiOutlineArrowSmRight } from 'react-icons/hi';

function Header() {
    return (
        <div className="head" style={{ background: `url(${Img}`,/*backgroundSize:'800px 1390px',*/backgroundRepeat: 'no-repeat', height: '100vh', width: '100%' }}>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'transparent'/*, margin: '20px'*/ }}>
                <div className="container-fluid">
                    <a className="navbar-brand" style={{ marginLeft: '20px', fontWeight: '30px' }} href="#">NAVBAR</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" style={{ marginLeft: '300px', paddingLeft: '30px' }} id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" style={{ color: 'black' }} aria-current="page" href="#">Home</a>
                            </li>
                            <div className="dropdwon">
                                <button type="button" class="btn btn-secondary dropdown-toggle" style={{ fontSize: 'medium', background: 'none', color: 'black', fontWeight: '500', border: 'none' }} data-bs-toggle="dropdown" aria-expanded="false">
                                    Products
                                </button>
                                <ul className="dropdown-menu" style={{border:'none',width:'0.2px'}} aria-labelledby="dropdownMenuButton1">
                                </ul>
                            </div>
                            <div className="dropdown">
                                <button type="button" class="btn btn-secondary dropdown-toggle" style={{ fontSize: 'medium', background: 'none', color: 'black', fontWeight: '500', border: 'none' }} data-bs-toggle="dropdown" aria-expanded="false">
                                    Resources
                                </button>
                                <ul className="dropdown-menu" style={{border:'none',width:'0.2px'}} aria-labelledby="dropdownMenuButton1">
                                </ul>
                            </div>
                            <li className="nav-item">
                                <a className="nav-link disabled" style={{ color: 'black' }} href="#" tabindex="-1" aria-disabled="true">Pricing</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <button className="btn btn-bg-white" type="submit" style={{ background: "#D9D9D5", color: 'voilet' }}>Log in</button>
                            <button className="btn btn-outline-success" style={{ background: "#7D6EEB", color: 'white' }} type="submit">Sign up</button>
                        </form>
                    </div>
                </div>
            </nav>
            <div className="div1">
                <h2>We've really sped up workflow</h2>
                <h6>We've just released a new update!</h6>
                <p>Checkout the all new dashboard view. Pages and
                    now load faster, you can try us for free for 30 days.
                </p>

                <button type="button" class="btn btn-outline-dark">
                    <HiOutlineArrowSmRight className="services__button-icon" />
                    Start Learning Today</button>
                <button className="btn btn-outline-success" style={{ background: "#7D6EEB", color: 'white' }} type="submit">Join Now</button>
            </div>
        </div>
    )
}

export default Header