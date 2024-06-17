import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import CardVaper from '../components/CardVaper';
import eliquidsActions from '../redux/actions/eliquidsAction';
import { Fade } from "react-awesome-reveal";

export default function Eliquids() {
  const dispatch = useDispatch();
  let { eliquids, category } = useSelector((store) => store.eliquidsReducer);
  let [check, setCheck] = useState([]);
  let [inp, setInp] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = { name: "", category: "" };
      setLoading(true);
      await dispatch(eliquidsActions.getEliquids(data));
      await dispatch(eliquidsActions.getCategories());
      setLoading(false);
    };
    fetchData();
  }, [dispatch]);

  const search = async (e) => {
    setInp(e.target.value);
    const data = { name: e.target.value, category: check.toString() };
    setLoading(true);
    await dispatch(eliquidsActions.getEliquids(data));
    setLoading(false);
  };

  const categ = async (e) => {
    if (check.includes(e)) {
      let i = check.indexOf(e);
      check.splice(i, 1);
      setCheck([...check]);
    } else {
      check.push(e);
      setCheck([...check]);
    }
    const y = check.toString();
    const data = { name: inp, category: y };
    setLoading(true);
    await dispatch(eliquidsActions.getEliquids(data));
    setLoading(false);
  };

  return (
    <div className="bg-black body-container-products d-flex flex-column flex-wrap gap-3 justify-content-center align-items-center">
      <div className='filter-container d-flex flex-row flex-wrap gap-4 justify-content-center align-items-center'>
        <div className='box'>
          <div className="search-box">
            <input type="text" className='search' placeholder='Search' onChange={search} />
          </div>
        </div>
        <div>
          <label className='label-check gap-4 d-flex'>
            {category.map(e => (
              <React.Fragment key={e}>
                <input className="checkbox" type="checkbox" onClick={() => categ(e)} value={e} />
                <div className="checkmark">{e}</div>
              </React.Fragment>
            ))}
          </label>
        </div>
      </div>
      <Fade>
        <h1 className='title-products'>E-liquids</h1>
        <div className='d-flex flex-wrap gap-5 justify-content-center pt-4 pb-4'>
          {loading ? (
            <h4 className='title-products'>Cargando productos...</h4>
          ) : (
            eliquids.length === 0 ? (
              
              <h4 className='title-products'>Cargando productos...</h4>
              // <img src="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif" alt="404" width={350} />
              
            ) : (
              eliquids.map(e => (
                <CardVaper
                  key={e._id}
                  name={e.name}
                  description={e.description}
                  price={e.price}
                  img={e.photo}
                  cont={e.amount}
                  id={e._id}
                  type={"liquids"}
                />
              ))
            )
          )}
        </div>
      </Fade>
      <div className="slider">
        <div className="slider-track">
          <div className="slide">
            <img src="img/carousel/fume.png" alt="logo fume" />
          </div>
          <div className="slide">
            <img src="img/carousel/geekvape.png" alt="logo geekvape" />
          </div>
          <div className="slide">
            <img src="img/carousel/ignite.png" alt="logo ignite" />
          </div>
          <div className="slide">
            <img src="img/carousel/joytech.png" alt="joytech logo" />
          </div>
          <div className="slide">
            <img src="img/carousel/nasty.png" alt="nasty logo" />
          </div>
          <div className="slide">
            <img src="img/carousel/smok.png" alt="smok logo" />
          </div>
          <div className="slide">
            <img src="img/carousel/vaporesso.png" alt="vaporesso logo" />
          </div>
          <div className="slide">
            <img src="img/carousel/geekvape.png" alt="logo geekvape" />
          </div>
          <div className="slide">
            <img src="img/carousel/zomo.png" alt="zomo logo" />
          </div>
          <div className="slide">
            <img src="img/carousel/fume.png" alt="logo fume" />
          </div>
          <div className="slide">
            <img src="img/carousel/ignite.png" alt="logo ignite" />
          </div>
          <div className="slide">
            <img src="img/carousel/joytech.png" alt="joytech logo" />
          </div>
          <div className="slide">
            <img src="img/carousel/geekvape.png" alt="logo geekvape" />
          </div>
          <div className="slide">
            <img src="img/carousel/nasty.png" alt="nasty logo" />
          </div>
          <div className="slide">
            <img src="img/carousel/smok.png" alt="smok logo" />
          </div>
          <div className="slide">
            <img src="img/carousel/vaporesso.png" alt="vaporesso logo" />
          </div>
          <div className="slide">
            <img src="img/carousel/zomo.png" alt="zomo logo" />
          </div>
          <div className="slide">
            <img src="img/carousel/geekvape.png" alt="logo geekvape" />
          </div>
        </div>
      </div>
    </div>
  );
}
