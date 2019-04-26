var app = require ( 'express' ) (); 
var http = require ( 'http' ) .createServer (app);

app.get ( '/' , função ( req, res ) { 
  res.send ( '<h1> Olá mundo </ h1>' ); 
});

http.listen ( 3000 , função () { console .log ( 'escuta em *: 3000' ); });
  


