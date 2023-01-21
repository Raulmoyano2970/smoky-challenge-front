import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import CardVaper from '../components/CardVaper';
import eliquidsActions from '../redux/actions/eliquidsAction';
import { Fade } from "react-awesome-reveal";

export default function Eliquids() {
  const dispatch = useDispatch();
  let { eliquids, category } = useSelector((store) => store.eliquidsReducer);
  let [check, setCheck] = useState([])
  let [inp, setInp] = useState("")
  useEffect(() => {
    const data = { name: "", category: "" }
    dispatch(eliquidsActions.getEliquids(data))
    dispatch(eliquidsActions.getCategories())
  }, [])

  const search = (e) => {

    setInp(e.target.value)
    const data = { name: e.target.value, category: check.toString() }
    dispatch(eliquidsActions.getEliquids(data))
  }
  const categ = (e) => {
    if (check.includes(e)) {
      let i = check.indexOf(e)
      check.splice(i, 1)
      setCheck(check)
    }
    else {
      check.push(e)
      setCheck(check)
    }
    const y = check.toString()
    const data = { name: inp, category: y }
    dispatch(eliquidsActions.getEliquids(data))
    console.log(check)
  }
  console.log(eliquids)
  return (
    <div className="bg-black body-container-products d-flex flex-column flex-wrap gap-3 justify-content-center align-items-center">
      <div className='filter-container d-flex flex-row flex-wrap gap-4 justify-content-center align-items-center'>
        <div className='box'>
          <div class="search-box">
            <input type="text" className='search' placeholder='Search' onChange={search} />
          </div>
        </div>
        <div>
          <label className='label-check gap-4 d-flex'>
            {category.map(e => <><input class="checkbox" type="checkbox" onClick={e => categ(e.target.value)} value={e} />
              <div class="checkmark">{e}</div></>)}
          </label>
        </div>
      </div>
      <Fade>
        <h1 className='title-products'>E-liquids</h1>
        <div className='d-flex flex-wrap gap-5 justify-content-center pt-4 pb-4'>
          {eliquids.length === 0 ? (<> <img src="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif" alt="404" width={350} /> </>) : (eliquids.map(e => <CardVaper name={e.name} description={e.description} price={e.price} img={e.photo} cont={e.amount} id={e._id} type={"liquids"} />))}
        </div>
      </Fade>
      <div class="slider">
          <div class="slider-track">
            <div class="slide">
              <img src="img/carousel/fume.png" alt="logo fume" />
            </div>
            <div class="slide">
              <img src="img/carousel/geekvape.png" alt="logo geekvape" />
            </div>
            <div class="slide">
              <img src="img/carousel/ignite.png" alt="logo ignite" />
            </div>
            <div class="slide">
              <img src="img/carousel/joytech.png" alt="joytech logo" />
            </div>
            <div class="slide">
              <img src="img/carousel/nasty.png" alt="nasty logo" />
            </div>
            <div class="slide">
              <img src="img/carousel/smok.png" alt="smok logo" />
            </div>
            <div class="slide">
              <img src="img/carousel/vaporesso.png" alt="vaporesso logo" />
            </div>
            <div class="slide">
              <img src="img/carousel/geekvape.png" alt="logo geekvape" />
            </div>
            <div class="slide">
              <img src="img/carousel/zomo.png" alt="zomo logo" />
            </div>
           <div class="slide">
              <img src="img/carousel/fume.png" alt="logo fume" />
            </div>
            <div class="slide">
              <img src="img/carousel/ignite.png" alt="logo ignite" />
            </div>
            <div class="slide">
              <img src="img/carousel/joytech.png" alt="joytech logo" />
            </div>
            <div class="slide">
              <img src="img/carousel/geekvape.png" alt="logo geekvape" />
            </div>
            <div class="slide">
              <img src="img/carousel/nasty.png" alt="nasty logo" />
            </div>
            <div class="slide">
              <img src="img/carousel/smok.png" alt="smok logo" />
            </div>
            <div class="slide">
              <img src="img/carousel/vaporesso.png" alt="vaporesso logo" />
            </div>
            <div class="slide">
              <img src="img/carousel/zomo.png" alt="zomo logo" />
            </div>
            <div class="slide">
              <img src="img/carousel/geekvape.png" alt="logo geekvape" />
            </div>
          </div>
        </div>
    </div>
  )
}