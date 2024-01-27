import express from "express";
import { getAllCategories, getAllProducts, getProductsFromCategory, getPurchasesFromUser, validateLogin } from "./request-functions.js";
import cors from 'cors'
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 5000;


// simple gets
app.get('/products', async (req, res) => {   
    const result = await getAllProducts();
    res.json(result.rows);
});

app.get('/categories', async (req, res) => {   
    const result = await getAllCategories();
    res.json(result.rows);
});


// gets with parameters
app.get('/products/:category', async (req, res) => {   
    var category = req.params.category;
    const result = await getProductsFromCategory(category.charAt(0).toUpperCase() + category.slice(1));
    res.json(result.rows);
});

app.get('/purchases/:user', async (req, res) => {   
    var user = req.params.user;
    const result = await getPurchasesFromUser(user);
    res.json(result.rows);
});

app.post('/validate', async (req, res) => {
    const email = req.body['email'];
    const password = req.body.password;

    var response = await validateLogin(email, password);
  
    if (response) {
      res.json({ success: true, message: 'Usuário válido' });
    } else {
      res.json({ success: false, message: 'Usuário inválido' });
    }
});


// checks server port
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

