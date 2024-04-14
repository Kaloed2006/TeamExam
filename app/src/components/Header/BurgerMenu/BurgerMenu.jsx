import React from 'react'
import './BurgerMenu.css'
import HeaderBalance from '../HeaderBalance/HeaderBalance'
import Navbar from '../Navbar/Navbar'
import MyLink from '../../UI/MyLink/MyLink'

export default function BurgerMenu() {
    return (
        <div class="burger-menu">
            <input class="burger-menu__toggle" id="menu-toggle" type="checkbox" />
            <label class="burger-menu__btn" for="menu-toggle">
                <span></span>
            </label>
            <ul class="burger-menu__box">
                <li class="burger-menu__item">
                    <HeaderBalance />
                </li>
                <li class="nav__item">
                    <Navbar />
                </li>
                <li class="burger-menu__item">
                    <MyLink myff='mB'
                        myfse='18px'
                        mycolor='#3C4852'
                        mybgc='#FFCC80'
                        mybor='1px solid #FFCC80'
                        myborr='10px'
                        mypd='1rem'
                        naming='placeorder_btn'
                        to='/placeorder'
                        text="Разместить заказ" />
                </li>
                <li class="burger-menu__item">
                    <MyLink mypd='1rem' to='/myaccount' ><img src="../../../../public/teacher.png" /></MyLink>
                    <MyLink myff='mSB'
                        myfse='18px'
                        mybor='1px solid #E7E7E7'
                        myborr='10px'
                        mycolor='#C3BFBF'
                        mypd='1rem'
                        to='/signin'
                        text='Выйти' />
                </li>
            </ul>
        </div>
    )
}