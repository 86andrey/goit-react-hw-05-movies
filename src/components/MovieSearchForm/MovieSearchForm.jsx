import { useState } from "react";

const MovieSearchForm = () => {
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
        onsubmit({ ...state });
        setState({
            search: ""
        })
    };
    return (
        <form onSubmit={handleSubmit}>
            <input name="search" type="text" value={state.search} onChange={handleChange} placeholder="Поиск" />
            <button type="submit">Искать</button>
        </form>
    )
};

export default MovieSearchForm;
