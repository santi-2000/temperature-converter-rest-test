const router = require("express").Router();
const { check, param } = require('express-validator');
const temperatureController = require("../controllers/temperature.controller");

router.post("/v1/temperature/convert/:unitToConvert", [
        check("value").notEmpty().withMessage("value is mandatory"),
        check("value").isNumeric().withMessage("values must be a number"),
        check("unit").notEmpty().withMessage("unit is mandatory"),
        check("unit").isIn(['CELSIUS', 'FAHRENHEIT']).withMessage("unit must be CELSIUS or FAHRENHEIT"),
        param("unitToConvert").notEmpty().withMessage("unit to convert is mandatory"),
        param("unitToConvert").isIn(['CELSIUS', 'FAHRENHEIT']).withMessage("unit to convert must be CELSIUS or FAHRENHEIT")
    ], temperatureController.postConvertTemperature);

module.exports = router;