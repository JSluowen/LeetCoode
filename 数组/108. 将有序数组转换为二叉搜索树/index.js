/**
  给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树。
  高度平衡 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。
 */

const nums = [-10, -3, 0, 5, 9]
var sortedArrayToBST = function (nums) {
  var sortedArrayToBST = function (nums) {
    if (!nums.length) {
      return null
    }
    const middleIndex = Math.floor(nums.length / 2)
    const header = new TreeNode(nums[middleIndex])
    const left = middleIndex - 1
    const right = middleIndex + 1
    if (left >= 0) {
      header.left = sortedArrayToBST(nums.slice(0, middleIndex))
    }
    if (right < nums.length) {
      header.right = sortedArrayToBST(nums.slice(right))
    }
    return header
  };

};
console.log('sortedArrayToBST :>> ', sortedArrayToBST[nums]);