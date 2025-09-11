import { Outlet } from 'react-router';
import styles from './App.module.css';
import Announcement from './components/Announcement/Announcement';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div>
      <Announcement text={'welcome to App'} />
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
