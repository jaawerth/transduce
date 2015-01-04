"use strict";
var util = require('transduce-util'),
    compose = require('transduce-compose'),
    reduced = require('transduce-reduced'),
    iter = require('iterator-protocol'),
    transformer = require('transformer-protocol');

module.exports = {
  reduce: require('./reduce'),
  transduce: require('./transduce'),
  into: require('./into'),
  toArray: require('./toarray'),
  map: require('./map'),
  filter: require('./filter'),
  remove: require('./remove'),
  take: require('./take'),
  takeWhile: require('./takewhile'),
  drop: require('./drop'),
  dropWhile: require('./dropwhile'),
  cat: require('./cat'),
  mapcat: require('./mapcat'),
  partitionAll: require('./partitionall'),
  partitionBy: require('./partitionby'),
  compose: compose,
  isIterable: iter.isIterable,
  isIterator: iter.isIterator,
  iterable: iter.iterable,
  iterator: iter.iterator,
  isTransformer: transformer.isTransformer,
  transformer: transformer.transformer,
  isReduced: reduced.isReduced,
  reduced: reduced.reduced,
  unreduced: reduced.unreduced,
  deref: reduced.unreduced,
  protocols: util.protocols,
  isFunction: util.isFunction,
  isArray: util.isArray,
  isString: util.isString,
  isRegExp: util.isRegExp,
  isNumber: util.isNumber,
  isUndefined: util.isUndefined,
  arrayPush: util.arrayPush,
  objectMerge: util.objectMerge,
  stringAppend: util.stringAppend,
  identity: util.identity,
};
