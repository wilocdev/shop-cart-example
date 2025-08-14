import { useCartContext } from '../context/CartContext'
import { OpenCart } from './CartIcon'

export default function OpenCartBox() {
  const { handleOpenCart, getTotal, openCart } = useCartContext()

  return (
    <div
      className={`top-0 items-center justify-between gap-4  py-2 px-6 w-full bg-black md:min-w-40 text-white ${
        openCart ? 'hidden' : 'fixed flex'
      }`}
    >
      <span className="text-2xl">{getTotal().toLocaleString('es-co')}</span>
      <button
        onClick={handleOpenCart}
        className="rounded-full p-3 border-2 bg-black cursor-pointer text-white stroke-2 hover:text-black hover:bg-white transition duration-400"
      >
        <OpenCart />
      </button>
    </div>
  )
}
