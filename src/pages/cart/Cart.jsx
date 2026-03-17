import {Link} from "react-router-dom";
import styles from "./Cart.module.css";

const Cart = ({cartItems,handleDecrease,handleIncrease,handleRemoveItem}) => {
  const itemsPrice = cartItems.reduce((total, item)=>{return total + item.price * item.quantity;},0);
  return (
    <div className={styles.cart}>
      <h1>My Cart</h1>
      {cartItems.length === 0 && (
        <div className={styles.emptyCart}>
          <h1>Cart is Empty</h1>
          <Link to={"/"}><button className={styles.emptyBtn}>Continue Shopping</button></Link>
        </div>
      )}
      <div>
        {cartItems.length >= 1 &&(
          <div className={styles.basket}>
            <div className={styles.cartItems}>
              <div className={styles.headlines}>
                <p>Product</p>
                <p>Quantity</p>
                <p>Price</p>
              </div>
              <div>
                {cartItems.map((cartItem)=>{
                  const {image, name, price, id, quantity} = cartItem;
                  return (
                    <div key={id} className={styles.inCartItem}>
                      <div className={styles.item}>
                        <img src={image} className="cart-img" alt="" />
                        <p className="cart-img-title">{name}</p>
                      </div>
                      <div className="">
                        <div className={styles.cartMath}>
                          <button className="item-decrease" onClick={()=>handleDecrease(cartItem)}>-</button>
                          <p className="cart-math-number">{quantity}</p>
                          <button className="item-increase" onClick={()=>handleIncrease(cartItem)}>+</button>
                        </div>
                        <p className={styles.removeBtn} onClick={()=> handleRemoveItem(cartItem)}>Remove</p>
                      </div>
                      <p className={styles.cartItemPrice}>${price}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={styles.subtotal}>
              <div>
                Total Price
              </div>
              <div>
                ${itemsPrice.toFixed(2)}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart