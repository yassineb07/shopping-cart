import styles from './Cart.module.css';
import ProductPage from '../../components/ProductPage/ProductPage';
import { useOutletContext } from 'react-router';

const Cart = () => {
  const { cartState } = useOutletContext();
  const [cart] = cartState;

  const cartItems = cart.map((product) => {
    return <ProductPage product={product} key={product.id} />;
  });

  const totalPrice = cart.reduce((total, product) => {
    return total + product.price;
  }, 0);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Cart</h1>
      <ul className={styles.cart}>{cartItems}</ul>
      <div className={styles.total}>
        <p>Total</p>
        <p>${totalPrice}</p>
      </div>
    </main>
  );
};

export default Cart;
