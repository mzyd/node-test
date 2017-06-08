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

    },

    writehello: function ( req, res ) {

        var callback = getCallback( req, res );
        optfile.writefile( './files/hello.txt', 'What\'s the fuck!' , callback );

    },

    showimg: function ( req, res ) {

        res.writeHead( 200, { 'Content-Type': 'image/jpeg' } );
        optfile.readImg( './images/2.jpg', res );

    },


    errorPage: function ( req, res ) {

        var callback = getCallback( req, res );

        optfile.readfile( './files/error.html', callback );
    }


};
