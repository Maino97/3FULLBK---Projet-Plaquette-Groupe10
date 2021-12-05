const express = require('express');

const router = require('./routes');
const app = express();

const PORT = 5000;

app.use(express.json());

app.use('/admin', router);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT} ...`);
});
