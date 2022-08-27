import { Route, Routes} from 'react-router-dom';
// import { lazy } from 'react';
import  Home  from '../pages/Home/Home';
import  Movies  from '../pages/Movies/Movies';
import  MovieDetails  from '../components/MovieDetails/MovieDetails';
import Menu from './Menu/Menu';
// import { Cast } from './Cast';
// import { Reviews } from './Reviews';
import '../shared/styles/style.css'
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

// const Movies = lazy(() => import('../pages/Movies'));

export const App = () => {
  return (
    <>
      <div className='App'>
        <Menu />
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />}/>
            {/* <Route path="cast" element={<Cast />} /> */}
            {/* <Route path="reviews" element={<Reviews />} /> */}
          {/* </Route> */}
          <Route path="*" element={<NotFoundPage />} />
         {/* </Route>  */}
      </Routes>
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </div>
      </>
  );
};