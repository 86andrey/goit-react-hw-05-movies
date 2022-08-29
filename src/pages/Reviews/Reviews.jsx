import { useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchReviews } from '../../components/ApiFetch/ApiFetch.js';
import styled from 'styled-components';
import { Loader } from "components/Loader/Loader.jsx";

const Reviews = () => {
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
                const result = await fetchReviews(id);
                setState(prevState => {
                    return {
                        ...prevState,
                        items: result.results,
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
    
    const { items } = state;
    const elements = items.map(({ id, author, content }) => (
        <SItem key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
        </SItem>
    ));

    return (
        <div>
      <STitle>Reviews</STitle>
      {state.loading && <Loader />}
      {items.length > 0 ? (
        <SList>
          {elements}
        </SList>
      ) : (
        <SInfo>There is no reviews... yet</SInfo>
      )}
    </div>
  );
};

const STitle = styled.h2`
  margin: 0 0 0 30px;
`;

const SList = styled.ul`
  padding: 10px;
  margin: 0;
`;

const SItem = styled.li`
  list-style: none;
  margin: 0 30px;
  & h3 {
    margin: 10px 0;
  }
  & p {
    margin-bottom: 30px;
  }
`;

const SInfo = styled.p`
  margin-left: 30px;
  font-size: 20px;
`;

export default Reviews;