'use stict';

//Called him Guber because I can!
const { Guber } = require('./lib/index');

//To capture performance we're going use hrtime (node's process high resolution time)
const NS_PER_SEC = 1e9;
const time = process.hrtime();

const payloadSize = 10000;
const payload = Guber.generateFakePayload(payloadSize);

const diff = process.hrtime(time);


console.log(`Generated ${payload.length} records!`);
console.log(`Benchmark took ${diff[0] * NS_PER_SEC + diff[1]} nanoseconds`);

