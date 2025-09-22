import styles from './ProductPage.module.css';

const ProductPage = ({ product }) => {
  return (
    <div className={styles.product}>
      <div>
        <img src={product.image} alt="" className={styles.image} />
      </div>
      <div className={styles.details}>
        <p className={styles.name}>{product.title}</p>
        <div className={styles.quantity}>
          <button className={styles.increment}>-</button>
          <input
            type="number"
            name="quantity"
            id="quantity"
            className={styles.input}
            value={product.quantity}
          />
          <button className={styles.increment}>+</button>
        </div>
      </div>
      <div>
        <div className={styles.price}>{product.price}</div>
      </div>
    </div>
  );
};

export default ProductPage;
