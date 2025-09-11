import styles from './Store.module.css';
import ProductsSection from '../../components/ProductsSection/ProductsSection';

const Store = () => {
  return (
    <div>
      <section className={styles.products}>
        <h1 className={styles.title}>Products</h1>
        <ProductsSection />
      </section>
    </div>
  );
};

export default Store;
