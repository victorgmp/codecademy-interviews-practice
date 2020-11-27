const Graph = require('./Graph.js');

const trainNetwork = new Graph(true, true);

const losAngelesStation = trainNetwork.addVertex('Los Angeles');
const sanFranciscoYorkStation = trainNetwork.addVertex('San Francisco');
const newYorkStation = trainNetwork.addVertex('New York');
const atlantaStation = trainNetwork.addVertex('Atlanta');
const denverStation = trainNetwork.addVertex('Denver');
const calgaryStation = trainNetwork.addVertex('Calgary');

trainNetwork.addEdge(sanFranciscoYorkStation, losAngelesStation, 400);
trainNetwork.addEdge(losAngelesStation, sanFranciscoYorkStation, 400);

trainNetwork.addEdge(newYorkStation, denverStation, 1800);
trainNetwork.addEdge(denverStation, newYorkStation, 1800);

trainNetwork.addEdge(calgaryStation, denverStation, 1000);
trainNetwork.addEdge(denverStation, calgaryStation, 1000);

trainNetwork.addEdge(losAngelesStation, atlantaStation, 2100);
trainNetwork.addEdge(atlantaStation, losAngelesStation, 2100);

trainNetwork.removeEdge(newYorkStation, denverStation);
trainNetwork.removeEdge(calgaryStation, denverStation);
trainNetwork.removeEdge(denverStation, calgaryStation);

trainNetwork.removeVertex(calgaryStation);

trainNetwork.print();
