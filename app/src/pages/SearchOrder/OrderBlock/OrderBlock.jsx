import React from 'react'
import Text from '../../../components/UI/Text/Text'
import MyLink from '../../../components/UI/MyLink/MyLink'
import './OrderBlock.css'

export default function OrderBlock() {
    return (
        <div className='card'>
            <div className='card_box_left'>
                <Text myff='mSB' myfse='22px' mycolor='#3C4852' mypd='0.5rem' mytext='Название заказа' />
                <Text myff='mSB' myfse='17px' mycolor='#8E8D8D' mypd='0.5rem' mytext='Предмет, Тип задачи' />
            </div>
            <div className='card_box_right' >
                <Text myff='mSB' myfse='17px' mycolor='#3C4852' mypd='0.5rem' mytext='Сделать до 11.00.11' />
                <MyLink mybor='1px solid #FFCC80' myborr='6px' mycolor='#3C4852' myff='mB' myfse='15px' mypd='0.5rem 2.5rem' to='/order' text='Подробнее' />
            </div>
        </div>
    )
}