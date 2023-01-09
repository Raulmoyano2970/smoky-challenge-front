import React from 'react'
import shopActions from '../redux/actions/shopAction'
import { useDispatch, useSelector } from "react-redux";

export default function CardShopping(props) {
    let { name, price, img, count, cardId } = props
    let { id } = useSelector((store) => store.userReducer);
    const dispatch = useDispatch();
    const dele = (e)=>{
        const data1 ={
            userId: id,
            products : e.target.value
        }
        dispatch(shopActions.deleteShops(data1))
    }
    return (

        <div className="orden__productos">
            <div className="producto__item">
                <div className="producto">
                    <img src={img} alt={name} />
                    <p>{name}</p>
                        <p>${price}x{count}={Number(price)*Number(count)}</p> 
               <button className='delete-btn' value={cardId} onClick={dele}>Delete</button>
                </div>
            </div>
        </div>

    )
}
