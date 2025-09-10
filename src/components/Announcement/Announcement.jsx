import styles from './Announcement.module.css';

const Announcement = ({ text }) => {
  return <p className={styles.text}>{text}</p>;
};

export default Announcement;
