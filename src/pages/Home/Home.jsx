import { useEffect, useState } from "react";
import { fetchPopular } from '../../components/ApiFetch/ApiFetch.js';
import MovieList from "components/MovieList/MovieList.jsx";


const Home = () => {
    const [state, setState] = useState({
        items: [],
        loading: false,
        error: null,
    });

    useEffect(() => {
        const fetchMovie = async () => {            
            try {
                setState(prevState => ({
                ...prevState,
                    loading: true,
                 error: null,
            }));
                const result = await fetchPopular();
                setState(prevState => {
                    return {
                        ...prevState,
                        items: [...prevState.items, ...result]
                    }
                })
            } catch (error) {
                setState(prevState => ({
                ...prevState,
                    error,
                }))
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
    
    return (
        <div className="s.container">
            <h2>Trending today</h2>
            {items.length > 0 && <MovieList items={items}/>}
            {loading && <p>...load Movie</p>}
            {error && <p>...Movie load failed</p>}

    </div>
)
}

export default Home;

