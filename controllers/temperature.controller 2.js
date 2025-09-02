const temperatureService = require('../services/temperature.service');
const { validationResult } = require('express-validator');

/**
 * Convert the given temperature to the specified unit
 * @param {Request} req - Temperature to be converted
 * @param {Response} res - Converted temperature
 */
exports.postConvertTemperature = async function (req, res) {    
    let result = validationResult(req);

    if (result.errors.length > 0) {
        res.status(400).json({ success: false, error: result });
    } else {
        const temperatureToConvert = req.body;
        console.log(temperatureToConvert);
        console.log(req.params['unitToConvert']);
        const temperature = await temperatureService.convert(temperatureToConvert, req.params['unitToConvert']);
        console.log(temperature);
        res.json(temperature).status(200);
    }
};