import styles from './ProductPage.module.css';

const ProductPage = ({
  product,
  onQualityChange,
  onQualityPlus,
  onQualityMinus,
  onProductDelete,
}) => {
  const totalPrice = product.price * product.quantity;

  return (
    <div className={styles.product} id={product.id}>
      <div>
        <img src={product.image} alt="" className={styles.image} />
      </div>
      <div className={styles.details}>
        <p className={styles.name}>{product.title}</p>
        <div className={styles.quantity}>
          <button className={styles.increment} onClick={onQualityMinus}>
            -
          </button>
          <input
            type="number"
            name="quantity"
            id="quantity"
            className={styles.input}
            value={product.quantity}
            onChange={onQualityChange}
            min={1}
          />
          <button className={styles.increment} onClick={onQualityPlus}>
            +
          </button>
        </div>
        <button className={styles.delete} onClick={onProductDelete}>
          delete
        </button>
      </div>
      <div>
        <div className={styles.price}>{totalPrice.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default ProductPage;
