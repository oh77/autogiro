import { Payment } from '../models/Payment';
import { PaymentLine } from '../models/PaymentLine';
import { Field } from '../models/Fields';

export class Converter {
  private _line: string;
  constructor(inLine: string) {
    this._line = inLine;
  }

  public convert(): Payment {
    const def = new PaymentLine();
    const payment = new Payment();
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

  private getNumValue(line: string, field: Field): number {
    return Number.parseInt(this.getAlphaValue(line, field), 10);
  }
  private getAlphaValue(line: string, field: Field): string {
    let val = line.substr(field.position - 1, field.length);

    if (field.padding !== '') {
      val = field.isLeft ? val.trimRight() : val.trimLeft();
    }

    return val;
  }
}

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
