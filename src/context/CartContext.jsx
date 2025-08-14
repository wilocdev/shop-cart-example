import { createContext, useContext, useEffect, useState } from 'react'
import { shoes } from '../data/shoes'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [openCart, setOpenCart] = useState(false)
  const [cart, setCart] = useState(() => {
    const localStorageCart = window.localStorage.getItem('Cart')
    return localStorageCart ? JSON.parse(localStorageCart) : []
  })

  const handleOpenCart = () => {
    setOpenCart(!openCart)
    document.body.style.overflow = 'hidden'
  }
  const handleCloseCart = () => {
    setOpenCart(!openCart)
    document.body.style.overflow = ''
  }

  const handleAddToCart = (id) => {
    const inTheCart = cart.find((shoe) => shoe.id === id)

    if (inTheCart) {
      return inTheCart
    } else {
      const addItem = shoes.find((shoe) => shoe.id === id)
      setCart([...cart, { ...addItem, qty: 1 }])
    }
  }
  const handleRemoveToCart = (id) => {
    const removeItem = cart.filter((shoe) => shoe.id !== id)
    setCart(removeItem)
  }

  const handleSumItem = (id) => {
    const sumItem = cart.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    )
    setCart(sumItem)
  }

  const handleLessItem = (id) => {
    const sumItem = cart.map((item) =>
      item.id === id ? { ...item, qty: item.qty - 1 } : item
    )
    setCart(sumItem)
  }

  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.qty, 0)
  }

  useEffect(() => {
    const cartSave = JSON.stringify(cart)
    window.localStorage.setItem('Cart', cartSave)
  }, [cart])

  return (
    <CartContext.Provider
      value={{
        openCart,
        cart,
        handleOpenCart,
        handleCloseCart,
        handleAddToCart,
        handleRemoveToCart,
        handleSumItem,
        handleLessItem,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('No se puede acceder al contexto del cart')
  }
  return context
}
