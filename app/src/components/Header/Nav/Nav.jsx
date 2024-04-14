import React from 'react'
import st from './Nav.module.css'
import WhiteLogo from '../../UI/WhiteLogo/WhiteLogo'
import { Link } from 'react-router-dom'
import HeaderBalance from '../HeaderBalance/HeaderBalance'
import Navbar from '../Navbar/Navbar'
import MyLink from '../../UI/MyLink/MyLink'
import BurgerMenu from '../BurgerMenu/BurgerMenu'

export default function Nav() {
  return (
    <nav>
      <Link to='/main' className={st.logo}><WhiteLogo mypd='0 1rem' /></Link>
      <div className={st.container}>
        <HeaderBalance />
        <Navbar />
        <MyLink myff='mB'
          myfse='18px'
          mycolor='#3C4852'
          mybgc='#FFCC80'
          mybor='1px solid #FFCC80'
          myborr='10px'
          mypd='1rem'
          naming={st.placeorder_btn}
          to='/placeorder'
          text="Разместить заказ" />
        <MyLink mypd='1rem' to='/myaccount' ><img src="../../../../public/teacher.png" /></MyLink>
        <MyLink myff='mSB'
          myfse='18px'
          mybor='1px solid #E7E7E7'
          myborr='10px'
          mycolor='#C3BFBF'
          mypd='1rem'
          naming={st.exit_btn}
          to='/signin'
          text='Выйти' />
      </div>
      <BurgerMenu />
    </nav>
  )
}