import MovieSearchForm from "components/MovieSearchForm/MovieSearchForm";
import s from "../Movies/Movies.module.css";

const Movies = () => {
    return (
        <div className={s.container}>
            <MovieSearchForm />
        </div>
    )
};


export default Movies;