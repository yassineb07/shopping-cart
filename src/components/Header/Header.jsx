import { Link } from 'react-router';
import styles from './Header.module.css';

const Header = () => {
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
        </Link>
      </nav>
    </header>
  );
};

export default Header;
