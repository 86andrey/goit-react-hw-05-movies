import UserRoutes from 'UserRoutes';
import Menu from './Menu/Menu';
import '../shared/styles/style.css'

export const App = () => {
  return (
      <div className='App'>
        <Menu/>
        <UserRoutes/>  
    </div>
  );
};

