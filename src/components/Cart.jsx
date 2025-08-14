import { CloseCart } from './CartIcon'
import { useCartContext } from '../context/CartContext'

export default function Cart() {
  const {
    openCart,
    cart,
    handleCloseCart,
    handleRemoveToCart,
    handleSumItem,
    handleLessItem,
    getTotal,
  } = useCartContext()
  return (
    <section
      className={`h-screen bg-gray-900 text-white max-w-full w-140 p-4 flex-col fixed top-0 right-0 gap-6 ${
        openCart ? 'flex' : 'hidden'
      }`}
    >
      <header className="flex items-center justify-between">
        <h2 className="font-bold text-4xl">Cart</h2>
        <button
          onClick={handleCloseCart}
          className="cursor-pointer hover:rotate-90 transition duration-400"
        >
          <CloseCart />
        </button>
      </header>
      <div className="flex gap-4 flex-col overflow-y-auto pr-4 custom-scroll">
        {cart.map((shoe) => (
          <div
            key={shoe.id}
            className="border-2 font-semibold flex flex-col md:flex-row"
          >
            <div className="md:w-30 bg-red-200">
              <img src={shoe.img} alt={shoe.name} />
            </div>
            <footer className="px-4 py-3 flex flex-col gap-5">
              <div className="flex gap-4">
                <h3>{shoe.name}</h3>-<p>{shoe.price.toLocaleString('es-co')}</p>
              </div>
              <div className="flex gap-4 md:items-center flex-col md:flex-row ">
                <div className="flex gap-2 items-center">
                  <button
                    disabled={shoe.qty <= 1}
                    onClick={() => handleLessItem(shoe.id)}
                    className="font-bold w-10 h-10 flex items-center justify-center border-2 transition hover:bg-white hover:text-black cursor-pointer text-[23px]"
                  >
                    -
                  </button>
                  <span>Qty: {shoe.qty}</span>
                  <button
                    onClick={() => handleSumItem(shoe.id)}
                    className="font-bold w-10 h-10 flex items-center justify-center border-2 transition hover:bg-white hover:text-black cursor-pointer text-[23px]"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => handleRemoveToCart(shoe.id)}
                  className="w-30 py-2 cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-white transition"
                >
                  Remove
                </button>
              </div>
            </footer>
          </div>
        ))}
      </div>
      <footer className="gap gap-4 text-2xl font-bold flex justify-between pr-4">
        <p>Total:</p>
        <span>{getTotal().toLocaleString('es-co')}</span>
      </footer>
    </section>
  )
}
