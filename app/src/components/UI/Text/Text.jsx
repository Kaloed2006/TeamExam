import React from 'react'

export default function Text({mycolor, mybgc, mypd, myfse, myff, myborr, mytext}) {
  return (
    <p style={{
        color: mycolor,
        backgroundColor: mybgc,
        padding: mypd,
        fontSize: myfse,
        fontFamily: myff,
        borderRadius: myborr
    }}>{mytext}</p>
  )
}