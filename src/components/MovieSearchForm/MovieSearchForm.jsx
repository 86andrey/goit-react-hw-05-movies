import { useState } from "react";

const MovieSearchForm = ({onSubmit}) => {
    const [state, setState] = useState({
        search: ""
    });

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setState({
            ...state,
            [name]: value,
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ ...state });
        setState({
            search: ""
        })
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input name="search"
                type="text"
                value={state.search}
                onChange={handleChange}
                placeholder="Поиск" required />
            <button type="submit">Искать</button>
        </form>
    )
};

export default MovieSearchForm;
