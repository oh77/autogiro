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