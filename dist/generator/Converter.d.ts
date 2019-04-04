import { Payment } from '../models/Payment';
export declare class Converter {
    private _line;
    constructor(inLine: string);
    convert(): Payment;
    private getNumValue;
    private getAlphaValue;
}
