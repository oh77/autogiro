export class Payment {
  public code: number;
  public paymentDate: number;
  public periodCode: number;
  public renewalAssignments: number;
  public hasRenewalAssignments: boolean;
  public payeeNumber: number;
  public amount: number;
  public bankgiroNumber: number;
  public reference: string;
  public paymentStatus: number;

  public constructor() {
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
