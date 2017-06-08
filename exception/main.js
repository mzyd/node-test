var http      = require( 'http' );
var url       = require( 'url' );
var router    = require( './router' );
var exception = require( './exception' );

http.createServer( function ( req, res ) {

    if( req.url !== 'favicon.ico' ){

        var pathname = url.parse( req.url ).pathname.replace( /\//, '' );

        try {

            router[pathname]( req, res );
            var data = exception.exceptionHandle( 10 );
            res.write( data );
            res.end();

        } catch(error) {

        }

    }

    console.log( "-- Server execute over --" );

}).listen( 9000 );

console.log( "----- Server running at 127.0.0.1 ------" );
