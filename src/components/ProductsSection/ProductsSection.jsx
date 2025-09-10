import styles from './ProductsSection.module.css';
import ProductCard from '../ProductCard/ProductCard';

const ProductsSection = ({ title }) => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.products}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default ProductsSection;
