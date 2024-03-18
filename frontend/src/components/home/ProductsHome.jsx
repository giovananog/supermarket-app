import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import api from "../../api";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

export default function ProductsHome() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    api.get('products').then(res => {
      setProducts(res.data);
    });
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box
        sx={{
          bgcolor: '#cacaca',
          pt: 10,
          pb: 1,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            textTransform={'uppercase'}
            color="white"
            style={{backgroundColor: '#24c0eb'}}
            gutterBottom
          >
            Buy Now!
          </Typography>
        </Container>
      </Box>
      <Container sx={{ py: 8, backgroundColor: '#5cceee'}} maxWidth="lg">
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id} xs={6} sm={6} md={3}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    pt: '56.25%'
                  }}
                  image={`https://source.unsplash.com/random?food,${product.name}`}
                />
                <CardContent sx={{ flexGrow: 1,  backgroundColor: '#cacaca'}}>
                  <Typography gutterBottom variant="h5" component="h2" align='center'>
                    {product.name}
                  </Typography>
                  <Typography align='center'>
                    ${product.price}
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
