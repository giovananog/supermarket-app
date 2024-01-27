import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Divider } from "@mui/material";
import api from "../../api"
import Link from '@mui/material/Link';



export default function ListOptions () {
  const [openCat, setOpenCat] = React.useState(false);
  const [categories, setCategories] = React.useState([]);
  
    React.useEffect(() => {
      api.get('categories').then(res => {
        setCategories(res.data);
      });
    }, []);

    const showCategories = () => {
      setOpenCat(!openCat);
    };
  
    return (
        <div style={{backgroundColor: '#FBC02D'}}>
            <React.Fragment>
        <ListItemButton>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Cart" />
        </ListItemButton>
        <ListItemButton onClick={showCategories}>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="Categories" />
        </ListItemButton>
      </React.Fragment>

        <Divider sx={{ my: 1 }} />
        
        {openCat && categories.map(category => (
          <Link href={`/products/${category.name}`}>
          <ListItemButton key={category.id} >
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary={category.name} />
        </ListItemButton>
           </Link>
        
      ))}
        </div>
    );
}
