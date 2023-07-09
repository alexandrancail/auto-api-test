const express = require('express');
const app = express();

const PORT = 3050;

const router = require('./src/routes');
app.use(router);

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));