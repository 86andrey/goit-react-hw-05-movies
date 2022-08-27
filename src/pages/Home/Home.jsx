import { useEffect, useState } from "react";
import { fetchPopular } from '../../components/ApiFetch/ApiFetch.js';
import { Link } from "react-router-dom";


const Home = () => {
    const [state, setState] = useState({
        items: [],
        loading: false,
        error: null,
    });

    useEffect(() => {
        const fetchMovie = async () => {
            setState({
                ...state,
                loading: true,
            });
            try {
                const result = await fetchPopular();
                setState(prevState => {
                    return {
                        ...prevState,
                        items: [...prevState.items, ...result]
                    }
                })
            } catch (error) {
                setState({
                    ...state,
                    error,
                })
            }
            finally {
                setState(prevState => {
                    return {
                        ...prevState,
                        loading: false,
                    }
                })
            }
        };
        fetchMovie();
    }, [setState]);

    const { items, loading, error } = state;
    const elements = items.map(({ id, title }) => <li key={id}>
        <Link to={`/movies/${id}`}>{ title}</Link>
    </li>)
    return (
        <div className="s.container">
            <h2>Trending today</h2>
            <ul>{elements}</ul>
            {loading && <p>...load Movie</p>}
            {error && <p>...Movie load failed</p>}

    </div>
)
}

export default Home;

