import React from 'react'
import Layout from '../../components/Layout/Layout'
import Text from '../../components/UI/Text/Text'
import Select from './Select/Select'
import OrderBlock from './OrderBlock/OrderBlock'
import './SearchOrder.css'

export default function SearchOrder() {
  return (
    <Layout>
      <div className='search_order'>

        <div className='heading'>
          <Text mycolor='#3C4852' myff='mB' myfse='30px' mytext='Новые заказы' />
          <div className='selects'>
            <Select val0='Выберите предмет' val1='математика' val2='алгебра' val3='геометрия' val4='физика' />
            <Select val0='Тип работы' val1='лёгкий' val2='нормик' val3='сложный' val4='рабский' />
          </div>
        </div>
        <OrderBlock />
        <OrderBlock />
        <OrderBlock />
        <OrderBlock />
        <OrderBlock />
      </div>
    </Layout>
  )
}