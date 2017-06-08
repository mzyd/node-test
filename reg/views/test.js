function addLoadEvent( func ) {
    var oldonload = window.onload;
    if ( typeof window.onload != 'function' ) {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        };
    }
}

var str = 'ksdjfdskjfkdsjfkmzy hello';
var re  = /hello/;
var re2 = /mzy/;

addLoadEvent( setupEvent );

function setupEvent() {

    document.getElementById( 'btn' ).addEventListener( 'click', checkStr, false );
}

function checkStr() {

    var str = 'lk{0}fsjd{name}flj{name}ds{age}fmzyHello';

    // var re = new RegExp( document.getElementById( 'reg' ).value );
    // var re = /{name+}/i;
    var re = /\{.*?\}/g;
    // var re = /hello/i; // + i 不区分大小写

    console.log( "----", re );

    if( re.test( str ) ){

        console.log( 'Yes.' );
        var newstr = str.replace( re, '张三' );
        console.log( "----", newstr );


    } else {

        console.log( 'No.' );

    }

}

