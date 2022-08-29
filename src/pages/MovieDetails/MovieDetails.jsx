import { Link, useParams, useNavigate, Outlet, useLocation} from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchById } from '../../components/ApiFetch/ApiFetch.js';
import styled from 'styled-components';

const MovieDetails = () => {
    const [state, setState] = useState({
        item: {},
        loading: false,
        error: null,
    });
  
  const { id } = useParams();
  
  const navigate = useNavigate();
  
  const location = useLocation();
  const from = location.state?.from || "/";

       useEffect(() => {
           const fetchMovie = async () => {
               try {
                 setState(prevState => ({
                ...prevState,
                     loading: true,
                error: null,
            }));
                const result = await fetchById(id);
                setState(prevState => {
                    return {
                        ...prevState,
                        item: result,
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
       }, [id, setState]);
  
  const goBack = () => navigate(from);

  const { original_title, overview, vote_average, poster_path, release_date, genres } = state.item;
    
  const genresStr = genres?.reduce((str, genre) => {
    return str + `${genre.name}, `;
  }, '');

    return (
        <>
     
        <SMain>
          <MovieCard>
      <button onClick = {goBack}>Go Back</button>
            

            <SContent>
              <img
                src={'https://image.tmdb.org/t/p/w500' + poster_path}
                alt={original_title}
                width={`200px`}
                height={`400px`}
              />
              <SText>
                <h3>{original_title} ({release_date})</h3>
                <h4>Reiting: {vote_average}</h4>
                <h4>Overview</h4>
                <p>{overview}</p>                
                <h4>Genres</h4>
                <p>{genresStr}</p>
              </SText>
            </SContent>
          </MovieCard>
          <MovieCard>
          <h3>Additional information</h3>
          <ul>
            <li>
              <Link state={{from}} to={`/movies/${id}/cast`}>
                Cast
              </Link>
            </li>
            <li>
              <Link state={{from}} to={`/movies/${id}/reviews`}>
                Reviews
              </Link>
            </li>
            </ul>
          </MovieCard>  
           <Outlet />
        </SMain>
      
    </>
  );
};

const SMain = styled.main`
  margin: auto;
  padding-top: 80px;
  padding-bottom: 10px;
  width: 90vh;
//   min-height: 100vh;
  border-bottom-style: solid;
  /* display: flex; */
`;

const MovieCard = styled.div`
  padding: 10px;
border-bottom-style: solid;
`;

const SContent = styled.div`
  display: flex;
  padding-top: 20px;
`;
const SText = styled.div`
  text-align: left;
  padding-left: 10px;
  & p {
    font-size: 20px;
    padding: 10px;
  }
  & h3 {
    padding-left: 30px;
  }
`;



export default MovieDetails;
