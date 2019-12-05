function depthFirstSearch(root, targetVal) {
    if (!root) return null;
    if (root.val === targetVal) return root;

    return (
        depthFirstSearch(root.left, targetVal) 
        || depthFirstSearch(root.right, targetVal)
    );
}


module.exports = {
    depthFirstSearch
};