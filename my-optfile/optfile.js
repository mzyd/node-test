var fs = require( 'fs' );

module.exports = {

    readfile: function ( path, callback ) {

        fs.readFile( path, function ( err, data ) {

            if( err ){

                console.log( "---err---", err );
                callback( 'No such file of directory!' );
            }

            // callback( data );
            console.log( "Read successed~" );

            callback( data );

        });
    },

    writefile: function ( path, data, callback ) {

        fs.writeFile( path, data, function ( err ) {

            if( err ){
                console.log( "---err---", err );
                callback( 'No such file of directory!' );
            }

            console.log( "Write successed!" );

            callback( data );
        });
    },

    readImg: function ( path, res ) {

        fs.readFile( path, 'binary', function ( err, fileData ) {

            if( err ){

                console.log( "It's wrong : ", err );
                res.write( 'No such file...' );
                res.end();
            }

            console.log( "---- read image ----" );

            res.write( fileData, 'binary' );
            res.end();

        });
    },

    errorPage: function ( path, callback ) {

        fs.readFile( path, function ( err, data ) {

            if( err ){
                console.log( "---err---", err );
                callback.write( 'No such file...' );
            }

            console.log( "Read error page ~" );

            callback( data );

        });
    }


};
