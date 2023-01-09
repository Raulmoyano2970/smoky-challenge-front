import React from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import LogOutBtn from './LogOutBtn';
import userAction from '../redux/actions/userAction';
import Swal from 'sweetalert2'

export default function Navbar() {
    let { logged, role, id, photo, token, name } = useSelector((store) => store.userReducer);

    let dispatch = useDispatch()
    const { signOff } = userAction

    function logOut() {
        Swal.fire({
            title: 'Are you sure you want to log out?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, log out!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    dispatch(signOff(token))
                    Swal.fire(
                        'Logged out!',
                        'You have been logged out',
                        'success'
                    )
                }
            })
    }

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="d-flex">
                <img className="logo-header" src="img/smoky-logo-png.png" alt="" />
                <div className="container-fluid nav-div-container d-flex justify-content-center text-white">
                    <button className="navbar-toggler  btnhm" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon btnhm"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
                            <li className="nav-item ms-3">
                                <Link className="text-decoration-none" to={"/"}><p className="nav-link text-white fs-4 fw-bold" aria-current="page">Home</p></Link>
                            </li>
                            <li className="nav-item dropdown">
                                <p className="nav-link dropdown-toggle text-white fs-4 fw-bold" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Products
                                </p>
                                <ul className="dropdown-menu bg-black">
                                    <li><Link className="text-decoration-none" to={"vapers"}><p className="dropdown-item text-white bg-black"> Vapers</p></Link></li>
                                    <li><Link className="text-decoration-none" to={"/eliquids"}> <p className="dropdown-item text-white bg-black"> E-liquids</p></Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="user-logo-container d-flex justify-content-end img-fluid nav-div-container text-white">
                <li className="nav-item dropdown">
                    <p className="nav-link dropdown-toggle text-white fs-5 fw-bold" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <Link to={"/signin"}>
                            {logged ? (<img className="user-logo" src={photo} alt="user logo" />) :
                                (<img className="user-logo" src="img/usuario.png" alt="user logo" />)}
                        </Link>
                    </p>
                    <Link to={"/signin"}></Link>
                    <ul className="dropdown-menu bg-black">
                        {logged ? (<>
                            <li><Link className="text-decoration-none" to={"/myprofile"}><p className="dropdown-item text-white bg-black"> My profile</p></Link></li>
                            <NavLink to="/">
                                <LogOutBtn className="dropdown-item text-white bg-black" type={"text"} text={"Exit"} fx={logOut} ></LogOutBtn>
                            </NavLink></>) :
                            (<><li><Link className="text-decoration-none" to={"/SignIn"}><p className="dropdown-item text-white bg-black"> Sign In</p></Link></li>
                                <li><Link className="text-decoration-none" to={"/SignUp"}> <p className="dropdown-item text-white bg-black"> Sign Up</p></Link></li> </>)}
                    </ul>
                </li>
                <p> <Link className="text-decoration-none" to={"/shopping"}><img className="cart-logo" src="img/carrito.png" alt="cart logo" />  </Link></p>
            </div>
        </nav >
    )
}