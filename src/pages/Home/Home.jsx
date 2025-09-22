import styles from './Home.module.css';
import HeroSection from '../../components/HeroSection/HeroSection';
import ProductsSection from '../../components/ProductsSection/ProductsSection';
import { useOutletContext } from 'react-router';

const Home = () => {
  const { data } = useOutletContext();

  const featuredData = data.slice(0, 6);
  const bestSellersData = data.slice(6, 12);

  return (
    <div className={styles.home}>
      <HeroSection />
      <section className={styles.productSection}>
        <h1 className={styles.productSectionTitle}>Featured Products</h1>
        <ProductsSection products={featuredData} />
      </section>
      <section className={styles.productSection}>
        <h1 className={styles.productSectionTitle}>Best Sellers</h1>
        <ProductsSection products={bestSellersData} />
      </section>
    </div>
  );
};

export default Home;
