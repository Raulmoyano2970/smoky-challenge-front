import { createAsyncThunk } from "@reduxjs/toolkit";
import url from "../../url.js";
import axios from "axios";


const getEliquids = createAsyncThunk("getEliquid", async (data) => {
  const eliquids = await axios.get(`${url}liquids?name=${data.name}&category=${data.category}`);
  return { eliquids: eliquids.data.response };
});

const getCategories = createAsyncThunk("getCategory", async () => {
  const eliquids = await axios.get(`${url}liquids`);
  return { category: ([... new Set(eliquids.data.response.map(e => e.category))]) };
});

const deleteEliquids = createAsyncThunk("deleteEliquid", async (data) => {
  const eliquids = await axios.delete(`${url}liquids/${data}`);
  return { eliquids: eliquids.data.data };
});

const updateEliquids = createAsyncThunk("updateEliquid", async (data) => {
  const eliquids = await axios.put(`${url}liquids/${data.id}`, data.body);
  return { eliquids: eliquids.data.data };
});


const eliquidsActions = {
  getEliquids,
  getCategories,
  deleteEliquids,
  updateEliquids
};
export default eliquidsActions;