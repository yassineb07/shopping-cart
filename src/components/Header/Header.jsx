import { Link } from 'react-router';
import styles from './Header.module.css';

const Header = ({ cart }) => {
  const totalItems = cart.reduce((total, product) => {
    return total + product.quantity;
  }, 0);

  return (
    <header className={styles.header}>
      <div className={styles.storeName}>Store Name</div>
      <nav className={styles.nav}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="/store" className={styles.link}>
          Store
        </Link>
        <Link to="/cart" className={styles.link}>
          Cart
          {totalItems === 0 ? null : (
            <div className={styles.totalItems}>{totalItems}</div>
          )}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
