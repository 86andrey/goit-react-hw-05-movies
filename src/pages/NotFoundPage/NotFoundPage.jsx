import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="s.container">
            <h2>Not Found Page</h2>
            <Link to='/'>To Main page</Link>
    </div>
)
}

export default NotFoundPage;