const express = require('express');
const app = express();
require('dotenv').config();

const axios = require('axios');

app.use(express.static('./public'));

app.get('/reviews/:id', (req, res) => {
  const id = req.params.id;
  axios.get(`http://localhost:3005/reviews/${id}`)
    .then((resp) => {
      res.status(200).json(resp.data);
    })
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    })
})
app.get('/additional/:id', (req, res) => {
  const id = req.params.id;
  axios.get(`http://localhost:3004/additional/${id}`)
  .then((resp) => {
    res.status(200).json(resp.data);
  })
  .catch((err) => {
    if (err) {
      console.log(err);
    }
  })
})
app.listen(process.env.PORT, () => {
  console.log(`Tuning in on port ${process.env.PORT}`)
})