import React from 'react'
import { useState } from 'react'
import shopActions from '../redux/actions/shopAction'
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import eliquidsActions from '../redux/actions/eliquidsAction';
import vapersActions from '../redux/actions/vapersAction';
import "../cardvaperliquids.css";
import Swal from 'sweetalert2';

export default function CardVaper(props) {
    let { name, description, price, img, cont, id, type } = props
    let [count, setCount] = useState(0)
    let [bool, setBool] = useState(true)
    const dispatch = useDispatch();
    let _id = useSelector((store) => store.userReducer);
    const numb = (e) => {
        setCount(Number(e.target.value))
        console.log(count, typeof count)
    }
    const send = (e) => {
        console.log()
        if (count > 0) {
            if (bool || (e.target.name === "delete")) {
                setBool(!bool)
                if (e.target.name === "delete") {
                    const data1 = {
                        userId: _id.id,
                        products: e.target.value
                    }
                    dispatch(shopActions.deleteShops(data1))
                }
                else {
                    const products = new Object();
                    products[id] = Number(count)
                    const data = {
                        userId: _id.id,
                        products
                    }
                    dispatch(shopActions.addShops(data))
                }
            }
        }
        else if (e.target.name === "delete") {
            setBool(!bool)
            const data1 = {
                userId: _id.id,
                products: e.target.value
            }
            dispatch(shopActions.deleteShops(data1))
        }
    }

    const alerti = () => {
        Swal.fire(
            'Must be logged in!',
            'Login with your username.',
            'success'
        )
    }
    const deleteUser = () => {
        if (type === "liquids") {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                    dispatch(eliquidsActions.deleteEliquids(id))
                }
            })

        }
        else if (type === "vapers") {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                    dispatch(vapersActions.deleteVapers(id))
                }
            })

        }
    }

    const updateUser = async () => {
        if (type === "liquids") {
            const { value: formValues } = await Swal.fire({
                title: 'Eliquids edition',
                showCancelButton: true,
                confirmButtonText: 'Update',
                html:
                    '<input placeHolder="Name" id="name" class="swal2-input">' +
                    '<input placeHolder="Description"id="description" class="swal2-input">' +
                    '<input placeHolder="Photo Url" id="photo" class="swal2-input">' +
                    '<input placeHolder="Price"id="price" class="swal2-input">' ,
                focusConfirm: false,
                preConfirm: () => {
                    let name = document.getElementById('name').value
                    let description = document.getElementById('description').value
                    let photo = document.getElementById('photo').value
                    let price = document.getElementById('price').value

                    let data = {
                        id: id,
                        body: {
                        }
                    }

                    if (name !== '') {
                        data.body.name = name
                    }
                    if (description !== '') {
                        data.body.description = description
                    }
                    if (photo !== '') {
                        data.body.photo = photo
                    }
                    if (price !== '') {
                        data.body.price = price
                    }

                    dispatch(eliquidsActions.updateEliquids(data))
                }
            })

            if (formValues) {
                Swal.fire(JSON.stringify(formValues))
            }

        } else if (type === "vapers") {
            const { value: formValues } = await Swal.fire({
                title: 'Vapers edition',
                showCancelButton: true,
                confirmButtonText: 'Update',
                html:
                    '<input placeHolder="Name" id="name" class="swal2-input">' +
                    '<input placeHolder="Description"id="description" class="swal2-input">' +
                    '<input placeHolder="Photo Url" id="photo" class="swal2-input">' +
                    '<input placeHolder="Price"id="price" class="swal2-input">' ,
                focusConfirm: false,
                preConfirm: () => {
                    let name = document.getElementById('name').value
                    let description = document.getElementById('description').value
                    let photo = document.getElementById('photo').value
                    let price = document.getElementById('price').value

                    let data = {
                        id: id,
                        body: {
                        }
                    }

                    if (name !== '') {
                        data.body.name = name
                    }
                    if (description !== '') {
                        data.body.description = description
                    }
                    if (photo !== '') {
                        data.body.photo = photo
                    }
                    if (price !== '') {
                        data.body.price = price
                    }

                    dispatch(vapersActions.updateVapers(data))
                }
            })

            if (formValues) {
                Swal.fire(JSON.stringify(formValues))
            }

        }
    }

    return (
        _id.role === "admin" ? (<><div className="product-card">
            <img src={img} className="card-img-top" />
            <div className="card-body d-flex justify-content-evenly flex-column align-items-center bg-black gap-1">
                <h5 className="card-title">{name}</h5>
                <p className="card-text mb-0 text-white mi">{description}.</p>
                <p>${price}</p>
                <div className="price-container d-flex">
                    <button className='bottom-cardsOne' onClick={deleteUser}>Delete</button>
                    <button className='bottom-cards' onClick={updateUser}>Edition</button>
                </div>
            </div>
        </div></>) : _id.role === "user" ? (
            <><div className="product-card">
                <img src={img} className="card-img-top"/>
                <div className="card-body d-flex justify-content-evenly flex-column align-items-center bg-black gap-1">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text mb-0 text-white mi">{description}.</p>
                    <div className="price-container d-flex">
                        <p>${price}</p>
                        <input className="input-cart" onChange={numb} type="number" min="0" max={cont} placeholder={0} name="quantity" id="quantity" />
                    </div>
                    {bool ? (<button onClick={send} value={id} className="btn btn-cart">Add to cart</button>) : (<><button onClick={send} value={id} className="btn btn-cart">Add to cart</button><button onClick={send} value={id} name={"delete"} className="btn btn-cart bg-danger">Delete from cart</button> </>)}
                </div>
            </div></>)
             : (
            <><div className="product-card">
                <img src={img} className="card-img-top"/>
                <div className="card-body d-flex justify-content-evenly flex-column align-items-center bg-black gap-1">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text mb-0 text-white mi">{description}.</p>
                    <div className="price-container d-flex">
                        <p>${price}</p>
                        <input className="input-cart" onChange={numb} type="number" min="0" max={cont} placeholder={0} name="quantity" id="quantity" />
                    </div>
                    <button onClick={alerti} value={id} className="btn btn-cart">Add to cart</button>
                </div>
            </div></>)

    )
}
