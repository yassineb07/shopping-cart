import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <p>New arrivals</p>
        <button>Shop Now</button>
      </div>
    </div>
  );
};

export default HeroSection;
