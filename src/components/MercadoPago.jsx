import React from 'react'
import { useEffect } from 'react'
import { useCallback } from 'react'
import axios from 'axios';
import url from '../url';

const FORM_ID = "payment-form"

export default function MercadoPago(props) {
  let { token, array } = props
  const header = { headers: { 'Authorization': `Bearer ${token}` } }
  const obtenerPreference = useCallback(
    async () => {
      try {
        const res = await axios.post(`${url}shoppings/pay`, array, header)
        
        if (res?.data.response) {
          console.log( res)
          const script = document.createElement("script");
          script.type = "text/javascript";
          script.src = "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
          script.setAttribute("data-preference-id", res.data.response)
          const form = document.getElementById(FORM_ID);
          form.appendChild(script);
        }
      }
      catch (error) {
        console.log(error)
      }
    }, [array, token],
  )
  useEffect(() => {
    obtenerPreference()
  }, [obtenerPreference])
  return (
    <form id={FORM_ID} method="GET" />
  )
}
