'use strict';

var createBlob = require('../binary/blob');

module.exports = function createBlobOrBufferFromParts(parts, type) {
  return createBlob(parts, {type: type});
};