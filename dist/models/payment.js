"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Payment {
    constructor() {
        this.code = 0;
        this.periodCode = 0;
        this.paymentDate = 0;
        this.renewalAssignments = 0;
        this.hasRenewalAssignments = false;
        this.payeeNumber = 0;
        this.amount = 0;
        this.bankgiroNumber = 0;
        this.reference = '';
        this.paymentStatus = -1;
    }
}
exports.Payment = Payment;
