function breadthFirstSearch(startingNode, targetVal) {
    let queue = [ startingNode ];
    const visited = new Set();
    while (queue.length) {
        const currNode = queue.shift();
        if (visited.has(currNode.val)) continue;
        if (currNode.val === targetVal) return currNode;
        visited.add(currNode.val);
        queue.push(...currNode.neighbors);
    }
    return null;
}

module.exports = {
    breadthFirstSearch
};