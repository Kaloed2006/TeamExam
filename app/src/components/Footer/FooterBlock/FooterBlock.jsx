import React from 'react'
import './FooterBlock.css'
import WayToPay from '../WayToPay/WayToPay'
import Text from '../../UI/Text/Text'
import Message from '../SVGicons/Message'
import MyLink from '../../UI/MyLink/MyLink'

export default function FooterBlock() {
  return (
    <div className='footer_block'>
      <WayToPay />
      <div className='box'>
      <Text myff='mSB' myfse='16px' mycolor='#8A9197' mypd='0 1rem' mytext='Права защищены и опасны' />
      <div className='support_block'>
        <Message />
        <MyLink myff='mR'
          myfse='18px'
          mycolor='#fff'
          mypd='1rem'
          naming='link'
          to='/support'
          text='Поддержка' />
      </div>
      <MyLink myff='mB'
        myfse='18px'
        mycolor='#3C4852'
        mybgc='#FFCC80'
        mybor='1px solid #FFCC80'
        myborr='10px'
        mypd='1rem'
        to='/placeorder'
        text="Разместить заказ" />
      </div>
    </div>
  )
}