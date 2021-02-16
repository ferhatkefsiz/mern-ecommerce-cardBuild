import CartItem from '../components/CartItem'
import './CartScreen.css'

const CartScreen = () => {
  return (
    <div className="cartscreen">
      <div className="cartscreen__left">
        <h2>Shopping Cart</h2>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="cartscreen__right">
        <div className="cartscreen_info">
          <p>Subtotal (0) items</p>
          <p>$499</p>
        </div>
        <div>
          <button>Procedd To Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default CartScreen
