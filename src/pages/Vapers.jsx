import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import CardVaper from '../components/CardVaper';
import vapersActions from '../redux/actions/vapersAction'
import { Fade } from "react-awesome-reveal";


export default function Vapers() {
    const dispatch = useDispatch();
    let { vapers, category } = useSelector((store) => store.vapersReducer);
    let [check, setCheck] = useState([])
    let [inp, setInp] = useState("")
    useEffect(() => {
        const data = { name: "", category: "" }
        dispatch(vapersActions.getVapers(data))
        dispatch(vapersActions.getCategories())
    }, [])

    const search = (e) => {

        setInp(e.target.value)
        const data = { name: e.target.value, category: check.toString() }
        dispatch(vapersActions.getVapers(data))
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
        dispatch(vapersActions.getVapers(data))
        console.log(check)
    }
    return (
        <div className="bg-black body-container-products d-flex flex-column flex-wrap gap-3 justify-content-center align-items-center pb-2">
                <div className='filter-container d-flex flex-row flex-wrap gap-4 justify-content-center align-items-center'>
                    <div className='box'>
                        <div class="search-box">
                            <input type="text" placeholder='Search' className='search' onChange={search} />
                        </div>
                    </div>
                    <div>
                        <label className='label-check gap-4 d-flex'>
                            {category.map(e => <><input className="checkbox" type="checkbox" onClick={e => categ(e.target.value)} value={e} />
                                <div class="checkmark">{e}</div></>)}
                        </label>
                    </div>
                </div>
            <Fade>
                <h1 className='title-products'>Vapers</h1>
                <div className='d-flex flex-wrap gap-5 justify-content-center pt-4 pb-4'>
                    {vapers.length === 0 ? (<> <img src="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif" alt="404" width={350} /> </>) : (vapers.map(e => <CardVaper name={e.name} description={e.description} price={e.price} img={e.photo} cont={e.amount} id={e._id} type={"vapers"} />))}
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
