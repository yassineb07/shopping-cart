import { Link } from 'react-router';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <p className={styles.text}>New arrivals</p>
        <button className={styles.btn}>
          <Link to="/store" className={styles.link}>
            Shop Now
          </Link>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
