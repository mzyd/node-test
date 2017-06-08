var fs = require( 'fs' );

function readFileSync( path ) {

    var data = fs.readFileSync( path, 'utf-8' );

    console.log( "---data---", data );
    console.log( "---同步读取文件完毕---" );


}

function readFile( path, recall ) {

    var data = fs.readFile( path, function ( err, data ) {

        if( err ){

            console.log( err );

        } else {

            recall( data );
            console.log( data.toString() );

        }

    });

    console.log( "***异步读取文件完毕---" );
}

exports.readFileSync = readFileSync;
exports.readFile= readFile;
