import { Field } from './Fields';

export class PaymentLine {
  public code: Field;
  public paymentDate: Field;
  public periodCode: Field;
//   public renewalAssignments: number;
//   public hasRenewalAssignments: boolean;
  public payeeNumber: Field;
  public amount: Field;
  public bankgiroNumber: Field;
  public reference: Field;
  public paymentStatus: Field;

  public constructor() {
    this.code = new Field(1, 2, 'N');
    this.paymentDate = new Field(3, 8, 'N');
    this.periodCode = new Field(11, 1, 'N');
    // this.renewalAssignments = 0;
    // this.hasRenewalAssignments = false;
    this.payeeNumber = new Field(16, 16, 'N');
    this.payeeNumber.padding = '0';
    this.amount = new Field(32, 12, 'N');
    this.amount.padding = '0';
    this.bankgiroNumber = new Field(44, 10, 'N');
    this.bankgiroNumber.padding = '0';
    this.reference = new Field(54, 16, 'A');
    this.reference.isLeft = true;
    this.reference.padding = ' ';
    this.paymentStatus = new Field(80, 1, 'N');
  }
}
