import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <p className={styles.text}>New arrivals</p>
        <button className={styles.btn}>Shop Now</button>
      </div>
    </div>
  );
};

export default HeroSection;
