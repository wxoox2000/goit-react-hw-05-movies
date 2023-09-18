import { fetchMovies } from 'components/fetchMovie';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ActorCard, Image, List, Name } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();
  let params = {
    key: '7b2b4cd6cb48f567b76e7e7bfe683e8e',
  };
  const request = `movie/${id}/credits`;
  useEffect(() => {
    const fetch = async () => {
      try {
        const resp = await fetchMovies(params, request);
        const actors =
          resp.data.cast.length > 10
            ? resp.data.cast.splice(0, 10)
            : resp.data.cast;
        setCast(actors);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {cast.length>0 ? <List>
        {cast.map(actor => {
          return (
            <ActorCard key={actor.id}>
              <Image
                src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
                alt=""
                width="150px"
              />
              <Name>{actor.name}</Name>
              <p>{actor.character}</p>
            </ActorCard>
          );
        })}
      </List> : <p>No data</p>}
    </>
  );
};

export default Cast;