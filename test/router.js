var optfile = require( './optfile' );

function login( req, res ) {

    function recall( data ) {
        res.write( data );
        res.end();
    }

    optfile.readFile( './files/login.html', recall );
}

function regist( req, res ) {

    function recall( data ) {
        res.write( data );
        res.end();
    }

    optfile.readFile( './files/regist.html', recall );

}

function writeFile( req, res ) {

    function recall( data ) {
        res.write( data );
        res.end();
    }
    optfile.writeFile( './files/mzy.txt', 'Just test.', recall );
}

exports.login = login;
exports.regist = regist;
exports.writeFile = writeFile;
