import "./CartItem.css";
import { Link } from "react-router-dom";

const CartItem = () => {
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img src="https://images.unsplash.com/photo-1494698853255-d0fa521abc6c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" alt="item name" />
      </div>
      <Link to={`/product/${111}`} className="cartItem__name">
        <p>Prodct1 </p>
      </Link>
      <p className="cartItem__price">$499</p>
      <select className="cartitem__select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <button className="cartItem__deleteBtn">
         Delete
      </button>
    </div>
  );
};

export default CartItem;
