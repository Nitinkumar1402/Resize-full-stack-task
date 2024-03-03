const express = require('express');
const cors = require('cors'); 
const mongoose = require('mongoose');
const config = require('./config');
const routes = require('./routes');



const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(config.database.connectionString, config.database.options)
.then(()=> console.log("DB connection is successful"))
.catch(err => console.log("DB connection failed"));


// console.log('DB connection established', db);

require('./models/Data');
require('./models/AddData');
require('./models/CountData');
require('./models/UpdateData');
// require('./models/');

app.use(routes);

const PORT = config.server.port;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
