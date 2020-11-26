const Edge = require('./Edge.js');
const Vertex = require('./Vertex.js');

class Graph {
  print() {
    const vertexList = this.vertices || [];
    vertexList.forEach((vertex) => vertex.print());
  }
}

module.exports = Graph;
