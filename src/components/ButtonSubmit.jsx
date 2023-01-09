import React from 'react'

export default function ButtonSubmit(props) {
    let { type, text, fx, btnClass } = props
    return (
        <button type={type} onClick={fx} className={btnClass}>{text} </button>
    )
}