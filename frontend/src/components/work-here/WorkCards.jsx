import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const cards = [
  { id: 1, title: 'Responsibility', keyword: 'responsibility' },
  { id: 2, title: 'Commitment', keyword: 'commitment' },
  { id: 3, title: 'Appreciation', keyword: 'appreciation' },
];

const defaultTheme = createTheme();

export default function WorkCards() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      {/* Hero unit */}
      <Box
        sx={{
          bgcolor: '#eee8e8',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Work With Us
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so folks
            don&apos;t simply skip over it entirely.
          </Typography>
        </Container>
      </Box>
      <Container sx={{ py: 8, backgroundColor: '#5cceee'}} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card.id} xs={12} sm={6} md={4}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: '56.25%',
                  }}
                  image={`https://source.unsplash.com/random?${card.keyword}`}
                />
                <CardContent sx={{ flexGrow: 1, backgroundColor: '#24c0eb', textTransform: 'uppercase'}}>
                  <Typography gutterBottom variant="h5" component="h2" align='center'>
                    {card.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
