import s from '../Menu/Menu.module.css';
import { NavLink } from 'react-router-dom';
// import { Suspense } from 'react';
// import styled from 'styled-components';
// import { Toaster } from 'react-hot-toast';

const getClassName = ({ isActive }) => {
    const className = isActive ? s.active : s.link;
    return className;
}
 const Menu = () => {
  return (
    <>
      <div className={s.div}>
        <ul className={s.ul}>
          <li>
             <NavLink className={getClassName} to="/">Home</NavLink >         
          </li>
        <li>
            <NavLink className={getClassName} to="/movies">Movies</NavLink >
        </li>
        </ul>
      </div>

      {/* <Suspense>
        <Outlet />
      </Suspense> */}

      {/* <Toaster /> */}
    </>
  );
};
export default Menu;