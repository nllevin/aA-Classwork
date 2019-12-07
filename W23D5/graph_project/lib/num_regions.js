function numRegions(graph) {
    const visited = new Set();
    let num = 0;

    for (let node in graph) {
        if (visited.has(node)) continue;
        num++;
        let stack = [ node ];
        while (stack.length) {
            const currNode = stack.pop();
            if (visited.has(currNode)) continue;
            visited.add(currNode);
            stack = [...stack, ...graph[currNode]];
        }
    }

    return num;
}

module.exports = {
    numRegions
};