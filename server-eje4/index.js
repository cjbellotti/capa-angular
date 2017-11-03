'use strict'
const Express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

const app = Express();
app.use((req, res, next) => {
  console.log(`${req.method} - ${req.url}`);
  next();
})

var data = [];

app.use(Express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.get('/cliente', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.status(200).json(data).end()
});
app.get('/cliente/:id', (req, res) => {
  let cliente = data.find(item => item.id == req.params.id);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  if (!cliente)
    return res.status(404).json({ message : 'Cliente inexistente.'}).end();
  return res.status(200).json(cliente).end();
});
app.post('/cliente', (req, res) => {
  data.push(req.body);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  return res.status(200).json(req.body).end();
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
