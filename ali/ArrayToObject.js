var input = [
    ['小明', 23, '男'],
    ['小红', 22, '男'],
    ['小王', 24, '女']
]
var output = {
    data: [],
    count: 0
}
// function transform (input){
//     for (let i =0;i<input.length;i++){
//          let obj = {};
//          obj.name = input[i][0]
//          obj.age = input[i][1]
//          obj.sex = input[i][2]
//          output.data.push(obj)
//     }
//     output.count = output.data.length;
//    console.log(output)
// }
// transform(input)
input.map(item => {
    let obj = {};
    obj.name =item[0]
    obj.age = item[1]
    obj.sex = item[2]
    output.data.push(obj)
})
console.log(output)