import { Outlet } from 'react-router';
import styles from './App.module.css';
import Announcement from './components/Announcement/Announcement';
import Header from './components/Header/Header';
import { useState, useEffect } from 'react';
import fetchProductData from './api';

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getProductsData = async () => {
      try {
        const productsData = await fetchProductData(
          'https://fakestoreapi.com/products'
        );
        setData(productsData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    getProductsData();
  }, []);

  return (
    <div>
      <Announcement text={'welcome to App'} />
      <Header cart={cart} />
      {loading && <div className={styles.loading}>Loading data...</div>}
      {error && <div className={styles.error}>{error}</div>}
      {data && <Outlet context={{ data, cartState: [cart, setCart] }} />}
    </div>
  );
};

export default App;
