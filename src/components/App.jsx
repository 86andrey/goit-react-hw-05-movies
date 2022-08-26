import { Route, Routes} from 'react-router-dom';
// import { lazy } from 'react';
import  Home  from '../components/Home/Home';
import  Movies  from '../components/Movies/Movies';
// import { MovieInfo } from 'pages/MovieInfo';
import { Layout } from './Layout/Layout';
// import { Cast } from './Cast';
// import { Reviews } from './Reviews';

// const Movies = lazy(() => import('../pages/Movies'));

export const App = () => {
  return (
    <>
      <div className='App'>
        <Layout />
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          {/* <Route path="/movies/:movieId" element={<MovieInfo />}> */}
            {/* <Route path="cast" element={<Cast />} /> */}
            {/* <Route path="reviews" element={<Reviews />} /> */}
          {/* </Route> */}
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
         {/* </Route>  */}
      </Routes>
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </div>
      </>
  );
};