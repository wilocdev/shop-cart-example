import { useCartContext } from '../context/CartContext'
import { OpenCart } from './CartIcon'

export default function OpenCartBox() {
  const { handleOpenCart, getTotal, openCart } = useCartContext()

  return (
    <div
      className={`right-2 top-2 items-center justify-end gap-4  p-2 rounded-3xl min-w-40 OpenCartBox ${
        openCart ? 'hidden' : 'fixed flex'
      }`}
    >
      <span className="text-2xl">{getTotal().toLocaleString('es-co')}</span>
      <button
        onClick={handleOpenCart}
        className="rounded-full p-3 bg-black cursor-pointer text-white stroke-2 hover:text-black hover:bg-white transition duration-400"
      >
        <OpenCart />
      </button>
    </div>
  )
}
