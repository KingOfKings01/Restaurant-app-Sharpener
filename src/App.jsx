import Navbar from './components/Layout/Navbar'
import Card from './components/Meals/Card'
import Meals from './components/Meals/Meals'

function App() {
  return (
    <>
      <Navbar /> 

      <div className='container'>
        <Card />
        <Meals />
      </div>     
    </>
  )
}

export default App
