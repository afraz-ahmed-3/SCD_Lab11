function sum(x,y){
    return x+y;
}

module.exports.sum = sum;


function sub(x,y){
    return x-y;
}

module.exports.sub = sub;

function mul(x,y){
    return x*y;
}

module.exports.mul = mul;

function div(x,y){
    if(y != 0){
    return x/y;
    }
}

module.exports.div = div;



