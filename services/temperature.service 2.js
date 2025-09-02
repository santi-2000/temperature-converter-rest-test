const TemperatureVO = require('../valueobjects/temperature.vo');
const db = require('../models');

/**
 * Converts a temperature to the unit to be converted
 * @param {TemperatureVO} temperature - Object that contains a value and a unit representing a temperature
 * @param {string} unit - The unit to convert. Valid values ​​are: CELSIUS and FAHRENHEIT.
 * @returns {TemperatureVO} - Object containing a value and unit representing the converted temperature
 */
exports.convert = async function(temperature, unit) {
    let convertedTemperature;
    
    if (temperature.unit == "CELSIUS" && unit == "FAHRENHEIT") {
        let convertedValue = (temperature.value * 9/5) + 32;
        convertedTemperature = new TemperatureVO(convertedValue, unit);
    } else if (temperature.unit == "FAHRENHEIT" && unit == "CELSIUS") {
        let convertedValue = (temperature.value - 32) * 5/9;
        convertedTemperature = new TemperatureVO(convertedValue, unit);
    } else {
        convertedTemperature = new TemperatureVO(temperature.value, unit);
    }

    await db.Conversion.create({
        temperatureValue: temperature.value,
        temperatureUnit: temperature.unit,
        convertedValue: convertedTemperature.value,
        convertedUnit: convertedTemperature.unit,
        conversionDate: new Date()
    });

    return convertedTemperature;
}