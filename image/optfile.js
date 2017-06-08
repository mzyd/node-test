var fs = require( 'fs' );

function readImg( path, res ) {

    fs.readFile( path, 'binary', function ( err, fileData ) {

        if( err ){
            throw err;
            return;
        }

        console.log( "-----read image----" );

        res.write( fileData, 'binary' );
        res.end();
    });
}

exports.readImg = readImg;
