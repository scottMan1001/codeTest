var obj = {
    age: 18,
    nature: ['smart', 'good'],
    names: {
        name1: ()=>'fx',
        name2: 'xka'
    },
    love: function () {
        console.log('fx is a great girl')
    }
}
var newobj = Object.assign({},obj)
newobj.names.name1=()=>'newFx'
console.log(obj.names.name1())