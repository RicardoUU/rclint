#!/usr/bin/env node
import { program } from 'commander';
import init from '../init';
import { PKG_NAME, PKG_VERSION } from '../utils/constants';

program
  .version(PKG_VERSION)
  .description(
    `${PKG_NAME} 项目规范一键配置工具，降低项目实施规约的成本`,
  ).option('--first');

// 初始化
program
  .command('init')
  .description(`初始化项目规范`)
  .action(() => init());

  // 更新
program
.command('update')
.description(`更新 ${PKG_NAME} 至最新版本`)
.action(() => console.log('update'));

program.parse(process.argv);

// program.parse();

// const options = program.opts();
// const limit = options.first ? 1 : undefined;
// console.log(program.args[0].split(options.separator, limit));