import { MoviesList } from 'components/MoviesList/MoviesList';
import { fetchMovies } from 'components/fetchMovie';
import { useEffect, useRef, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button, Field, Wrap } from './MovieSearch.styled';

const MovieSearch = () => {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const urlQuery = searchParams.get('query');
  if (urlQuery && urlQuery !==query){
    setQuery(urlQuery);
  };

  const [result, setResult] = useState([]);
  const navigate = useNavigate();
  const form = useRef();
  const onSubmit = e => {
    e.preventDefault();
    setQuery(e.target[0].value);
    form.current.reset();
  };
  let params = {
    key: '7b2b4cd6cb48f567b76e7e7bfe683e8e',
    query: query,
  };
  const request = `search/movie`;
  useEffect(() => {
    if (query === '') {
      return;
    }
    const fetch = async () => {
      try {
        const resp = await fetchMovies(params, request);
        setResult(resp.data.results);
        navigate(`?query=${query}`);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <Wrap>
      <form onSubmit={onSubmit} ref={form}>
        <Field type="text" placeholder='Search films...'/>
        <Button type="submit">Search</Button>
      </form>
      {query !== '' && <MoviesList data={result} />}
    </Wrap>
  );
};
export default MovieSearch;