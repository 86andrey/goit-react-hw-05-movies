import { useEffect, useState } from "react";
import MovieSearchForm from "components/MovieSearchForm/MovieSearchForm";
import { fetchByQuery } from "components/ApiFetch/ApiFetch";
import MovieList from "components/MovieList/MovieList.jsx";
import s from "../Movies/Movies.module.css";

const Movies = () => {
    const [state, setState] = useState({
        items: [],
        loading: false,
        error: null,
    });

    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                setState(prevState => ({
                    ...prevState,
                    loading: true,
                }))
                const data = await fetchByQuery(search);
                setState(prevState => ({
                    ...prevState,
                    items: data,
                }))
            } catch (error) {
                setState(prevState => ({
                    ...prevState,
                    error,
                }))
            }
            finally {
                setState(prevState => ({
                    ...prevState,
                    loading: false,
                }))
            }
        };
        if (search) {
            fetchMovie()
        }
    }, [search]);

    const changeSearch = ({ search }) => {
        setSearch(search);
     };

    const { items } = state;
    return (
        <div className={s.container}>
            <MovieSearchForm onSubmit={changeSearch} />
            {items.length > 0 && <MovieList items={items}/>}
        </div>
    )
};


export default Movies;