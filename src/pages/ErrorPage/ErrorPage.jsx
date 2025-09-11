import styles from './ErrorPage.module.css';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div className={styles.error}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        You can go back to the home page by
        <Link to="/"> clicking here,</Link> though!
      </p>
    </div>
  );
};

export default ErrorPage;
