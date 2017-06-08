var optfile = require( './optfile' );
var querystring = require( 'querystring' );

var getCallback = function ( req, res ) {

    res.writeHead( 200, { 'Content-Type': 'text/html; charset=utf-8' } );

    function callback( data ) {
        res.write( data );
        res.end();
    }

    return callback;

};


module.exports = {

    login: function ( req, res ) {

        var post = '';
        req.on( 'data', function ( chunk ) {
            post += chunk;
        });

        req.on( 'end', function () {

            post = querystring.parse( post );

            var arr = ['email', 'pwd'];

            function callback( data ) {

                var dataStr = data.toString();
                for ( var i = 0; i < arr.length; i++ ) {
                    var re = new RegExp( '{' + arr[i] + '}', 'g');
                    dataStr = dataStr.replace( re, post[arr[i]] );
                }

                res.write( dataStr );
                res.end();
            }
            // var callback = getCallback( req, res );
            optfile.readfile( './views/login.html', callback );

        });

    }

};
