import UserRoutes from 'UserRoutes';
import Menu from './Menu/Menu';
// import { Cast } from './Cast';
// import { Reviews } from './Reviews';
// import { lazy } from 'react';
import '../shared/styles/style.css'

export const App = () => {
  return (
      <div className='App'>
        <Menu />
        <UserRoutes/>  
    </div>
  );
};

// {/* </Route>  */}
// {/* <Route path="cast" element={<Cast />} /> */}
//             {/* <Route path="reviews" element={<Reviews />} /> */}
// {/* </Route> */ }
// {/* <Toaster position="top-right" reverseOrder={false} /> */ }
//           {/* <Route path="/" element={<Layout />}> */}