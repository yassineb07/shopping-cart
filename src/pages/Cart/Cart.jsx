import styles from './Cart.module.css';
import ProductPage from '../../components/ProductPage/ProductPage';

const Cart = () => {
  return (
    <div>
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
