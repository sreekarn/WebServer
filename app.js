const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const connectionRoutes = require('./routes/connectionRoutes')
const indexRoutes = require('./routes/indexRoutes')



// create App
const app = express();

//Configure App
let port = 3000;
let host='localhost';
app.set('view engine','ejs');

//Mount Middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny'));
app.use(methodOverride('_method'));


// //Setup Routes

app.use('/', indexRoutes);
app.use('/connections', connectionRoutes);

app.get('/about',(req,res)=>{
    res.render('about');
})

//contact us page
app.get('/contactus', (req, res) => {      
    res.render('contactus');
});

// app.use('/connection', connectionRoutes);



//Start the server
app.listen(port,host, ()=>{
    console.log('Server is running on port',port);
})