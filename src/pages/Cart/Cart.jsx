import styles from './Cart.module.css';
import ProductPage from '../../components/ProductPage/ProductPage';
import { useOutletContext } from 'react-router';

const Cart = () => {
  const { cartState } = useOutletContext();
  const [cart, setCart] = cartState;

  const handleQualityChange = (e) => {
    const productId = Number(
      e.target.parentElement.parentElement.parentElement.id
    );

    const newCart = cart.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: Number(e.target.value) };
      } else {
        return product;
      }
    });

    setCart(newCart);
  };

  const handleQualityPlus = (e) => {
    const productId = Number(
      e.target.parentElement.parentElement.parentElement.id
    );

    const newCart = cart.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: product.quantity + 1 };
      } else {
        return product;
      }
    });

    setCart(newCart);
  };

  const handleQualityMinus = (e) => {
    const productId = Number(
      e.target.parentElement.parentElement.parentElement.id
    );

    const newCart = cart.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: product.quantity - 1 };
      } else {
        return product;
      }
    });

    setCart(newCart);
  };

  const cartItems = cart.map((product) => {
    return (
      <ProductPage
        product={product}
        key={product.id}
        onQualityChange={handleQualityChange}
        onQualityPlus={handleQualityPlus}
        onQualityMinus={handleQualityMinus}
      />
    );
  });

  const totalPrice = cart.reduce((total, product) => {
    return total + product.price;
  }, 0);

  const totalItems = cart.reduce((total, product) => {
    return total + product.quantity;
  }, 0);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Cart
        <div className={styles.totalItems}>{totalItems}</div>
      </h1>
      <ul className={styles.cart}>{cartItems}</ul>
      <div className={styles.total}>
        <p>Total</p>
        <p>${totalPrice.toFixed(2)}</p>
      </div>
    </main>
  );
};

export default Cart;
