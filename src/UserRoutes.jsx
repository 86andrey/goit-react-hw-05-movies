import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Home = lazy(()=> import('pages/Home/Home'));
const Movies = lazy(()=> import('pages/Movies/Movies'));
const MovieDetails = lazy(()=> import('components/MovieDetails/MovieDetails'));
const Cast = lazy(()=> import('pages/Cast/Cast'));
const Reviews = lazy(()=> import('pages/Reviews/Reviews'))

const NotFoundPage= lazy(()=> import('pages/NotFoundPage/NotFoundPage'));

const UserRoutes = () => {
    return (
        <Suspense fallback={<p>...Loading</p>}>
            <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/movies" element={<Movies />} />
             <Route path="/movies/:id" element={<MovieDetails />}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
             </Route>            
             <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>
    )
};
export default UserRoutes;