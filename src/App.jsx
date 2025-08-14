import './App.css'
import OpenCartBox from './components/OpenCartBox'
import Shoes from './components/Shoes'
import Cart from './components/Cart'

function App() {
  return (
    <div className="relative">
      <Shoes />
      <OpenCartBox />
      <Cart />
    </div>
  )
}

export default App
