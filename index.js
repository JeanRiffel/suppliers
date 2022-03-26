const moment = require('moment');

const day = moment().format('YYYY-MM-DD HH:mm:ss');
const dayMore = moment().add(10,'days').format('YYYY-MM-DD');

console.log(day);
console.log(dayMore);