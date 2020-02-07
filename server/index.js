const express = require('express');
const app = express();
require('dotenv').config();

const axios = require('axios');

app.use(express.static('./public'));

// route for reviews data
app.get('/reviews/:id', (req, res) => {
  const id = req.params.id;
  axios.get(`http://ec2-3-14-246-138.us-east-2.compute.amazonaws.com/reviews/${id}`)
    .then((resp) => {
      res.status(200).json(resp.data);
    })
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    })
})

// route for additional products by seller
app.get('/additional/:id', (req, res) => {
  const id = req.params.id;
  axios.get(`http://ec2-3-133-117-113.us-east-2.compute.amazonaws.com/additional/${id}`)
  .then((resp) => {
    res.status(200).json(resp.data);
  })
  .catch((err) => {
    if (err) {
      console.log(err);
    }
  })
})

// route for product and seller info
app.get('/details/:id', (req, res) => {
  const id = req.params.id;
  axios.get(`http://ec2-18-220-152-98.us-east-2.compute.amazonaws.com/details/${id}`)
  .then((resp) => {
    res.status(200).json(resp.data);
  })
  .catch((err) => {
    if (err) {
      console.log(err);
    }
  })
})

app.get('/carousel/:id', (req, res) => {
  const id = req.params.id;
  axios.get(`http://localhost:3001/carousel/${id}`)
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