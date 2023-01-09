import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Layout from './layouts/Layout';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Shopping from './pages/Shopping';
import Vapers from './pages/Vapers';
import Eliquids from './pages/Eliquids';
import { useDispatch, useSelector } from "react-redux";
import userAction from './redux/actions/userAction';
import { useEffect } from 'react';
import ProtectedRoute from './components/ProtectedRoute';
import MyProfile from './pages/MyProfile';

function App() {
  let { logged, role, id } = useSelector((store) => store.userReducer);
  let dispatch = useDispatch()

  useEffect(() => {
    let token = JSON.parse(localStorage.getItem('token'))
    console.log(token?.token.user)
    if (token) {
      dispatch(userAction.reEntry(token.token.user))
    }
  }, [])

  return (
    <BrowserRouter>
      <Layout>
        <Routes>

          <Route path="/*" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/vapers" element={<Vapers />} />
          <Route path="/eliquids" element={<Eliquids />} />
          <Route element={<ProtectedRoute isAllowed={logged && role === "user"} redirect={"/"} />} >
            <Route path="/myprofile" element={<MyProfile />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App;