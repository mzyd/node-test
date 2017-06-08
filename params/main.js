var http = require( 'http' );
var url  = require( 'url' );
var router = require( './router' );

http.createServer( function ( req, res ) {

    if( req.url !== 'favicon.ico' ){

        var pathname = url.parse( req.url ).pathname.replace( /\//, '' );

        try {

            router[pathname]( req, res );

        } catch(error) {

            router.errorPage( req, res );
        }


    }

    console.log( "Main program executed." );

}).listen( 9000 );

console.log( "Server running at 127.0.0.1 ...." );
