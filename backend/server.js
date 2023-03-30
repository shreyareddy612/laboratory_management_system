const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookie = require('cookie-parser');
require('./config/db.config');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(cookie());

// routes
app.use('/api/user/', require('./routes/route_user.js'));
app.use('/api/labinfo/', require('./routes/route_labinfo.js'));
app.use('/api/staff/', require('./routes/route_staff.js'));
app.use('/api/results/', require('./routes/route_results.js'));
app.use('/api/bktest/', require('./routes/route_book_test.js'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} `);
});
