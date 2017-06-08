var optfile = require( './optfile' );

function getCallback( req, res ) {

    res.writeHead( 200, { 'Content-Type': 'text/html; charset=utf-8' } );

    function callback( data ) {
        res.write( data );
        res.end();
    }

    return callback;

}

module.exports = {

    login: function ( req, res ) {

        var callback = getCallback( req, res );
        optfile.readfile( './files/login.html', callback );
    }

};
