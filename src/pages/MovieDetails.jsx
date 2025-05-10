import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../api/tmbd';
import {
  Container,
  Typography,
  Box,
  CircularProgress,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovieDetails(id)
      .then((res) => {
        setMovie(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching movie details:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Container sx={{ textAlign: 'center', mt: 5 }}>
        <CircularProgress />
      </Container>
    );
  }

  if (!movie) {
    return (
      <Container sx={{ textAlign: 'center', mt: 5 }}>
        <Typography variant="h6">Movie not found.</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 5 }}>
      <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, p: 2 }}>
        <CardMedia
          component="img"
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          sx={{ maxWidth: 300, borderRadius: 2 }}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>{movie.title}</Typography>
          <Typography variant="body1" paragraph>{movie.overview}</Typography>
          <Typography variant="subtitle1">⭐ Rating: {movie.vote_average} / 10</Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Release Date: {movie.release_date}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default MovieDetails;
