import styles from './Cart.module.css';
import Header from '../../components/Header/Header';
import Announcement from '../../components/Announcement/Announcement';
import ProductPage from '../../components/ProductPage/ProductPage';

const Cart = () => {
  return (
    <div>
      <Announcement text={'welcome to cart'} />
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Cart</h1>
        <ul className={styles.cart}>
          <li>
            <ProductPage />
          </li>
          <li>
            <ProductPage />
          </li>
          <li>
            <ProductPage />
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Cart;
