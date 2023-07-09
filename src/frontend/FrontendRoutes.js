const express = require('express');
const frontendRouter = express.Router();

const path = require('path');
frontendRouter.use(express.static('static'))
const html_dir = path.join(__dirname, '../../templates/');

frontendRouter.get('/', (req, res) => {
    res.sendFile(`${html_dir}index.html`);
});

module.exports = frontendRouter;
