// View the full problem and run the test cases at:
//  https://leetcode.com/problems/course-schedule/

function canFinish(numCourses, prerequisites) {
  const adjMatrix = {};
  prerequisites.forEach(prerequisitePair => {
    const [course, prereq] = prerequisitePair;
    if (course in adjMatrix) {
      adjMatrix[course].push(prereq);
    } else {
      adjMatrix[course] = [prereq];
    }
  });

  for (let course = 0; course < numCourses; course++) {
    if (!adjMatrix[course]) continue;
    const visited = new Set();
    let prereqs = adjMatrix[course];
    while (prereqs.length) {
      const currPrereq = prereqs.shift();
      if (currPrereq === course) return false;
      if (visited.has(currPrereq)) continue;
      visited.add(currPrereq);
      const newPrereqs = adjMatrix[currPrereq] || [];
      prereqs.push(...newPrereqs);
    }
  }

  return true;
}

console.log(canFinish(3, [[0, 1], [0, 2], [1, 2]]));
console.log(canFinish(2, [[0, 1], [1, 0]]));