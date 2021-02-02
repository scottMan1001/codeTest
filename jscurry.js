function add(x,y){
    var oldx = x,oldy=y;
    if(typeof oldy === 'undefined'){
        return (newy)=>oldx+newy
    }
    return x+y
}
var add2000 = add(2000)
console.log(add(2000))