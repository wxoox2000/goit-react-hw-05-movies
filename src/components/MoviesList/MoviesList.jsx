import { MovieItem } from 'components/MovieItem/MovieItem';
import { List } from './MoviesList.styled';

export const MoviesList = ({ data, trending }) => {
  return (
    <List>
      {data.map(movie => {
        return (
          <MovieItem
            key={movie.id}
            title={movie.original_title}
            preview={movie.backdrop_path}
            id={movie.id}
            trending={trending}
          />
        );
      })}
    </List>
  );
};
