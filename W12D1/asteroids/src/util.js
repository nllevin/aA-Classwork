const Util = {
  inherits: function (childClass, parentClass) {
    function Surrogate () {}
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate();
    childClass.prototype.constructor = childClass;

  },

  randomVec: function(length) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.cos(deg), Math.sin(deg)], length);
  },

  scale: function(vec, m) {
    return [vec[0] * m, vec[1] * m];
  },

  dist: function(pos1, pos2) {
    let [x1, y1] = pos1;
    let [x2, y2] = pos2;
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  }
};

module.exports = Util;