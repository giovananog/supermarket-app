import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import Link from '@mui/material/Link';
import CardActions from '@mui/material/CardActions';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import api from '../../api';


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function ShoWProducts(props) {

  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {

    !props.cat ? api.get('products').then(res => { setProducts(res.data);}) : api.get('products/' + props.cat).then(res => { setProducts(res.data);})
    
  }, [props.cat]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 10,
            pb: 1,
          }}
        >
        </Box>
        <Container sx={{ py: 8 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {products.map((product) => (
            <Grid item key={product.id} xs={6} sm={6} md={3}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    pt: '56.25%',
                  }}
                  image={`https://source.unsplash.com/random?food,${product.name}`}
                />
                <CardContent sx={{ flexGrow: 1, backgroundColor: '#8BC34A'}}>
                  <Typography gutterBottom variant="h5" component="h2" align='center'>
                    {product.name}
                  </Typography>
                  <Typography align='center'>
                    ${product.price}
                  </Typography>
                  <CardActions style={{backgroundColor: '#43ab43'}}>
                    <IconButton color="#8BC34A" aria-label="add to shopping cart" align='center' style={{width: '100%', height: '10px'}} size='large'>
                        <AddShoppingCartIcon />
                    </IconButton>
                    </CardActions>
                </CardContent>
                
              </Card>
            </Grid>
          ))}
          </Grid>
        </Container>
    </ThemeProvider>
  );
}