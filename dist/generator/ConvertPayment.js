"use strict";
/// <reference path="Converter.ts" />
/// <reference path="../models/AutogiroModel.ts" />
/// <reference path="../models/Payment.ts" />
var Converter;
(function (Converter) {
    class ConvertPayment {
        lineToClass(s) {
            let retval = new Autogiro.Models.Payment();
            retval.code = 0;
            retval.paymentDay = 20010101;
            return retval;
        }
    }
})(Converter || (Converter = {}));
