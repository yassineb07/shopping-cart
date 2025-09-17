import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card} key={product.id}>
      <img src={product.img} alt="product image" className={styles.img} />
      <p className={styles.title}>{product.name}</p>
      <p className={styles.price}>{product.price}</p>
    </div>
  );
};

export default ProductCard;
