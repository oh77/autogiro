"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Fields_1 = require("./Fields");
class PaymentLine {
    constructor() {
        this.code = new Fields_1.Field(1, 2, 'N');
        this.paymentDate = new Fields_1.Field(3, 8, 'N');
        this.periodCode = new Fields_1.Field(11, 1, 'N');
        // this.renewalAssignments = 0;
        // this.hasRenewalAssignments = false;
        this.payeeNumber = new Fields_1.Field(16, 16, 'N');
        this.payeeNumber.padding = '0';
        this.amount = new Fields_1.Field(32, 12, 'N');
        this.amount.padding = '0';
        this.bankgiroNumber = new Fields_1.Field(44, 10, 'N');
        this.bankgiroNumber.padding = '0';
        this.reference = new Fields_1.Field(54, 16, 'A');
        this.reference.isLeft = true;
        this.reference.padding = ' ';
        this.paymentStatus = new Fields_1.Field(80, 1, 'N');
    }
}
exports.PaymentLine = PaymentLine;
