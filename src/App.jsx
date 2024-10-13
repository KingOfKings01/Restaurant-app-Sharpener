import Navbar from './components/Layout/Navbar'
import Card from './components/Meals/Card'
import Meals from './components/Meals/Meals'
import CartProvider from './store/CartProvider'

function App() {
  return (
    <CartProvider>
      <Navbar /> 
      <div className='container'>
        <Card />
        <Meals />
      </div>     
    </CartProvider>
  )
}

export default App
