var fs = require( 'fs' );

module.exports = {

    readfile: function ( path, callback ) {

        fs.readFile( path , function ( err, data ) {

            if( err ){

                console.log( "-----", err );
                return;
            }

            callback( data );
        });
    }

};
