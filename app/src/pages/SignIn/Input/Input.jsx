import React from 'react'

export default function Input({ children, placehold, type, blocknaming, naming }) {
    return (
        <div className={blocknaming}>
            <input className={naming} type={type} placeholder={placehold} />
            <span>
                {children}
            </span>
        </div>
    )
}