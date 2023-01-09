import { createAsyncThunk } from "@reduxjs/toolkit";
import url from "../../url.js";
import axios from "axios";


const addShops = createAsyncThunk("addShop", async (data) => {
    console.log(data)
    const shop = await axios.post(`${url}shoppings`, data);
    return { shop: shop.data.response };
});

const deleteShops = createAsyncThunk("deleteShop", async (data) => {
    const shop = await axios.patch(`${url}shoppings`, data);
    return { shop: shop.data.response };
});
const getShops = createAsyncThunk("getShop", async (data) => {
    const shop = await axios.get(`${url}shoppings/${data}`);
    return { shop: shop.data.response };
});


const shopActions = {
    addShops,
    deleteShops,
    getShops
};
export default shopActions;