class TestA {
    constructor () {
        this.a = 'TestA.a';
    }

    outA () {
        console.log('TestA.this',this);
        console.log('TestA.a', this.a)
    }

    outB = () => {
        console.log('TestA.this',this);
        console.log('TestA.a', this.a)
    }
}
var A  =new TestA()
const log = function (fn) {
    fn();
}
log(A.outA);
console.info('++++++++++++++++++++++++++')
log(A.outB);
