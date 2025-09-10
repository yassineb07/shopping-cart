import styles from './ProductsSection.module.css';
import ProductCard from '../ProductCard/ProductCard';

const ProductsSection = () => {
  return (
    <section className={styles.products}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </section>
  );
};

export default ProductsSection;
