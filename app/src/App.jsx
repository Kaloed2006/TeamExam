import './App.css'
import {Route, Routes} from 'react-router-dom'
import Customer from './pages/Customer/Customer'
import ErrorPage from './pages/ErrorPage404/ErrorPage'
import Main from './pages/Main/Main'
import MyOrders from './pages/MyOrders/MyOrders'
import Order from './pages/Order/Order'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Replenish from './pages/Replenish/Replenish'
import SearchOrder from './pages/SearchOrder/SearchOrder'
import Settings from './pages/Settings/Settings'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import Support from './pages/Support/Support'
import Withdraw from './pages/Withdraw/Withdraw'

export default function App() {
  return (
    <Routes>
      <Route path='/customer' element={<Customer/>}/>
      <Route path='/error404' element={<ErrorPage/>}/>
      <Route path='/main' element={<Main/>}/>
      <Route path='/myorders' element={<MyOrders/>}/>
      <Route path='/order' element={<Order/>}/>
      <Route path='/placeorder' element={<PlaceOrder/>}/>
      <Route path='/replenish' element={<Replenish/>}/>
      <Route path='/searchorder' element={<SearchOrder/>}/>
      <Route path='/settings' element={<Settings/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/support' element={<Support/>} />
      <Route path='/withdraw' element={<Withdraw/>}/>
    </Routes>
  )
}