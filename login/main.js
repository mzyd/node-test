var http = require( 'http' );
var url = require( 'url' );
var router = require( './router' );

http.createServer( function ( req, res ) {

    if( req.url !== 'favicon.ico' ){

        var pathname = url.parse( req.url ).pathname.replace( /\//, '' );

        try {
            router[pathname]( req, res );
        } catch(error) {
            res.writeHead( 200, { 'Content-Type': 'text/html; charset=utf-8' } );
            res.write( error.toString() );
            res.end();
        }

    }

}).listen( 9000 );

console.log( "Server running at 127.0.0.1 ......." );
