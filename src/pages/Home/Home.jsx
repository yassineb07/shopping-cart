import styles from './Home.module.css';
import HeroSection from '../../components/HeroSection/HeroSection';
import ProductsSection from '../../components/ProductsSection/ProductsSection';
import { useState, useEffect } from 'react';
import fetchProductData from '../../api';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [featuredData, setFeaturedData] = useState(null);
  const [bestSellersData, setBestSellersData] = useState(null);

  useEffect(() => {
    const getProductsData = async () => {
      try {
        const productsData = await fetchProductData(
          'https://fakestoreapi.com/products'
        );
        const featuredData = productsData.slice(0, 6);
        const bestSellersData = productsData.slice(6, 12);
        setFeaturedData(featuredData);
        setBestSellersData(bestSellersData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setFeaturedData(null);
        setBestSellersData(null);
      } finally {
        setLoading(false);
      }
    };

    getProductsData();
  }, []);

  return (
    <div className={styles.home}>
      <HeroSection />
      <section className={styles.productSection}>
        <h1 className={styles.productSectionTitle}>Featured Products</h1>
        {loading && <div className={styles.loading}>Loading products...</div>}
        {error && <div className={styles.error}>{error}</div>}
        {featuredData && <ProductsSection products={featuredData} />}
      </section>
      <section className={styles.productSection}>
        <h1 className={styles.productSectionTitle}>Best Sellers</h1>
        {loading && <div className={styles.loading}>Loading products...</div>}
        {error && <div className={styles.error}>{error}</div>}
        {bestSellersData && <ProductsSection products={bestSellersData} />}
      </section>
    </div>
  );
};

export default Home;
