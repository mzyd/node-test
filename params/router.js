var optfile = require( './optfile' );

// For receive params
var url = require( 'url' );
var querystring = require( 'querystring' ); // import this for post.
//

var getCallback = function ( req, res ) {

    res.writeHead( 200, { 'Contnt-Type': 'text/html; charset=utf-8' } );

    return function ( data ) {
        res.write( data );
        res.end();
    };

};



module.exports = {

    login: function ( req, res ) {

/* GET
        var reqObj = url.parse( req.url, true ).query;
        console.log( "----reqObj---", reqObj );

        if( reqObj['email'] !== undefined ){

            console.log( "--reqObj email--", reqObj['email'] );
            console.log( "--reqObj psd--", reqObj['pwd'] );

        }
*/
        // POST
        var post = '';
        req.on( 'data', function ( chunk ) {
            post += chunk;
        });

        req.on( 'end', function () {

            post = querystring.parse( post );
            console.log( "---post---", post );

            console.log( 'Params recevied: ', post['email'] + '\n' );
            console.log( 'Params recevied: ', post['pwd'] + '\n' );

            // Because post is async, so callback need put on here.
            var callback = getCallback( req, res );
            optfile.readfile( './login.html', callback );
        });


    },

    errorPage: function ( req, res ) {

        var callback = getCallback( req, res );

        optfile.readfile( './files/error.html', callback );

    }


};
