const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(
  bodyParser.urlencoded({limit: '30mb', extended: true})
);
app.use(cors());

routes(app);
// connecting MongoDb Atlas
const PORT = process.env.PORT || 5000;
const DB_URL =
  'mongodb+srv://hoangdinh2411:hoangdinh2411@learning.4erh1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(
        'successfully connecting till mongodb atlas at port ' +
          PORT
      )
    )
  )
  .catch((err) =>
    console.log('cannot connect mongodb atlas', err)
  );
