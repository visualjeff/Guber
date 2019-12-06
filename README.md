# Guber

### Generates an Array of records.   Additionally, Guber can randomly inject duplicates and wholes (for sparce arrays) within the array it generates.  The heavy lifting takes place in lib/index.js.  

## Pre-reqs
```
Nodejs v10 LTS and higher.  
```
## Install dependencies
```
npm install
```
## Example Usage

```
const { Guber } = require('./lib/index');

const arrayOfRecord = Guber.generateFakePayload(SIZE, DUPLICATES, WHOLES);

```
  or

```
const { Guber } = require('./lib/index');

const arrayOfRecord = Guber.generateFakePayload(100, true, false);

```

## Run the sample (not super exciting)
```
node index.js

  Generated 10000 records!
  Benchmark took 669731391 nanoseconds

```

## Run the test suite (exercise a number use cases)
```
npm test

  > mocha

  Test generation of fake payload
    ✓ regular payload, no duplicates, no holes (53ms)
    ✓ regular payload, with duplicates, no holes
    ✓ regular payload, with duplicates, with holes
    ✓ regular payload, no duplicate records, with holes (which can be duplicates)


  4 passing (82ms)

```
