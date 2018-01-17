'use strict';

const Controller = require('egg').Controller;
const Logger = require('egg-logger').Logger;
const ConsoleTransport = require('egg-logger').ConsoleTransport;
const logger = new Logger();
logger.set('console', new ConsoleTransport({
    level: 'DEBUG',
}));

class HomeController extends Controller {
  async index() {
    logger.info("index");
    let obj = new Object();
    obj.name = "hello";
    await this.ctx.render('hello.ejs', {
        data: 'world git',
    });
  }
}

module.exports = HomeController;
