var http = require( 'http' );
var url  = require( 'url' );
var router = require( './router' );

http.createServer( function ( req, res ) {

    res.writeHead( 200, { 'Content-Type': 'text/html; charset=utf-8' } );

    if( req.url !== '/favicon.ico' ){

        var pathname = url.parse( req.url ).pathname.replace( /\//, '' );

        console.log( "----", pathname );

        router[pathname]( req, res );

    }


}).listen( 8000 );

console.log( "Server running at localhost......." );
