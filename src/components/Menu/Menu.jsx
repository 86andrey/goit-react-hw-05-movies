import s from '../Menu/Menu.module.css';
import { NavLink } from 'react-router-dom';
import items from './items';
// import { Suspense } from 'react';
// import styled from 'styled-components';
// import { Toaster } from 'react-hot-toast';

const getClassName = ({ isActive }) => {
    const className = isActive ? s.active : s.link;
    return className;
}
const Menu = () => {
  const elements = items.map(({ id, to, text }) => (
    <li key={id}>
      <NavLink className={getClassName} to={to}>{text}</NavLink >
    </li>
  ));
  
  return (
    <>
      <div className={s.div}>
        <ul className={s.ul}>
          {elements}
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