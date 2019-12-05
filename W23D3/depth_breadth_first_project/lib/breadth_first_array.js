function breadthFirstArray(root) {
    const queue = [root];
    const result = [];
    while (queue.length) {
        const node = queue.shift();
        result.push(node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    return result;
}

module.exports = {
    breadthFirstArray
};