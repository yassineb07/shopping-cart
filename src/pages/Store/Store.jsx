import styles from './Store.module.css';
import ProductsSection from '../../components/ProductsSection/ProductsSection';
import { useOutletContext } from 'react-router';

const Store = () => {
  const { data } = useOutletContext();

  return (
    <div>
      <section className={styles.products}>
        <h1 className={styles.title}>Products</h1>
        <ProductsSection products={data} />
      </section>
    </div>
  );
};

export default Store;
