import React, { useEffect, useState } from 'react';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Container,
  CircularProgress,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { getPopularMovies } from '../api/tmbd';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPopularMovies()
      .then((res) => {
        setMovies(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching movies:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Container sx={{ textAlign: 'center', mt: 5 }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Popular Movies
      </Typography>
      <Grid container spacing={4}>
        {movies.map((movie) => (
          <Grid item key={movie.id} xs={12} sm={6} md={4}>
            <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  height="400"
                />
                <CardContent>
                  <Typography variant="h6" color="text.primary">
                    {movie.title}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Movies;