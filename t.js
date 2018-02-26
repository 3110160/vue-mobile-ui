const chalk = require('chalk');

const ora = require('ora');

const spinner = ora('Loading unicorns').start();
var r='ss';
console.log(!r);

console.log(chalk.green('Hello world!'));
process.env.NODE_ENV = 'dev';
console.log(process.env.NODE_ENV);
function exec (cmd) {
  return require('child_process').execSync(cmd).toString().trim()
}

console.log(exec('npm --version'))

var shell = require('shelljs');

if (!shell.which('npm')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
}

const semver = require('semver')


semver.valid('1.2.3') // '1.2.3'
semver.valid('a.b.c') // null
console.log(semver.clean(process.version)) // '1.2.3'
semver.satisfies('1.2.3', '1.x || >=2.5.0 || 5.0.0 - 7.2.3') // true
semver.gt('1.2.3', '9.8.7') // false
semver.lt('1.2.3', '9.8.7') // true
semver.valid(semver.coerce('v2')) // '2.0.0'
semver.valid(semver.coerce('42.6.7.9.3-alpha')) // '42.6.7'



