"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Payment_1 = require("../models/Payment");
const PaymentLine_1 = require("../models/PaymentLine");
class Converter {
    constructor(inLine) {
        this._line = inLine;
    }
    convert() {
        const def = new PaymentLine_1.PaymentLine();
        const payment = new Payment_1.Payment();
        payment.code = this.getNumValue(this._line, def.code);
        payment.paymentDate = this.getNumValue(this._line, def.paymentDate);
        payment.periodCode = this.getNumValue(this._line, def.periodCode);
        payment.renewalAssignments = 0;
        payment.hasRenewalAssignments = false;
        payment.payeeNumber = this.getNumValue(this._line, def.payeeNumber);
        payment.amount = this.getNumValue(this._line, def.amount);
        payment.bankgiroNumber = this.getNumValue(this._line, def.bankgiroNumber);
        payment.reference = this.getAlphaValue(this._line, def.reference);
        payment.paymentStatus = this.getNumValue(this._line, def.paymentStatus);
        return payment;
    }
    getNumValue(line, field) {
        return Number.parseInt(this.getAlphaValue(line, field), 10);
    }
    getAlphaValue(line, field) {
        let val = line.substr(field.position - 1, field.length);
        if (field.padding !== '') {
            val = field.isLeft ? val.trimRight() : val.trimLeft();
        }
        return val;
    }
}
exports.Converter = Converter;
// interface ModelConverter {
//     lineToClass(s: string): Models.AutogiroModel;
// }
// export class ConvertPayment implements ModelConverter {
//     export function lineToClass(s: string): Models.AutogiroModel {
//         let retval = new Models.Payment();
//         retval.code = 0;
//         retval.paymentDay = 20010101;
//         return retval;
//     }
// }
