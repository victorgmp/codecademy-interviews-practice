const DoublyLinkedList = require('./DoublyLinkedList.js');

const subway = new DoublyLinkedList();
subway.addToHead('TimesSquare');
subway.addToHead('GrandCentral');
subway.addToHead('CentralPark');

subway.printList();