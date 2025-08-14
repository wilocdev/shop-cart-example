import ShoeItem from './ShoeItem'
import { shoes } from '../data/shoes'
import { useCartContext } from '../context/CartContext'

export default function Shoes() {
  const { handleAddToCart, shoe, cart } = useCartContext()
  return (
    <section className="sm:grid flex flex-col sm:grid-cols-[repeat(auto-fill,minmax(240px,_1fr))] gap-4 p-4 max-w-200 mx-auto mt-20 ">
      {shoes.map((shoe) => (
        <ShoeItem
          key={shoe.id}
          handleAddToCart={handleAddToCart}
          shoe={shoe}
          cart={cart}
        />
      ))}
    </section>
  )
}
