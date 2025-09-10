import styles from './Home.module.css';
import Header from '../../components/Header/Header';
import HeroSection from '../../components/HeroSection/HeroSection';
import ProductsSection from '../../components/ProductsSection/ProductsSection';
import Announcement from '../../components/Announcement/Announcement';

const Home = () => {
  return (
    <div className={styles.home}>
      <Announcement text={'welcome to home'} />
      <Header />
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
