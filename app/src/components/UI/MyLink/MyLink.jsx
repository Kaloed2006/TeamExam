import React from 'react'
import { Link } from 'react-router-dom'

export default function MyLink({myff, myfse, mycolor, mybgc, mybor, myborr, mypd, to, naming, text, children}) {
  return (
    <Link style={{
      textDecoration: 'none',
      transition: '0.4s',
      fontFamily: myff,
      fontSize: myfse,
      color: mycolor,
      backgroundColor: mybgc,
      border: mybor,
      borderRadius: myborr,
      padding: mypd,
   }} to={to} className={naming}>{text}{children}</Link>
  )
}