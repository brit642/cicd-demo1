const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const name = process.env.NAME || 'Adrien';
  res.send(`Coucou ${name} !`);
});

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log(`hello world: listening on port ${port}`);
});