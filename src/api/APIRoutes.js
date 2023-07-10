const express = require('express');
const apiRouter = express.Router();

const axios = require('axios');

apiRouter.get('/generate/:prompt', (req, res) => {
    const prompt = req.params.prompt;
    console.log('Generating ' + prompt + '...');

    const url = 'http://127.0.0.1:7860/sdapi/v1/txt2img';
    
    const data = async() => {
        try {
            const { data } = await axios({
                method: 'post',
                url: url,
                data: {
                  prompt: prompt,
                  negative_prompt: '',
                  steps: 20,
                  seed: 0,
                  cfg_scale: 7.5
                }
              });
              return data;
        } catch (err) {
            throw new Error(err.message);
        }
    };

    data().then(result => {
        console.log(result)
        res.json(result);
    }).catch(err => {
        throw new Error(err.message);
    });

    console.log(data);
});

module.exports = apiRouter;