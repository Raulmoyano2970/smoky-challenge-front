import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import CardShopping from '../components/CardShopping';
import { useState } from 'react';
import eliquidsActions from '../redux/actions/eliquidsAction'
import vapersActions from '../redux/actions/vapersAction';
import shopActions from '../redux/actions/shopAction';
import userAction from '../redux/actions/userAction';
import MercadoPago from '../components/MercadoPago';
import "../shop.css"
import { Fade } from "react-awesome-reveal";

export default function Shopping() {
  let [total, setTotal] = useState(0)
  const dispatch = useDispatch();
  let { shop } = useSelector((store) => store.shopReducer);
  let { eliquids } = useSelector((store) => store.eliquidsReducer);
  let { vapers } = useSelector((store) => store.vapersReducer);
  let { id, token } = useSelector((store) => store.userReducer);
  let [bool, setBool] = useState(false)
  let [product, setProduct] = useState([])
  let [merca, setMerca] = useState("")
  let [bol, setBol] = useState(false)
  const data = { name: "", category: "" }

  useEffect(() => {
    if (!shop?.products && !bool) {
      dispatch(shopActions.getShops(id))
    }
    else if (shop?.products && !bool) {
      setBool(true)
    }
  }, [dispatch, id, shop])

  useEffect(() => {
    dispatch(eliquidsActions.getEliquids(data))
  }, [bool, shop])

  useEffect(() => {
    dispatch(vapersActions.getVapers(data))
  }, [bool, shop])

  useEffect(() => {

    let tot = 0

    if (shop?.products) {
      let array = shop.products.map(e => {

        let bol = eliquids.filter(a => a._id === Object.keys(e)[0])
        if (bol.length > 0) {
          bol = { ...bol[0] }
          bol.count = e[Object.keys(e)[0]]
          tot += e[Object.keys(e)[0]] * bol.price
          return bol
        }
        else {
          let bol = ""
          bol = { ...vapers.filter(a => a._id === Object.keys(e)[0])[0] }
          bol.count = e[Object.keys(e)[0]]
          tot += e[Object.keys(e)[0]] * bol.price
          setTotal(tot)
          return bol
        }
      })
      setProduct(array)
      setTotal(tot)
      setMerca(<MercadoPago token={token} array={product} />)
    }
  }, [bool, shop])

  const mostra = () => {
    setBol(true)
  }

  return (
    <Fade>
      <div className='containershop bg-shop d-flex flex-column'>
        <section className="orden__container card-shop">
          <h2 className='title text-white'>Shopping</h2>
          <div className='orden__completa '>
            {product?.length > 0 ? (product.map(e => <CardShopping img={e.photo} name={e.name} price={e.price} count={e.count} cardId={e._id} />)) : ("NOT FOUND")}
          </div>
          <div className="shopping__sumatoria">
            <div className="orden__concepto">
              <p>Total</p>
            </div>
            <div className="orden__monto">
              <p>$ {total}</p>
            </div>
            <button onClick={mostra} className="btn text-decoration-none">BUY</button>
          </div>
          <div>
            {bol ? (merca) : ("")}
          </div>
        </section>

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
      </div >
    </Fade>
  )
}
