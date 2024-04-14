import React from 'react'
import Layout from '../../components/Layout/Layout'
import Text from '../../components/UI/Text/Text'
import '../MyOrders/MyOrders.css'

export default function Customer() {
  const data =
  [{
    id: 0,
    customer: 'Имя',
    price: 1234,
    status: null,
  },
  {
    id: 1,
    customer: 'Имя',
    price: 1234,
    status: true,
  },
  {
    id: 2,
    customer: 'Имя',
    price: 1234,
    status: false,
  },
  {
    id: 3,
    customer: 'Имя',
    price: 1234,
    status: true,
  },
  {
    id: 4,
    customer: 'Имя',
    price: 1234,
    status: true,
  },
  ];
return (
  <Layout>
    <div className='parent'>
      <div className='title'>
      <Text myff='mB' myfse='30px' mypd='30px 0 30px 0' mytext='Мои заказы' />
      </div>
      {data.map((item, i) => (
        <div key={i} className='card'>
          <div>
            {item.status == null &&
              <Text myff='mSB' myfse='22px' mypd='0.5rem' mycolor='#3C4852' mytext='Название заказа' />
            }
            {item.status == true &&
              <Text myff='mSB' myfse='22px' mypd='0.5rem' mycolor='#66B87A' mytext='Название заказа' />
            }
            {item.status == false &&
              <Text myff='mSB' myfse='22px' mypd='0.5rem' mycolor='#EC5760' mytext='Название заказа' />
            }
            <Text myff='mSB' myfse='17px' mypd='0.5rem' mycolor='#8E8D8D' mytext='Предмет, Тип задачи' />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} >
            {item.status == null &&
              <Text myff='mB' myfse='18px' mypd='0.5rem' mycolor='#E1B26C' mytext='Идёт конкурс' />
            }
            {item.status == true &&
              <>
                <Text myff='mB' myfse='18px' mypd='0.5rem' mycolor='#66B87A' mytext='Цена: 1234 ₽' />
                <Text myff='mSB' myfse='17px' mypd='0.5rem' mycolor='#8E8D8D' mytext='Заказчик: Имя' />
              </>
            }
            {item.status == false &&
              <Text myff='mSB' myfse='18px' mypd='0.5rem' mycolor='#EC5760' mytext='Заказ отменён' />
            }
          </div>

        </div>
      ))}
    </div>
  </Layout>
)
}