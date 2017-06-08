function login( req, res ) {

    function recall( data ) {
        res.write( data );
        res.end( 'ok' );
    }

}

function regist( req, res ) {

    function recall( data ) {
        res.write( data );
        res.end( 'ok' );
    }

}

exports.login = login;
exports.regist = regist;
