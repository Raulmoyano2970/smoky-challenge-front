import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import userActions from '../redux/actions/userAction';
import Swal from 'sweetalert2';
import "../profile.css"
import { Fade } from "react-awesome-reveal";

export default function MyProfile() {
    const dispatch = useDispatch()
    const { updateMyProfile } = userActions;
    let { myUser, token } = useSelector(store => store.userReducer);
    console.log(myUser);
    let id

    async function updateUser() {
        try {
            const { value: formValues } = await Swal.fire({
                title: 'Update User',
                showCancelButton: true,
                confirmButtonText: 'Update',
                html:
                    '<input placeHolder="Photo Url"id="photo" class="swal2-input">' +
                    '<input placeHolder="Name" id="name" class="swal2-input">' +
                    '<input placeHolder="Age"id="age" class="swal2-input">' +
                    '<input placeHolder="Email"id="email" class="swal2-input">',
                focusConfirm: false,
                preConfirm: () => {
                    let photo = document.getElementById('photo').value
                    let name = document.getElementById('name').value
                    let age = document.getElementById('age').value
                    let email = document.getElementById('email').value

                    let data = {
                        id: myUser.id,
                        user: {
                        }
                    }
                    if (photo !== '') {
                        data.user.photo = photo
                    }
                    if (name !== '') {
                        data.user.name = name
                    }
                    if (age !== '') {
                        data.user.age = age
                    }
                    if (email !== '') {
                        data.user.email = email
                    }
                    dispatch(updateMyProfile(data))
                }
            })

            if (formValues) {
                Swal.fire(JSON.stringify(formValues))
            }

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <main className='containerprofile'>
                <Fade>
            <div className="profile-card text-white ">
                    <div className="profile-img">
                        <img className="profile-im" src={myUser.photo} alt="" />
                    </div>
                    <div className="container-info">
                        <div className="name-container ">
                            <img src="img/name.png" alt="" />
                            <h1>{myUser.name}</h1>
                        </div>
                        <div className="name-container">
                            <img src="img/age.png" alt="" />
                            <p>Age:{myUser.age}</p>
                        </div>
                        <div className="name-container">
                            <img src="img/arroba.png" alt="" />
                            <p>Email: {myUser.email}</p>
                        </div>
                        <div className="name-container">
                            <button className='btn' onClick={updateUser}>Update Profile</button>
                        </div>

                    </div>
            </div>
                </Fade>
        </main>
    )
}