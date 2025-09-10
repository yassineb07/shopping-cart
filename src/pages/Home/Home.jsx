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
      <ProductsSection title={'Featured Products'} />
      <ProductsSection title={'Best Sellers'} />
    </div>
  );
};

export default Home;
