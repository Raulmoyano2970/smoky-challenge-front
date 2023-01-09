import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import url from "../../url";

const login = createAsyncThunk("login", async (datos) => {
    let urlBase = `${url}auth/sign-in`
    try {
        let user = await axios.post(urlBase, datos)
        console.log(user);
        return {
            success: true,
            response: user.data.response,
            res: user.data
        }

    } catch (error) {
        console.log(error.response)
        return {
            success: false,
            response: error.response.data.message

        }
    }
});
const reEntry = createAsyncThunk('reEnter', async (token) => {
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }
    try {
        let user = await axios.post(`${url}auth/token`, null, headers)
        return {
            success: true,
            response: user.data.response,
            token: token,
        }

    } catch (error) {
        console.log(error.response)
        return {
            success: false,
            response: error.response.data.message
        }
    }
});

const signOff = createAsyncThunk('logout', async (token) => {
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }
    try {
        let user = await axios.post(`${url}auth/sign-out`, null, headers)
        return {
            success: true,
            response: user.data.message
        }
    } catch (error) {
        console.log(error.response)
        return {
            success: false,
            response: error.response.data.message
        }
    }
});

const updateMyProfile = createAsyncThunk("updateMyProfile", async (data) => {
    try {
        const response = await axios.patch(`${url}auth/me/${data.id}`, data.user);
        console.log(response)
        return response.data.data;
    }
    catch (error) {
        console.log(error)
        return {
            payload: 'An error has ocurred'
        }
    }

});

const doUser = createAsyncThunk("doUser", async (id) => {
    try {
        let res = await axios.get(`${url}auth/me/${id}`);
        return {
            success: true,
            response: res.data.data,

        };
    } catch (error) {
        console.log(error);
        return {
            success: false,
            response: "An error has ocurred",
        };
    }
});

const userAction = {
    login,
    reEntry,
    signOff,
    updateMyProfile,
    doUser
}
export default userAction