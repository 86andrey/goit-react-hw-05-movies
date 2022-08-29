import { useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCredits } from '../../components/ApiFetch/ApiFetch.js';
import styled from 'styled-components';
// import { Loader } from "components/Loader/Loader.jsx";

const Cast = () => {
     const [state, setState] = useState({
        items: [],
        loading: false,
        error: null,
    });
    const { id } = useParams();
    
       useEffect(() => {
           const fetchMovie = async () => {
               try {
                 setState(prevState => ({
                ...prevState,
                     loading: true,
                error: null,
            }));
                const result = await fetchCredits(id);
                setState(prevState => {
                    return {
                        ...prevState,
                        items: result.cast,
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
    
    // const goBack = () => navigate(-1);
    // const { loading } = state.loading;
    const { items } = state;
    const elements = items.map(({ id, name, character, profile_path }) => (
        <SItem key={id}>            
                <img
                    loading="lazy"
                    src={'https://image.tmdb.org/t/p/w500' + profile_path}
                    alt={name}
                    width={`100px`}
                />
            <h3>{name}</h3>
            <p>{character}</p>
        </SItem>
    ));

    return (
        <MovieCard>
      <STitle>Cast</STitle>
       <SList>
          {elements}
        </SList>
   </MovieCard>
  );
};

const MovieCard = styled.div`
  padding: 10px;
border-bottom-style: solid;
`;

const STitle = styled.h2`
  margin: 0 0 0 30px;
  /* margin: 0; */
`;
const SList = styled.ul`
  display: flex;
  align-items: stretch;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 10px;
  margin: 0;
`;
const SItem = styled.li`
  text-align: center;
  list-style: none;
  margin: 0 30px;
  border: 1px solid;
  width: 200px;
  margin-bottom: 20px;
  & h3 {
    margin: 10px 0;
  }
  & p {
    margin-bottom: 30px;
  }
`;
export default Cast;