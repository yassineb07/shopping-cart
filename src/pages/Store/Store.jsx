import styles from './Store.module.css';
import ProductsSection from '../../components/ProductsSection/ProductsSection';
import { useState, useEffect } from 'react';
import fetchProductData from '../../api';

const Store = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProductsData = async () => {
      try {
        const productsData = await fetchProductData(
          'https://fakestoreapi.com/products'
        );
        setData(productsData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    getProductsData();
  }, []);

  return (
    <div>
      <section className={styles.products}>
        <h1 className={styles.title}>Products</h1>
        {loading && <div className={styles.loading}>Loading products...</div>}
        {error && <div className={styles.error}>{error}</div>}
        {data && <ProductsSection products={data} />}
      </section>
    </div>
  );
};

export default Store;
