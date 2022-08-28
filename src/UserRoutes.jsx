import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

const UserRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
};
export default UserRoutes;