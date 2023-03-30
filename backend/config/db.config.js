const mongoose = require("mongoose");

const uri = "mongodb://127.0.0.1:27017/labMS"

// Allow Promises
mongoose.Promise = global.Promise;
// Connection
mongoose.connect(uri, { useNewUrlParser: true,useUnifiedTopology:true  });
// Validation
mongoose.connection
  .once('open', () => console.log('Connected to the database!'))
  .on('error', err => console.log('Error with the database!', err));


//   mongoose.connect(uri).then(
//     () => {
//         console.log("Success");
//     },
//     err => {console.log(err);}
// );
