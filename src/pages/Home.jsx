import React from 'react';
import { Box, Typography, Container } from '@mui/material';

function Home() {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          textAlign: 'center',
          mt: 5,
        }}
      >
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc"
          alt="Cinema"
          sx={{
            width: '100%',
            borderRadius: 3,
            mb: 3,
          }}
        />
        <Typography variant="h4" component="h1" gutterBottom>
          🎬 Welcome to Movie Explorer
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Discover trending movies and explore details instantly.
        </Typography>
      </Box>
    </Container>
  );
}

export default Home;
