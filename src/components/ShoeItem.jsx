export default function ShoeItem({ handleAddToCart, shoe, cart }) {
  return (
    <div className="border-2 font-semibold">
      <header className="flex items-center justify-between px-4 py-3 border-b-2">
        <img
          className="w-10"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/960px-Logo_NIKE.svg.png?20220908234918"
          alt="nike logo"
        />
        <span>${shoe.price.toLocaleString('es-co')}</span>
      </header>
      <div>
        <img src={shoe.img} alt={shoe.name} />
      </div>
      <footer className="px-4 py-3 border-t-2 flex flex-col gap-5">
        <h3>{shoe.name}</h3>
        <button
          onClick={() => handleAddToCart(shoe.id)}
          className={`border-2 py-2 px-4 cursor-pointer  ${
            cart.find((item) => item.id === shoe.id)
              ? 'bg-black text-white hover:bg-white hover:text-black duration-400'
              : 'hover:bg-black hover:text-white transition duration-400'
          }`}
        >
          {cart.find((item) => item.id === shoe.id)
            ? 'In The Cart'
            : 'Add To Cart'}
        </button>
      </footer>
    </div>
  )
}
