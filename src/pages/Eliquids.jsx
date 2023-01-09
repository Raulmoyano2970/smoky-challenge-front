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
          {eliquids.length === 0 ? (<> <iframe src="https://giphy.com/embed/j9XoexYMmd7LdntEK4" width="480" height="276" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/404-notfound-under-maintenance-j9XoexYMmd7LdntEK4"></a></p> </>) : (eliquids.map(e => <CardVaper name={e.name} description={e.description} price={e.price} img={e.photo} cont={e.amount} id={e._id} type={"liquids"} />))}
        </div>
      </Fade>
    </div>
  )
}