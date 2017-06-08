var fs = require( 'fs' );

function readFile( path, recall ) {

    var data = fs.readFile( path, function ( err, data ) {

        if( err ){

            console.log( "---", err );

        } else {

            recall( data );

        }

    });
}

function writeFile( path, data, recall ) {

    fs.writeFile( path, data, function ( err ) {

        if( err ) throw err;

        console.log( "It's saved." );

        recall( 'Write successed!' );

    });

}


exports.readFile = readFile;
exports.writeFile = writeFile;
