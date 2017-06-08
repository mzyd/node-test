var url = require( 'url' );
var http = require( 'http' );
var func = require( './func' );
var optfile = require( './optfile' );

http.createServer( function ( req, res ) {

    res.writeHead( 200, {'Content-Type': 'text/html; charset=utf-8'});

    if( req.url !== '/favicon.ico' ){

        function recall( data ) {
            res.write( data );
            res.end( 'ok' );
        }

        var pathname = url.parse( req.url ).pathname;

        pathname = pathname.replace( /\//, '' );

        optfile.readFile( 'files/' + pathname, recall );

    }


}).listen( '9000' );
