 module.exports.counter=function(str){
    return "the length is "+str.length;
}

module.exports.adder=function(a,b){
    return `The sum is ${a+b} `;
}

module.exports.pi=3.14;
//method 1
// module.exports.counter=counter;
// module.exports.adder=adder;
// module.exports.pi=pi;

//method 2
// module.exports={
//     counter:counter,
//     adder:adder,
//     pi:pi
// }

//method 3
