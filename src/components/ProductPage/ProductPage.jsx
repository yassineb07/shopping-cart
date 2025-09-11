import styles from './ProductPage.module.css';
const ProductPage = () => {
  return (
    <div className={styles.product}>
      <div>
        <img src="" alt="" className={styles.image} />
      </div>
      <div className={styles.details}>
        <p className={styles.name}>product name</p>
        <div className={styles.quantity}>
          <button className={styles.increment}>-</button>
          <input type="number" name="" id="" className={styles.input} />
          <button className={styles.increment}>+</button>
        </div>
      </div>
      <div>
        <div className={styles.price}>199</div>
      </div>
    </div>
  );
};

export default ProductPage;
