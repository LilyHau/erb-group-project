import { clothes } from "../../../data.js";
import { merch } from "../../../data.js";
import { trinkets } from "../../../data.js";
import styles from "./Shop.module.css";
import { toast } from "react-toastify";

const Shop = ({ handleAddToCart }) => {
  const notify = () => {
    toast.success("An item has been added !", {
      position: "top-right",
    });
  };
  return (
    <>
      <div className={styles.hero}>
        <p className={styles.heroArrival}>NEW ARRIVAL</p>
        <h1 className={styles.heroHeader}>Sailor Calling</h1>
        <h2 className={styles.heroSubheader}>FROM THE HEART OF SAILING</h2>
        <button className={styles.btn}>SHOP NOW</button>
      </div>
      <div className={styles.clothContainer}>
        <div className={styles.products}>
          {clothes.map((singleProduct) => {
            const { id, name, price, image, limited, stock } = singleProduct;
            return (
              <div key={id} className={styles.product}>
                {limited ? (
                  <p className={styles.limited}>LIMITED EDITION</p>
                ) : (
                  <p className={styles.empty}></p>
                )}
                <div className={styles.info}>
                  <img src={image} alt="" />
                  <p
                    className={styles.stock}
                    style={{ color : stock === "Low" ? "red" : stock === "New" ? "blue" : "green" }}
                  >
                    {stock} In Stock
                  </p>
                  <p className={styles.name}>{name}</p>
                  <p className={styles.price}>${price}</p>
                  <button
                    onClick={() => {
                      handleAddToCart(singleProduct);
                      notify();
                    }}
                    className={styles.btn}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.merchContainer}>
        <div className={styles.merchHeader}>
          <h2>Cruise Line Regulars</h2>
        </div>
        <div className={styles.products}>
          {merch.map((singleProduct) => {
            const { id, name, price, image, limited, stock } = singleProduct;
            return (
              <div key={id} className={styles.product}>
                {limited ? (
                  <p className={styles.limited}>LIMITED EDITION</p>
                ) : (
                  <p className={styles.empty}></p>
                )}
                <div className={styles.info}>
                  <img src={image} alt="" />
                  <p
                    className={styles.stock}
                    style={{ color : stock === "Low" ? "red" : stock === "New" ? "blue" : "green" }}
                  >
                    {stock} In Stock
                  </p>
                  <p className={styles.name}>{name}</p>
                  <p className={styles.price}>${price}</p>
                  <button
                    onClick={() => {
                      handleAddToCart(singleProduct);
                      notify();
                    }}
                    className={styles.btn}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.trinketContainer}>
        <div className={styles.trinketHeader}>
          <h2>Mini Marine Trinkets</h2>
        </div>
        <div className={styles.products}>
          {trinkets.map((singleProduct) => {
            const { id, name, price, image, limited, stock } = singleProduct;
            return (
              <div key={id} className={styles.product}>
                {limited ? (
                  <p className={styles.limited}>LIMITED EDITION</p>
                ) : (
                  <p className={styles.empty}></p>
                )}
                <div className={styles.info}>
                  <img src={image} alt="" />
                  <p
                    className={styles.stock}
                    style={{ color : stock === "Low" ? "red" : stock === "New" ? "blue" : "green" }}
                  >
                    {stock} In Stock
                  </p>
                  <p className={styles.name}>{name}</p>
                  <p className={styles.price}>${price}</p>
                  <button
                    onClick={() => {
                      handleAddToCart(singleProduct);
                      notify();
                    }}
                    className={styles.btn}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Shop;
