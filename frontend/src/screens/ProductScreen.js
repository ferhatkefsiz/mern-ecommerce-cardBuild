import "./ProductScreen.css";

const ProductScreen = () => {
  return (
    <div className="productscreen">
      <div className="productscreen_left">
        <div className="left_image">
          <img src="https://images.unsplash.com/photo-1494698853255-d0fa521abc6c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" alt="product name" />
        </div>
        <div className="left_info">
          <p className="left_name">product 1</p>
          <p>Price $449</p>
          <p> description: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid alias deleniti facilis necessitatibus nemo libero maiores nihil suscipit, quae atque dolores corrupti soluta natus consequatur! Placeat vero illo voluptate id.  </p>
        </div>
      </div>
      <div className="prodcutscreen_right">
        <div className="right_info">
          <p>
            price : <span>499$</span>
          </p>
          <p>
            status: <span>In Stock</span>
          </p>
          <p>
            Qty
                <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </p>
          <p>
            <button>Add to cart</button>
          </p>
        </div>
      </div>

    </div>
  );
};

export default ProductScreen;