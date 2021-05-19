function CallBack(fun){
    fun();
}

var SayBye=function(){
    console.log("Bye");
}

CallBack(SayBye);