import { MoviesList } from 'components/MoviesList/MoviesList';
import { fetchMovies } from 'components/fetchMovie';
import { useEffect, useState } from 'react';
import { Wrap } from './home.styled';

const Home = () => {
  const [result, setResult] = useState([]);
  const req = 'trending/all/day?language=en-US';
  const trending = true;
  let params = {
    key: '7b2b4cd6cb48f567b76e7e7bfe683e8e',
  };
  useEffect(() => {
    const fetch = async () => {
      try {
        const resp = await fetchMovies(params, req);
        setResult(resp.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrap>
      <h1>Trending movies</h1>
      {result.length > 0 ? (
        <MoviesList data={result} trending={trending} />
      ) : (
        <p>Ooops, something went wrong, try again later...</p>
      )}
    </Wrap>
  );
};
export default Home;
