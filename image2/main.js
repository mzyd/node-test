var http = require( 'http' );
var url = require( 'url' );
var router = require( './router' );
var optfile = require( './optfile' );

http.createServer( function ( req, res ) {

    if( req.url !== 'favicon.ico' ){

        var pathname = url.parse( req.url ).pathname.replace( /\//, '' );

        router[pathname]( req, res );
    }

}).listen( 9000 );

console.log( "--Server running at localhost:9000 ...." );
