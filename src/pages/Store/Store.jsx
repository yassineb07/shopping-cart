import styles from './Store.module.css';
import Header from '../../components/Header/Header';
import Announcement from '../../components/Announcement/Announcement';
import ProductsSection from '../../components/ProductsSection/ProductsSection';

const Store = () => {
  return (
    <div>
      <Announcement text={'welcome to store'} />
      <Header />
      <section className={styles.products}>
        <h1 className={styles.title}>Products</h1>
        <ProductsSection />
      </section>
    </div>
  );
};

export default Store;
