type next = ListNode | null;
class ListNode {
    val: number;
    next?: next
    constructor(val: number, next?: next) {
        this.val = val;
        this.next = next;
    }
}
const list1 = new ListNode(1);
const list2 = new ListNode(4);
const list3 = new ListNode(8);
list1.val = 10;
list1.next = list2;
list2.next = list3;

console.log(list1)