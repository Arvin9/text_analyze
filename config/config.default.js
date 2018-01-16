'use strict';

const path = require('path');

module.exports = appInfo => {
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1515592873430_3158';

  // add your config here
  config.middleware = [];

  /**
   * Static file serve
   *
   * @member Config#static
   * @property {String} prefix - `/public/` by default
   * @property {String} dir - static files store dir, `${baseDir}/app/public` by default
   * @property {Number} maxAge - cache max age, default is 0
   * @see https://github.com/koajs/static-cache
   */
  config.static = {
      prefix: '/public/',
      dir: path.join(appInfo.baseDir, 'app/public'),
      // support lazy load
      dynamic: true,
      preload: false,
      buffer: false,
      maxFiles: 1000,
  };

  /**
   * 模板引擎.
   * */
  config.view = {
    mapping: {
      '.ejs': 'ejs',
    },
  };
  return config;
};