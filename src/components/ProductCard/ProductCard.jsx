import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <img src={product.image} alt="product image" className={styles.img} />
      <p className={styles.title}>{product.title}</p>
      <p className={styles.price}>${product.price}</p>
      <button className={styles.add}>Add to cart</button>
    </div>
  );
};

export default ProductCard;
