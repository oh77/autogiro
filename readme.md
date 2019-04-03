# autogiro
A Node.js module to handle files from Swedish Autogiro
## Installation 
```sh
npm install @oh77/autogiro --save
yarn add @oh77/autogiro
bower install @oh77/autogiro --save
```
## Usage
### Javascript
```javascript
var autogiro = require('autogiro');
var hello = autogiro.hello('Autogiro');
```
```sh
Output should be 'Hello Autogiro'
```
### TypeScript
```typescript
import { hello } from 'autogiro';
console.log(hello('Autogiro'))
```
```sh
Output should be 'Hello Autogiro'
```
### AMD
```javascript
define(function(require,exports,module){
  var autogiro = require('autogiro');
});
```
## Test 
```sh
npm run test
```

## Thanks to 
https://codeburst.io/https-chidume-nnamdi-com-npm-module-in-typescript-12b3b22f0724

https://medium.com/@nilayvishwakarma/build-an-npm-package-with-typescript-by-nilay-vishwakarma-f303d7072f80

for awesome tutorials