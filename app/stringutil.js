/**
 * Copyright (c) 2016-present JET BRIDGE LLC.
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

var hasSomething = function isValid (str) {
  if (typeof (str) !== 'string') {
    console.log(str + ' is not string')
    return false
  }

  if (str === undefined || str === null || str.length === 0) {
    return false
  }

  return true
}

module.exports = {
  hasSomething: hasSomething
}
