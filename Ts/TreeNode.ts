type nodeNext = TreeNode | null;
class TreeNode {
  val: number;
  left?: nodeNext
  right?: nodeNext
  constructor(val: number, left?: nodeNext, right?: nodeNext) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
const node1 = new TreeNode(2);
const node2 = new TreeNode(4);
const node3 = new TreeNode(6);
console.log(node1);
