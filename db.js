const mongoose=require('mongoose');

var mongoURL='mongodb://localhost:27017/mern-rooms'

mongoose.connect(mongoURL,{useUnifiedTopology : true , useNewURLParser : true})

var connection = mongoose.connection

connection.on('error',()=>{
    console.log('Mongo DB Connection Failed')
})

connection.on('connected',()=>{
    console.log('Mongo DB Connection Successful')
})

module.exports=mongoose;


// const mongoose = require('mongoose');

// var mongoURL = 'mongodb+srv://mdhumal68:IWkfzceeGeUIoHLe@cluster0.pc4xptb.mongodb.net/mern-rooms';

// mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

// var connection = mongoose.connection;

// connection.on('error', () => {
//     console.log('Mongo DB Connection Failed');
// });

// connection.on('connected', () => {
//     console.log('Mongo DB Connection Successful');
// });

// module.exports = mongoose;

// const mongoose = require('mongoose');

// var mongoURL = 'mongodb+srv://mdhumal68:IWkfzceeGeUIoHLe@cluster0.pc4xptb.mongodb.net/mern-rooms';

// mongoose.connect(mongoURL, {
//     useUnifiedTopology: true,
// });

// var connection = mongoose.connection;

// connection.on('error', () => {
//     console.log('Mongo DB Connection Failed');
// });

// connection.on('connected', () => {
//     console.log('Mongo DB Connection Successful');
// });

// module.exports = mongoose;



// const mongoose = require('mongoose');

// const mongoURL = 'mongodb+srv://mdhumal68:IWkfzceeGeUIoHLe@cluster0.pc4xptb.mongodb.net/mern-rooms';

// const options = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// };

// mongoose.connect(mongoURL, options);

// const connection = mongoose.connection;

// connection.on('error', (error) => {
//     console.error('Mongo DB Connection Failed:', error);
// });

// connection.on('connected', () => {
//     console.log('Mongo DB Connection Successful');
// });

// // Optional: Handle disconnection events
// connection.on('disconnected', () => {
//     console.warn('Mongo DB Connection Disconnected');
// });

// // Optional: Handle termination events
// process.on('SIGINT', () => {
//     connection.close(() => {
//         console.log('Mongo DB Connection Closed due to process termination');
//         process.exit(0);
//     });
// });

// module.exports = mongoose;





