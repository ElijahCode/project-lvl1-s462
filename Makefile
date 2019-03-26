install:
	npm install

start:
	npx babel-node  src/bin/brain-games.js

startEven:
	npx babel-node  src/bin/brain-even.js

startCalc:
	npx babel-node  src/bin/brain-calc.js

startGCD:
	npx babel-node  src/bin/brain-gcd.js

startPrime:
	npx babel-node  src/bin/brain-prime.js

startProg:
	npx babel-node  src/bin/brain-progression.js

publish:
	npm publish

lint:
	npx eslint .
