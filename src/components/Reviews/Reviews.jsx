import { fetchMovies } from 'components/fetchMovie';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Author, AuthorWrap, AvLogo, Avatar, List, Rcontent, Review } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  let params = {
    key: '7b2b4cd6cb48f567b76e7e7bfe683e8e',
  };
  const request = `movie/${id}/reviews`;
  useEffect(() => {
    const fetch = async () => {
      try {
        const resp = await fetchMovies(params, request);
        setReviews(resp.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return reviews.length === 0 ? (
    <p>No reviews</p>
  ) : (
    <List>
      {reviews.map(review => {
        return (
          <Review key={review.id}>
            <AuthorWrap>
              <Avatar>
                <AvLogo />
              </Avatar>
              <Author>{review.author}</Author>
            </AuthorWrap>
            <Rcontent>{review.content}</Rcontent>
          </Review>
        );
      })}
    </List>
  );
};
export default Reviews;
