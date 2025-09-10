import styles from './ProductCard.module.css';

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <img src="" alt="" className={styles.img} />
      <p className={styles.title}>title</p>
      <p className={styles.price}>9.99 $</p>
    </div>
  );
};

export default ProductCard;
