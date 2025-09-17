import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card} key={product.id}>
      <img src={product.image} alt="product image" className={styles.img} />
      <p className={styles.title}>{product.title}</p>
      <p className={styles.price}>${product.price}</p>
    </div>
  );
};

export default ProductCard;
