
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const MYSQL_CONFIG = require('./config/components/mysql');
 
const index =require('./src/controllers/v1/index');

const app = express();
const today = new Date();
//  const { PORT } = process.env;
 const PORT = 8001;



app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

MYSQL_CONFIG.bootstrap();
const params = {
    startdate: `${today.getFullYear()}-${(today.getMonth() + 1)}-${today.getDate()}`,
    enddate: `${today.getFullYear()}-${(today.getMonth() + 1)}-${today.getDate()}`,
};

app.listen(PORT, () => {
    console.log(`listening to ${PORT}`);
});

app.use(function (req, res, next) {

    next();
});
app.get('/contact/create',cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
  })

app.use("/", index);

module.exports = app;