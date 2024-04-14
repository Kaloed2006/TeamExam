import React from 'react'
import st from './HeaderBalance.module.css'
import MoneyBag from '../HeaderIcons/MoneyBag'
import Text from '../../UI/Text/Text'
import { Link } from 'react-router-dom'

export default function HeaderBalance() {
  return (
    <div className={st.parent}>
      <div className={st.child}>
        <MoneyBag />
        <Text mycolor='#ffffff' myfse='18px' myff='mR' mytext='Баланс:' />
        <Text mycolor='#3C4852' mybgc='#FFCC80' mypd='0.5rem' myfse='20px' myff='mB' myborr='10px' mytext='1234 ₽' />
      </div>
      <div className={st.child}>
        <Link to='/replenish' className={st.balance_btn}>Пополнить</Link>
        <Link to='/withdraw' className={st.balance_btn}>Вывести</Link>
      </div>
    </div>
    
  )
}