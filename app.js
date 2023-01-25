//. app.js

//. express
const express = require( 'express' ),
      app = express();

//. ejs
const ejs = require( 'ejs' );
app.set( 'views', __dirname + '/views' );  
app.set( 'view engine', 'ejs' );

//. i18n
const i18n = require( 'i18n' );
i18n.configure({
    locales: ['ja' , 'en'],
    directory: __dirname + '/locales'
})
app.use( i18n.init );

//. localhost
app.get('/', function ( req , res ){
    res.render( 'index',  {} );
});

//.localhost/sub
app.get('/sub', function ( req , res ){
    res.render( 'sub', {} );
});

//. port
const port = process.env.PORT || 3000;
app.listen( port );
console.log(" Server starting on " + port + ".... ")
