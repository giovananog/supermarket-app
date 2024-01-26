const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello express');
});

app.listen(port, () => {
  console.log(`Servidor Express está rodando em http://localhost:${port}`);
});
