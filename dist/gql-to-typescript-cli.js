#!/usr/bin/env node
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, main, repository, preferGlobal, bin, scripts, author, license, dependencies, peerDependencies, devDependencies, default */
/***/ (function(module) {

module.exports = {"name":"gql-to-typescript-cli","version":"0.0.1","description":"A command-line tool for using gql-to-typescript via the terminal.","main":"dist/gql-to-typescript-cli.js","repository":"","preferGlobal":true,"bin":"./dist/gql-to-typescript-cli.js","scripts":{"build:link":"npm run build && npm link","build":"webpack","test":"jest","test:watch":"jest --watch"},"author":"Liron Navon","license":"ISC","dependencies":{"commander":"^2.19.0","gql-to-typescript":"^1.0.5"},"peerDependencies":{"glob":"^7.1.3","graphql":"^14.0.2","lodash":"^4.17.11"},"devDependencies":{"graphql-tag":"^2.10.0","@types/jest":"^23.3.10","@types/lodash":"^4.14.118","@types/node":"^10.12.12","@types/uuid":"^3.4.4","clean-webpack-plugin":"^1.0.0","jest":"^23.6.0","ts-jest":"^23.10.5","ts-loader":"^5.3.1","tslint":"^5.11.0","typescript":"^3.2.2","uuid":"^3.3.2","webpack":"^4.27.1","webpack-cli":"^3.1.2","webpack-node-externals":"^1.7.2"}};

/***/ }),

/***/ "./src/consoleUtils.ts":
/*!*****************************!*\
  !*** ./src/consoleUtils.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.consoleFlags = {
    error: '\x1b[31m',
    warning: '\x1b[33m',
    info: '\x1b[36m',
    emphasis: '\x1b[32m',
    underscore: '\x1b[4m',
    reset: '\x1b[0m' // reset terminal output
};


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var gql_to_typescript_1 = __webpack_require__(/*! gql-to-typescript */ "gql-to-typescript");
var consoleUtils_1 = __webpack_require__(/*! ./consoleUtils */ "./src/consoleUtils.ts");
var fs = __webpack_require__(/*! fs */ "fs");
var program = __webpack_require__(/*! commander */ "commander");
var path = __webpack_require__(/*! path */ "path");
var pkg = __webpack_require__(/*! ../package.json */ "./package.json");
var defaultConfigFile = '.gql-to-typescript.config.json';
var defaultConfig = {
    'glob': './**/*.ts',
    'scalars': {},
    'ignoreFields': [
        '_empty'
    ],
    'ignoreTypes': [],
    'namespace': 'GraphqlTypes',
    'outputFile': './GraphqlTypes.ts'
};
program
    .version(pkg.version)
    .description(pkg.description);
program
    .command('init')
    .description('initiates a config file')
    .option('-o, --output [value]', 'where to put the config file', "" + defaultConfigFile)
    .action(function (cmd) {
    var filePath = path.join(cmd.output);
    // write data to the file
    var content = JSON.stringify(defaultConfig, null, 2);
    fs.writeFileSync(filePath, content);
    console.info(consoleUtils_1.consoleFlags.info, "Created a configuration file at:", consoleUtils_1.consoleFlags.underscore, filePath);
});
program
    .command('convert')
    .description('convert files with gql tags to typescript definition')
    .option('-g, --glob [value]', 'a glob for selecting files')
    .option('-c, --config [value]', 'a path to a config file', "" + defaultConfigFile)
    .option('-o, --outputFile [value]', 'the generated types will go here')
    .option('-ns, --namespace [value]', 'a namespace for the types', 'GQLTypes')
    .option('-s, --scalars [value]', 'scalar types, as a json string (object)', '{}')
    .option('-it, --ignoreTypes [value]', 'types to ignore, as a json string (array)', '["_empty"]')
    .option('-if, --ignoreFields [value]', 'fields to ignore, as a json string (array)', '[]')
    .action(function (cmd) {
    var cmdCopy = __assign({}, cmd);
    var config = cmdCopy.config;
    try {
        var configContent = fs.readFileSync(config, 'utf8');
        var parsedConfig = JSON.parse(configContent);
        Object.assign(cmdCopy, parsedConfig);
    }
    catch (e) {
        console.info(consoleUtils_1.consoleFlags.info, "No config file was found, you can create one by running:", consoleUtils_1.consoleFlags.emphasis, cmd.parent._name + " init");
    }
    if (!cmdCopy.glob || !cmdCopy.outputFile) {
        console.error(consoleUtils_1.consoleFlags.error, 'You must specify at least a', consoleUtils_1.consoleFlags.underscore, 'glob', consoleUtils_1.consoleFlags.reset, consoleUtils_1.consoleFlags.error, 'and an', consoleUtils_1.consoleFlags.underscore, 'outputFile');
        return;
    }
    var glob = cmdCopy.glob, outputFile = cmdCopy.outputFile, namespace = cmdCopy.namespace, scalars = cmdCopy.scalars, ignoreTypes = cmdCopy.ignoreTypes, ignoreFields = cmdCopy.ignoreFields;
    var options = {
        outputFile: outputFile
    };
    if (namespace) {
        options.namespace = namespace;
    }
    if (ignoreTypes) {
        options.ignoreTypes = typeof ignoreTypes === 'string' ? JSON.parse(ignoreTypes) : ignoreTypes;
    }
    if (ignoreFields) {
        options.ignoreFields = typeof ignoreFields === 'string' ? JSON.parse(ignoreFields) : ignoreFields;
    }
    if (scalars) {
        options.scalars = typeof scalars === 'string' ? JSON.parse(scalars) : scalars;
    }
    // it will log a message after the conversion
    gql_to_typescript_1.convertFiles(glob, options);
});
program.parse(process.argv);


/***/ }),

/***/ "commander":
/*!****************************!*\
  !*** external "commander" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("commander");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "gql-to-typescript":
/*!************************************!*\
  !*** external "gql-to-typescript" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("gql-to-typescript");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

/******/ });
//# sourceMappingURL=gql-to-typescript-cli.js.map