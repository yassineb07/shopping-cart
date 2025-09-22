import styles from './ProductCard.module.css';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className={styles.card} id={product.id}>
      <img src={product.image} alt="product image" className={styles.img} />
      <p className={styles.title}>{product.title}</p>
      <p className={styles.price}>${product.price}</p>
      <button className={styles.add} onClick={onAddToCart}>
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
