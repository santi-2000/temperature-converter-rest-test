/**
 * Temperature Representation.
 * @constructor
 * @param {number} value - The temperature value.
 * @param {string} unit - The temperature unit. Valid values: CELSIUS or FAHRENHEIT.
 */
function TemperatureVO (value, unit) {
    this.value = value;
    this.unit = unit;
};

module.exports = TemperatureVO;