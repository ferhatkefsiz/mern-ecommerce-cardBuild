import './Product.css'
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <div className="product">
      <img src="https://images.unsplash.com/photo-1494698853255-d0fa521abc6c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" alt="" />

      <div className="product_info">
        <p className="info_name">Product 1</p>
        <p className="info_description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed expedita perferendis voluptatum repellendus. Quasi incidunt vitae doloribus quaerat ullam labore consequuntur, ea officiis ducimus sequi minima asperiores officia quae est.
        </p>
        <p className="info_price">$499.99</p>

        <Link to={`/product/${111}`} className="info_btn">
          View
          </Link>
      </div>
    </div>
  )
}

export default Product
