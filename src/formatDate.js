'use strict';

/**
 * @param {string} date
 * @param {string[]} fromFormat
 * @param {string[]} toFormat
 *
 * @returns {string}
 */
function formatDate(date, fromFormat, toFormat) {
  const separator = fromFormat[fromFormat.length - 1];
  const newDate = date.split(separator);
  const supObj = {};
  const newArr = [];

  for (let i = 0; i < 3; i++) {
    supObj[fromFormat[i]] = newDate[i];
  }

  if ('YYYY' in supObj && toFormat.includes('YY')) {
    supObj['YY'] = supObj['YYYY'].slice(-2);
  }

  if ('YY' in supObj && toFormat.includes('YYYY')) {
    supObj['YYYY'] =
      +supObj['YY'] < 30 ? '20' + supObj['YY'] : '19' + supObj['YY'];
  }

  for (const key of toFormat) {
    if (key in supObj) {
      newArr.push(supObj[key]);
    }
  }

  return newArr.join(toFormat[toFormat.length - 1]);
}

module.exports = formatDate;
