import React from 'react'
import st from './Navbar.module.css'
import Chat from '../SVGicons/Chat'
import Phone from '../SVGicons/Phone'
import Gear from '../SVGicons/Gear'
import MyLink from '../../UI/MyLink/MyLink'

export default function Navbar() {
    return (
        <ul className={st.nav_list}>
            <li className={st.nav_item} >
                <Chat/>
                <MyLink myff='mR'
                    myfse='18px'
                    mycolor='#fff'
                    mypd='1rem'
                    naming={st.link}
                    to='/support'
                    text='Поддержка'/>
            </li>
            <li className={st.nav_item} >
                <Phone/>
                <MyLink myff='mR'
                    myfse='18px'
                    mycolor='#fff'
                    mypd='1rem'
                    naming={st.link}
                    to='/myorders'
                    text='Мои заказы'/>
            </li>
            <li className={st.nav_item} >
                <Gear/>
                <MyLink myff='mR'
                    myfse='18px'
                    mycolor='#fff'
                    mypd='1rem'
                    naming={st.link}
                    to='/settings'
                    text='Настройки'/>
            </li>
        </ul>
    )
}