function arr (){
    console.log("arguments",_args)
    var _args = Array.prototype.slice.call(arguments)
    console.log("_args",_args)
}
arr()