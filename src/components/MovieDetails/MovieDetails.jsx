import { useParams, Link } from "react-router-dom";
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
    console.log(id)
    
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

    const { original_title, overview, vote_average, poster_path, release_date } = state.item;
//   const genresStr = genres.reduce((str, genre) => {
//     return str + `${genre.name}, `;
//   }, '');
//   const genresStrFinal = genresStr.slice(0, genresStr.length - 2);

    return (
        <>
     
        <SMain>
          <MovieCard>
            <Link to={'/'}>Go back...</Link>
            <SContent>
              <img
                src={'https://image.tmdb.org/t/p/w500' + poster_path}
                alt={original_title}
                width={`200px`}
              />
              <SText>
                            <h3>{original_title} ({release_date})</h3>
                            <h4>Overview</h4>
                <p>{overview}</p>
                <p>Reiting: {vote_average}</p>
                {/* <p>Genres: {genresStrFinal}</p> */}
              </SText>
            </SContent>
          </MovieCard>
          {/* <ul>
            <li>
              <Link to="cast" state={{ from }}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={{ from }}>
                Reviews
              </Link>
            </li>
          </ul> */}
          {/* <Outlet /> */}
        </SMain>
      
    </>
  );
};

const SMain = styled.main`
  margin: auto;
  padding-top: 80px;
  padding-bottom: 10px;
  background-color: #cecaca;
  width: 90vh;
  min-height: 100vh;
  /* display: flex; */
`;

const MovieCard = styled.div`
  padding: 10px;
//   text-align: center;
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