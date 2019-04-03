# autogiro
A Node.js module to handle files from Swedish Autogiro
## Installation 
```sh
npm install autogiro --save
yarn add autogiro
bower install pluralize --save
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