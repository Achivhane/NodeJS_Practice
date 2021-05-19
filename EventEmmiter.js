var events=require('events');

// var myEmmiter=new events.EventEmitter();

// myEmmiter.on('somevent',function(msg){
//     console.log(msg);
// });

// myEmmiter.emit('somevent','the evnet is emmited');

var util=require('util');//proprties inheritance sathi

var Person=function(name){
    this.name=name;
};

util.inherits(Person,events.EventEmitter);

var james=new Person('james');
var garry=new Person('garry');
var jerry=new Person('jerry');

var People=[james,garry,jerry];

People.forEach(function(Person){
    Person.on('speak',function(msg){
        console.log(Person.name+'saide : '+ msg);
    });
});


james.emit('speak','hey all');
garry.emit('speak','hello');