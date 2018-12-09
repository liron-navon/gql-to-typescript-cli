#!/usr/bin/env node
!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),r=n(2),s=n(3),a=n(4),l=n(5),c=n(6),p=i.getDefaultOption();a.version(c.version).description(c.description),a.command("init").description("initiates a config file").option("-o, --output [value]","where to put the config file",".gql-to-typescript.config.json").action(function(e){var t=l.join(e.output),n=JSON.stringify(p,null,2);s.writeFileSync(t,n),console.info(r.consoleFlags.info,"Created a configuration file at:",r.consoleFlags.underscore,t)}),a.command("convert").description("convert files with gql tags to typescript definition").option("-s, --silent [value]","a boolean defining if there should be any messages, default is false",""+p.silent).option("-g, --glob [value]","a glob for selecting files").option("-c, --config [value]","a path to a config file",".gql-to-typescript.config.json").option("-o, --outputFile [value]","the generated types will go here",p.outputFile).option("-ns, --namespace [value]","a namespace for the types",p.namespace).option("-s, --scalars [value]","scalar types, as a json string (object)",JSON.stringify(p.scalars)).option("-it, --ignoreTypes [value]","types to ignore, as a json string (array)",JSON.stringify(p.ignoreTypes)).option("-if, --ignoreFields [value]","fields to ignore, as a json string (array)",JSON.stringify(p.ignoreFields)).action(function(e){var t=o({},e),n=t.config;try{var a=s.readFileSync(n,"utf8"),l=JSON.parse(a);Object.assign(t,l)}catch(t){console.info(r.consoleFlags.info,"No config file was found, you can create one by running:",r.consoleFlags.emphasis,e.parent._name+" init")}if(t.glob&&t.outputFile){var c=t.glob,p=t.outputFile,u=t.namespace,f=t.scalars,g=t.ignoreTypes,d=t.ignoreFields,y=t.silent,b={outputFile:p};return u&&(b.namespace=u),g&&(b.ignoreTypes="string"==typeof g?JSON.parse(g):g),d&&(b.ignoreFields="string"==typeof d?JSON.parse(d):d),f&&(b.scalars="string"==typeof f?JSON.parse(f):f),y&&(b.silent=function(e){switch(e.toLowerCase().trim()){case"true":case"yes":case"1":case"y":return!0;case"false":case"no":case"0":case"n":case null:return!1;default:return Boolean(e)}}(y)),i.convertFiles(c,b)}console.error(r.consoleFlags.error,"You must specify at least a",r.consoleFlags.underscore,"glob",r.consoleFlags.reset,r.consoleFlags.error,"and an",r.consoleFlags.underscore,"outputFile")}),a.parse(process.argv)},function(e,t){e.exports=require("gql-to-typescript")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.consoleFlags={error:"[31m",warning:"[33m",info:"[36m",emphasis:"[32m",underscore:"[4m",reset:"[0m"}},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("commander")},function(e,t){e.exports=require("path")},function(e){e.exports={name:"gql-to-typescript-cli",version:"1.0.9",description:"A command-line tool for using gql-to-typescript via the terminal.",main:"dist/gql-to-typescript-cli.js",repository:"https://github.com/liron-navon/gql-to-typescript-cli",preferGlobal:!0,bin:"./dist/gql-to-typescript-cli.js",scripts:{"build:link":"npm run build && npm link",build:"webpack","build:prod":"NODE_ENV=production webpack",test:"jest","test:watch":"jest --watch"},author:"Liron Navon",license:"ISC",dependencies:{commander:"^2.19.0","gql-to-typescript":"^1.0.9"},peerDependencies:{glob:"^7.1.3",graphql:"^14.0.2",lodash:"^4.17.11"},devDependencies:{"graphql-tag":"^2.10.0","@types/jest":"^23.3.10","@types/lodash":"^4.14.118","@types/node":"^10.12.12","@types/uuid":"^3.4.4","clean-webpack-plugin":"^1.0.0",jest:"^23.6.0","ts-jest":"^23.10.5","ts-loader":"^5.3.1",tslint:"^5.11.0",typescript:"^3.2.2",uuid:"^3.3.2",webpack:"^4.27.1","webpack-cli":"^3.1.2","webpack-node-externals":"^1.7.2"}}}]);
//# sourceMappingURL=gql-to-typescript-cli.js.map