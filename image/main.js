var http = require( 'http' );
var optfile = require( './optfile' );

http.createServer( function ( req, res ) {

    // res.writeHead( 200, { 'Content-Type': 'text/html; charset=utf-8' } );
    res.writeHead( 200, { 'Content-Type': 'image/jpeg' } ); // read image

    if( res.url !== 'favicon.ico' ){

        // res.write( '123' ); 单纯读取图片不可再写入任何东西, 不然就会破坏二进制流, 图片不能显示.
        optfile.readImg( './images/2.jpg', res );

    }

}).listen( 9000 );

console.log( "--Server running at localhost:9000 ...." );
