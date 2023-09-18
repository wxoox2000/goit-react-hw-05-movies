import { fetchMovies } from 'components/fetchMovie';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { BackLink, Genre, GenreList, InfoWrap, StyledLink, SubInfo, Title, Wrap } from './MovieDetails.styled';

const MovieDetails = () => {
  const [data, setData] = useState([]);
  const [genres, setGenres] = useState([]);
  const location = useLocation();
  const request = `${location.pathname}`;
  let params = {
    key: '7b2b4cd6cb48f567b76e7e7bfe683e8e',
  };
  useEffect(() => {
    const fetch = async () => {
      try {
        const resp = await fetchMovies(params, request);
        setData(resp.data);
        setGenres(resp.data.genres);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const imgUrl = `https://image.tmdb.org/t/p/original${data.poster_path}`;
  return (
    <>
      <Wrap>
        <BackLink to={location.state?.from ?? '/'}>Go back</BackLink>
        <img src={imgUrl} alt="" width="300px" />
        <InfoWrap>
          <Title>{data.original_title}</Title>
          <SubInfo>Overview</SubInfo>
          <p>{data.overview}</p>
          <SubInfo>Genres</SubInfo>
          <GenreList>
            {genres ? (
              genres.map(g => {return <Genre key={g.id}><p>{g.name}</p></Genre>})
            ) : (
              <p>no data</p>
            )}
          </GenreList>
          <span>User rating {data.vote_average}</span>
          <StyledLink to="cast">Cast</StyledLink>
          <StyledLink to="reviews">Reviews</StyledLink>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </InfoWrap>
      </Wrap>
    </>
  );
};
export default MovieDetails;
