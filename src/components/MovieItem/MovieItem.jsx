import { useLocation } from 'react-router-dom';
import { Image, MovieLink } from './MovieItem.styled';

export const MovieItem = ({title, preview, id, trending}) => {
  const url = `https://image.tmdb.org/t/p/original${preview}`;
  const location = useLocation();
return (
  <li>
      <MovieLink to={trending ?`movie/${id}` : `${id}`} state={{ from: location }}>
          <Image src={url} alt={title} />
          <h2>{title}</h2>
      </MovieLink>
  </li>
);
};
