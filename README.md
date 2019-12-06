# Guber

### Generates an Arrays records.   Additionally, Guber can randomly inject duplicates and wholes (for sparce arrays) within the array it generates.  Handy for testing.  The heavy lifting takes place in lib/index.js.  An example usage can be found in index.js.  More examples can be found in test/index.js

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


```
const { Guber } = require('./lib/index');

const arrayOfRecord = Guber.generateFakePayload(100, true, false);

```

## Run the sample (not super exciting)
```
node index.js
```

## Run the test suite (exercise a number use cases)
```
npm test
```
