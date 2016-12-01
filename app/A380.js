#!/usr/local/bin/node
/**
 * Copyright (c) 2016-present JET BRIDGE LLC.
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

;(function () {
  var register = require('./A380_register')
  var login = require('./A380_login')
  var app = require('./A380_app')
  var release = require('./A380_release')
  var deploy = require('./A380_deploy')
  var server = require('./A380_server')

  if (process.argv.length < 3) { // No arguement 
    help()
    return
  }

  if (process.argv[2] === 'register') {
    register(process.argv.slice(2), function () {
      console.log('Done')
      process.exit(0)
    })
    return
  }

  if (process.argv[2] === 'login') {
    login(process.argv.slice(2), function () {
      console.log('Done')
    })
    return
  }

  if (process.argv[2] === 'app') {
    app(process.argv.slice(2), function () {
      console.log('Done')
    })
    return
  }

  if (process.argv[2] === 'release') {
    release(process.argv.slice(2), function () {
      console.log('Done')
      process.exit(0)
    })
    return
  }

  if (process.argv[2] === 'deploy') {
    deploy(process.argv.slice(2), function () {
      console.log('Done')
    })
    return
  }

  if (process.argv[2] === 'server') {
    server(process.argv.slice(2), function () {
      console.log('Done')
    });
    return;
  }

  if (process.argv[2] === 'version') {
    console.log('0.0.1\n')
    process.exit(0)
  }

  help()
  process.exit(0)
})()

function help () {
  console.log(
    [ '\nUsage: A380 <command>'
      , ''
      , 'where <command> is one of: '
      , '    ,register'
      , '    ,server'
      , '    ,release'
      , '    ,deploy'
      , '    ,version'
      , ''
      , 'A380 <cmd> -h       quick help on <cmd>'
    ].join('\n'))
}
