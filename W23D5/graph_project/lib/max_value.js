function maxValue(node, visited=new Set()) {
    if (visited.has(node.val)) return -Infinity;
    visited.add(node.val);
    return Math.max(
        node.val,
        ...node.neighbors.map(neighbor => maxValue(neighbor, visited))
    );
}

module.exports = {
    maxValue
};