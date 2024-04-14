import React from 'react'
import st from './WayToPay.module.css'
import Text from '../../UI/Text/Text'
import Visa from '../SVGicons/Visa'
import MasterCard from '../SVGicons/MasterCard'
import YandexMoney from '../SVGicons/YandexMoney'
import WebMoney from '../SVGicons/WebMoney'

export default function WayToPay() {
  return (
    <div className={st.waytopay__box}>
        <Text myff='mB' myfse='18px' mycolor='#FFF' mytext='Способы оплаты' />
        <Visa/>
        <MasterCard/>
        <YandexMoney/>
        <WebMoney/>
    </div>
  )
}