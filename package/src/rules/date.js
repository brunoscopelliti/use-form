import makeRule from "./rule";

/**
 * @name date
 * @param {string} _
 * @param {string} label
 * @param {string} value
 * @returns {undefined|string}
 */
const date =
  (_, label, value) => {
    if (!value) {
      return;
    }

    let [day, month, year] = value.split("/").map((el) => Number.parseInt(el, 10));
    month -= 1;

    const date = new Date(year, month, day);
    if (date.getDate() === day && date.getMonth() === month && date.getFullYear() === year) {
      return;
    }

    return `Field "${label}" contains invalid date.`;
  };

export default makeRule(date);
