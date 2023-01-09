import React from 'react';

export default function LogOutBtn(props) {
    let { type , text , fx, className } = props
  return (
    <button type={type} onClick={fx} className={className} >{text}</button>
  )
}