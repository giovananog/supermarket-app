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
import { Link } from '@mui/material';

const cards = [
  { id: 1, title: 'About', keyword: 'about' },
  { id: 2, title: 'Support', keyword: 'support' },
  { id: 3, title: 'Work Here', keyword: 'work' },
];

const defaultTheme = createTheme();

export default function MoreAbout() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      {/* Hero unit */}
      <Box
        sx={{
          bgcolor: '#5cceee',
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
            style={{backgroundColor: '#cacaca'}}
          >
            More About Us
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so folks
            don&apos;t simply skip over it entirely.
          </Typography>
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="md">
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
            <Link href={card.title} style={{textDecoration: 'none', color: 'black'}}>
                <CardContent sx={{ flexGrow: 1, backgroundColor: '#f1ebeb', textTransform: 'uppercase'}}>
                  <Typography gutterBottom variant="h5" component="h2" align='center'>
                    {card.title}
                  </Typography>
                </CardContent>
            </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
