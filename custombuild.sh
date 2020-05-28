#!/bin/bash
ng build AngularElements --prod --output-hashing=none && cat dist/AngularElements/{polyfills-es5,runtime-es5,main-es5}.js > preview/angularElements-es5.js && cat dist/AngularElements/{polyfills-es2015,runtime-es2015,main-es2015}.js > preview/angularElements-es2015.js
