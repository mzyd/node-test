var async = require( 'async' );

var time = 1000;
function oneFunc() {

    /*
      setTimeout( function () {
      console.log( "---oneFunc---" );
      time += 1000;

      if( time > 3000 ){

      clearInterval( this );

      } else {
      oneFunc();
      }

      }, time );
    */
    var i = 0;
    setInterval( function () {

        i++;
        if( i === 3 ){
            clearInterval( this );
        }

        console.log( "----AAA---" );

    }, 1000 );

}

function twoFunc() {
    var j = 0;
    setInterval( function () {
        j++;
        if( j === 3 ){
            clearInterval( this );
        }
        console.log( "---BBB---" );
    }, 1000 );
}


// oneFunc();
// twoFunc();


function executeFunc() {

    // 瀑布流
    async.waterfall([
        function ( done ) {
            // done( 'It is wrong.', 'one over--' ); // 如果这里出错, 2 会正常执行, 但是2的回调不会执行. 直接跳到 error 处理.
            var i = 0;
            setInterval( function () {
                console.log( "----AAA---", new Date() );
                i++;
                if( i === 3 ){
                    clearInterval( this );
                    done( null, 'one over--' );
                    // done( 'error', 'one over--' ); // 如果有错误, 不会再执行下一个函数, 第一个执行完毕后, 直接抛出错误.
                }
            }, 1000 );
        },

        function ( previous, done ) {  // previous 是上一个函数的返回值.
            var j = 0;
            setInterval( function () {
                console.log( "---BBB---", previous, new Date() );
                j++;
                if( j === 3 ){
                    clearInterval( this );
                    done( null, 'two over==' );
                }
            }, 1000 );
        }
    ], function ( err, result ) {
        if( err ){
            console.log( "---err---", err );
            // return;
        }
        console.log( "----result----", result );
    });

}

executeFunc();

console.log( "Main progress over." );
/*
// 串行无关联
async.series({
one: function ( done ) {
// done( 'It is wrong.', 'one over--' ); // 如果这里出错, 2 不会执行. 直接跳到 error 处理.
var i = 0;
setInterval( function () {

console.log( "----AAA---" );
i++;
if( i === 3 ){
clearInterval( this );
done( null, 'one over--' );
}
}, 1000 );
},

two: function ( done ) {
var j = 0;
setInterval( function () {
console.log( "---BBB---" );
j++;
if( j === 3 ){
clearInterval( this );
done( null, 'two over==' );
}
}, 1000 );
}
}, function ( err, result ) {
if( err ){
console.log( "---err---", err );
// return;
}
console.log( "----result----", result );
});
*/

/*
    // 并行无串联
    async.parallel({
        one: function ( done ) {
            // done( 'It is wrong.', 'one over--' ); // 如果这里出错, 2 会正常执行, 但是2的回调不会执行. 直接跳到 error 处理.
            var i = 0;
            setInterval( function () {
                console.log( "----AAA---" );
                i++;
                if( i === 3 ){
                    clearInterval( this );
                    // done( null, 'one over--' );
                    done( 'error', 'one over--' );
                }
            }, 1000 );
        },

        two: function ( done ) {
            var j = 0;
            setInterval( function () {
                console.log( "---BBB---" );
                j++;
                if( j === 3 ){
                    clearInterval( this );
                    done( null, 'two over==' );
                }
            }, 1000 );
        }
    }, function ( err, result ) {
        if( err ){
            console.log( "---err---", err );
            // return;
        }
        console.log( "----result----", result );
    });
*/
