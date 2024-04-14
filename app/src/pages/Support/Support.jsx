import React from 'react'
import Layout from '../../components/Layout/Layout'
import Text from '../../components/UI/Text/Text'
import MyLink from '../../components/UI/MyLink/MyLink'
import RightArrow from './SVGIcons/RightArrow'
import Clock from './SVGIcons/Clock'
import Check from './SVGIcons/Check'
import Calendar from './SVGIcons/Calendar'
import './Support.css'

export default function Support() {
  const supportData =
    [{
      id: 0,
      status: true
    },
    {
      id: 1,
      status: true
    },
    {
      id: 2,
      status: false
    },
    {
      id: 3,
      status: false
    },
    {
      id: 4,
      status: false
    }]
  return (
    <Layout>
      <div className='parent'>
        <div className='support'>
          <Text myff='mB' myfse='30px' mypd='1rem' mytext='Поддержка' />
          <MyLink myff='mB' myfse='18px' mycolor='3C4852' mybor='1px solid #FFCC80' myborr='10px' n mypd='1rem' text='Создать тикет '> <RightArrow /> </MyLink>
        </div>
        {supportData.map((item, i) => (
          <div key={i} className='ticket'>
            <div className='card_content'>
              <Text myff='mSB' myfse='22px' mypd='0.5rem' mycolor='#3C4852' mytext='Название тикета' />
              <p className='lorem_text'>Maecenas vestibulum libero turpis, eu efficitur eros vehicula a. Duis fermentum fermentum tortor semper vulputate. Sed arcu est, tincidunt vel mi</p>
            </div>

            <div className='data' >
              {item.status == true &&
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <Clock />
                  <Text myff='mB' myfse='16px' mypd='0.5rem' mycolor='#66B87A' mytext='В процессе' />
                </div>
              }
              {item.status == false &&
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <Check/>
                  <Text myff='mB' myfse='16px' mypd='0.5rem' mycolor='#E1B26C' mytext='Исполнено' />
                </div>
              }
              <div style={{display: 'flex', alignItems: 'center'}}>
              <Calendar/>
              <Text myff='mB' myfse='16px' mypd='0.5rem' mycolor='#8E8D8D' mytext='Дата запроса' />
              </div>
              <Text myff='mSB' myfse='14px' mycolor='#8E8D8D' mytext='11.02.11'/>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}