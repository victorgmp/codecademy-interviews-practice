const HashMap = require('./HashMap');

const birdCensus = new HashMap(16);

birdCensus.assign('mandarin duck', 'Central Park Pond');
birdCensus.assign('monk parakeet', 'Brooklyn College');
birdCensus.assign('horned owl', 'Pelham Bay Park');

const keys = ['mandarin duck', 'monk parakeet', 'horned owl'];

for (let i = 0; i <= keys.length - 1; i++) {
  const birdLocation = birdCensus.retrieve(keys[i]);
  console.log(birdLocation);
}
