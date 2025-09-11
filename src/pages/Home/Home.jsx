import styles from './Home.module.css';
import HeroSection from '../../components/HeroSection/HeroSection';
import ProductsSection from '../../components/ProductsSection/ProductsSection';

const Home = () => {
  return (
    <div className={styles.home}>
      <HeroSection />
      <section className={styles.productSection}>
        <h1 className={styles.productSectionTitle}>Featured Products</h1>
        <ProductsSection />
      </section>
      <section className={styles.productSection}>
        <h1 className={styles.productSectionTitle}>Best Sellers</h1>
        <ProductsSection />
      </section>
    </div>
  );
};

export default Home;
