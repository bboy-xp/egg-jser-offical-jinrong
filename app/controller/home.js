'use strict';

const Controller = require('egg').Controller;
const { readFileSync } = require('fs');
const { resolve } = require('path');

class HomeController extends Controller {
  async index() {
    const data = readFileSync(resolve(__dirname, '../public/index.html'), 'utf8');
    this.ctx.body = data;
  }
}

module.exports = HomeController;
